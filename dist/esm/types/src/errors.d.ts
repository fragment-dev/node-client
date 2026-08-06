import { ClientError } from "graphql-request";
type FragmentErrorParams = {
    cause?: ClientError | Error;
    message?: string;
    code?: string;
};
export declare class FragmentError extends Error {
    readonly cause?: ClientError | Error;
    readonly status?: number;
    readonly code?: string;
    constructor({ cause, code, message: messageParam }: FragmentErrorParams);
}
export type InternalApiErrorParams = FragmentErrorParams;
export declare class InternalError extends FragmentError {
    constructor({ cause, message }: InternalApiErrorParams);
}
export type BadRequestErrorParams = FragmentErrorParams;
export declare class BadRequestError extends FragmentError {
    constructor({ cause, message, code }: BadRequestErrorParams);
}
/**
 * Error details for a single Ledger Entry that was responsible for the batch's
 * failure.
 */
export type LedgerEntryBatchError = {
    /** The [Idempotency Key](https://fragment.dev/api-reference/api-overview#idempotency) of the Ledger Entry */
    ik: string;
    /** The status code of error. For example, 'ledger_entry_too_many_lines'. */
    code: string;
    /** The error message */
    message: string;
    /** Whether or not the operation is retryable */
    retryable: boolean;
};
export type AddLedgerEntriesErrorParams = FragmentErrorParams & {
    /** The list of errors for each Ledger Entry that was responsible for the batch's failure. */
    errors?: LedgerEntryBatchError[];
};
/**
 * Thrown when one or more Ledger Entries in an `addLedgerEntries` batch could
 * not be added.
 *
 * `addLedgerEntries` adds a batch of Ledger Entries in one synchronous and
 * atomic transaction, so either every entry was added or none were. Nothing was
 * written when this is thrown.
 */
export declare class AddLedgerEntriesError extends FragmentError {
    /** The list of errors for each Ledger Entry that was responsible for the batch's failure. */
    readonly errors: LedgerEntryBatchError[];
    constructor({ cause, message, code, errors }: AddLedgerEntriesErrorParams);
}
export {};
//# sourceMappingURL=errors.d.ts.map