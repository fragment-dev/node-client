import { beforeAll, describe, expect, it, vi } from "vitest";
import { setupServer } from "msw/node";
import { http, graphql, HttpResponse } from "msw";
import { createFragmentClient } from "../src/client.js";

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
});
