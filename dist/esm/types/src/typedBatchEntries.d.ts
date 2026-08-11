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
import { type DocumentNode, type TypeNode } from "graphql";
/** A value the caller supplies, typed by the variable the operation binds. */
export type BoundValue = {
    /** The variable's declared type, which is where the payload's type comes from. */
    type: TypeNode;
    /** True when the variable's type is non-null. */
    required: boolean;
};
/** A single parameter of a typed entry payload. */
export type TypedEntryParameter = {
    /** The parameter name from the Schema. Goes on the wire verbatim. */
    wireName: string;
    /**
     * The field name on the generated payload. The wire name unless it collided
     * with a common field or an earlier parameter (§2.5).
     */
    name: string;
} & BoundValue;
/**
 * An entry field a typed payload lets the caller set, derived from the source
 * operation binding it to a variable.
 */
export type TypedEntryField = {
    /** The field name on the generated payload, for a value the caller supplies. */
    name: string;
    /** The `LedgerEntryInput` field it sets. */
    wireName: string;
    /**
     * Set when the value is a match key nested inside the wire field — `ledgerIk`
     * sets `ledger: { ik }`, so this is `"ik"` there.
     */
    wireKey?: string;
} & BoundValue;
/**
 * How the source operation exposes `parameters`, if at all: as an inline object
 * literal, so each parameter is typed individually; bound to a variable, so the
 * payload falls back to an untyped map; or not at all, so the caller cannot set
 * parameters. Each carries only what that case has.
 */
export type PayloadParameters = {
    parametersMode: "typed";
    parameters: TypedEntryParameter[];
} | {
    parametersMode: "untyped";
    parametersType: TypeNode | undefined;
} | {
    parametersMode: "absent";
};
/** A typed payload for one `(entry type, typeVersion)` pair. */
export type TypedEntryPayload = {
    entryType: string;
    typeVersion: number;
    /** The operation the payload was derived from. Informative only. */
    operationName: string;
    /** Entry fields the caller may set, in the operation's source order. */
    fields: TypedEntryField[];
    /** The declared type of the entry's own `ik`, when bound to a variable. */
    ikType?: TypeNode;
} & PayloadParameters;
/** A payload with its generated TypeScript identifiers assigned. */
export type NamedTypedEntryPayload = TypedEntryPayload & {
    /** Name of the exported payload type, e.g. `UserFundsAccountV1`. */
    typeName: string;
    /** Name of the exported builder function, e.g. `userFundsAccountV1`. */
    builderName: string;
};
type Warn = (message: string) => void;
/**
 * Derives one payload per `(type, typeVersion)` pair found in the given
 * documents. Operations that are not typed entry operations are skipped
 * silently. Duplicate identities are deduplicated, first occurrence winning.
 */
export declare const deriveTypedEntryPayloads: (documents: ReadonlyArray<DocumentNode>, { warn }?: {
    warn?: Warn;
}) => TypedEntryPayload[];
/**
 * Assigns each payload its generated identifiers. A name depends only on its own
 * payload's identity — never on which other operations are present — so adding
 * an entry type or a new version of one never renames an existing payload.
 */
export declare const nameTypedEntryPayloads: (payloads: ReadonlyArray<TypedEntryPayload>, { warn }?: {
    warn?: Warn;
}) => NamedTypedEntryPayload[];
/** The names of every scalar in a schema, including the built-in ones. */
export declare const collectScalarNames: (schema: DocumentNode) => Set<string>;
/**
 * Renders the typed batch entry section of a generated client. Returns an empty
 * string when the input documents contain no typed entry operations.
 */
export declare const renderTypedEntryPayloads: (payloads: ReadonlyArray<NamedTypedEntryPayload>, scalars: ReadonlySet<string>) => string;
/** Derives, names and renders typed payloads in one step. */
export declare const generateTypedEntryPayloads: ({ documents, schema, warn, }: {
    documents: ReadonlyArray<DocumentNode>;
    schema: DocumentNode;
    warn?: Warn;
}) => string;
export {};
//# sourceMappingURL=typedBatchEntries.d.ts.map