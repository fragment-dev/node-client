import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Webhook } from "standardwebhooks";
import { describe, expect, expectTypeOf, it, vi } from "vitest";

import type {
  PaymentSettledEvent,
  UnknownWebhookEvent,
} from "../generated/webhooks.js";
import {
  verifyWebhook,
  WebhookVerificationError,
  WebhookVerificationErrorCode,
  type WebhookHeaders,
} from "../src/webhooks.js";

const SECRET = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";
const FIXTURES = fileURLToPath(
  new URL("./fixtures/webhooks/", import.meta.url),
);

const fixtureNames = readdirSync(FIXTURES).filter((name) =>
  name.endsWith(".json"),
);
const readFixture = (name: string): string =>
  readFileSync(`${FIXTURES}${name}`, "utf-8");
const settledBody = readFixture("PaymentSettledEvent.json");

const signedHeaders = (
  payload: string,
  { secret = SECRET, at = new Date() }: { secret?: string; at?: Date } = {},
): Record<string, string> => ({
  "webhook-id": "msg_test",
  "webhook-timestamp": String(Math.floor(at.getTime() / 1000)),
  "webhook-signature": new Webhook(secret).sign("msg_test", at, payload),
});

const signed = (
  payload: string,
  headers: WebhookHeaders = signedHeaders(payload),
) => ({
  payload,
  headers,
  secret: SECRET,
});

const secondsAgo = (seconds: number): Date =>
  new Date(Date.now() - seconds * 1000);

const thrownBy = (fn: () => unknown): WebhookVerificationError => {
  const spy = vi.fn(fn);
  expect(spy).toThrow(WebhookVerificationError);
  const [result] = spy.mock.results;
  expect(result?.type).toBe("throw");
  return result?.value as WebhookVerificationError;
};

const without = (body: string, path: string[]): string => {
  const parsed: Record<string, unknown> = JSON.parse(body);
  const [key, ...rest] = path;
  if (key === undefined) {
    return body;
  }
  if (rest.length === 0) {
    const { [key]: removed, ...remaining } = parsed;
    void removed;
    return JSON.stringify(remaining);
  }
  return JSON.stringify({
    ...parsed,
    [key]: JSON.parse(without(JSON.stringify(parsed[key]), rest)),
  });
};

