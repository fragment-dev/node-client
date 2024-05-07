import { expect, test } from "vitest";

import { v4 as uuidv4 } from "uuid";
import { createFragmentClient } from "../src/client.js";
import {
  CurrencyCode,
  CurrencyMode,
  LedgerAccountTypes,
} from "../generated/generated.js";
import { BadRequestError } from "../src/errors.js";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const scope = process.env.SCOPE;
const authUrl = process.env.AUTH_URL;
const apiUrl = process.env.API_URL;

const getClient = async () => {
  if (!clientId || !clientSecret || !scope || !authUrl || !apiUrl) {
    throw new Error(
      "Please provide CLIENT_ID, CLIENT_SECRET, SCOPE, AUTH_URL, and API_URL as environment variables"
    );
  }
  return createFragmentClient({
    params: {
      clientId,
      clientSecret,
      scope,
      authUrl,
      apiUrl,
    },
  });
};
test("BRE mutation test", async () => {
  const client = await getClient();
  await expect(
    client.storeSchema({
      schema: {
        key: "test",
        chartOfAccounts: {
          accounts: [],
        },
        ledgerEntries: {
          types: [],
        },
      },
    })
  ).rejects.toThrowError("Bad Request");
});

test("Success test", async () => {
  const client = await getClient();

  const key = uuidv4();
  const result = await client.storeSchema({
    schema: {
      key,
      chartOfAccounts: {
        defaultCurrencyMode: CurrencyMode.Multi,
        accounts: [],
      },
      ledgerEntries: {
        types: [],
      },
    },
  });
  expect(result.storeSchema.__typename).toEqual("StoreSchemaResult");

  const queryResult = await client.getSchema({
    key,
  });
  expect(queryResult.schema?.key).toEqual(key);
});

test("BRE query test", async () => {
  const client = await getClient();

  expect(
    client.getLedger({
      ik: "does-not-exist",
    })
  ).rejects.toThrowError("Didn't find");
});

test("Handles mutation operations", async () => {
  const client = await getClient();

  const schemaKey = uuidv4();
  const storeSchemaResponse = await client.storeSchema({
    schema: {
      key: schemaKey,
      chartOfAccounts: {
        defaultCurrencyMode: CurrencyMode.Multi,
        accounts: [
          {
            key: "asset-root",
            name: "Asset Root",
            type: LedgerAccountTypes.Asset,
            children: [],
          },
          {
            key: "liability-root",
            name: "Liability Root",
            type: LedgerAccountTypes.Liability,
            children: [],
          },
        ],
      },
      ledgerEntries: {
        types: [
          {
            type: "runtime-entry",
            lines: [],
          },
        ],
      },
    },
  });

  expect(storeSchemaResponse.storeSchema.__typename).toEqual(
    "StoreSchemaResult"
  );

  const ledgerIk = uuidv4();
  const createLedgerResponse = await client.createLedger({
    ik: ledgerIk,
    ledger: {
      name: "Test SDK Ledger",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  const entryIk = uuidv4();
  const addLedgerEntryResponse = await client.addLedgerEntryRuntime({
    ik: entryIk,
    ledgerIk,
    type: "runtime-entry",
    lines: [
      {
        key: "add-to-asset-root",
        account: {
          path: "asset-root",
        },
        amount: "100",
        currency: {
          code: CurrencyCode.Usd,
        },
      },
      {
        key: "add-to-liability-root",
        account: {
          path: "liability-root",
        },
        amount: "100",
        currency: {
          code: CurrencyCode.Usd,
        },
      },
    ],
  });
  expect(addLedgerEntryResponse.addLedgerEntry.__typename).toEqual(
    "AddLedgerEntryResult"
  );

  await expect(() =>
    client.addLedgerEntryRuntime({
      ik: entryIk,
      ledgerIk,
      type: "runtime-entry",
      lines: [
        {
          key: "add-to-asset-root",
          account: {
            path: "asset-root",
          },
          amount: "100",
          currency: {
            code: CurrencyCode.Usd,
          },
        },
        {
          key: "add-to-liability-root",
          account: {
            path: "liability-root",
          },
          amount: "100",
          currency: {
            code: CurrencyCode.Gbp,
          },
        },
      ],
    })
  ).rejects.toThrowError(BadRequestError);
});
