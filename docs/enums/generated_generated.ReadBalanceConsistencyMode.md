[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / [generated/generated](../modules/generated_generated.md) / ReadBalanceConsistencyMode

# Enumeration: ReadBalanceConsistencyMode

[generated/generated](../modules/generated_generated.md).ReadBalanceConsistencyMode

The consistency configuration of a Ledger Account's balance queries.
If not provided as an argument to a balance query, the default behavior is to read eventually consistent balances.
See [Configure consistency](https://fragment.dev/docs#configure-consistency).

## Table of contents

### Enumeration Members

- [Eventual](generated_generated.ReadBalanceConsistencyMode.md#eventual)
- [Strong](generated_generated.ReadBalanceConsistencyMode.md#strong)
- [UseAccount](generated_generated.ReadBalanceConsistencyMode.md#useaccount)

## Enumeration Members

### Eventual

• **Eventual** = ``"eventual"``

Balance queries will read eventually consistent balances. This is the default behavior if `ReadBalanceConsistencyMode` is not provided as an argument to the balance field.
Both Ledger Accounts configured with strongly and eventually consistent balance updates support this enum.

#### Defined in

[generated/generated.ts:1724](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1724)

___

### Strong

• **Strong** = ``"strong"``

Balance queries will read strongly consistent balances. This is only allowed if the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig` is `strong`.

#### Defined in

[generated/generated.ts:1726](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1726)

___

### UseAccount

• **UseAccount** = ``"use_account"``

Balance queries will use the value from the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig`.

#### Defined in

[generated/generated.ts:1728](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1728)
