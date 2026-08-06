/**
 * Derives typed batch Ledger Entry payloads from the per-entry-type
 * `addLedgerEntry` operations the Fragment CLI generates for a Schema.
 *
 * `addLedgerEntries` takes one list of one input type (`AddLedgerEntryInput`),
 * and `LedgerEntryInput.parameters` is an opaque `JSON` scalar, so GraphQL
 * cannot express the parameter types of an individual entry in a batch. The
 * single-entry operations can: they carry the entry type as a string literal and
 * bind everything the caller may set to a typed operation variable. This module
 * reads those operations and emits a typed payload per `(type, typeVersion)`
 * pair, each of which builds an `AddLedgerEntryInput` for `addLedgerEntries`.
 *
 * The source operation is the source of truth for what a caller may provide. A
 * payload exposes exactly the entry fields its operation binds to a variable —
 * including `lines`, for entry types whose lines are not fixed by the Schema —
 * and nothing else. Anything the operation fixes is not the caller's to set.
 */
import {
  Kind,
  type DocumentNode,
  type ListTypeNode,
  type NamedTypeNode,
  type ObjectValueNode,
  type OperationDefinitionNode,
  type TypeNode,
  type VariableDefinitionNode,
} from "graphql";

/** A single caller-supplied parameter of a typed entry payload. */
export type TypedEntryParameter = {
  /** The parameter name from the Schema. Goes on the wire verbatim. */
  wireName: string;
  /** The operation variable the parameter is bound to. */
  variableName: string;
  /** The variable's declared type, which is where the payload's type comes from. */
  type: TypeNode;
  /** True when the variable's type is non-null. */
  required: boolean;
};

/**
 * An entry field a typed payload lets the caller set, derived from the source
 * operation binding it to a variable.
 */
export type TypedEntryField = {
  /** The field name on the generated payload. */
  name: string;
  /** The `LedgerEntryInput` field it sets. */
  wireName: string;
  /**
   * Set when the caller's value is a match key nested inside the wire field —
   * `ledgerIk` sets `ledger: { ik }`, so this is `"ik"` there.
   */
  wireKey?: string;
  type: TypeNode;
  required: boolean;
};

/** How the source operation exposes `parameters`, if at all. */
export type ParametersMode =
  /** An inline object literal, so each parameter is typed individually. */
  | "typed"
  /** Bound to a variable, so the payload falls back to an untyped map. */
  | "untyped"
  /** Not in the operation at all, so the caller cannot set parameters. */
  | "absent";

/** A typed payload for one `(entry type, typeVersion)` pair. */
export type TypedEntryPayload = {
  entryType: string;
  typeVersion: number;
  /** The operation the payload was derived from. Informative only. */
  operationName: string;
  /** Entry fields the caller may set, in the operation's source order. */
  fields: TypedEntryField[];
  parametersMode: ParametersMode;
  /** Typed parameters in source order. Empty unless `parametersMode` is `typed`. */
  parameters: TypedEntryParameter[];
  /** The declared type of `parameters` when `parametersMode` is `untyped`. */
  parametersType?: TypeNode;
  /** The declared type of the entry's own `ik`, when bound to a variable. */
  ikType?: TypeNode;
};

/** A payload with its generated TypeScript identifiers assigned. */
export type NamedTypedEntryPayload = TypedEntryPayload & {
  /** Name of the exported payload type, e.g. `UserFundsAccountV1`. */
  typeName: string;
  /** Name of the exported builder function, e.g. `userFundsAccountV1`. */
  builderName: string;
};

type Warn = (message: string) => void;

const defaultWarn: Warn = (message) => {
  // eslint-disable-next-line no-console
  console.warn(`[@fragment-dev/node-client] ${message}`);
};

/**
 * `type` and `typeVersion` identify the payload and `parameters` is typed per
 * payload, so none of the three is the caller's to set.
 */
const DERIVED_ENTRY_FIELDS = ["type", "typeVersion", "parameters"];

const findObjectField = (object: ObjectValueNode, name: string) =>
  object.fields.find((field) => field.name.value === name);

const findVariableDefinition = (
  operation: OperationDefinitionNode,
  variableName: string,
): VariableDefinitionNode | undefined =>
  operation.variableDefinitions?.find(
    (candidate) => candidate.variable.name.value === variableName,
  );