describe("verifyWebhook", () => {
  it.each(fixtureNames.filter((name) => name !== "UnknownEvent.json"))(
    "returns the known event in %s",
    (name) => {
      const body = readFixture(name);
      const verified = verifyWebhook(signed(body));
      expect(verified.known).toBe(true);
      expect(verified.event.type).toBe(JSON.parse(body).type);
      expect(verified.event).toEqual(JSON.parse(body));
    },
  );

  it("returns an event of an unknown type with known: false", () => {
    const body = readFixture("UnknownEvent.json");
    const verified = verifyWebhook(signed(body));
    expect(verified).toEqual({ known: false, event: JSON.parse(body) });
  });

  it.each([
    {
      name: "the webhook-id header is missing",
      code: WebhookVerificationErrorCode.missing_headers,
      args: () => {
        const { "webhook-id": removed, ...headers } =
          signedHeaders(settledBody);
        void removed;
        return signed(settledBody, headers);
      },
    },
    {
      name: "the webhook-timestamp header is missing",
      code: WebhookVerificationErrorCode.missing_headers,
      args: () => {
        const { "webhook-timestamp": removed, ...headers } =
          signedHeaders(settledBody);
        void removed;
        return signed(settledBody, headers);
      },
    },
    {
      name: "the webhook-signature header is missing",
      code: WebhookVerificationErrorCode.missing_headers,
      args: () => {
        const { "webhook-signature": removed, ...headers } =
          signedHeaders(settledBody);
        void removed;
        return signed(settledBody, headers);
      },
    },
    {
      name: "the body was signed with another secret",
      code: WebhookVerificationErrorCode.invalid_signature,
      args: () =>
        signed(
          settledBody,
          signedHeaders(settledBody, {
            secret: "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD",
          }),
        ),
    },
    {
      name: "the body was altered after signing",
      code: WebhookVerificationErrorCode.invalid_signature,
      args: () => ({
        ...signed(settledBody),
        payload: settledBody.replace("invoice-one", "invoice-two"),
      }),
    },
    {
      name: "the timestamp is more than five minutes in the past",
      code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
      args: () =>
        signed(
          settledBody,
          signedHeaders(settledBody, { at: secondsAgo(301) }),
        ),
    },
    {
      name: "the timestamp is more than five minutes in the future",
      code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
      args: () =>
        signed(
          settledBody,
          signedHeaders(settledBody, { at: secondsAgo(-301) }),
        ),
    },
    {
      name: "the timestamp is not an integer",
      code: WebhookVerificationErrorCode.timestamp_out_of_tolerance,
      args: () =>
        signed(settledBody, {
          ...signedHeaders(settledBody),
          "webhook-timestamp": "soon",
        }),
    },
    {
      name: "the signed body is not JSON",
      code: WebhookVerificationErrorCode.invalid_json,
      args: () => signed("not json"),
    },
    {
      name: "the signed envelope has no id",
      code: WebhookVerificationErrorCode.invalid_payload,
      args: () => signed(without(settledBody, ["id"])),
    },
    {
      name: "a known event is missing a required field",
      code: WebhookVerificationErrorCode.invalid_payload,
      args: () =>
        signed(without(settledBody, ["data", "event", "ledgerEntry"])),
    },
  ])("throws $code when $name", ({ code, args }) => {
    const error = thrownBy(() => verifyWebhook(args()));
    expect(error.code).toBe(code);
    expect(error).toBeInstanceOf(WebhookVerificationError);
  });

  it("names the failing path when a known event does not match its schema", () => {
    const error = thrownBy(() =>
      verifyWebhook(
        signed(without(settledBody, ["data", "event", "ledgerEntry"])),
      ),
    );
    expect(error.message).toContain("payment.settled");
    expect(error.message).toContain("#/data/event/ledgerEntry");
  });

  it("passes extra keys through", () => {
    const example = JSON.parse(settledBody);
    const body = JSON.stringify({
      ...example,
      extra: "top-level",
      data: {
        ...example.data,
        event: { ...example.data.event, extra: "nested" },
      },
    });
    const verified = verifyWebhook(signed(body));
    expect(verified.known).toBe(true);
    expect(verified.event).toEqual(JSON.parse(body));
    expect(verified.event).toMatchObject({
      extra: "top-level",
      data: { event: { extra: "nested" } },
    });
  });

  it("accepts a Uint8Array payload", () => {
    const verified = verifyWebhook({
      ...signed(settledBody),
      payload: new TextEncoder().encode(settledBody),
    });
    expect(verified.event).toEqual(JSON.parse(settledBody));
  });

  it("accepts Fetch Headers", () => {
    const headers: WebhookHeaders = new Headers(signedHeaders(settledBody));
    const verified = verifyWebhook(signed(settledBody, headers));
    expect(verified.event).toEqual(JSON.parse(settledBody));
  });

  it("reads header names case-insensitively and takes the first of a list", () => {
    const { "webhook-id": id, ...headers } = signedHeaders(settledBody);
    const verified = verifyWebhook(
      signed(settledBody, { ...headers, "Webhook-Id": [id, "ignored"] }),
    );
    expect(verified.known).toBe(true);
  });

  it("accepts the secret without its whsec_ prefix", () => {
    const verified = verifyWebhook({
      ...signed(settledBody),
      secret: SECRET.replace("whsec_", ""),
    });
    expect(verified.known).toBe(true);
  });

  it("narrows the event by its type", () => {
    const verified = verifyWebhook(signed(settledBody));
    if (verified.known && verified.event.type === "payment.settled") {
      expectTypeOf(verified.event).toEqualTypeOf<PaymentSettledEvent>();
    }
    expectTypeOf<UnknownWebhookEvent["type"]>().toEqualTypeOf<string>();
  });
});
