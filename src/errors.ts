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