/**
 * Returns the `addLedgerEntry` field of a recognised typed entry operation, or
 * undefined if the operation is not one. Every failing condition is a silent
 * skip, never an error: this is what excludes the SDK's own `addLedgerEntry` and
 * `addLedgerEntryRuntime` operations, whose `type` is a variable.
 */
const getTypedEntryField = (operation: OperationDefinitionNode) => {
  if (operation.operation !== "mutation") {
    return undefined;
  }
  if (!operation.name) {
    return undefined;
  }
  const selections = operation.selectionSet.selections;
  if (selections.length !== 1) {
    return undefined;
  }
  const [selection] = selections;
  if (
    selection.kind !== Kind.FIELD ||
    selection.name.value !== "addLedgerEntry"
  ) {
    return undefined;
  }
  const entryArgument = selection.arguments?.find(
    (argument) => argument.name.value === "entry",
  );
  if (!entryArgument || entryArgument.value.kind !== Kind.OBJECT) {
    return undefined;
  }
  const typeField = findObjectField(entryArgument.value, "type");
  if (!typeField || typeField.value.kind !== Kind.STRING) {
    return undefined;
  }
  // The entry type comes back narrowed, so no caller has to re-check it.
  return {
    field: selection,
    entry: entryArgument.value,
    entryType: typeField.value.value,
  };
};

/**
 * The `typeVersion` the operation pins. `typeVersion` defaults to 1 when it is
 * not set, so an operation that pins no version — or pins one dynamically — is
 * normalised to 1 here: for the payload's identity, its name and its wire
 * payload alike.
 */
const getTypeVersion = (entry: ObjectValueNode): number => {
  const field = findObjectField(entry, "typeVersion");
  if (field?.value.kind === Kind.INT) {
    return Number.parseInt(field.value.value, 10);
  }
  return 1;
};

/**
 * The entry fields the operation lets the caller set, in source order. A field
 * bound to anything other than a variable is fixed by the operation, so it is
 * not exposed.
 */
const getFields = (
  entry: ObjectValueNode,
  operation: OperationDefinitionNode,
  warn: Warn,
): TypedEntryField[] => {
  const fields: TypedEntryField[] = [];

  entry.fields.forEach((entryField) => {
    const wireName = entryField.name.value;
    if (DERIVED_ENTRY_FIELDS.includes(wireName)) {
      return;
    }

    const bind = ({
      name,
      wireKey,
      variableName,
    }: {
      name: string;
      wireKey?: string;
      variableName: string;
    }) => {
      const definition = findVariableDefinition(operation, variableName);
      if (!definition) {
        warn(
          `Operation \`${operation.name?.value}\` binds \`${wireName}\` to undeclared variable \`$${variableName}\`. Skipping the field.`,
        );
        return;
      }
      fields.push({
        name,
        wireName,
        wireKey,
        type: definition.type,
        required: definition.type.kind === Kind.NON_NULL_TYPE,
      });
    };

    if (entryField.value.kind === Kind.VARIABLE) {
      bind({ name: wireName, variableName: entryField.value.name.value });
      return;
    }

    // `ledger: { ik: $ledgerIk }` is the shape the CLI generates. The caller
    // supplies the Idempotency Key, so the payload exposes it as `ledgerIk`.
    if (entryField.value.kind === Kind.OBJECT) {
      entryField.value.fields.forEach((matchField) => {
        if (matchField.value.kind !== Kind.VARIABLE) {
          return;
        }
        bind({
          name: `${wireName}${matchField.name.value
            .charAt(0)
            .toUpperCase()}${matchField.name.value.slice(1)}`,
          wireKey: matchField.name.value,
          variableName: matchField.value.name.value,
        });
      });
    }
  });

  return fields;
};

const getParameters = (
  entry: ObjectValueNode,
  operation: OperationDefinitionNode,
  warn: Warn,
): Pick<
  TypedEntryPayload,
  "parameters" | "parametersMode" | "parametersType"
