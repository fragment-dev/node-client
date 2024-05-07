# `@fragment-dev/node-client`

[Fragment](https://fragment.dev) is the Ledger API for engineers that move money. Stop wrangling payment tables, debugging balance errors and hacking together data pipelines. Start shipping the features that make a difference.

## Installation

Using `npm`:

```bash
npm install @fragment-dev/node-client
```

Using `yarn`:

```bash
yarn add @fragment-dev/node-client
```

## Usage

To instantiate a client, call `createFragmentClient`. You can generate credentials using the Fragment [dashboard](https://dashboard.fragment.dev/go/s/api-clients).

```typescript
import { createFragmentClient } from "@fragment-dev/node-client";

const fragment = createFragmentClient({
  params: {
    apiUrl: "api url from dashboard",
    clientId: "client id from dashboard",
    clientSecret: "client secret from dashboard",
    scope: "scope from dashboard",
    authUrl: "auth url from dashboard",
  },
});
```

Read the [Using custom queries](#using-custom-queries) section to learn how to use your own GraphQL queries with the SDK.

### Post a Ledger Entry

To [post](https://fragment.dev/docs#post-ledger-entries-post-to-the-api) a Ledger Entry defined in your schema:

```typescript
await fragment.addLedgerEntry({
  ik: "some-ik",
  ledgerIk: "your-ledger-ik",
  type: "user_funds_account",
  posted: "1968-01-01T16:45:00Z",
  parameters: {
    user_id: "user-1",
    funding_amount: "200",
  },
});
```

To post a Ledger Entry with lines [defined at runtime](https://fragment.dev/docs#post-ledger-entries-runtime-entries):

```typescript
await fragment.addLedgerEntryRuntime({
  ik: "some-ik",
  ledgerIk: "your-ledger-ik",
  posted: "1968-01-01T16:45:00Z",
  type: "funding_runtime",
  lines: [
    {
      account: { path: "assets/banks/user-cash" },
      key: "funds_arrive_in_bank",
      amount: "100",
    },
    {
      account: { path: "liabilities/users:user-1/available" },
      key: "increase_user_balance",
      amount: "100",
    },
  ],
  tags: [{ key: "service", value: "funding-service" }],
  groups: [
    { key: "user", value: "user-1" },
    { key: "workflow", value: "wf-123" },
  ],
});
```

### Sync transactions

To sync transaction using a [Custom Link](https://fragment.dev/docs#reconcile-transactions-link-any-system):

```typescript
import { CurrencyCode } from "@fragment-dev/node-client";

await fragment.syncCustomAccounts({
  linkId: "custom-link-id",
  accounts: [
    {
      externalId: "operating-account",
      name: "Operating Bank Account",
      currency: {
        code: CurrencyCode.Usd,
      },
    },
  ],
});

await fragment.syncCustomTxs({
  linkId: "custom-link-id",
  txs: [
    {
      externalId: "tx-123",
      description: "Test user funding",
      account: {
        externalId: "operating-account",
        linkId: "custom-link-id",
      },
      amount: "100",
      currency: {
        code: CurrencyCode.Usd,
      },
      posted: "1968-01-01",
    },
  ],
});
```

### Reconcile a transaction

To [reconcile](https://fragment.dev/docs#reconcile-transactions) a transaction:

```typescript
await fragment.reconcileTx({
  ledgerIk: "your-ledger-ik",
  type: "funding_settlement",
  parameters: {
    user_id: "user-1",
    net_amount: "99",
    fee_amount: "1",
    link_id: "stripe",
    link_account_id: "stripe-balance",
    link_tx_id: "tx_456",
  },
});
```

To reconcile a Ledger Entry with lines [defined at runtime](https://fragment.dev/docs#post-ledger-entries-runtime-entries):

```typescript
await fragment.reconcileTxRuntime({
  ledgerIk: "your-ledger-ik",
  type: "funding_settlement_runtime",
  lines: [
    {
      key: "funds_arrive_at_stripe",
      account: { path: "assets/banks/stripe" },
      amount: "100",
      tx: {
        externalId: "tx_456",
      },
    },
    {
      key: "increase_user_balance",
      account: { path: "liabilities/users:user-1/available" },
      amount: "100",
    },
  ],
  tags: [{ key: "service", value: "funding-service" }],
  groups: [
    { key: "user", value: "user-1" },
    { key: "workflow", value: "wf-123" },
  ],
});
```

### Get a Schema

```typescript
const { schema } = await fragment.getSchema({
  key: schemaKey,
});
```

### Get a Ledger

```typescript
const { ledger } = await fragment.getLedger({
  ik: "your-ledger-ik",
});
```

### Get a Ledger Entry

```typescript
const { ledgerEntry } = await fragment.getLedgerEntry({
  ik: "card_swipe_a",
  ledgerIk: "your-ledger-ik",
});
```

### Get a Ledger Account

To get a Ledger Account with its balances:

```typescript
const { ledgerAccount } = await fragment.getLedgerAccountBalance({
  ledgerIk: "your-ledger-ik",
  path: "assets/receivables/user:user-1",
});
```

To get a Ledger Account with its lines:

```typescript
const { ledgerAccount } = await fragment.getLedgerAccountLines({
  ledgerIk: "your-ledger-ik",
  path: "assets/receivables/user:user-1",
});
```

### List Ledger Accounts

To retrieve the Ledger Accounts in a Ledger:

```typescript
const result = await fragment.listLedgerAccounts({
  ledgerIk: "your-ledger-ik",
});

assert(result.ledger?.ledgerAccounts?.nodes, "Failed to list ledger accounts");
```

To retrieve Ledger Accounts with [balances](https://fragment.dev/docs#read-balances):

```typescript
const result = await fragment.listLedgerAccountBalances({
  ledgerIk: "your-ledger-ik",
});

assert(result.ledger?.ledgerAccounts?.nodes, "Failed to list ledger accounts");
```

To retrieve [multi-currency](https://fragment.dev/docs#handle-currencies) Ledger Accounts with balances:

```typescript
const result = await fragment.listMultiCurrencyLedgerAccountBalances({
  ledgerIk: "your-ledger-ik",
});

assert(result.ledger?.ledgerAccounts?.nodes, "Failed to list ledger accounts");
```

## Using custom queries

While the SDK comes with GraphQL queries out of the box, you may want to customize these queries for your product. In order to do that:

1. Define your custom GraphQL queries in a GraphQL file. For example, in `custom-queries.graphql`:

``` graphql
mutation getSchemaName($key: SafeString!) {
  schema(schema: { key: $key }) {
    key
    name
  }
}
```

2. Run `fragment-node-client-codegen` to generate the client for your custom queries.

Using `npx`:
``` bash
npx fragment-node-client-codegen -i custom-queries.graphql -o src/fragment-client.ts
```

Using `yarn`:

``` bash
yarn fragment-node-client-codegen -i custom-queries.graphql -o src/fragment-client.ts
```

3. Pass the `getSdk` function from the generated file to `createFragmentClient` to use your custom query!

``` typescript
import { createFragmentClient } from "@fragment-dev/node-client";

import { getSdk } from './src/fragment-client.ts';

const fragment = createFragmentClient({
  params: {
    apiUrl: "api url from dashboard",
    clientId: "client id from dashboard",
    clientSecret: "client secret from dashboard",
    scope: "scope from dashboard",
    authUrl: "auth url from dashboard",
  },
  getSdk,
});

// The returned client includes the pre-defined queries as well.
await fragment.storeSchema({ ... });

await fragment.getSchemaName({ key: "a-schema-key" });
```
