import { expect, test } from "vitest";

import { v4 as uuidv4 } from "uuid";
import { createFragmentClient } from "../src/client.js";
import {
  CurrencyCode,
  CurrencyMode,
  LedgerAccountTypes,
} from "../generated/generated.js";
import { getSdk } from "./fixtures/generated-test-client.js";

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
    getSdk,
  });
};

test("PostUserFundsAccount method from generated SDK", async () => {
  const client = await getClient();

  // Create schema matching the test schema
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
            type: "user-funds-account",
            lines: [
              {
                key: "asset-line",
                account: {
                  path: "asset-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
              {
                key: "liability-line",
                account: {
                  path: "liability-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
            ],
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

  // Use the generated PostUserFundsAccount method directly
  const entryIk = uuidv4();
  const result = await client.PostUserFundsAccount({
    ik: entryIk,
    ledgerIk,
    amount: "200",
  });

  expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
  if (result.addLedgerEntry.__typename === "AddLedgerEntryResult") {
    expect(result.addLedgerEntry.entry.type).toEqual("user-funds-account");
  }

  const getEntryResponse = await client.getLedgerEntry({
    ik: entryIk,
    ledgerIk,
  });

  expect(getEntryResponse.ledgerEntry).toBeDefined();
});

test("PostFundingSettlement method from generated SDK", async () => {
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
            type: "fundingSettlement",
            lines: [
              {
                key: "asset-line",
                account: {
                  path: "asset-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
              {
                key: "liability-line",
                account: {
                  path: "liability-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
            ],
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

  // Use the generated PostFundingSettlement method directly
  const entryIk = uuidv4();
  const result = await client.PostFundingSettlement({
    ik: entryIk,
    ledgerIk,
    amount: "300",
  });

  expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
  if (result.addLedgerEntry.__typename === "AddLedgerEntryResult") {
    expect(result.addLedgerEntry.entry.type).toEqual("fundingSettlement");
  }
});

test("PostPaymentProcessing method from generated SDK", async () => {
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
            type: "payment_processing",
            lines: [
              {
                key: "asset-line",
                account: {
                  path: "asset-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
              {
                key: "liability-line",
                account: {
                  path: "liability-root",
                },
                amount: "{{amount}}",
                currency: {
                  code: CurrencyCode.Usd,
                },
              },
            ],
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

  // Use the generated PostPaymentProcessing method directly
  const entryIk = uuidv4();
  const result = await client.PostPaymentProcessing({
    ik: entryIk,
    ledgerIk,
    amount: "400",
  });

  expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
  if (result.addLedgerEntry.__typename === "AddLedgerEntryResult") {
    expect(result.addLedgerEntry.entry.type).toEqual("payment_processing");
  }
});

