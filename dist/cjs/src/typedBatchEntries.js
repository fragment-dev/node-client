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
 * What a payload exposes is fixed by `LedgerEntryInput`, not derived from the
 * operation: every payload carries the same common fields (§2.3a), so the CLI
 * changing which fields it binds never moves a payload's surface.
 *
 * Two things follow. A value the operation fixes to a literal is encoded in the
 * Schema, so the API derives it and the payload neither exposes nor re-posts it.
 * And an entry type whose Ledger Lines the caller supplies gets no payload at
 * all, since `lines` is not a common field — post those with a raw
 * `AddLedgerEntryInput`, which `addLedgerEntries` accepts in the same batch.
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
/**
 * The `LedgerEntryInput` fields every payload exposes, whatever its operation
 * binds, with their declared types (spec 2.3a).
 *
 * Deliberately not derived from the operation. An operation binds only the entry
 * fields the CLI version that generated it chose to expose, and that choice has
 * already changed between versions -- so deriving the set would invent a
 * restriction the API does not have, and would move a payload's surface whenever
 * the CLI changed. A payload travels as an `AddLedgerEntryInput`, so what the
 * operation binds places no limit on what the payload may carry.
 *
 * `ik` and `ledgerIk` are always present already. `lines` is excluded: it cannot
 * be combined with an entry that has a `type`.
 */
const COMMON_ENTRY_FIELDS = [
    { name: "posted", type: "DateTime" },
    { name: "description", type: "String" },
    { name: "tags", type: "[LedgerEntryTagInput!]" },
    { name: "groups", type: "[LedgerEntryGroupInput!]" },
    { name: "conditions", type: "[LedgerEntryConditionInput!]" },
];
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
        /**
         * An entry type whose Lines the Schema does not fix takes them from the
         * caller, and a payload cannot carry them: `lines` is not a common field.
         * Generating one anyway would hand the caller something that always posts
         * an entry with no Lines, so no payload is generated at all.
         */
        hasLines: !!findObjectField(entryArgument.value, "lines"),
    };
};
/**
 * The `typeVersion` the operation pins, or undefined when it pins one
 * dynamically. `typeVersion` defaults to 1 when it is not set, so an operation
 * that pins no version is normalised to 1 — for the payload's identity, its name
 * and its wire payload alike.
 *
 * A version bound to a variable is different: the caller of the single-entry
 * operation chooses it, and a payload — whose name states one version and whose
 * builder posts it — cannot. Those get no payload rather than a silent 1.
 */
const getTypeVersion = (entry) => {
    const field = findObjectField(entry, "typeVersion");
    if (!field || field.value.kind === graphql_1.Kind.NULL) {
        return 1;
    }
    if (field.value.kind === graphql_1.Kind.INT) {
        return Number.parseInt(field.value.value, 10);
    }
    return undefined;
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
                // Fixed by the operation, so encoded in the Schema: the API derives it.
            });
            return;
        }
        // Fixed by the operation, so encoded in the Schema: the API derives it.
    });
    // Spec 2.3a: every payload carries these, whether or not its operation binds
    // them. Appended rather than interleaved, so the operation's own fields keep
    // their source order.
    COMMON_ENTRY_FIELDS.forEach(({ name, type }) => {
        if (fields.some((field) => field.name === name)) {
            return;
        }
        fields.push({
            name,
            wireName: name,
            type: (0, graphql_1.parseType)(type),
            required: false,
        });
    });
    return fields;
};
const getParameters = (entry, operation, warn) => {
    const parametersField = findObjectField(entry, "parameters");
    if (!parametersField) {
        // The operation posts no parameters, so neither may the caller.
        return { parametersMode: "absent" };
    }
    if (parametersField.value.kind === graphql_1.Kind.VARIABLE) {
        const definition = findVariableDefinition(operation, parametersField.value.name.value);
        return { parametersMode: "untyped", parametersType: definition === null || definition === void 0 ? void 0 : definition.type };
    }
    if (parametersField.value.kind !== graphql_1.Kind.OBJECT) {
        return { parametersMode: "absent" };
    }
    const parameters = [];
    // Source order is the only ordering all SDKs can agree on, so it is preserved.
    parametersField.value.fields.forEach((field) => {
        var _a;
        if (field.value.kind !== graphql_1.Kind.VARIABLE) {
            // Fixed by the operation, so encoded in the Schema: the API derives it
            // from there and the payload neither exposes nor re-posts it.
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
            // Escaped later, once the payload's other field names are known.
            name: field.name.value,
            type: definition.type,
            required: definition.type.kind === graphql_1.Kind.NON_NULL_TYPE,
        });
    });
    if (parameters.length === 0) {
        // An empty object posts nothing, so the payload takes no parameters.
        return { parametersMode: "absent" };
    }
    return { parametersMode: "typed", parameters };
};
const identityOf = (payload) => JSON.stringify([payload.entryType, payload.typeVersion]);
const sameList = (a, b) => a.length === b.length && a.every((name, index) => name === b[index]);
const parameterNames = (payload) => payload.parametersMode === "typed"
    ? payload.parameters.map((parameter) => parameter.wireName)
    : [];