> => {
  const parametersField = findObjectField(entry, "parameters");
  if (!parametersField) {
    // The operation posts no parameters, so neither may the caller.
    return { parameters: [], parametersMode: "absent" };
  }
  if (parametersField.value.kind === Kind.VARIABLE) {
    const definition = findVariableDefinition(
      operation,
      parametersField.value.name.value,
    );
    return {
      parameters: [],
      parametersMode: "untyped",
      parametersType: definition?.type,
    };
  }
  if (parametersField.value.kind !== Kind.OBJECT) {
    return { parameters: [], parametersMode: "absent" };
  }

  const parameters: TypedEntryParameter[] = [];
  // Source order is the only ordering all SDKs can agree on, so it is preserved.
  parametersField.value.fields.forEach((field) => {
    if (field.value.kind !== Kind.VARIABLE) {
      // Fixed by the operation, so not caller-supplied.
      return;
    }
    const variableName = field.value.name.value;
    const definition = findVariableDefinition(operation, variableName);
    if (!definition) {
      warn(
        `Operation \`${operation.name?.value}\` binds parameter \`${field.name.value}\` to undeclared variable \`$${variableName}\`. Skipping the parameter.`,
      );
      return;
    }
    parameters.push({
      wireName: field.name.value,
      variableName,
      type: definition.type,
      required: definition.type.kind === Kind.NON_NULL_TYPE,
    });
  });

  return { parameters, parametersMode: "typed" };
};

const identityOf = (
  payload: Pick<TypedEntryPayload, "entryType" | "typeVersion">,
) => JSON.stringify([payload.entryType, payload.typeVersion]);

const sameParameters = (a: TypedEntryParameter[], b: TypedEntryParameter[]) =>
  a.length === b.length &&
  a.every((parameter, index) => parameter.wireName === b[index].wireName);

/**
 * Derives one payload per `(type, typeVersion)` pair found in the given
 * documents. Operations that are not typed entry operations are skipped
 * silently. Duplicate identities are deduplicated, first occurrence winning.
 */
export const deriveTypedEntryPayloads = (
  documents: ReadonlyArray<DocumentNode>,
  { warn = defaultWarn }: { warn?: Warn } = {},
): TypedEntryPayload[] => {
  const byIdentity = new Map<string, TypedEntryPayload>();

  documents.forEach((document) => {
    document.definitions.forEach((definition) => {
      if (definition.kind !== Kind.OPERATION_DEFINITION) {
        return;
      }
      const recognised = getTypedEntryField(definition);
      if (!recognised) {
        return;
      }
      const { field, entry, entryType } = recognised;

      // `ik` is an argument of `addLedgerEntry`, not a field of `entry`. Every
      // entry in a batch needs its own, so a payload always takes one.
      const ikArgument = field.arguments?.find(
        (argument) => argument.name.value === "ik",
      );
      const ikDefinition =
        ikArgument?.value.kind === Kind.VARIABLE
          ? findVariableDefinition(definition, ikArgument.value.name.value)
          : undefined;

      const payload: TypedEntryPayload = {
        entryType,
        typeVersion: getTypeVersion(entry),
        operationName: definition.name?.value ?? "",
        fields: getFields(entry, definition, warn),
        ...getParameters(entry, definition, warn),
        ikType: ikDefinition?.type,
      };

      const identity = identityOf(payload);
      const existing = byIdentity.get(identity);
      if (existing) {
        // The CLI and API guarantee one Ledger Entry per (type, typeVersion), so
        // two operations at one identity declare the same parameters. Differing
        // sets mean the .graphql is stale relative to the Schema.
        if (!sameParameters(existing.parameters, payload.parameters)) {
          warn(
            `Operations \`${existing.operationName}\` and \`${payload.operationName}\` both describe \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) but declare different parameters. Using \`${existing.operationName}\`; your operations may be stale relative to your Schema.`,
          );
        }
        return;
      }
      byIdentity.set(identity, payload);
    });
  });

  return [...byIdentity.values()];
};

const splitWords = (value: string): string[] =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);

const pascalCase = (value: string): string =>
  splitWords(value)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

// A TypeScript identifier cannot start with a digit.
const escapeIdentifier = (value: string): string =>
  /^[0-9]/.test(value) ? `_${value}` : value;

/**
 * Assigns each payload its generated identifiers. A name depends only on its own
 * payload's identity — never on which other operations are present — so adding
 * an entry type or a new version of one never renames an existing payload.
 */
