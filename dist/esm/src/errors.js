import { ClientError } from "graphql-request";
export class FragmentError extends Error {
    cause;
    status;
    code;
    constructor({ cause, code, message: messageParam }) {
        let message = messageParam;
        if (cause instanceof ClientError) {
            const errors = cause.response.errors ?? [];
            const firstError = errors.find((err) => !!err.message);
            message = firstError?.message ?? JSON.stringify(cause.response);
        }
        else if (cause instanceof Error) {
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
export class InternalError extends FragmentError {
    constructor({ cause, message }) {
        super({ cause, message, code: "internal_error" });
    }
}
export class BadRequestError extends FragmentError {
    constructor({ cause, message, code }) {
        super({ cause, message, code: code ?? "bad_request_error" });
    }
}
