[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / [generated/generated](../modules/generated_generated.md) / LedgerMigrationStatus

# Enumeration: LedgerMigrationStatus

[generated/generated](../modules/generated_generated.md).LedgerMigrationStatus

The status of a ledger migration.

## Table of contents

### Enumeration Members

- [Completed](generated_generated.LedgerMigrationStatus.md#completed)
- [Failed](generated_generated.LedgerMigrationStatus.md#failed)
- [Queued](generated_generated.LedgerMigrationStatus.md#queued)
- [Skipped](generated_generated.LedgerMigrationStatus.md#skipped)
- [Started](generated_generated.LedgerMigrationStatus.md#started)

## Enumeration Members

### Completed

• **Completed** = ``"completed"``

The Ledger Migration has been successfully completed.
This is a terminal state.

#### Defined in

[generated/generated.ts:1409](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1409)

___

### Failed

• **Failed** = ``"failed"``

The Ledger Migration has failed.
This can happen either due to an invalid schema or an internal error.
This is a terminal state.

#### Defined in

[generated/generated.ts:1415](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1415)

___

### Queued

• **Queued** = ``"queued"``

The Ledger Migration has been queued.

#### Defined in

[generated/generated.ts:1417](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1417)

___

### Skipped

• **Skipped** = ``"skipped"``

The Ledger Migration has been skipped because a newer version is available.
This is a terminal state.

#### Defined in

[generated/generated.ts:1422](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1422)

___

### Started

• **Started** = ``"started"``

The Ledger Migration has been started.

#### Defined in

[generated/generated.ts:1424](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1424)
