# Changelog

All notable changes to `@fragment-dev/node-client`will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

Releases prior to `2.0.0` were published before this changelog was added and  
are not documented here.

## [2.0.0]

### Changed

- `GetLedgerAccountBalance` now returns total `balance` (self + children) instead of `ownBalance`.
- `ListLedgerAccountBalances` and `ListMultiCurrencyLedgerAccountBalances` now accept `consistencyMode` on `childBalance`, `childBalances`, `balance`, and `balances`.

### Removed

- `GetLedgerAccountBalanceWithChildRollup` has been removed.

### Upgrade Guide

1. Upgrade your schema to use total balance consistency.
   - Change `ownBalanceUpdates` to `totalBalanceUpdates` in ledger account consistency config.
   - Change `ownBalance` to `totalBalance` in entry conditions.
   - A schema can use only one of `ownBalanceUpdates` or `totalBalanceUpdates` for consistency and conditions.
   - Deploy the new schema.
2. You can now set `consistencyConfig.totalBalanceUpdates: strong` on any account in the tree to make its balance strongly consistent.
3. Upgrade the Fragment SDK to this version.
   - `GetLedgerAccountBalance` now returns total `balance` (self + children) instead of `ownBalance`. 
    - Change `$ownBalanceConsistencyMode` to `$balanceConsistencyMode`
  - Use `GetLedgerAccountBalance` instead of `GetLedgerAccountBalanceWithChildRollup`.
