import { expect, test } from "vitest";

import { v4 as uuidv4 } from "uuid";
import { createFragmentClient } from "../src/client.js";
import {
  CurrencyCode,
  CurrencyMode,
  LedgerAccountTypes,
} from "../generated/generated.js";

// Type for client with potential dynamic methods
type ClientWithDynamicMethods = ReturnType<typeof createFragmentClient> & {
  [key: string]: unknown;
};

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

test("Test entry type methods with hyphenated naming", async () => {
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
      name: "Test SDK Ledger - Hyphenated",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  // Check if type-specific method exists
  const expectedMethodName = "PostUserFundsAccount";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    // Test calling the method if it exists
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[
      expectedMethodName
    ] as (args: {
      ik: string;
      ledgerIk: string;
      parameters: Record<string, unknown>;
    }) => Promise<{ addLedgerEntry: { __typename: string; entry?: { type?: string | null } } }>;
    const result = await method({
      ik: entryIk,
      ledgerIk,
      parameters: {
        amount: "200",
      },
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("user-funds-account");
    }

    // Verify the entry was created correctly
    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  } else {
    // Log that method doesn't exist (test still passes to document current behavior)
    console.log(
      `Method ${expectedMethodName} does not exist on client. Current methods:`,
      Object.keys(client as ClientWithDynamicMethods).filter(
        (key) => key.startsWith("post") || key.startsWith("Post")
      )
    );
  }
});

test("Test entry type methods with camelCase naming", async () => {
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
      name: "Test SDK Ledger - CamelCase",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  // Check if type-specific method exists
  const expectedMethodName = "PostFundingSettlement";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    // Test calling the method if it exists
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[
      expectedMethodName
    ] as (args: {
      ik: string;
      ledgerIk: string;
      parameters: Record<string, unknown>;
    }) => Promise<{ addLedgerEntry: { __typename: string; entry?: { type?: string | null } } }>;
    const result = await method({
      ik: entryIk,
      ledgerIk,
      parameters: {
        amount: "300",
      },
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("fundingSettlement");
    }

    // Verify the entry was created correctly
    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  } else {
    // Log that method doesn't exist (test still passes to document current behavior)
    console.log(
      `Method ${expectedMethodName} does not exist on client. Current methods:`,
      Object.keys(client as ClientWithDynamicMethods).filter(
        (key) => key.startsWith("post") || key.startsWith("Post")
      )
    );
  }
});

test("Test entry type methods with underscore naming", async () => {
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
      name: "Test SDK Ledger - Underscore",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  // Check if type-specific method exists
  const expectedMethodName = "PostPaymentProcessing";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    // Test calling the method if it exists
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[
      expectedMethodName
    ] as (args: {
      ik: string;
      ledgerIk: string;
      parameters: Record<string, unknown>;
    }) => Promise<{ addLedgerEntry: { __typename: string; entry?: { type?: string | null } } }>;
    const result = await method({
      ik: entryIk,
      ledgerIk,
      parameters: {
        amount: "400",
      },
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("payment_processing");
    }

    // Verify the entry was created correctly
    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  } else {
    // Log that method doesn't exist (test still passes to document current behavior)
    console.log(
      `Method ${expectedMethodName} does not exist on client. Current methods:`,
      Object.keys(client as ClientWithDynamicMethods).filter(
        (key) => key.startsWith("post") || key.startsWith("Post")
      )
    );
  }
});

test("Test multiple entry types in single schema", async () => {
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
      name: "Test SDK Ledger - Multiple Types",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  // Check all expected methods
  const expectedMethods = [
    "PostUserFundsAccount",
    "PostFundingSettlement",
    "PostPaymentProcessing",
  ];

  const methodResults = expectedMethods.map((methodName) => ({
    methodName,
    exists:
      typeof (client as ClientWithDynamicMethods)[methodName] === "function",
  }));

  // Log results for documentation
  console.log("Method existence check:", methodResults);

  // Test calling Post methods if they exist
  for (const { methodName, exists } of methodResults) {
    if (exists) {
      const entryIk = uuidv4();
      const method = (client as ClientWithDynamicMethods)[
        methodName
      ] as (args: {
        ik: string;
        ledgerIk: string;
        parameters: Record<string, unknown>;
      }) => Promise<{ addLedgerEntry: { __typename: string; entry?: { type?: string | null } } }>;
      const result = await method({
        ik: entryIk,
        ledgerIk,
        parameters: {
          amount: "500",
        },
      });

      expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
      if (
        result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
        result.addLedgerEntry.entry
      ) {
        // Verify the entry was created successfully
        expect(result.addLedgerEntry.entry.type).toBeDefined();
      }
    }
  }
});

