import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { setupServer } from "msw/node";
import { http, graphql, HttpResponse } from "msw";

import { createFragmentClient } from "../src/client.js";
import { AddLedgerEntriesError } from "../src/errors.js";
import {
  getSdk,
  paymentProcessingV1,
  typedLedgerEntryBuilders,
  userFundsAccountV1,
  userFundsAccountV2,
} from "./fixtures/generated-test-client.js";
// This entry type's operation binds tags, groups and conditions, so its payload
// is the one that can exercise them.
import { disputePayoutInitiateV1 } from "./fixtures/generated-template-runtime-args-client.js";
import {
  allOptionalV2,
  eitherLedgerKeyV1,
  fixedValuesV1,
  runtimeLinesV1,
  untypedParametersV1,
} from "./fixtures/generated-edge-case-client.js";

const API_URL = "https://fragment-api.example.com/graphql";
const fragmentApi = graphql.link(API_URL);

/** An entry as it appeared in the request body. */
type PostedEntry = {
  ik: string;
  entry: {
    ledger?: { ik: string };
    type?: string;
    typeVersion?: number;
    posted?: string;
    description?: string | null;
    parameters?: Record<string, unknown>;
    tags?: unknown[];
    groups?: unknown[];
    conditions?: unknown[];
    lines?: unknown[];
  };
};

type Recorded = { body: string; variables: { entries: PostedEntry[] } };

let recorded: Recorded | undefined;
let respondWith: Record<string, unknown> = {
  __typename: "AddLedgerEntriesResult",
  results: [],
};

const server = setupServer(
  fragmentApi.mutation("addLedgerEntries", async ({ variables, request }) => {
    recorded = {
      body: await request.clone().text(),
      variables: variables as Recorded["variables"],
    };
    return HttpResponse.json({ data: { addLedgerEntries: respondWith } });
  }),
  http.post("https://fragment-auth.example.com/oauth2/token", () =>
    HttpResponse.json({ access_token: "mocked-access-token", expires_in: 3600 }),
  ),
);

const client = createFragmentClient({
  params: {
    clientId: "test",
    clientSecret: "test",
    scope: "*",
    authUrl: "https://fragment-auth.example.com/oauth2/token",
    apiUrl: API_URL,
  },
  getSdk,
  retryConfig: { retries: 0, minTimeout: 1, maxTimeout: 1 },
});

/** The `entries` the SDK actually put on the wire. */
const postedEntries = (): PostedEntry[] => recorded?.variables.entries ?? [];

beforeAll(() => server.listen());
afterEach(() => {
  recorded = undefined;
  respondWith = { __typename: "AddLedgerEntriesResult", results: [] };
});
afterAll(() => server.close());

