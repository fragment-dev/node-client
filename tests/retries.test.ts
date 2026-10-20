import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { setupServer } from "msw/node";
import { http, graphql, HttpResponse, type JsonBodyType } from "msw";
import { createFragmentClient } from "../src/client.js";
import {
  BadRequestError,
  FragmentError,
  InternalError,
} from "../src/errors.js";

const fragmentApi = graphql.link(`https://fragment-api.example.com/graphql`);

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
});

describe("Client retries", () => {
  it("handles BRE retryable errors according to the retry config provided", async () => {
    const onRetry = vi.fn();
    const client = createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl: "https://fragment-api.example.com/graphql",
      },
      retryConfig: {
        retries: 5,
        minTimeout: 10,
        maxTimeout: 100,
        onRetry,
      },
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
    const client = createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl: "https://fragment-api.example.com/graphql",
      },
    });

    try {
      await client.addLedgerEntry({
        ik: "add-ledger-entry-ik",
        ledgerIk: "ledger-ik",
        type: "runtime-entry",
        parameters: {},
      });
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
    const client = createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl: "https://fragment-api.example.com/graphql",
      },
      retryConfig: { retries: 2, minTimeout: 1, maxTimeout: 1, onRetry },
    });

    let thrown: unknown;
    try {
      await client.addLedgerEntry({
        ik: "add-ledger-entry-ik",
        ledgerIk: "ledger-ik",
        type: "runtime-entry",
        parameters: {},
      });
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
  const apiUrl = "https://fragment-api.example.com/graphql";
  const makeClient = (onRetry: () => void) =>
    createFragmentClient({
      params: {
        clientId: "test",
        clientSecret: "test",
        scope: "*",
        authUrl: "https://fragment-auth.example.com/oauth2/token",
        apiUrl,
      },
      retryConfig: { retries: 3, minTimeout: 1, maxTimeout: 1, onRetry },
    });

  const respondWithStatus = (status: number, body: JsonBodyType) =>
    http.post(apiUrl, () => HttpResponse.json(body, { status }));

  const serviceUnavailable = () =>
    respondWithStatus(503, { message: "Service Unavailable" });

  const unknownField = () =>
    respondWithStatus(400, { errors: [{ message: "Unknown field" }] });

  const addLedgerEntryInput = {
    ik: "add-ledger-entry-ik",
    ledgerIk: "ledger-ik",
    type: "runtime-entry",
    parameters: {},
  };

  it("retries a query that fails with a 5xx and surfaces the status once exhausted", async () => {
    server.use(serviceUnavailable());
    const onRetry = vi.fn();

    const error = await makeClient(onRetry)
      .getLedger({ ik: "ledger-ik" })
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(FragmentError);
    expect((error as FragmentError).status).toEqual(503);
    expect(onRetry).toHaveBeenCalledTimes(3);
  });

  it("returns the data once a retried query succeeds", async () => {
    const ledger = { id: "ledger-id", ik: "ledger-ik", name: "Ledger" };
    let attempts = 0;
    server.use(
      http.post(apiUrl, () => {
        attempts += 1;
        return attempts <= 2
          ? HttpResponse.json(
              { message: "Service Unavailable" },
              { status: 503 },
            )
          : undefined;
      }),
      fragmentApi.query("getLedger", () =>
        HttpResponse.json({ data: { ledger } }),
      ),
    );
    const onRetry = vi.fn();

    const result = await makeClient(onRetry).getLedger({ ik: "ledger-ik" });

    expect(result.ledger).toEqual(ledger);
    expect(onRetry).toHaveBeenCalledTimes(2);
  });

  it("retries a query that is rate limited", async () => {
    server.use(respondWithStatus(429, { message: "Too Many Requests" }));
    const onRetry = vi.fn();

    const error = await makeClient(onRetry)
      .getLedger({ ik: "ledger-ik" })
      .catch((e: unknown) => e);

    expect((error as FragmentError).status).toEqual(429);
    expect(onRetry).toHaveBeenCalledTimes(3);
  });

  it("does not retry a query that fails with a 4xx", async () => {
    server.use(unknownField());
    const onRetry = vi.fn();

    const error = await makeClient(onRetry)
      .getLedger({ ik: "ledger-ik" })
      .catch((e: unknown) => e);

    expect((error as FragmentError).status).toEqual(400);
    expect((error as FragmentError).message).toEqual("Unknown field");
    expect(onRetry).not.toHaveBeenCalled();
  });

  it("retries a mutation that fails with a 5xx", async () => {
    server.use(serviceUnavailable());
    const onRetry = vi.fn();

    const error = await makeClient(onRetry)
      .addLedgerEntry(addLedgerEntryInput)
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(FragmentError);
    expect((error as FragmentError).status).toEqual(503);
    expect(onRetry).toHaveBeenCalledTimes(3);
  });

  it("does not retry a mutation that fails with a 4xx", async () => {
    server.use(unknownField());
    const onRetry = vi.fn();

    const error = await makeClient(onRetry)
      .addLedgerEntry(addLedgerEntryInput)
      .catch((e: unknown) => e);

    expect((error as FragmentError).status).toEqual(400);
    expect(onRetry).not.toHaveBeenCalled();
  });
});
