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
import { Kind, } from "graphql";
const defaultWarn = (message) => {
    // eslint-disable-next-line no-console
    console.warn(`[@fragment-dev/node-client] ${message}`);
};
/**
 * `type` and `typeVersion` identify the payload and `parameters` is typed per
 * payload, so none of the three is the caller's to set.
 */
const DERIVED_ENTRY_FIELDS = ["type", "typeVersion", "parameters"];
const findObjectField = (object, name) => object.fields.find((field) => field.name.value === name);
const findVariableDefinition = (operation, variableName) => operation.variableDefinitions?.find((candidate) => candidate.variable.name.value === variableName);
/**
 * Returns the `addLedgerEntry` field of a recognised typed entry operation, or
 * undefined if the operation is not one. Every failing condition is a silent
 * skip, never an error: this is what excludes the SDK's own `addLedgerEntry` and
 * `addLedgerEntryRuntime` operations, whose `type` is a variable.
 */
const getTypedEntryField = (operation) => {
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
    if (selection.kind !== Kind.FIELD ||
        selection.name.value !== "addLedgerEntry") {
        return undefined;
    }
    const entryArgument = selection.arguments?.find((argument) => argument.name.value === "entry");
    if (!entryArgument || entryArgument.value.kind !== Kind.OBJECT) {
        return undefined;
    }
    const typeField = findObjectField(entryArgument.value, "type");
    if (!typeField || typeField.value.kind !== Kind.STRING) {
        return undefined;
    }
    return { field: selection, entry: entryArgument.value };
};
/**
 * The `typeVersion` the operation resolves to. An operation that pins no
 * version, or pins one dynamically, resolves to version 1 server-side, so it is
 * normalised to 1 here — for the payload's identity, its name and its wire
 * payload alike.
 */
