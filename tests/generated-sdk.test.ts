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

test("PostUserFundsAccount method from generated SDK (version 1 and 2)", async () => {
  const client = await getClient();

  // Create schema matching the test schema with both typeVersions
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
          {
            key: "expense-root",
            name: "Expense Root",
            type: LedgerAccountTypes.Expense,
            children: [],
          },
        ],
      },
      ledgerEntries: {
        types: [
          {
            type: "user-funds-account",
            typeVersion: 1,
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
          {
            type: "user-funds-account",
            typeVersion: 2,
            lines: [
              {
                key: "asset-line",
                account: {
                  path: "asset-root",
                },
                amount: "{{amount}} - {{feeAmount}}",
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
              {
                key: "fee-line",
                account: {
                  path: "expense-root",
                },
                amount: "{{feeAmount}}",
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

  // Use the generated PostUserFundsAccount method for version 1
  const entryIk1 = uuidv4();
  const result1 = await client.PostUserFundsAccount({
    ik: entryIk1,
    ledgerIk,
    amount: "200",
  });

  expect(result1.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
  if (result1.addLedgerEntry.__typename === "AddLedgerEntryResult") {
    expect(result1.addLedgerEntry.entry.type).toEqual("user-funds-account");
    expect(result1.addLedgerEntry.entry.typeVersion).toEqual(1);
  }

  // Use the generated PostUserFundsAccount_v2 method for version 2 (with feeAmount)
  const entryIk2 = uuidv4();
  const result2 = await client.PostUserFundsAccount_v2({
    ik: entryIk2,
    ledgerIk,
    amount: "300",
    feeAmount: "10",
  });

  expect(result2.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
  if (result2.addLedgerEntry.__typename === "AddLedgerEntryResult") {
    expect(result2.addLedgerEntry.entry.type).toEqual("user-funds-account");
    expect(result2.addLedgerEntry.entry.typeVersion).toEqual(2);
  }

  // Verify both entries exist
  const getEntryResponse1 = await client.getLedgerEntry({
    ik: entryIk1,
    ledgerIk,
  });
  expect(getEntryResponse1.ledgerEntry).toBeDefined();

  const getEntryResponse2 = await client.getLedgerEntry({
    ik: entryIk2,
    ledgerIk,
  });
  expect(getEntryResponse2.ledgerEntry).toBeDefined();
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