describe("wire contract", () => {
  it("nests a typed payload as an AddLedgerEntryInput", async () => {
    await client.addLedgerEntries({
      entries: [
        disputePayoutInitiateV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          posted: "2024-01-01T00:00:00Z",
          tags: [{ key: "channel", value: "web" }],
          groups: [{ key: "batch", value: "1" }],
          conditions: [
            {
              account: { path: "asset-root" },
              precondition: { ownBalance: { gte: "0" } },
            },
          ],
          parameters: {
            user_id: "user-1",
            disputes_id: "dispute-1",
            amount: "500",
            currency: "USD",
            payout_id: "payout-1",
            order_id: "order-1",
          },
        }),
      ],
    });

    expect(postedEntries()).toEqual([
      {
        ik: "entry-ik",
        entry: {
          ledger: { ik: "ledger-ik" },
          type: "dispute_payout_initiate",
          typeVersion: 1,
          posted: "2024-01-01T00:00:00Z",
          parameters: {
            user_id: "user-1",
            disputes_id: "dispute-1",
            amount: "500",
            currency: "USD",
            payout_id: "payout-1",
            order_id: "order-1",
          },
          tags: [{ key: "channel", value: "web" }],
          groups: [{ key: "batch", value: "1" }],
          conditions: [
            { account: { path: "asset-root" }, precondition: { ownBalance: { gte: "0" } } },
          ],
        },
      },
    ]);
  });

  it("omits fields the caller did not set instead of sending null", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          // `posted` is the only other field this entry type's operation binds,
          // and it is unset.
          parameters: { amount: "200" },
        }),
      ],
    });

    const [{ entry }] = postedEntries();
    expect(Object.keys(entry).sort()).toEqual([
      "ledger",
      "parameters",
      "type",
      "typeVersion",
    ]);
    // Explicitly passing undefined is the same as not passing the field.
    expect(recorded?.body).not.toContain("null");
  });

  it("treats an explicit undefined the same as an unset field", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          posted: undefined,
          parameters: { amount: "200" },
        }),
      ],
    });

    const [{ entry }] = postedEntries();
    expect("posted" in entry).toBe(false);
  });

  it("normalises an unpinned typeVersion to 1 on the wire", async () => {
    // `payment_processing` pins no typeVersion in its source operation.
    await client.addLedgerEntries({
      entries: [
        paymentProcessingV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          parameters: { amount: "400" },
        }),
      ],
    });

    expect(postedEntries()[0].entry.typeVersion).toEqual(1);
  });

  it("never puts lines on a typed entry", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          parameters: { amount: "200" },
        }),
      ],
    });

    expect("lines" in postedEntries()[0].entry).toBe(false);
  });

  it("preserves entry order and parameter order", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV2({
          ik: "second-shaped-first",
          ledgerIk: "ledger-ik",
          // Given out of source order by the caller...
          parameters: { feeAmount: "10", amount: "200" },
        }),
        userFundsAccountV1({
          ik: "then-this-one",
          ledgerIk: "ledger-ik",
          parameters: { amount: "1" },
        }),
      ],
    });

    const entries = postedEntries();
    expect(entries.map((entry) => entry.ik)).toEqual([
      "second-shaped-first",
      "then-this-one",
    ]);
    // ...and serialized in the order the source operation declares them.
    expect(Object.keys(entries[0].entry.parameters ?? {})).toEqual([
      "amount",
      "feeAmount",
    ]);
  });

  it("sends parameter names and non-ASCII values verbatim", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          parameters: { amount: "café — 元气 🎉" },
        }),
      ],
    });

    expect(postedEntries()[0].entry.parameters).toEqual({
      amount: "café — 元气 🎉",
    });
  });

  it("builds a payload looked up by entry type and version at runtime", async () => {
    // The registry is keyed by entry type and version, not by generated name.
    const build = typedLedgerEntryBuilders["fundingSettlement@1"];
    await client.addLedgerEntries({
      entries: [
        build({ ik: "entry-ik", ledgerIk: "ledger-ik", parameters: { amount: "5" } }),
      ],
    });

    expect(postedEntries()[0].entry.parameters).toEqual({ amount: "5" });
  });

  it("mixes typed payloads with raw untyped inputs in one batch", async () => {
    await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "typed",
          ledgerIk: "ledger-ik",
          parameters: { amount: "200" },
        }),
        {
          ik: "raw",
          entry: {
            ledger: { ik: "ledger-ik" },
            type: "fundingSettlement",
            parameters: { amount: "300" },
            // A raw input is passed through as written, nulls included.
            description: null,
          },
        },
      ],
    });

    const entries = postedEntries();
    expect(entries.map((entry) => entry.ik)).toEqual(["typed", "raw"]);
    expect(entries[1].entry.description).toBeNull();
  });
});

describe("batch semantics", () => {
  it("requires narrowing before reading results", async () => {
    respondWith = {
      __typename: "AddLedgerEntriesResult",
      results: [
        {
          __typename: "AddLedgerEntryResult",
          isIkReplay: false,
          entry: {
            id: "entry-id",
            ik: "entry-ik",
            type: "user-funds-account",
            posted: "2024-01-01T00:00:00Z",
            created: "2024-01-01T00:00:00Z",
          },
          lines: [],
        },
      ],
    };

    const response = await client.addLedgerEntries({
      entries: [
        userFundsAccountV1({
          ik: "entry-ik",
          ledgerIk: "ledger-ik",
          parameters: { amount: "200" },
        }),
      ],
    });

    // @ts-expect-error results is only readable once the union is narrowed.
    expect(response.addLedgerEntries.results).toBeDefined();

    if (response.addLedgerEntries.__typename === "AddLedgerEntriesResult") {
      expect(response.addLedgerEntries.results[0].isIkReplay).toBe(false);
      expect(response.addLedgerEntries.results[0].entry.ik).toEqual("entry-ik");
    }
  });

  it("surfaces the per-entry errors of a failed batch", async () => {
    respondWith = {
      __typename: "AddLedgerEntriesError",
      code: "ledger_entry_batch_operation_failed",
      message: "One or more entries could not be committed",
      retryable: false,
      errors: [
        {
          __typename: "AddLedgerEntryError",
          ik: "second",
          code: "ledger_entry_too_many_lines",
          message: "Too many lines",
          retryable: false,
        },
      ],
    };

    const onRetry = vi.fn();
    const failing = createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl: API_URL,
      },
      retryConfig: { retries: 3, minTimeout: 1, maxTimeout: 1, onRetry },
    });

    let error: AddLedgerEntriesError | undefined;
    try {
      await failing.addLedgerEntries({
        entries: [
          userFundsAccountV1({
            ik: "first",
            ledgerIk: "ledger-ik",
            parameters: { amount: "200" },
          }),
        ],
      });
    } catch (thrown) {
      error = thrown as AddLedgerEntriesError;
    }

    expect(error).toBeInstanceOf(AddLedgerEntriesError);
    expect(error?.code).toEqual("ledger_entry_batch_operation_failed");
    expect(error?.errors).toEqual([
      {
        __typename: "AddLedgerEntryError",
        ik: "second",
        code: "ledger_entry_too_many_lines",
        message: "Too many lines",
        retryable: false,
      },
    ]);
    // A non-retryable batch error is not retried.
    expect(onRetry).not.toHaveBeenCalled();
  });

  it("retries a retryable batch error", async () => {
    respondWith = {
      __typename: "AddLedgerEntriesError",
      code: "ledger_entry_batch_operation_failed",
      message: "Try again",
      retryable: true,
      errors: [],
    };

    const onRetry = vi.fn();
    const retrying = createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl: API_URL,
      },
      retryConfig: { retries: 2, minTimeout: 1, maxTimeout: 1, onRetry },
    });

    await expect(
      retrying.addLedgerEntries({
        entries: [
          userFundsAccountV1({
            ik: "first",
            ledgerIk: "ledger-ik",
            parameters: { amount: "200" },
          }),
        ],
      }),
    ).rejects.toBeInstanceOf(AddLedgerEntriesError);
    expect(onRetry).toHaveBeenCalledTimes(2);
  });
});