const getTypeVersion = (entry) => {
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
const getFields = (entry, operation, warn) => {
    const fields = [];
    entry.fields.forEach((entryField) => {
        const wireName = entryField.name.value;
        if (DERIVED_ENTRY_FIELDS.includes(wireName)) {
            return;
        }
        const bind = ({ name, wireKey, variableName, }) => {
            const definition = findVariableDefinition(operation, variableName);
            if (!definition) {
                warn(`Operation \`${operation.name?.value}\` binds \`${wireName}\` to undeclared variable \`$${variableName}\`. Skipping the field.`);
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
const getParameters = (entry, operation, warn) => {
    const parametersField = findObjectField(entry, "parameters");
    if (!parametersField) {
        // The operation posts no parameters, so neither may the caller.
        return { parameters: [], parametersMode: "absent" };
    }
    if (parametersField.value.kind === Kind.VARIABLE) {
        const definition = findVariableDefinition(operation, parametersField.value.name.value);
        return {
            parameters: [],
            parametersMode: "untyped",
            parametersType: definition?.type,
        };
    }
    if (parametersField.value.kind !== Kind.OBJECT) {
        return { parameters: [], parametersMode: "absent" };
    }
    const parameters = [];
    // Source order is the only ordering all SDKs can agree on, so it is preserved.
    parametersField.value.fields.forEach((field) => {
        if (field.value.kind !== Kind.VARIABLE) {
            // Fixed by the operation, so not caller-supplied.
            return;
        }
        const variableName = field.value.name.value;
        const definition = findVariableDefinition(operation, variableName);
        if (!definition) {
            warn(`Operation \`${operation.name?.value}\` binds parameter \`${field.name.value}\` to undeclared variable \`$${variableName}\`. Skipping the parameter.`);
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
const identityOf = (payload) => JSON.stringify([payload.entryType, payload.typeVersion]);
const sameParameters = (a, b) => a.length === b.length &&
    a.every((parameter, index) => parameter.wireName === b[index].wireName);
/**
 * Derives one payload per `(type, typeVersion)` pair found in the given
 * documents. Operations that are not typed entry operations are skipped
 * silently. Duplicate identities are deduplicated, first occurrence winning.
 */
export const deriveTypedEntryPayloads = (documents, { warn = defaultWarn } = {}) => {
    const byIdentity = new Map();
    documents.forEach((document) => {
        document.definitions.forEach((definition) => {
            if (definition.kind !== Kind.OPERATION_DEFINITION) {
                return;
            }
            const recognised = getTypedEntryField(definition);
            if (!recognised) {
                return;
            }
            const { field, entry } = recognised;
            const typeField = findObjectField(entry, "type");
            // Guaranteed a string literal by getTypedEntryField.
            const entryType = typeField?.value.kind === Kind.STRING ? typeField.value.value : "";
            // `ik` is an argument of `addLedgerEntry`, not a field of `entry`. Every
            // entry in a batch needs its own, so a payload always takes one.
            const ikArgument = field.arguments?.find((argument) => argument.name.value === "ik");
            const ikDefinition = ikArgument?.value.kind === Kind.VARIABLE
                ? findVariableDefinition(definition, ikArgument.value.name.value)
                : undefined;
            const payload = {
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
                    warn(`Operations \`${existing.operationName}\` and \`${payload.operationName}\` both describe \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) but declare different parameters. Using \`${existing.operationName}\`; your operations may be stale relative to your Schema.`);
                }
                return;
            }
            byIdentity.set(identity, payload);
        });
    });
    return [...byIdentity.values()];
};
const splitWords = (value) => value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
const pascalCase = (value) => splitWords(value)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
// A TypeScript identifier cannot start with a digit.
const escapeIdentifier = (value) => /^[0-9]/.test(value) ? `_${value}` : value;
/**
 * Assigns each payload its generated identifiers. A name depends only on its own
 * payload's identity — never on which other operations are present — so adding
 * an entry type or a new version of one never renames an existing payload.
 */
export const nameTypedEntryPayloads = (payloads, { warn = defaultWarn } = {}) => {
    const taken = new Set();
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
            warn(`Ledger Entry type \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) generates the identifier \`${pascal}\`, which is already taken. Using \`${pascal}${suffix}\` instead.`);
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
export const collectScalarNames = (schema) => {
    const names = new Set(BUILT_IN_SCALARS);
    schema.definitions.forEach((definition) => {
        if (definition.kind === Kind.SCALAR_TYPE_DEFINITION) {
            names.add(definition.name.value);
        }
    });
    return names;
};
/** A single-quoted TypeScript string literal, matching the codegen output style. */
const quote = (value) => `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
const renderNamedType = (type, scalars) => {
    const { value } = type.name;
    // Anything that is not a scalar is an enum or an input object, both of which
    // the typescript plugin emits into the same file under their schema name.
    return scalars.has(value) ? `Scalars['${value}']['input']` : value;
};
const renderMaybeType = (type, scalars) => {
    if (type.kind === Kind.NON_NULL_TYPE) {
        return renderInnerType(type.type, scalars);
    }
    return `${renderInnerType(type, scalars)} | null`;
};
const renderInnerType = (type, scalars) => type.kind === Kind.LIST_TYPE
    ? `Array<${renderMaybeType(type.type, scalars)}>`
    : renderNamedType(type, scalars);
/**
 * The TypeScript type of a value bound to a variable. Top-level nullability is
 * carried by the optional marker instead: an unset field is omitted from the
 * request, never serialized as `null`.
 */
export const renderVariableType = (type, scalars) => type.kind === Kind.NON_NULL_TYPE
    ? renderInnerType(type.type, scalars)
    : renderInnerType(type, scalars);
const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
/**
 * Wire names go into the generated type verbatim. A GraphQL name is always a
 * valid TypeScript property key, so this only quotes defensively.
 */
const renderPropertyKey = (name) => IDENTIFIER.test(name) ? name : quote(name);
const RUNTIME = `/**
 * Builds the \`AddLedgerEntryInput\` a typed payload posts as part of an
 * \`addLedgerEntries\` batch. Fields the caller did not set are omitted rather
 * than sent as \`null\`, and parameter names reach the wire verbatim.
 *
 * \`entryFields\` maps each payload field to the \`LedgerEntryInput\` field it sets.
 * A third element means the value is nested under that key, so \`ledgerIk\` sets
 * \`ledger: { ik }\`.
 */
const buildTypedLedgerEntry = (
  type: string,
  typeVersion: number,
  entryFields: ReadonlyArray<readonly [string, string] | readonly [string, string, string]>,
  parameterKeys: ReadonlyArray<string> | null,
  input: Record<string, unknown>,
): AddLedgerEntryInput => {
  const entry: Record<string, unknown> = { type, typeVersion };

  entryFields.forEach(([name, wireName, wireKey]) => {
    const value = input[name];
    if (value === undefined) {
      return;
    }
    entry[wireName] = wireKey ? { [wireKey]: value } : value;
  });

  if (parameterKeys === null) {
    // An untyped payload passes its parameters straight through.
    if (input.parameters !== undefined) {
      entry.parameters = input.parameters;
    }
  } else if (parameterKeys.length > 0) {
    const provided = input.parameters as Record<string, unknown> | undefined;
    const parameters: Record<string, unknown> = {};
    parameterKeys.forEach((key) => {
      const value = provided?.[key];
      if (value !== undefined) {
        parameters[key] = value;
      }
    });
    if (Object.keys(parameters).length > 0) {
      entry.parameters = parameters;
    }
  }

  return {
    // Keys are emitted in lexicographic order; \`parameters\` keeps source order.
    entry: Object.fromEntries(
      Object.entries(entry).sort(([a], [b]) => (a < b ? -1 : 1)),
    ) as LedgerEntryInput,
    ik: input.ik as AddLedgerEntryInput['ik'],
  };
};`;
const FIELD_DOCS = {
    ledgerIk: "The Idempotency Key of the Ledger to add this Ledger Entry to.",
    posted: "ISO 8601 timestamp to post this Ledger Entry at.",
    lines: "The Ledger Lines to create, for entry types whose lines the Schema does not fix.",
};
const renderField = (field, scalars) => {
    const optional = field.required ? "" : "?";
    const undefinable = field.required ? "" : " | undefined";
    const docs = FIELD_DOCS[field.name]
        ? `  /** ${FIELD_DOCS[field.name]} */\n`
        : "";
    return `${docs}  ${renderPropertyKey(field.name)}${optional}: ${renderVariableType(field.type, scalars)}${undefinable};`;
};
const renderParameters = (payload, scalars) => {
    if (payload.parametersMode === "absent") {
        // The operation posts no parameters, so the payload does not take any.
        return undefined;
    }
    if (payload.parametersMode === "untyped") {
        const type = payload.parametersType
            ? renderVariableType(payload.parametersType, scalars)
            : "Scalars['JSON']['input']";
        const required = payload.parametersType?.kind === Kind.NON_NULL_TYPE ? "" : "?";
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
        return `    ${renderPropertyKey(parameter.wireName)}${optional}: ${renderVariableType(parameter.type, scalars)}${undefinable};`;
    });
    const allOptional = payload.parameters.every((parameter) => !parameter.required);
    const marker = allOptional ? "?" : "";
    const trailer = allOptional ? " | undefined" : "";
    return [`  parameters${marker}: {`, ...fields, `  }${trailer};`].join("\n");
};
const renderPayload = (payload, scalars) => {
    const description = `\`${payload.entryType}\` (typeVersion ${payload.typeVersion})`;
    const ikType = payload.ikType
        ? renderVariableType(payload.ikType, scalars)
        : "Scalars['SafeString']['input']";
    const members = [
        `  /** The [Idempotency Key](https://fragment.dev/api-reference/api-overview#idempotency) for this Ledger Entry. */\n  ik: ${ikType};`,
        ...payload.fields.map((field) => renderField(field, scalars)),
        renderParameters(payload, scalars),
    ].filter((member) => member !== undefined);
    const entryFields = payload.fields.map((field) => `[${[field.name, field.wireName, field.wireKey]
        .filter((part) => part !== undefined)
        .map(quote)
        .join(", ")}]`);
    const parameterKeys = payload.parametersMode === "untyped"
        ? "null"
        : `[${payload.parameters.map((parameter) => quote(parameter.wireName)).join(", ")}]`;
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
): AddLedgerEntryInput =>
  buildTypedLedgerEntry(${quote(payload.entryType)}, ${payload.typeVersion}, [${entryFields.join(", ")}], ${parameterKeys}, input);`;
};
const renderRegistry = (payloads) => {
    const entries = payloads.map((payload) => `  ${quote(`${payload.entryType}@${payload.typeVersion}`)}: ${payload.builderName},`);
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
export const renderTypedEntryPayloads = (payloads, scalars) => {
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
 * here is what that entry type accepts — no more.
 */`,
        RUNTIME,
        ...payloads.map((payload) => renderPayload(payload, scalars)),
        renderRegistry(payloads),
    ];
    return `${sections.join("\n\n")}\n`;
};
/** Derives, names and renders typed payloads in one step. */
export const generateTypedEntryPayloads = ({ documents, schema, warn, }) => {
    const payloads = nameTypedEntryPayloads(deriveTypedEntryPayloads(documents, { warn }), { warn });
    return renderTypedEntryPayloads(payloads, collectScalarNames(schema));
};
