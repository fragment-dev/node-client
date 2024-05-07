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
export {};
//# sourceMappingURL=errors.d.ts.map