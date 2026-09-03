# Changelog

All notable changes to `@fragment-dev/node-client`will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

Releases prior to `2.0.0` were published before this changelog was added and  
are not documented here.

## [2.2.0]

### Added

- `createPayment` creates a Payment on a Ledger. Pass an `ik`, a `ledgerIk`, and
  a Payment `type`, along with optional `typeVersion` and `parameters`. It
  returns the Payment's `clientSecret` and `status`. Payments are experimental,
  so this API may change in a future release.

### Changed

- `typeVersion` on `LedgerEntryInput` is now supported and defaults to `1`. It
  was previously reserved for an upcoming feature.
- `PaymentStatus` now uses `needs_payment_method` instead of
  `requires_confirmation`.
- `SchemaPaymentEntryStatus` is now named `SchemaPaymentTypeStatus`, and
  `SchemaPaymentEntryInput` now takes `needs_payment_method_to_processing`
  instead of `needs_confirmation_to_processing`.

## [2.1.0]

### Added

- `addLedgerEntries` posts a batch of Ledger Entries atomically.
- Strongly-typed batch payloads. Codegen now emits one payload per Ledger Entry
  type into your generated client, derived from the per-entry-type
  `addLedgerEntry` operations in the codegen input. Because a batch mutation
  takes one list of one input type, GraphQL cannot type each entry's
  `parameters` field individually; these payloads do. Pass them to
  `addLedgerEntries` directly, mixed with raw `AddLedgerEntryInput` values.
  Payload names always carry the entry type version, defaulting to `V1`.
- Ledger Line tags can now be updated using `updateLedgerEntry`.

## [2.0.0]

### Changed

- `GetLedgerAccountBalance` now returns total `balance` (self + children) instead of `ownBalance`.
- `ListLedgerAccountBalances` and `ListMultiCurrencyLedgerAccountBalances` now accept `consistencyMode` on `childBalance`, `childBalances`, `balance`, and `balances`.

### Removed

- `GetLedgerAccountBalanceWithChildRollup` has been removed.

### Upgrade Guide

1.  **Upgrade your schema to use the total balance consistency feature:**

    1.  Add the path to your schema JSON or the JSON itself to the top of the prompt below and give it to your LLM of choice. It'll make some small changes to your consistency configs and conditions.
    2.  Deploy the new schema
```
 Fragment schema JSON path or full schema: <YOUR_SCHEMA_OR_PATH>                                           
                                                                                                                                                                                                                        
  Above is a Fragment schema JSON file or the path to it. Transform it to use total balances by following   
  the rules below, then validate the result. If a file path is provided, edit the file in place — do not
  create a copy or temporary file.  
                                                                                                            
  Rules                                                           

  1. Entry conditions

  Replace ownBalance with totalBalance in all entry conditions.

  2. Default consistency config                                                                             
   
  In the schema's defaultConsistencyConfig, replace ownBalanceUpdates with totalBalanceUpdates.             
                                                                  
  3. Ledger account consistency config

  For each ledger account (not groups — groups keep ownBalanceUpdates unchanged), determine the new         
  consistency value using these three questions:
                                                                                                            
  - (A) Is this account a leaf on any entry line? Check whether any entry in the schema references this
  account as a line target.
  - (B) Is this account strongly consistent? Either it has an explicit ownBalanceUpdates: "strong", or it
  inherits "strong" from defaultConsistencyConfig.                                                          
  - (C) Does this account have an entry condition? Check whether any entry condition references this
  account.                                                                                                  
                                                                  
  Then apply:

  - (A) Yes + (B) Yes           → totalBalanceUpdates: "strong"
  - (C) Yes                      → totalBalanceUpdates: "strong"
  - (A) No  + (B) Yes + (C) No  → totalBalanceUpdates: "eventual"
  - (B) No  + (C) No            → totalBalanceUpdates: "eventual"

  In short: an account gets totalBalanceUpdates: "strong" if it is either a leaf on an entry line and was   
  already strongly consistent, or has an entry condition. Everything else becomes "eventual".
                                                                                                            
  4. Groups are excluded                                          

  Do not change ownBalanceUpdates on groups. This migration only applies to ledger accounts.

  Pre-Validation                                                                                            
   
  Validate the transformed schema before returning it:                                                      
                                                                  
  - If the input was a file path, run: fragment verify-schema --path <path-to-schema> --verbose
  - If the input was pasted schema JSON, write it to a temporary file and run: fragment verify-schema --path
   <temp-file> --verbose                                                                                    
  - If you don't have access to a shell, skip this step.
```

2.  **Upgrade your Fragment SDK to the latest version:**

    1.  `GetLedgerAccountBalance` now returns total `balance` (self + children) instead of `ownBalance`.
        1.  Change `$ownBalanceConsistencyMode` to `$balanceConsistencyMode`
    2.  Use `GetLedgerAccountBalance` instead of `GetLedgerAccountBalanceWithChildRollup`.
