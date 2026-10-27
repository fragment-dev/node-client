import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { setupServer } from "msw/node";
import { http, graphql, HttpResponse, type JsonBodyType } from "msw";
import { GraphQLClient } from "graphql-request";
import { createFragmentClient } from "../src/client.js";
import {
  BadRequestError,
  FragmentError,
  InternalError,
} from "../src/errors.js";
import { DEFAULT_RETRY_CONFIG, type RetryConfig } from "../src/retryConfig.js";

const apiUrl = "https://fragment-api.example.com/graphql";
const fragmentApi = graphql.link(apiUrl);

export const handlers = [
  fragmentApi.mutation("storeSchema", () => {
    return HttpResponse.json({
      data: {
        storeSchema: {
          __typename: "BadRequestError",
          code: "BAD_REQUEST",
          message: "Received a bad request from the client",
          retryable: true,
        },
      },
    });
  }),
  fragmentApi.mutation("addLedgerEntry", () => {
    return HttpResponse.json({
      data: {
        addLedgerEntry: {
          __typename: "BadRequestError",
          code: "BAD_REQUEST",
          message: "Received a non-retryable bad request from the client",
          retryable: false,
        },
      },
    });
  }),
  http.post("https://fragment-auth.example.com/oauth2/token", async () => {
    return HttpResponse.json({
      access_token: "mocked-access-token",
      expires_in: 3600,
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

const makeClient = (retryConfig?: RetryConfig) =>
  createFragmentClient({
    params: {
      clientId: "test",
      clientSecret: "test",
      scope: "*",
      authUrl: "https://fragment-auth.example.com/oauth2/token",
      apiUrl,
    },
    retryConfig,
  });

const addLedgerEntryInput = {
  ik: "add-ledger-entry-ik",
  ledgerIk: "ledger-ik",
  type: "runtime-entry",
  parameters: {},
};

describe("Client retries", () => {
  it("handles BRE retryable errors according to the retry config provided", async () => {
    const onRetry = vi.fn();
    const client = makeClient({
      retries: 5,
      minTimeout: 10,
      maxTimeout: 100,
      onRetry,
    });

    try {
      await client.storeSchema({
        schema: {
          key: "test",
          chartOfAccounts: { accounts: [] },
          ledgerEntries: { types: [] },
        },
      });
    } catch (e) {}

    expect(onRetry).toHaveBeenCalledTimes(5);
  });

  it("skips retries if the BRE response has retryable set to false", async () => {
    const onRetry = vi.fn();
    const client = makeClient();

    try {
      await client.addLedgerEntry(addLedgerEntryInput);
    } catch (e) {}

    expect(onRetry).toHaveBeenCalledTimes(0);
  });

  it("raises a non-retryable internal error without falling through", async () => {
    // The mutation cases share a switch; a missing `break` would report this as
    // a BadRequestError instead.
    server.use(
      fragmentApi.mutation("addLedgerEntry", () =>
        HttpResponse.json({
          data: {
            addLedgerEntry: {
              __typename: "InternalError",
              code: "INTERNAL_ERROR",
              message: "Something went wrong on our end",
              retryable: false,
            },
          },
        }),
      ),
    );

    const onRetry = vi.fn();
    const client = makeClient({
      retries: 2,
      minTimeout: 1,
      maxTimeout: 1,
      onRetry,
    });

    let thrown: unknown;
    try {
      await client.addLedgerEntry(addLedgerEntryInput);
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(InternalError);
    expect(thrown).not.toBeInstanceOf(BadRequestError);
    expect((thrown as InternalError).code).toEqual("internal_error");
    expect(onRetry).not.toHaveBeenCalled();
  });
});

describe("HTTP error retries", () => {
  const defaultAttempts = 1 + (DEFAULT_RETRY_CONFIG.retries ?? 0);

  const countAttempts = (attempts: () => void) =>
    http.post(apiUrl, () => {
      attempts();
    });

  const respondWithStatus = (status: number, body: JsonBodyType) =>
    http.post(apiUrl, () => HttpResponse.json(body, { status }));

  const serviceUnavailable = () =>
    respondWithStatus(503, { message: "Service Unavailable" });

  const serviceUnavailableTwice = () => {
    let failures = 0;
    return http.post(apiUrl, () => {
      failures += 1;
      return failures <= 2
        ? HttpResponse.json({ message: "Service Unavailable" }, { status: 503 })
        : undefined;
    });
  };

  const unknownField = () =>
    respondWithStatus(400, { errors: [{ message: "Unknown field" }] });

  it("retries a query that fails with a 5xx and surfaces the status once exhausted", async () => {
    const attempts = vi.fn();
    server.use(countAttempts(attempts), serviceUnavailable());

    const promise = makeClient().getLedger({ ik: "ledger-ik" });

    await expect(promise).rejects.toThrow(FragmentError);
    await expect(promise).rejects.toHaveProperty("status", 503);
    expect(attempts).toHaveBeenCalledTimes(defaultAttempts);
  });

  it("returns the data once a retried query succeeds", async () => {
    const ledger = { id: "ledger-id", ik: "ledger-ik", name: "Ledger" };
    const attempts = vi.fn();
    server.use(
      countAttempts(attempts),
      serviceUnavailableTwice(),
      fragmentApi.query("getLedger", () =>
        HttpResponse.json({ data: { ledger } }),
      ),
    );

    const result = await makeClient().getLedger({ ik: "ledger-ik" });

    expect(result.ledger).toEqual(ledger);
    expect(attempts).toHaveBeenCalledTimes(3);
  });

  it("retries a query that fails at the network layer", async () => {
    const attempts = vi.fn();
    server.use(
      countAttempts(attempts),
      http.post(apiUrl, () => HttpResponse.error()),
    );

    const promise = makeClient().getLedger({ ik: "ledger-ik" });

    await expect(promise).rejects.toThrow(Error);
    await expect(promise).rejects.not.toBeInstanceOf(FragmentError);
    expect(attempts).toHaveBeenCalledTimes(defaultAttempts);
  });

  it("does not retry a query that fails with a non-network error", async () => {
    const abortError = Object.assign(new Error("aborted"), {
      name: "AbortError",
    });
    const request = vi
      .spyOn(GraphQLClient.prototype, "request")
      .mockRejectedValue(abortError);

    const promise = makeClient().getLedger({ ik: "ledger-ik" });

    await expect(promise).rejects.toBe(abortError);
    expect(request).toHaveBeenCalledTimes(1);
  });

  it("retries a query that is rate limited", async () => {
    const attempts = vi.fn();
    server.use(
      countAttempts(attempts),
      respondWithStatus(429, { message: "Too Many Requests" }),
    );

    const promise = makeClient().getLedger({ ik: "ledger-ik" });

    await expect(promise).rejects.toThrow(FragmentError);
    await expect(promise).rejects.toHaveProperty("status", 429);
    expect(attempts).toHaveBeenCalledTimes(defaultAttempts);
  });

  it("does not retry a query that fails with a 4xx", async () => {
    const attempts = vi.fn();
    server.use(countAttempts(attempts), unknownField());

    const promise = makeClient().getLedger({ ik: "ledger-ik" });

    await expect(promise).rejects.toHaveProperty("status", 400);
    await expect(promise).rejects.toHaveProperty("message", "Unknown field");
    expect(attempts).toHaveBeenCalledTimes(1);
  });

  it("retries a mutation that fails with a 5xx", async () => {
    const attempts = vi.fn();
    server.use(countAttempts(attempts), serviceUnavailable());

    const promise = makeClient().addLedgerEntry(addLedgerEntryInput);

    await expect(promise).rejects.toThrow(FragmentError);
    await expect(promise).rejects.toHaveProperty("status", 503);
    expect(attempts).toHaveBeenCalledTimes(defaultAttempts);
  });

  it("returns the data once a retried mutation succeeds", async () => {
    const addLedgerEntry = {
      __typename: "AddLedgerEntryResult",
      isIkReplay: false,
      entry: {
        type: "runtime-entry",
        id: "entry-id",
        ik: "add-ledger-entry-ik",
        posted: "2024-01-01T00:00:00.000Z",
      },
    };
    const attempts = vi.fn();
    server.use(
      countAttempts(attempts),
      serviceUnavailableTwice(),
      fragmentApi.mutation("addLedgerEntry", () =>
        HttpResponse.json({ data: { addLedgerEntry } }),
      ),
    );

    const result = await makeClient().addLedgerEntry(addLedgerEntryInput);

    expect(result.addLedgerEntry).toEqual(addLedgerEntry);
    expect(attempts).toHaveBeenCalledTimes(3);
  });

  it("does not retry a mutation that fails with a 4xx", async () => {
    const attempts = vi.fn();
    server.use(countAttempts(attempts), unknownField());

    const promise = makeClient().addLedgerEntry(addLedgerEntryInput);

    await expect(promise).rejects.toHaveProperty("status", 400);
    expect(attempts).toHaveBeenCalledTimes(1);
  });
});
