import { ClientError } from "graphql-request";

type FragmentErrorParams = {
  cause?: ClientError | Error;
  message?: string;
  code?: string;
};

export class FragmentError extends Error {
  readonly cause?: ClientError | Error;
  readonly status?: number;

  readonly code?: string;

  constructor({ cause, code, message: messageParam }: FragmentErrorParams) {
    let message = messageParam;
    if (cause instanceof ClientError) {
      const errors = cause.response.errors ?? [];
      const firstError = errors.find((err) => !!err.message);
      message = firstError?.message ?? JSON.stringify(cause.response);
    } else if (cause instanceof Error) {
      message = cause.message;
    }

    super(messageParam ?? message);

    this.cause = cause;
    this.message = messageParam ?? message ?? `<no message>`;
    this.code = code;
    if (cause instanceof ClientError) {
      this.status = cause.response.status;
    }
  }
}

export type InternalApiErrorParams = FragmentErrorParams;

export class InternalError extends FragmentError {
  constructor({ cause, message }: InternalApiErrorParams) {
    super({ cause, message, code: "internal_error" });
  }
}

export type BadRequestErrorParams = FragmentErrorParams;

export class BadRequestError extends FragmentError {
  constructor({ cause, message, code }: BadRequestErrorParams) {
    super({ cause, message, code: code ?? "bad_request_error" });
  }
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
export class AddLedgerEntriesError extends FragmentError {
  /** The list of errors for each Ledger Entry that was responsible for the batch's failure. */
  readonly errors: LedgerEntryBatchError[];

  constructor({ cause, message, code, errors }: AddLedgerEntriesErrorParams) {
    super({
      cause,
      message,
      code: code ?? "ledger_entry_batch_operation_failed",
    });
    this.errors = errors ?? [];
  }
}