export const nameTypedEntryPayloads = (
  payloads: ReadonlyArray<TypedEntryPayload>,
  { warn = defaultWarn }: { warn?: Warn } = {},
): NamedTypedEntryPayload[] => {
  const taken = new Set<string>();

  return payloads.map((payload) => {
    const pascal = `${pascalCase(payload.entryType)}V${payload.typeVersion}`;
    const camel = pascal.charAt(0).toLowerCase() + pascal.slice(1);
    // Two entry types can want one identifier — `user-funds` and `user_funds`
    // both reduce to `UserFunds`. The first in source order keeps the plain
    // name; later ones are suffixed.
    let suffix = "";
    let attempt = 1;
    while (taken.has(`${pascal}${suffix}`)) {
      attempt += 1;
      suffix = `_${attempt}`;
    }
    if (suffix) {
      warn(
        `Ledger Entry type \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) generates the identifier \`${pascal}\`, which is already taken. Using \`${pascal}${suffix}\` instead.`,
      );
    }
    taken.add(`${pascal}${suffix}`);

    return {
      ...payload,
      typeName: escapeIdentifier(`${pascal}${suffix}`),
      builderName: escapeIdentifier(`${camel}${suffix}`),
    };
  });
};

const BUILT_IN_SCALARS = ["ID", "String", "Boolean", "Int", "Float"];

/** The names of every scalar in a schema, including the built-in ones. */
export const collectScalarNames = (schema: DocumentNode): Set<string> => {
  const names = new Set(BUILT_IN_SCALARS);
  schema.definitions.forEach((definition) => {
    if (definition.kind === Kind.SCALAR_TYPE_DEFINITION) {
      names.add(definition.name.value);
    }
  });
  return names;
};

