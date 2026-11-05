import type { UnknownWebhookEvent, WebhookEvent } from "../generated/webhooks.js";
import { FragmentError } from "./errors.js";
export type ValidationError = {
    keywordLocation: string;
    instanceLocation: string;
};
/** A compiled JSON Schema validator. `errors` holds the first failure after a `false` result. */
export type Validator = {
    (value: unknown): boolean;
    errors?: ValidationError[] | null;
};
export declare enum WebhookVerificationErrorCode {
    missing_headers = "missing_headers",
    invalid_signature = "invalid_signature",
    timestamp_out_of_tolerance = "timestamp_out_of_tolerance",
    invalid_json = "invalid_json",
    invalid_payload = "invalid_payload"
}
export type WebhookVerificationErrorParams = {
    code: WebhookVerificationErrorCode;
    message: string;
    cause?: unknown;
};
/** Thrown by `verifyWebhook` when the request is not a webhook Fragment sent. */
export declare class WebhookVerificationError extends FragmentError {
    readonly code: WebhookVerificationErrorCode;
    constructor({ code, message, cause }: WebhookVerificationErrorParams);
}
/**
 * The headers of the incoming request: a Fetch-style `Headers` with `get`, or
 * a plain record such as Node's `IncomingHttpHeaders`.
 */
export type WebhookHeaders = Record<string, string | string[] | undefined> | {
    get(name: string): string | null;
};
export type VerifyWebhookArgs = {
    /** The raw request body, before any JSON parsing. */
    payload: string | Uint8Array;
    headers: WebhookHeaders;
    /** The subscription's signing secret, with or without the `whsec_` prefix. */
    secret: string;
};
export type VerifiedWebhook = {
    known: true;
    event: WebhookEvent;
} | {
    known: false;
    event: UnknownWebhookEvent;
};
/**
 * Verifies that a request is a webhook Fragment sent and returns its event.
 *
 * Pass the raw request body as it arrived, before any JSON parsing: the
 * signature covers the exact bytes. Throws a `WebhookVerificationError` when
 * the headers, signature, timestamp or payload do not check out.
 *
 * Events of a type this version of the SDK does not know are returned with
 * `known: false` after their envelope is validated.
 */
export declare const verifyWebhook: ({ payload, headers, secret, }: VerifyWebhookArgs) => VerifiedWebhook;
//# sourceMappingURL=webhooks.d.ts.map