/**
 * What the two operations disagree about, if anything. Both halves matter: the
 * winning operation decides the payload's parameters *and* which entry fields a
 * caller may set, so losing either silently is a surprise.
 */
const describeConflict = (a, b) => {
    const conflicts = [
        !sameList(parameterNames(a), parameterNames(b))
            ? "parameters"
            : undefined,
        // Compare the name the caller writes: `ledger: { ik }` and `ledger: { id }`
        // both set `ledger`, but they expose `ledgerIk` and `ledgerId`.
        !sameList(a.fields.map((field) => field.name), b.fields.map((field) => field.name))
            ? "entry fields"
            : undefined,
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
            var _a, _b, _c, _d, _e;
            if (definition.kind !== graphql_1.Kind.OPERATION_DEFINITION) {
                return;
            }
            const recognised = getTypedEntryField(definition);
            if (!recognised) {
                return;
            }
            const { field, entry, entryType, hasLines } = recognised;
            if (hasLines) {
                // Not silent: the payload a caller would reach for is the one that is
                // missing, so say which entry type it was and what to reach for instead.
                warn(`Operation \`${(_a = definition.name) === null || _a === void 0 ? void 0 : _a.value}\` posts \`${entryType}\` with Ledger Lines, which a typed payload cannot carry. No payload is generated for it — post it with a raw \`AddLedgerEntryInput\`, which \`addLedgerEntries\` accepts alongside typed payloads.`);
                return;
            }
            // `ik` is an argument of `addLedgerEntry`, not a field of `entry`. Every
            // entry in a batch needs its own, so a payload always takes one.
            const ikArgument = (_b = field.arguments) === null || _b === void 0 ? void 0 : _b.find((argument) => argument.name.value === "ik");
            const ikDefinition = (ikArgument === null || ikArgument === void 0 ? void 0 : ikArgument.value.kind) === graphql_1.Kind.VARIABLE
                ? findVariableDefinition(definition, ikArgument.value.name.value)
                : undefined;
            const typeVersion = getTypeVersion(entry);
            if (typeVersion === undefined) {
                warn(`Operation \`${(_c = definition.name) === null || _c === void 0 ? void 0 : _c.value}\` binds \`typeVersion\` to a variable, so its version is the caller's to choose. A typed payload names one version and posts it, so none is generated for \`${entryType}\` — post it with a raw \`AddLedgerEntryInput\`, which \`addLedgerEntries\` accepts alongside typed payloads.`);
                return;
            }
            const payload = Object.assign(Object.assign({ entryType,
                typeVersion, operationName: (_e = (_d = definition.name) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : "", fields: getFields(entry, definition, warn) }, getParameters(entry, definition, warn)), { ikType: ikDefinition === null || ikDefinition === void 0 ? void 0 : ikDefinition.type });
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
 * Gives each parameter the field name it takes on the payload. Parameters share
 * a namespace with the common fields, so a parameter called `posted` cannot keep
 * that name: the first occupant keeps the plain name and later ones are
 * suffixed. The wire name never changes, so each still carries its own value.
 */
const nameParameters = (payload, warn) => {
    if (payload.parametersMode !== "typed") {
        return payload;
    }
    const taken = new Set(["ik", ...payload.fields.map((field) => field.name)]);
    return {
        parametersMode: "typed",
        parameters: payload.parameters.map((parameter) => {
            let name = parameter.wireName;
            let attempt = 1;
            while (taken.has(name)) {
                attempt += 1;
                name = `${parameter.wireName}_${attempt}`;
            }
            if (name !== parameter.wireName) {
                warn(`Parameter \`${parameter.wireName}\` of \`${payload.entryType}\` (typeVersion ${payload.typeVersion}) collides with another field of the payload, so it is called \`${name}\` there. It still posts as \`${parameter.wireName}\`.`);
            }
            taken.add(name);
            return Object.assign(Object.assign({}, parameter), { name });
        }),
    };
};
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
        return Object.assign(Object.assign(Object.assign({}, payload), nameParameters(payload, warn)), { typeName: escapeIdentifier(`${pascal}${suffix}`), builderName: escapeIdentifier(`${camel}${suffix}`) });
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
    if (payload.parametersMode === "absent") {
        // The operation posts no parameters, so the payload does not take any.
        return [];
    }
    if (payload.parametersMode === "untyped") {
        const { parametersType } = payload;
        const type = parametersType
            ? renderVariableType(parametersType, scalars)
            : "Scalars['JSON']['input']";
        const required = (parametersType === null || parametersType === void 0 ? void 0 : parametersType.kind) === graphql_1.Kind.NON_NULL_TYPE ? "" : "?";
        const undefinable = required ? " | undefined" : "";
        return [
            [
                "  /**",
                "   * This entry type's operation does not bind its parameters to typed",
                "   * variables, so they cannot be typed individually.",
                "   */",
                `  parameters${required}: ${type}${undefinable};`,
            ].join("\n"),
        ];
    }
    // Parameters sit alongside the common fields, in the order the operation
    // declares them.
    return payload.parameters.map((parameter) => {
        const optional = parameter.required ? "" : "?";
        const undefinable = parameter.required ? "" : " | undefined";
        const renamed = parameter.name === parameter.wireName
            ? ""
            : `  /** Posts as \`${parameter.wireName}\`. */\n`;
        return `${renamed}  ${renderPropertyKey(parameter.name)}${optional}: ${renderVariableType(parameter.type, scalars)}${undefinable};`;
    });
};
/**
 * `value` when the caller must set it, and a conditional spread when they may
 * not: an unset field is left out of the object rather than sent as `null`.
 */
const renderMember = ({ wireName, required, read, value = read, }) => ({
    wireName,
    code: [
        required
            ? `    ${wireName}: ${value},`
            : `    ...(${read} !== undefined && { ${wireName}: ${value} }),`,
    ],
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
                ],
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
            code: [`    ...(Object.keys(${wireName}).length > 0 && { ${wireName} }),`],
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
    return renderObjectMember({
        wireName: "parameters",
        // With a required parameter the object always has something in it; with
        // none, it is built first and posted only if the caller set something.
        anyRequired: payload.parameters.some((parameter) => parameter.required),
        // Parameters keep the order the source operation declares them in, and each
        // posts under its Schema name however it is spelled on the payload.
        members: payload.parameters.map((parameter) => {
            const key = renderPropertyKey(parameter.wireName);
            const read = `input.${parameter.name}`;
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
            anyRequired: fields.some((field) => field.required),
            members: fields.map((field) => {
                var _a;
                // Grouping only happens for match objects, so every field has a key.
                const key = renderPropertyKey((_a = field.wireKey) !== null && _a !== void 0 ? _a : field.name);
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
        { wireName: "type", code: [`    type: ${quote(payload.entryType)},`] },
        { wireName: "typeVersion", code: [`    typeVersion: ${payload.typeVersion},`] },
    ];
    // Keys are emitted in lexicographic order, which costs nothing to do here and
    // makes two SDKs' requests comparable byte for byte.
    const entry = [...members]
        .sort((a, b) => a.wireName.localeCompare(b.wireName))
        .flatMap((member) => member.code);
    const literal = (indent) => [
        "{",
        "  entry: {",
        ...entry,
        "  },",
        "  ik: input.ik,",
        "}",
    ]
        .map((line, index) => (index === 0 ? line : `${indent}${line}`))
        .join("\n");
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
        ...payload.fields.map((field) => renderField(field, scalars)),
        ...renderParameters(payload, scalars),
    ];
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
