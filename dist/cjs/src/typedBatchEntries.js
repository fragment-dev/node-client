"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTypedEntryPayloads = exports.renderTypedEntryPayloads = exports.collectScalarNames = exports.nameTypedEntryPayloads = exports.deriveTypedEntryPayloads = void 0;
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
const graphql_1 = require("graphql");
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
const findVariableDefinition = (operation, variableName) => {
    var _a;
    return (_a = operation.variableDefinitions) === null || _a === void 0 ? void 0 : _a.find((candidate) => candidate.variable.name.value === variableName);
};
/**
 * Returns the `addLedgerEntry` field of a recognised typed entry operation, or
 * undefined if the operation is not one. Every failing condition is a silent
 * skip, never an error: this is what excludes the SDK's own `addLedgerEntry` and
 * `addLedgerEntryRuntime` operations, whose `type` is a variable.
 */
const getTypedEntryField = (operation) => {
    var _a;
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
    if (selection.kind !== graphql_1.Kind.FIELD ||
        selection.name.value !== "addLedgerEntry") {
        return undefined;
    }
    const entryArgument = (_a = selection.arguments) === null || _a === void 0 ? void 0 : _a.find((argument) => argument.name.value === "entry");
    if (!entryArgument || entryArgument.value.kind !== graphql_1.Kind.OBJECT) {
        return undefined;
    }
    const typeField = findObjectField(entryArgument.value, "type");
    if (!typeField || typeField.value.kind !== graphql_1.Kind.STRING) {
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
const getTypeVersion = (entry) => {
    const field = findObjectField(entry, "typeVersion");
    if ((field === null || field === void 0 ? void 0 : field.value.kind) === graphql_1.Kind.INT) {
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
        const bind = ({ name, wireKey, variable, }) => {
            var _a;
            const variableName = variable.name.value;
            const definition = findVariableDefinition(operation, variableName);
            if (!definition) {
                warn(`Operation \`${(_a = operation.name) === null || _a === void 0 ? void 0 : _a.value}\` binds \`${wireName}\` to undeclared variable \`$${variableName}\`. Skipping the field.`);
                return;
            }
            fields.push({
                name,
                wireName,
                wireKey,
                source: "variable",
                type: definition.type,
                required: definition.type.kind === graphql_1.Kind.NON_NULL_TYPE,
            });
        };
        if (entryField.value.kind === graphql_1.Kind.VARIABLE) {
            bind({ name: wireName, variable: entryField.value });
            return;
        }
        // `ledger: { ik: $ledgerIk }` is the shape the CLI generates. The caller
        // supplies the Idempotency Key, so the payload exposes it as `ledgerIk`.
        if (entryField.value.kind === graphql_1.Kind.OBJECT) {
            entryField.value.fields.forEach((matchField) => {
                const key = matchField.name.value;
                if (matchField.value.kind === graphql_1.Kind.VARIABLE) {
                    bind({
                        name: `${wireName}${key.charAt(0).toUpperCase()}${key.slice(1)}`,
                        wireKey: key,
                        variable: matchField.value,
                    });
                    return;
                }
                fields.push({
                    name: key,
                    wireName,
                    wireKey: key,
                    source: "fixed",
                    value: (0, graphql_1.valueFromASTUntyped)(matchField.value),
                });
            });
            return;
        }
        // The operation fixes this field, so the caller cannot set it — but it is
        // still part of the entry the operation describes, so it is still posted.
        fields.push({
            name: wireName,
            wireName,
            source: "fixed",
            value: (0, graphql_1.valueFromASTUntyped)(entryField.value),
        });
    });
    return fields;
};
const getParameters = (entry, operation, warn) => {
    const parametersField = findObjectField(entry, "parameters");
    if (!parametersField) {
        // The operation posts no parameters, so neither may the caller.
        return { parameters: [], parametersMode: "absent" };
    }
    if (parametersField.value.kind === graphql_1.Kind.VARIABLE) {
        const definition = findVariableDefinition(operation, parametersField.value.name.value);
        return {
            parameters: [],
            parametersMode: "untyped",
            parametersType: definition === null || definition === void 0 ? void 0 : definition.type,
        };
    }
    if (parametersField.value.kind !== graphql_1.Kind.OBJECT) {
        return { parameters: [], parametersMode: "absent" };
    }
    const parameters = [];
    // Source order is the only ordering all SDKs can agree on, so it is preserved.
    parametersField.value.fields.forEach((field) => {
        var _a;
        if (field.value.kind !== graphql_1.Kind.VARIABLE) {
            // Fixed by the operation: not the caller's to set, but still posted.
            parameters.push({
                wireName: field.name.value,
                source: "fixed",
                value: (0, graphql_1.valueFromASTUntyped)(field.value),
            });
            return;
        }
        const variableName = field.value.name.value;
        const definition = findVariableDefinition(operation, variableName);
        if (!definition) {
            warn(`Operation \`${(_a = operation.name) === null || _a === void 0 ? void 0 : _a.value}\` binds parameter \`${field.name.value}\` to undeclared variable \`$${variableName}\`. Skipping the parameter.`);
            return;
        }
        parameters.push({
            wireName: field.name.value,
            source: "variable",
            type: definition.type,
            required: definition.type.kind === graphql_1.Kind.NON_NULL_TYPE,
        });
    });
    if (parameters.length === 0) {
        // An empty object posts nothing, so the payload takes no parameters.
        return { parameters: [], parametersMode: "absent" };
    }
    return { parameters, parametersMode: "typed" };
};
const identityOf = (payload) => JSON.stringify([payload.entryType, payload.typeVersion]);
const sameNames = (a, b) => a.length === b.length && a.every(({ wireName }, i) => wireName === b[i].wireName);
/**
 * What the two operations disagree about, if anything. Both halves matter: the
 * winning operation decides the payload's parameters *and* which entry fields a
 * caller may set, so losing either silently is a surprise.
 */
const describeConflict = (a, b) => {
    const conflicts = [
        !sameNames(a.parameters, b.parameters) ? "parameters" : undefined,
        !sameNames(a.fields, b.fields) ? "entry fields" : undefined,
    ].filter((conflict) => conflict !== undefined);
    return conflicts.join(" and ");
};
/**
 * Derives one payload per `(type, typeVersion)` pair found in the given
 * documents. Operations that are not typed entry operations are skipped
 * silently. Duplicate identities are deduplicated, first occurrence winning.
 */
const deriveTypedEntryPayloads = (documents, { warn = defaultWarn } = {}) => {
    const byIdentity = new Map();
    documents.forEach((document) => {
        document.definitions.forEach((definition) => {
            var _a, _b, _c;
            if (definition.kind !== graphql_1.Kind.OPERATION_DEFINITION) {
                return;
            }
            const recognised = getTypedEntryField(definition);
            if (!recognised) {
                return;
            }
            const { field, entry, entryType } = recognised;
            // `ik` is an argument of `addLedgerEntry`, not a field of `entry`. Every
            // entry in a batch needs its own, so a payload always takes one.
            const ikArgument = (_a = field.arguments) === null || _a === void 0 ? void 0 : _a.find((argument) => argument.name.value === "ik");
            const ikDefinition = (ikArgument === null || ikArgument === void 0 ? void 0 : ikArgument.value.kind) === graphql_1.Kind.VARIABLE
                ? findVariableDefinition(definition, ikArgument.value.name.value)
                : undefined;
            const payload = Object.assign(Object.assign({ entryType, typeVersion: getTypeVersion(entry), operationName: (_c = (_b = definition.name) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : "", fields: getFields(entry, definition, warn) }, getParameters(entry, definition, warn)), { ikType: ikDefinition === null || ikDefinition === void 0 ? void 0 : ikDefinition.type });
            const identity = identityOf(payload);
            const existing = byIdentity.get(identity);
            if (existing) {
                // The CLI and API guarantee one Ledger Entry per (type, typeVersion), so
                // two operations at one identity describe the same entry. Differing sets
                // mean the .graphql is stale, or that two generations of it were fed in
                // together — runtime-args operations bind fields the plain ones do not.
                const conflict = describeConflict(existing, payload);
                if (conflict) {
                    warn(`Operations \`${existing.operationName}\` and \`${payload.operationName}\` both describe \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) but declare different ${conflict}. Using \`${existing.operationName}\`; check that your operations are all generated from the same Schema.`);
                }
                return;
            }
            byIdentity.set(identity, payload);
        });
    });
    return [...byIdentity.values()];
};
exports.deriveTypedEntryPayloads = deriveTypedEntryPayloads;
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
const nameTypedEntryPayloads = (payloads, { warn = defaultWarn } = {}) => {
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
        return Object.assign(Object.assign({}, payload), { typeName: escapeIdentifier(`${pascal}${suffix}`), builderName: escapeIdentifier(`${camel}${suffix}`) });
    });
};
exports.nameTypedEntryPayloads = nameTypedEntryPayloads;
const BUILT_IN_SCALARS = ["ID", "String", "Boolean", "Int", "Float"];
/** The names of every scalar in a schema, including the built-in ones. */
const collectScalarNames = (schema) => {
    const names = new Set(BUILT_IN_SCALARS);
    schema.definitions.forEach((definition) => {
        if (definition.kind === graphql_1.Kind.SCALAR_TYPE_DEFINITION) {
            names.add(definition.name.value);
        }
    });
    return names;
};
exports.collectScalarNames = collectScalarNames;
/** A single-quoted TypeScript string literal, matching the codegen output style. */
const quote = (value) => `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
/** A value the operation fixed, as a TypeScript literal in the file's style. */
const renderLiteral = (value) => {
    var _a;
    if (typeof value === "string") {
        return quote(value);
    }
    if (Array.isArray(value)) {
        return `[${value.map(renderLiteral).join(", ")}]`;
    }
    if (value !== null && typeof value === "object") {
        const entries = Object.entries(value).map(([key, nested]) => `${renderPropertyKey(key)}: ${renderLiteral(nested)}`);
        return entries.length > 0 ? `{ ${entries.join(", ")} }` : "{}";
    }
    return (_a = JSON.stringify(value)) !== null && _a !== void 0 ? _a : "undefined";
};
const renderNamedType = (type, scalars) => {
    const { value } = type.name;
    // Anything that is not a scalar is an enum or an input object, both of which
    // the typescript plugin emits into the same file under their schema name.
    return scalars.has(value) ? `Scalars['${value}']['input']` : value;
};
const renderMaybeType = (type, scalars) => {
    if (type.kind === graphql_1.Kind.NON_NULL_TYPE) {
        return renderInnerType(type.type, scalars);
    }
    return `${renderInnerType(type, scalars)} | null`;
};
const renderInnerType = (type, scalars) => type.kind === graphql_1.Kind.LIST_TYPE
    ? `Array<${renderMaybeType(type.type, scalars)}>`
    : renderNamedType(type, scalars);
/**
 * The TypeScript type of a value bound to a variable. Top-level nullability is
 * carried by the optional marker instead: an unset field is omitted from the
 * request, never serialized as `null`.
 */
const renderVariableType = (type, scalars) => type.kind === graphql_1.Kind.NON_NULL_TYPE
    ? renderInnerType(type.type, scalars)
    : renderInnerType(type, scalars);
const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
/**
 * Wire names go into the generated type verbatim. A GraphQL name is always a
 * valid TypeScript property key, so this only quotes defensively.
 */
const renderPropertyKey = (name) => IDENTIFIER.test(name) ? name : quote(name);
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
    var _a;
    if (payload.parametersMode === "absent") {
        // The operation posts no parameters, so the payload does not take any.
        return undefined;
    }
    if (payload.parametersMode === "untyped") {
        const type = payload.parametersType
            ? renderVariableType(payload.parametersType, scalars)
            : "Scalars['JSON']['input']";
        const required = ((_a = payload.parametersType) === null || _a === void 0 ? void 0 : _a.kind) === graphql_1.Kind.NON_NULL_TYPE ? "" : "?";
        const undefinable = required ? " | undefined" : "";
        return [
            "  /**",
            "   * This entry type's operation does not bind its parameters to typed",
            "   * variables, so they cannot be typed individually.",
            "   */",
            `  parameters${required}: ${type}${undefinable};`,
        ].join("\n");
    }
    const bound = payload.parameters.filter((parameter) => parameter.source === "variable");
    if (bound.length === 0) {
        // Every parameter is fixed by the operation, so there is nothing to set.
        return undefined;
    }
    const fields = bound.map((parameter) => {
        const optional = parameter.required ? "" : "?";
        const undefinable = parameter.required ? "" : " | undefined";
        return `    ${renderPropertyKey(parameter.wireName)}${optional}: ${renderVariableType(parameter.type, scalars)}${undefinable};`;
    });
    const allOptional = bound.every((parameter) => !parameter.required);
    const marker = allOptional ? "?" : "";
    const trailer = allOptional ? " | undefined" : "";
    return [`  parameters${marker}: {`, ...fields, `  }${trailer};`].join("\n");
};
/**
 * `value` when the caller must set it, and a conditional spread when they may
 * not: an unset field is left out of the object rather than sent as `null`.
 */
const renderMember = ({ wireName, required, read, value = read, }) => ({
    wireName,
    code: required
        ? `    ${wireName}: ${value},`
        : `    ...(${read} !== undefined && { ${wireName}: ${value} }),`,
});
/**
 * An `entry` key built from members that may each be absent — `parameters`, or a
 * match object like `ledger`. When every member is optional the object is built
 * first and spread only if it ended up with something in it, so an entry never
 * carries an empty object the caller did not ask for.
 */
const renderObjectMember = ({ wireName, members, anyRequired, }) => {
    if (anyRequired) {
        return {
            member: {
                wireName,
                code: [
                    `    ${wireName}: {`,
                    ...members.map((member) => `      ${member}`),
                    "    },",
                ].join("\n"),
            },
        };
    }
    return {
        prelude: [
            `  const ${wireName} = {`,
            ...members.map((member) => `    ${member}`),
            "  };",
        ].join("\n"),
        member: {
            wireName,
            code: `    ...(Object.keys(${wireName}).length > 0 && { ${wireName} }),`,
        },
    };
};
/** The `parameters` key of the emitted `entry` literal, if the payload has one. */
const renderParametersMember = (payload) => {
    var _a;
    if (payload.parametersMode === "absent") {
        return {};
    }
    if (payload.parametersMode === "untyped") {
        return {
            member: renderMember({
                wireName: "parameters",
                required: ((_a = payload.parametersType) === null || _a === void 0 ? void 0 : _a.kind) === graphql_1.Kind.NON_NULL_TYPE,
                read: "input.parameters",
            }),
        };
    }
    // A parameter that is required or fixed is always there, so `parameters` is
    // too. When every one of them is optional it may be empty, and the caller may
    // not have passed the object at all, so it is read through `?.`.
    const alwaysPresent = payload.parameters.some((parameter) => parameter.source === "fixed" || parameter.required);
    const access = alwaysPresent ? "input.parameters" : "input.parameters?";
    return renderObjectMember({
        wireName: "parameters",
        anyRequired: alwaysPresent,
        // Parameters keep the order the source operation declares them in.
        members: payload.parameters.map((parameter) => {
            const key = renderPropertyKey(parameter.wireName);
            if (parameter.source === "fixed") {
                return `${key}: ${renderLiteral(parameter.value)},`;
            }
            const read = `${access}.${parameter.wireName}`;
            return parameter.required
                ? `${key}: ${read},`
                : `...(${read} !== undefined && { ${key}: ${read} }),`;
        }),
    });
};
/**
 * The `entry` keys the payload's own fields set. Fields are grouped by the
 * `LedgerEntryInput` field they write, because a match object can be bound one
 * key at a time — `ledger: { id: $id, ik: $ik }` is two payload fields writing
 * one entry key, and they have to end up in one object rather than overwriting
 * each other.
 */
const renderFieldMembers = (payload) => {
    const groups = new Map();
    payload.fields.forEach((field) => {
        var _a;
        groups.set(field.wireName, [...((_a = groups.get(field.wireName)) !== null && _a !== void 0 ? _a : []), field]);
    });
    const members = [];
    const preludes = [];
    groups.forEach((fields, wireName) => {
        if (fields.length === 1) {
            const [field] = fields;
            if (field.source === "fixed") {
                const value = renderLiteral(field.value);
                members.push({
                    wireName,
                    code: `    ${wireName}: ${field.wireKey ? `{ ${field.wireKey}: ${value} }` : value},`,
                });
                return;
            }
            members.push(renderMember({
                wireName,
                required: field.required,
                read: `input.${field.name}`,
                value: field.wireKey
                    ? `{ ${field.wireKey}: input.${field.name} }`
                    : `input.${field.name}`,
            }));
            return;
        }
        const { member, prelude } = renderObjectMember({
            wireName,
            anyRequired: fields.some((field) => field.source === "fixed" || field.required),
            members: fields.map((field) => {
                var _a;
                // Grouping only happens for match objects, so every field has a key.
                const key = renderPropertyKey((_a = field.wireKey) !== null && _a !== void 0 ? _a : field.name);
                if (field.source === "fixed") {
                    return `${key}: ${renderLiteral(field.value)},`;
                }
                const read = `input.${field.name}`;
                return field.required
                    ? `${key}: ${read},`
                    : `...(${read} !== undefined && { ${key}: ${read} }),`;
            }),
        });
        members.push(member);
        if (prelude) {
            preludes.push(prelude);
        }
    });
    return { members, preludes };
};
const renderBuilderBody = (payload) => {
    const { member: parametersMember, prelude } = renderParametersMember(payload);
    const fields = renderFieldMembers(payload);
    const preludes = [...fields.preludes, ...(prelude ? [prelude] : [])];
    const members = [
        ...fields.members,
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
    const literal = (indent) => [
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
    // An object whose members are all optional is built first, so the block body
    // is only used where it earns its keep.
    return preludes.length > 0
        ? ` => {\n${preludes.join("\n")}\n  return ${literal("  ")};\n}`
        : ` => (${literal("")})`;
};
const renderPayload = (payload, scalars) => {
    const description = `\`${payload.entryType}\` (typeVersion ${payload.typeVersion})`;
    const ikType = payload.ikType
        ? renderVariableType(payload.ikType, scalars)
        : "Scalars['SafeString']['input']";
    const members = [
        `  /** The [Idempotency Key](https://fragment.dev/api-reference/api-overview#idempotency) for this Ledger Entry. */\n  ik: ${ikType};`,
        ...payload.fields
            .filter((field) => field.source === "variable")
            .map((field) => renderField(field, scalars)),
        renderParameters(payload, scalars),
    ].filter((member) => member !== undefined);
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
const renderTypedEntryPayloads = (payloads, scalars) => {
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
exports.renderTypedEntryPayloads = renderTypedEntryPayloads;
/** Derives, names and renders typed payloads in one step. */
const generateTypedEntryPayloads = ({ documents, schema, warn, }) => {
    const payloads = (0, exports.nameTypedEntryPayloads)((0, exports.deriveTypedEntryPayloads)(documents, { warn }), { warn });
    return (0, exports.renderTypedEntryPayloads)(payloads, (0, exports.collectScalarNames)(schema));
};
exports.generateTypedEntryPayloads = generateTypedEntryPayloads;
