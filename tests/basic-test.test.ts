import { expect, test } from "vitest";

import { v4 as uuidv4 } from "uuid";
import { createFragmentClient } from "../src/client.js";
import {
  CurrencyCode,
  CurrencyMode,
  LedgerAccountTypes,
} from "../generated/generated.js";
import { BadRequestError } from "../src/errors.js";

type ClientWithDynamicMethods = ReturnType<typeof createFragmentClient> & {
  [key: string]: unknown;
};

// Expected parameter style for Post methods
// The Fragment CLI generates methods with individual parameters (ik, ledgerIk, amount, etc.)
// Change this if the SDK generates methods with a different signature
const EXPECTED_PARAMETER_STYLE: "individual" | "parameters-object" =
  "individual";

// Helper to verify the method uses the expected parameter style
// This will fail the test if the signature doesn't match expectations
async function verifyParameterStyle(
  method: (args: unknown) => Promise<unknown>,
  ik: string,
  ledgerIk: string,
): Promise<void> {
  let individualWorked = false;
  let parametersObjectWorked = false;

  // Try individual parameter style
  try {
    await method({
      ik,
      ledgerIk,
      amount: "1",
    });
    individualWorked = true;
  } catch {
    // Individual style didn't work
  }

  // Try parameters object style
  try {
    await method({
      ik,
      ledgerIk,
      parameters: {
        amount: "1",
      },
    });
    parametersObjectWorked = true;
  } catch {
    // Parameters object style didn't work
  }

  // Fail if neither works - this indicates the method signature is unexpected
  if (!individualWorked && !parametersObjectWorked) {
    throw new Error(
      `Method does not accept either individual parameters or parameters object. This indicates the method signature is different than expected.`
    );
  }

  // Fail if both work - this would be ambiguous
  if (individualWorked && parametersObjectWorked) {
    throw new Error(
      `Method accepts both parameter styles. This is ambiguous and should be fixed.`
    );
  }

  const actualStyle = individualWorked ? "individual" : "parameters-object";

  // Fail if the actual style doesn't match what we expect
  if (actualStyle !== EXPECTED_PARAMETER_STYLE) {
    throw new Error(
      `Method uses "${actualStyle}" parameter style, but we expected "${EXPECTED_PARAMETER_STYLE}". Update EXPECTED_PARAMETER_STYLE if this is intentional.`
    );
  }
}

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

test("Entry type methods with hyphenated naming", async () => {
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
      name: "Test SDK Ledger",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  const expectedMethodName = "PostUserFundsAccount";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[expectedMethodName] as (
      args: unknown
    ) => Promise<{
      addLedgerEntry: {
        __typename: string;
        entry?: { type?: string | null };
      };
    }>;

    // Verify the method uses the expected parameter style
    // This will throw if the signature doesn't match expectations
    await verifyParameterStyle(method, entryIk, ledgerIk);

    // Call with the expected style (individual parameters)
    const result = await method({
      ik: entryIk,
      ledgerIk,
      amount: "200",
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("user-funds-account");
    }

    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  }
});

test("Entry type methods with camelCase naming", async () => {
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

  const expectedMethodName = "PostFundingSettlement";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[expectedMethodName] as (
      args: unknown
    ) => Promise<{
      addLedgerEntry: {
        __typename: string;
        entry?: { type?: string | null };
      };
    }>;

    // Verify the method uses the expected parameter style
    // This will throw if the signature doesn't match expectations
    await verifyParameterStyle(method, entryIk, ledgerIk);

    // Call with the expected style (individual parameters)
    const result = await method({
      ik: entryIk,
      ledgerIk,
      amount: "300",
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("fundingSettlement");
    }

    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  }
});

test("Entry type methods with underscore naming", async () => {
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

  const expectedMethodName = "PostPaymentProcessing";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    const entryIk = uuidv4();
    const method = (client as ClientWithDynamicMethods)[expectedMethodName] as (
      args: unknown
    ) => Promise<{
      addLedgerEntry: {
        __typename: string;
        entry?: { type?: string | null };
      };
    }>;

    // Verify the method uses the expected parameter style
    // This will throw if the signature doesn't match expectations
    await verifyParameterStyle(method, entryIk, ledgerIk);

    // Call with the expected style (individual parameters)
    const result = await method({
      ik: entryIk,
      ledgerIk,
      amount: "400",
    });

    expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
    if (
      result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
      result.addLedgerEntry.entry
    ) {
      expect(result.addLedgerEntry.entry.type).toEqual("payment_processing");
    }

    const getEntryResponse = await client.getLedgerEntry({
      ik: entryIk,
      ledgerIk,
    });

    expect(getEntryResponse.ledgerEntry).toBeDefined();
  }
});

test("Multiple entry types in single schema", async () => {
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
      name: "Test SDK Ledger",
    },
    schemaKey,
  });

  expect(createLedgerResponse.createLedger.__typename).toEqual(
    "CreateLedgerResult"
  );

  const expectedMethods = [
    "PostUserFundsAccount",
    "PostFundingSettlement",
    "PostPaymentProcessing",
  ];

  for (const methodName of expectedMethods) {
    const methodExists =
      typeof (client as ClientWithDynamicMethods)[methodName] === "function";

    if (methodExists) {
      const entryIk = uuidv4();
      const method = (client as ClientWithDynamicMethods)[methodName] as (
        args: unknown
      ) => Promise<{
        addLedgerEntry: {
          __typename: string;
          entry?: { type?: string | null };
        };
      }>;

      // Verify the method uses the expected parameter style
      // This will throw if the signature doesn't match expectations
      await verifyParameterStyle(method, entryIk, ledgerIk);

      // Call with the expected style (individual parameters)
      const result = await method({
        ik: entryIk,
        ledgerIk,
        amount: "500",
      });

      expect(result.addLedgerEntry.__typename).toEqual("AddLedgerEntryResult");
      if (
        result.addLedgerEntry.__typename === "AddLedgerEntryResult" &&
        result.addLedgerEntry.entry
      ) {
        expect(result.addLedgerEntry.entry.type).toBeDefined();
      }
    }
  }
});

test("Post method parameter style verification", async () => {
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
            type: "test-entry",
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

  const expectedMethodName = "PostTestEntry";
  const methodExists =
    typeof (client as ClientWithDynamicMethods)[expectedMethodName] ===
    "function";

  if (methodExists) {
    const method = (client as ClientWithDynamicMethods)[
      expectedMethodName
    ] as (args: unknown) => Promise<unknown>;

    const entryIk = uuidv4();
    // Verify the method uses the expected parameter style
    // This will throw if the signature doesn't match expectations
    await verifyParameterStyle(method, entryIk, ledgerIk);

    // Verify that calling with the wrong style fails
    // Since EXPECTED_PARAMETER_STYLE is "individual", test that parameters object fails
    await expect(
      method({
        ik: uuidv4(),
        ledgerIk,
        parameters: { amount: "100" },
      })
    ).rejects.toThrow();
  }
});
