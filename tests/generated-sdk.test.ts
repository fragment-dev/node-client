import { expect, test } from "vitest";

import { v4 as uuidv4 } from "uuid";
import { createFragmentClient } from "../src/client.js";
import {
  CurrencyCode,
  CurrencyMode,
  LedgerAccountTypes,
} from "../generated/generated.js";
import {
  getSdk,
  userFundsAccountV1,
  userFundsAccountV2,
} from "./fixtures/generated-test-client.js";

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
    // Version 1 has 2 lines (asset-line and liability-line)
    expect(result1.addLedgerEntry.lines).toHaveLength(2);
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
    // Version 2 has 3 lines (asset-line, liability-line, and fee-line)
    expect(result2.addLedgerEntry.lines).toHaveLength(3);
    // Verify fee-line exists
    const feeLine = result2.addLedgerEntry.lines.find(
      (line) => line.key === "fee-line"
    );
    expect(feeLine).toBeDefined();
    expect(feeLine?.amount).toEqual("10");
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

test("addLedgerEntries commits a batch of typed payloads", async () => {
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
                account: { path: "asset-root" },
                amount: "{{amount}}",
                currency: { code: CurrencyCode.Usd },
              },
              {
                key: "liability-line",
                account: { path: "liability-root" },
                amount: "{{amount}}",
                currency: { code: CurrencyCode.Usd },
              },
            ],
          },
          {
            type: "user-funds-account",
            typeVersion: 2,
            lines: [
              {
                key: "asset-line",
                account: { path: "asset-root" },
                amount: "{{amount}} - {{feeAmount}}",
                currency: { code: CurrencyCode.Usd },
              },
              {
                key: "liability-line",
                account: { path: "liability-root" },
                amount: "{{amount}}",
                currency: { code: CurrencyCode.Usd },
              },
              {
                key: "fee-line",
                account: { path: "expense-root" },
                amount: "{{feeAmount}}",
                currency: { code: CurrencyCode.Usd },
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
      name: "Test SDK Batch Ledger",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  const firstIk = uuidv4();
  const secondIk = uuidv4();
  const entries = [
    userFundsAccountV1({
      ik: firstIk,
      ledgerIk,
      amount: "200",
    }),
    userFundsAccountV2({
      ik: secondIk,
      ledgerIk,
      amount: "300",
      feeAmount: "10",
    }),
  ];

  const batchResponse = await client.addLedgerEntries({ entries });

  expect(batchResponse.addLedgerEntries.__typename).toEqual(
    "AddLedgerEntriesResult"
  );
  if (
    batchResponse.addLedgerEntries.__typename === "AddLedgerEntriesResult"
  ) {
    const { results } = batchResponse.addLedgerEntries;
    // Results come back in the order the entries were sent.
    expect(results.map((result) => result.entry.ik)).toEqual([
      firstIk,
      secondIk,
    ]);
    expect(results.every((result) => result.entry.type === "user-funds-account")).toBe(
      true
    );
    // Version 1 posts 2 lines; version 2 adds the fee line.
    expect(results[0].lines).toHaveLength(2);
    expect(results[1].lines).toHaveLength(3);
    expect(results.every((result) => !result.isIkReplay)).toBe(true);
  }

  // Idempotency keys are per entry, so replaying the batch replays each entry.
  const replayResponse = await client.addLedgerEntries({ entries });

  if (replayResponse.addLedgerEntries.__typename === "AddLedgerEntriesResult") {
    expect(
      replayResponse.addLedgerEntries.results.every(
        (result) => result.isIkReplay
      )
    ).toBe(true);
  }
});
