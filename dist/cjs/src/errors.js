"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.InternalError = exports.FragmentError = void 0;
const graphql_request_1 = require("graphql-request");
class FragmentError extends Error {
    constructor({ cause, code, message: messageParam }) {
        var _a, _b, _c;
        let message = messageParam;
        if (cause instanceof graphql_request_1.ClientError) {
            const errors = (_a = cause.response.errors) !== null && _a !== void 0 ? _a : [];
            const firstError = errors.find((err) => !!err.message);
            message = (_b = firstError === null || firstError === void 0 ? void 0 : firstError.message) !== null && _b !== void 0 ? _b : JSON.stringify(cause.response);
        }
        else if (cause instanceof Error) {
            message = cause.message;
        }
        super(messageParam !== null && messageParam !== void 0 ? messageParam : message);
        this.cause = cause;
        this.message = (_c = messageParam !== null && messageParam !== void 0 ? messageParam : message) !== null && _c !== void 0 ? _c : `<no message>`;
        this.code = code;
        if (cause instanceof graphql_request_1.ClientError) {
            this.status = cause.response.status;
        }
    }
}
exports.FragmentError = FragmentError;
class InternalError extends FragmentError {
    constructor({ cause, message }) {
        super({ cause, message, code: "internal_error" });
    }
}
exports.InternalError = InternalError;
class BadRequestError extends FragmentError {
    constructor({ cause, message, code }) {
        super({ cause, message, code: code !== null && code !== void 0 ? code : "bad_request_error" });
    }
}
exports.BadRequestError = BadRequestError;