/** A single-quoted TypeScript string literal, matching the codegen output style. */
const quote = (value: string): string =>
  `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

const renderNamedType = (
  type: NamedTypeNode,
  scalars: ReadonlySet<string>,
): string => {
  const { value } = type.name;
  // Anything that is not a scalar is an enum or an input object, both of which
  // the typescript plugin emits into the same file under their schema name.
  return scalars.has(value) ? `Scalars['${value}']['input']` : value;
};

const renderMaybeType = (
  type: TypeNode,
  scalars: ReadonlySet<string>,
): string => {
  if (type.kind === Kind.NON_NULL_TYPE) {
    return renderInnerType(type.type, scalars);
  }
  return `${renderInnerType(type, scalars)} | null`;
};

const renderInnerType = (
  type: NamedTypeNode | ListTypeNode,
  scalars: ReadonlySet<string>,
): string =>
  type.kind === Kind.LIST_TYPE
    ? `Array<${renderMaybeType(type.type, scalars)}>`
    : renderNamedType(type, scalars);

/**
 * The TypeScript type of a value bound to a variable. Top-level nullability is
 * carried by the optional marker instead: an unset field is omitted from the
 * request, never serialized as `null`.
 */
export const renderVariableType = (
  type: TypeNode,
  scalars: ReadonlySet<string>,
): string =>
  type.kind === Kind.NON_NULL_TYPE
    ? renderInnerType(type.type, scalars)
    : renderInnerType(type, scalars);

const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/**
 * Wire names go into the generated type verbatim. A GraphQL name is always a
 * valid TypeScript property key, so this only quotes defensively.
 */
const renderPropertyKey = (name: string): string =>
  IDENTIFIER.test(name) ? name : quote(name);

const FIELD_DOCS: Record<string, string> = {
  ledgerIk:
    "The Idempotency Key of the Ledger to add this Ledger Entry to.",
  posted: "ISO 8601 timestamp to post this Ledger Entry at.",
  lines:
    "The Ledger Lines to create, for entry types whose lines the Schema does not fix.",
};

const renderField = (
  field: TypedEntryField,
  scalars: ReadonlySet<string>,
): string => {
  const optional = field.required ? "" : "?";
  const undefinable = field.required ? "" : " | undefined";
  const docs = FIELD_DOCS[field.name]
    ? `  /** ${FIELD_DOCS[field.name]} */\n`
    : "";
  return `${docs}  ${renderPropertyKey(field.name)}${optional}: ${renderVariableType(
    field.type,
    scalars,
  )}${undefinable};`;
};

const renderParameters = (
  payload: NamedTypedEntryPayload,
  scalars: ReadonlySet<string>,
): string | undefined => {
  if (payload.parametersMode === "absent") {
    // The operation posts no parameters, so the payload does not take any.
    return undefined;
  }
  if (payload.parametersMode === "untyped") {
    const type = payload.parametersType
      ? renderVariableType(payload.parametersType, scalars)
      : "Scalars['JSON']['input']";
    const required =
      payload.parametersType?.kind === Kind.NON_NULL_TYPE ? "" : "?";
    const undefinable = required ? " | undefined" : "";
    return [
      "  /**",
      "   * This entry type's operation does not bind its parameters to typed",
      "   * variables, so they cannot be typed individually.",
      "   */",
      `  parameters${required}: ${type}${undefinable};`,
    ].join("\n");
  }
  if (payload.parameters.length === 0) {
    return "  parameters?: Record<string, never> | undefined;";
  }

  const fields = payload.parameters.map((parameter) => {
    const optional = parameter.required ? "" : "?";
    const undefinable = parameter.required ? "" : " | undefined";
    return `    ${renderPropertyKey(parameter.wireName)}${optional}: ${renderVariableType(
      parameter.type,
      scalars,
    )}${undefinable};`;
  });
  const allOptional = payload.parameters.every(
    (parameter) => !parameter.required,
  );
  const marker = allOptional ? "?" : "";
  const trailer = allOptional ? " | undefined" : "";

  return [`  parameters${marker}: {`, ...fields, `  }${trailer};`].join("\n");
};

/** One key of the emitted `entry` literal, with the wire name it sorts by. */
type EntryMember = { wireName: string; code: string };

/**
 * `value` when the caller must set it, and a conditional spread when they may
 * not: an unset field is left out of the object rather than sent as `null`.
 */
const renderMember = ({
  wireName,
  required,
  read,
  value = read,
}: {
  wireName: string;
  required: boolean;
  /** The expression that is checked for `undefined`. */
  read: string;
  /** The expression that is assigned, if it differs from `read`. */
  value?: string;
}): EntryMember => ({
  wireName,
  code: required
    ? `    ${wireName}: ${value},`
    : `    ...(${read} !== undefined && { ${wireName}: ${value} }),`,
});

/** The `parameters` key of the emitted `entry` literal, if the payload has one. */
const renderParametersMember = (
  payload: NamedTypedEntryPayload,
): { member?: EntryMember; prelude?: string } => {
  if (payload.parametersMode === "absent") {
    return {};
  }
  if (payload.parametersMode === "untyped") {
    return {
      member: renderMember({
        wireName: "parameters",
        required: payload.parametersType?.kind === Kind.NON_NULL_TYPE,
        read: "input.parameters",
      }),
    };
  }

  // A payload with a required parameter always takes a `parameters` object; one
  // whose parameters are all optional may not, so it is read through `?.`.
  const anyRequired = payload.parameters.some((parameter) => parameter.required);
  const access = anyRequired ? "input.parameters" : "input.parameters?";
  const members = payload.parameters.map((parameter) => {
    const read = `${access}.${parameter.wireName}`;
    const key = renderPropertyKey(parameter.wireName);
    // Parameters keep the order the source operation declares them in.
    return parameter.required
      ? `${key}: ${read},`
      : `...(${read} !== undefined && { ${key}: ${read} }),`;
  });

  if (anyRequired) {
    return {
      member: {
        wireName: "parameters",
        code: [
          "    parameters: {",
          ...members.map((member) => `      ${member}`),
          "    },",
        ].join("\n"),
      },
    };
  }

  // Every parameter is optional, so `parameters` itself is omitted when the
  // caller set none of them.
  return {
    prelude: [
      "  const parameters = {",
      ...members.map((member) => `    ${member}`),
      "  };",
    ].join("\n"),
    member: {
      wireName: "parameters",
      code: "    ...(Object.keys(parameters).length > 0 && { parameters }),",
    },
  };
};

const renderBuilderBody = (payload: NamedTypedEntryPayload): string => {
  const { member: parametersMember, prelude } = renderParametersMember(payload);

  const members: EntryMember[] = [
    ...payload.fields.map((field) =>
      renderMember({
        wireName: field.wireName,
        required: field.required,
        read: `input.${field.name}`,
        value: field.wireKey
          ? `{ ${field.wireKey}: input.${field.name} }`
          : `input.${field.name}`,
      }),
    ),
    ...(parametersMember ? [parametersMember] : []),
    { wireName: "type", code: `    type: ${quote(payload.entryType)},` },
    { wireName: "typeVersion", code: `    typeVersion: ${payload.typeVersion},` },
  ];

  // Keys are emitted in lexicographic order, which costs nothing to do here and
  // makes two SDKs' requests comparable byte for byte.
  const entry = members
    .sort((a, b) => (a.wireName < b.wireName ? -1 : 1))
    .map((member) => member.code)
    .join("\n");

  const literal = (indent: string) =>
    [
      "{",
      `${indent}  entry: {`,
      entry
        .split("\n")
        .map((line) => `${indent}${line}`)
        .join("\n"),
      `${indent}  },`,
      `${indent}  ik: input.ik,`,
      `${indent}}`,
    ].join("\n");

  // A payload whose parameters are all optional builds them first, so the block
  // body is only used where it earns its keep.
  return prelude
    ? ` => {\n${prelude}\n  return ${literal("  ")};\n}`
    : ` => (${literal("")})`;
};

const renderPayload = (
  payload: NamedTypedEntryPayload,
  scalars: ReadonlySet<string>,
): string => {
  const description = `\`${payload.entryType}\` (typeVersion ${payload.typeVersion})`;
  const ikType = payload.ikType
    ? renderVariableType(payload.ikType, scalars)
    : "Scalars['SafeString']['input']";
  const members = [
    `  /** The [Idempotency Key](https://fragment.dev/api-reference/api-overview#idempotency) for this Ledger Entry. */\n  ik: ${ikType};`,
    ...payload.fields.map((field) => renderField(field, scalars)),
    renderParameters(payload, scalars),
  ].filter((member): member is string => member !== undefined);

  return `/**
 * Payload for the ${description} Ledger Entry, for use with \`addLedgerEntries\`.
 *
 * Derived from the \`${payload.operationName}\` operation, which is what a caller
 * may set: these are exactly the fields that operation binds.
 */
export type ${payload.typeName} = {
${members.join("\n")}
};

/** Builds an \`addLedgerEntries\` entry for ${description}. */
export const ${payload.builderName} = (
  input: ${payload.typeName},
): AddLedgerEntryInput${renderBuilderBody(payload)};`;
};

