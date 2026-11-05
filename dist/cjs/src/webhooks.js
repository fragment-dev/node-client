"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyWebhook = exports.WebhookVerificationError = exports.WebhookVerificationErrorCode = void 0;
const standardwebhooks_1 = require("standardwebhooks");
const webhookValidators_js_1 = require("../generated/webhookValidators.js");
const errors_js_1 = require("./errors.js");
const TIMESTAMP_TOLERANCE_IN_SECONDS = 5 * 60;
var WebhookVerificationErrorCode;
(function (WebhookVerificationErrorCode) {
    WebhookVerificationErrorCode["missing_headers"] = "missing_headers";
    WebhookVerificationErrorCode["invalid_signature"] = "invalid_signature";
    WebhookVerificationErrorCode["timestamp_out_of_tolerance"] = "timestamp_out_of_tolerance";
    WebhookVerificationErrorCode["invalid_json"] = "invalid_json";
    WebhookVerificationErrorCode["invalid_payload"] = "invalid_payload";
})(WebhookVerificationErrorCode || (exports.WebhookVerificationErrorCode = WebhookVerificationErrorCode = {}));
/** Thrown by `verifyWebhook` when the request is not a webhook Fragment sent. */
class WebhookVerificationError extends errors_js_1.FragmentError {
    constructor({ code, message, cause }) {
        super({ code, message, cause: cause instanceof Error ? cause : undefined });
        this.code = code;
    }
}
exports.WebhookVerificationError = WebhookVerificationError;
const hasHeaderGetter = (headers) => typeof headers.get === "function";
const readHeader = (headers, name) => {
    var _a;
    const value = hasHeaderGetter(headers)
        ? headers.get(name)
        : headers[(_a = Object.keys(headers).find((key) => key.toLowerCase() === name)) !== null && _a !== void 0 ? _a : name];
    const header = Array.isArray(value) ? value[0] : value;
    if (!header) {
        throw new WebhookVerificationError({
            code: WebhookVerificationErrorCode.missing_headers,
            message: `Missing the ${name} header`,
        });
    }
    return header;
};
const checkTimestamp = (timestamp) => {
    if (!/^\d+$/.test(timestamp) ||
        Math.abs(Date.now() / 1000 - Number(timestamp)) >
            TIMESTAMP_TOLERANCE_IN_SECONDS) {
        throw new WebhookVerificationError({
            code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
            message: `The webhook-timestamp header (${timestamp}) is not within ${TIMESTAMP_TOLERANCE_IN_SECONDS} seconds of now`,
        });
    }
};
const checkSignature = (payload, headers, secret) => {
    try {
        new standardwebhooks_1.Webhook(secret).verify(payload, headers, { jsonParse: false });
    }
    catch (cause) {
        throw new WebhookVerificationError({
            code: WebhookVerificationErrorCode.invalid_signature,
            message: "The webhook signature does not match the payload",
            cause,
        });
    }
};
const parseJson = (payload) => {
    try {
        return JSON.parse(payload);
    }
    catch (cause) {
        throw new WebhookVerificationError({
            code: WebhookVerificationErrorCode.invalid_json,
            message: "The webhook payload is not valid JSON",
            cause,
        });
    }
};
const validate = (validator, body, label) => {
    var _a;
    if (validator(body)) {
        return;
    }
    const [error] = (_a = validator.errors) !== null && _a !== void 0 ? _a : [];
    const location = error === undefined
        ? ""
        : ` at ${error.instanceLocation} (${error.keywordLocation})`;
    throw new WebhookVerificationError({
        code: WebhookVerificationErrorCode.invalid_payload,
        message: `The webhook payload does not match the ${label} schema${location}`,
    });
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
const verifyWebhook = ({ payload, headers, secret, }) => {
    const id = readHeader(headers, "webhook-id");
    const timestamp = readHeader(headers, "webhook-timestamp");
    const signature = readHeader(headers, "webhook-signature");
    checkTimestamp(timestamp);
    const body = typeof payload === "string" ? payload : new TextDecoder().decode(payload);
    checkSignature(body, {
        "webhook-id": id,
        "webhook-timestamp": timestamp,
        "webhook-signature": signature,
    }, secret);
    const parsed = parseJson(body);
    validate(webhookValidators_js_1.validateEnvelope, parsed, "webhook envelope");
    const event = parsed;
    const validator = webhookValidators_js_1.eventValidators.get(event.type);
    if (validator === undefined) {
        return { known: false, event };
    }
    validate(validator, event, event.type);
    return { known: true, event: event };
};
exports.verifyWebhook = verifyWebhook;