describe("payload shapes the Fragment CLI does not generate", () => {
  // These come from tests/fixtures/edge-case-queries.graphql, hand-written to
  // cover operation shapes the CLI has no reason to emit but a caller may write.

  it("carries caller-supplied lines for an entry type the Schema does not fix", () => {
    const built = runtimeLinesV1({
      ik: "entry-ik",
      ledgerIk: "ledger-ik",
      lines: [
        { account: { path: "asset-root" }, amount: "100", key: "asset-line" },
        { account: { path: "liability-root" }, amount: "100", key: "liability-line" },
      ],
    });

    expect(built.entry.lines).toHaveLength(2);
    // `description` is bound by the operation but unset, so it stays off the wire.
    expect("description" in built.entry).toBe(false);
    expect("parameters" in built.entry).toBe(false);
  });

  it("passes an untyped parameters map straight through", () => {
    const built = untypedParametersV1({
      ik: "entry-ik",
      ledgerIk: "ledger-ik",
      parameters: { anything: "goes", nested: { deep: true } },
    });

    expect(built.entry.parameters).toEqual({
      anything: "goes",
      nested: { deep: true },
    });
  });

  it("omits an all-optional parameters object the caller left empty", () => {
    const empty = allOptionalV2({ ik: "entry-ik", ledgerIk: "ledger-ik" });
    expect("parameters" in empty.entry).toBe(false);
    // The version still reaches the wire.
    expect(empty.entry.typeVersion).toEqual(2);

    const partial = allOptionalV2({
      ik: "entry-ik",
      ledgerIk: "ledger-ik",
      parameters: { note: "just this one" },
    });
    expect(partial.entry.parameters).toEqual({ note: "just this one" });
  });

  it("merges two payload fields that write one match object", () => {
    // `ledger: { id: $ledgerId, ik: $ledgerIk }` is two payload fields writing
    // one entry field, so setting both has to keep both.
    const both = eitherLedgerKeyV1({
      ik: "entry-ik",
      ledgerId: "ledger-id",
      ledgerIk: "ledger-ik",
      parameters: { amount: "100" },
    });
    expect(both.entry.ledger).toEqual({ id: "ledger-id", ik: "ledger-ik" });

    const byId = eitherLedgerKeyV1({
      ik: "entry-ik",
      ledgerId: "ledger-id",
      parameters: { amount: "100" },
    });
    expect(byId.entry.ledger).toEqual({ id: "ledger-id" });

    const neither = eitherLedgerKeyV1({
      ik: "entry-ik",
      parameters: { amount: "100" },
    });
    expect("ledger" in neither.entry).toBe(false);
  });

  it("sends an edge-case payload through a batch alongside a raw input", async () => {
    await client.addLedgerEntries({
      entries: [
        runtimeLinesV1({
          ik: "typed",
          ledgerIk: "ledger-ik",
          lines: [{ account: { path: "asset-root" }, amount: "100" }],
        }),
        {
          ik: "raw",
          entry: {
            ledger: { ik: "ledger-ik" },
            lines: [{ account: { path: "asset-root" }, amount: "100" }],
          },
        },
      ],
    });

    expect(postedEntries().map((entry) => entry.ik)).toEqual(["typed", "raw"]);
    expect(recorded?.body).not.toContain("null");
  });
});

describe("values the operation fixes", () => {
  it("posts them without offering them to the caller", () => {
    const built = fixedValuesV1({
      ik: "entry-ik",
      ledgerIk: "ledger-ik",
      parameters: { amount: "100" },
    });

    // The operation fixed these, so the batched entry carries them exactly as
    // the single-entry mutation would.
    expect(built.entry.description).toEqual("posted by the nightly sweep");
    expect(built.entry.tags).toEqual([{ key: "source", value: "sweep" }]);
    expect(built.entry.parameters).toEqual({ amount: "100", currency: "USD" });
  });

  it("keeps a fixed parameter in the order the operation declares it", () => {
    const built = fixedValuesV1({
      ik: "entry-ik",
      ledgerIk: "ledger-ik",
      parameters: { amount: "100" },
    });

    expect(Object.keys(built.entry.parameters ?? {})).toEqual([
      "amount",
      "currency",
    ]);
  });
});