const renderRegistry = (
  payloads: ReadonlyArray<NamedTypedEntryPayload>,
): string => {
  const entries = payloads.map(
    (payload) =>
      `  ${quote(`${payload.entryType}@${payload.typeVersion}`)}: ${payload.builderName},`,
  );
  return `/**
 * Every typed payload builder, keyed by \`"<entry type>@<typeVersion>"\`. Useful
 * when the entry type is only known at runtime.
 */
export const typedLedgerEntryBuilders = {
${entries.join("\n")}
} as const;`;
};

/**
 * Renders the typed batch entry section of a generated client. Returns an empty
 * string when the input documents contain no typed entry operations.
 */
export const renderTypedEntryPayloads = (
  payloads: ReadonlyArray<NamedTypedEntryPayload>,
  scalars: ReadonlySet<string>,
): string => {
  if (payloads.length === 0) {
    return "";
  }

  const sections = [
    `/**
 * Typed payloads for batching Ledger Entries with \`addLedgerEntries\`.
 *
 * Each payload is derived from the single-entry \`addLedgerEntry\` operation for
 * one \`(type, typeVersion)\` pair, and builds an \`AddLedgerEntryInput\` you can
 * mix freely with raw, untyped entry inputs in the same batch:
 *
 * \`\`\`ts
 * await client.addLedgerEntries({
 *   entries: [${payloads[0].builderName}({ ik, ledgerIk, parameters: { ... } })],
 * });
 * \`\`\`
 *
 * A payload takes exactly what its source operation binds, so what you can set
 * here is what that entry type accepts — no more. A field you do not set is
 * left out of the request rather than sent as \`null\`.
 */`,
    ...payloads.map((payload) => renderPayload(payload, scalars)),
    renderRegistry(payloads),
  ];

  return `${sections.join("\n\n")}\n`;
};

/** Derives, names and renders typed payloads in one step. */
export const generateTypedEntryPayloads = ({
  documents,
  schema,
  warn,
}: {
  documents: ReadonlyArray<DocumentNode>;
  schema: DocumentNode;
  warn?: Warn;
}): string => {
  const payloads = nameTypedEntryPayloads(
    deriveTypedEntryPayloads(documents, { warn }),
    { warn },
  );
  return renderTypedEntryPayloads(payloads, collectScalarNames(schema));
};
