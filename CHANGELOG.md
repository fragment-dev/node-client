# Changelog

All notable changes to `@fragment-dev/node-client`will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

Releases prior to `2.0.0` were published before this changelog was added and  
are not documented here.

## [2.0.0]

### Changed

- `GetLedgerAccountBalance` now returns total `balance` (self + children)
instead of `ownBalance`.
- `ListLedgerAccountBalances` and `ListMultiCurrencyLedgerAccountBalances`
now accept `consistencyMode` on `childBalance`, `childBalances`,
`balance`, and `balances` fields.

### Removed

- `GetLedgerAccountBalanceWithChildRollup` has been removed.

### How to Upgrade

1. Upgrade your schema to use total balance consistency.
  **Steps:**
  a. Edit your schema JSON. Change `ownBalanceUpdates` to
  `totalBalanceUpdates` in the ledger account consistency config.
  b. Change `ownBalance` to `totalBalance` in entry conditions.
  c. Ensure the schema has only one of `ownBalanceUpdates` or
  `totalBalanceUpdates` for consistency and conditions.
  d. Deploy the new schema.
2. You can now set `consistencyConfig.totalBalanceUpdates: strong` on any
  account in the tree, and its balance will be strongly consistent.
3. Upgrade your Fragment SDK to the latest version.
    a. `GetLedgerAccountBalance` now returns total `balance` (self + children) instead of `ownBalance`. 
        i. Change `$ownBalanceConsistencyMode` to `$balanceConsistencyMode`
    b. Use `GetLedgerAccountBalance` instead of `GetLedgerAccountBalanceWithChildRollup`.
