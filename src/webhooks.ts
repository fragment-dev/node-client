import { Webhook } from "standardwebhooks";

import type {
  UnknownWebhookEvent,
  WebhookEvent,
} from "../generated/webhooks.js";
import {
  eventValidators,
  validateEnvelope,
} from "../generated/webhookValidators.js";
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

const TIMESTAMP_TOLERANCE_IN_SECONDS = 5 * 60;

export enum WebhookVerificationErrorCode {
  missing_headers = "missing_headers",
  invalid_signature = "invalid_signature",
  timestamp_out_of_tolerance = "timestamp_out_of_tolerance",
  invalid_json = "invalid_json",
  invalid_payload = "invalid_payload",
}

export type WebhookVerificationErrorParams = {
  code: WebhookVerificationErrorCode;
  message: string;
  cause?: unknown;
};

/** Thrown by `verifyWebhook` when the request is not a webhook Fragment sent. */
export class WebhookVerificationError extends FragmentError {
  readonly code: WebhookVerificationErrorCode;

  constructor({ code, message, cause }: WebhookVerificationErrorParams) {
    super({ code, message, cause: cause instanceof Error ? cause : undefined });
    this.code = code;
  }
}

/**
 * The headers of the incoming request: a Fetch-style `Headers` with `get`, or
 * a plain record such as Node's `IncomingHttpHeaders`.
 */
export type WebhookHeaders =
  | Record<string, string | string[] | undefined>
  | { get(name: string): string | null };

const hasHeaderGetter = (
  headers: WebhookHeaders,
): headers is { get(name: string): string | null } =>
  typeof headers.get === "function";

export type VerifyWebhookArgs = {
  /** The raw request body, before any JSON parsing. */
  payload: string | Uint8Array;
  headers: WebhookHeaders;
  /** The subscription's signing secret, with or without the `whsec_` prefix. */
  secret: string;
};

export type VerifiedWebhook =
  | { known: true; event: WebhookEvent }
  | { known: false; event: UnknownWebhookEvent };

const readHeader = (headers: WebhookHeaders, name: string): string => {
  const value = hasHeaderGetter(headers)
    ? headers.get(name)
    : headers[
        Object.keys(headers).find((key) => key.toLowerCase() === name) ?? name
      ];
  const header = Array.isArray(value) ? value[0] : value;
  if (!header) {
    throw new WebhookVerificationError({
      code: WebhookVerificationErrorCode.missing_headers,
      message: `Missing the ${name} header`,
    });
  }
  return header;
};

const checkTimestamp = (timestamp: string): void => {
  if (
    !/^\d+$/.test(timestamp) ||
    Math.abs(Date.now() / 1000 - Number(timestamp)) >
      TIMESTAMP_TOLERANCE_IN_SECONDS
  ) {
    throw new WebhookVerificationError({
      code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
      message: `The webhook-timestamp header (${timestamp}) is not within ${TIMESTAMP_TOLERANCE_IN_SECONDS} seconds of now`,
    });
  }
};

const checkSignature = (
  payload: string | Buffer,
  headers: Record<
    "webhook-id" | "webhook-timestamp" | "webhook-signature",
    string
  >,
  secret: string,
): void => {
  try {
    new Webhook(secret).verify(payload, headers, { jsonParse: false });
  } catch (cause) {
    throw new WebhookVerificationError({
      code: WebhookVerificationErrorCode.invalid_signature,
      message: "The webhook signature does not match the payload",
      cause,
    });
  }
};

const parseJson = (payload: string): unknown => {
  try {
    return JSON.parse(payload);
  } catch (cause) {
    throw new WebhookVerificationError({
      code: WebhookVerificationErrorCode.invalid_json,
      message: "The webhook payload is not valid JSON",
      cause,
    });
  }
};

const validate = (validator: Validator, body: unknown, label: string): void => {
  if (validator(body)) {
    return;
  }
  const [error] = validator.errors ?? [];
  const location =
    error === undefined
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
export const verifyWebhook = ({
  payload,
  headers,
  secret,
}: VerifyWebhookArgs): VerifiedWebhook => {
  const id = readHeader(headers, "webhook-id");
  const timestamp = readHeader(headers, "webhook-timestamp");
  const signature = readHeader(headers, "webhook-signature");
  checkTimestamp(timestamp);

  // The signature covers the exact bytes; decoding first would drop a leading BOM.
  const signedPayload =
    typeof payload === "string"
      ? payload
      : Buffer.from(payload.buffer, payload.byteOffset, payload.byteLength);
  checkSignature(
    signedPayload,
    {
      "webhook-id": id,
      "webhook-timestamp": timestamp,
      "webhook-signature": signature,
    },
    secret,
  );

  const body =
    typeof payload === "string" ? payload : new TextDecoder().decode(payload);
  const parsed = parseJson(body);
  validate(validateEnvelope, parsed, "webhook envelope");
  const event = parsed as UnknownWebhookEvent;
  const validator = eventValidators.get(event.type);
  if (validator === undefined) {
    return { known: false, event };
  }
  validate(validator, event, event.type);
  return { known: true, event: event as WebhookEvent };
};
