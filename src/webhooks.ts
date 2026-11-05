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
import type { Validator } from "./webhookTypes.js";

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
  cause?: Error;
};

/** Thrown by `verifyWebhook` when the request is not a webhook Fragment sent. */
export class WebhookVerificationError extends FragmentError {
  readonly code: WebhookVerificationErrorCode;

  constructor({ code, message, cause }: WebhookVerificationErrorParams) {
    super({ code, message, cause });
    this.code = code;
  }
}

/**
 * The headers of the incoming request: a Fetch `Headers`, or a plain record
 * such as Node's `IncomingHttpHeaders`.
 */
export type WebhookHeaders =
  | Record<string, string | string[] | undefined>
  | Headers;

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
  const value =
    headers instanceof Headers
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
  const seconds = /^\d+$/.test(timestamp) ? Number(timestamp) : NaN;
  const skew = Math.abs(Date.now() / 1000 - seconds);
  if (!(skew <= TIMESTAMP_TOLERANCE_IN_SECONDS)) {
    throw new WebhookVerificationError({
      code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
      message: `The webhook-timestamp header (${timestamp}) is not within ${TIMESTAMP_TOLERANCE_IN_SECONDS} seconds of now`,
    });
  }
};

const checkSignature = (
  payload: string,
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
      cause: cause instanceof Error ? cause : undefined,
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
      cause: cause instanceof Error ? cause : undefined,
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

  const body =
    typeof payload === "string" ? payload : new TextDecoder().decode(payload);
  checkSignature(
    body,
    {
      "webhook-id": id,
      "webhook-timestamp": timestamp,
      "webhook-signature": signature,
    },
    secret,
  );

  const parsed = parseJson(body);
  validate(validateEnvelope, parsed, "webhook envelope");
  const event = parsed as UnknownWebhookEvent;
  const validator = eventValidators[event.type];
  if (validator === undefined) {
    return { known: false, event };
  }
  validate(validator, event, event.type);
  return { known: true, event: event as WebhookEvent };
};
