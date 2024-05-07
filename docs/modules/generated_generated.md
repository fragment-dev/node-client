[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / generated/generated

# Module: generated/generated

## Table of contents

### Enumerations

- [BalanceUpdateConsistencyMode](../enums/generated_generated.BalanceUpdateConsistencyMode.md)
- [CurrencyCode](../enums/generated_generated.CurrencyCode.md)
- [CurrencyMode](../enums/generated_generated.CurrencyMode.md)
- [ExternalTransferType](../enums/generated_generated.ExternalTransferType.md)
- [ExternalTxSource](../enums/generated_generated.ExternalTxSource.md)
- [IncreaseEnv](../enums/generated_generated.IncreaseEnv.md)
- [LedgerAccountTypes](../enums/generated_generated.LedgerAccountTypes.md)
- [LedgerLinesConsistencyMode](../enums/generated_generated.LedgerLinesConsistencyMode.md)
- [LedgerMigrationStatus](../enums/generated_generated.LedgerMigrationStatus.md)
- [LedgerTypes](../enums/generated_generated.LedgerTypes.md)
- [ReadBalanceConsistencyMode](../enums/generated_generated.ReadBalanceConsistencyMode.md)
- [SceneEventType](../enums/generated_generated.SceneEventType.md)
- [SchemaConsistencyMode](../enums/generated_generated.SchemaConsistencyMode.md)
- [StripeEnv](../enums/generated_generated.StripeEnv.md)
- [TxType](../enums/generated_generated.TxType.md)
- [UnitEnv](../enums/generated_generated.UnitEnv.md)

### Type Aliases

- [AddLedgerEntryMutation](generated_generated.md#addledgerentrymutation)
- [AddLedgerEntryMutationVariables](generated_generated.md#addledgerentrymutationvariables)
- [AddLedgerEntryResponse](generated_generated.md#addledgerentryresponse)
- [AddLedgerEntryResult](generated_generated.md#addledgerentryresult)
- [AddLedgerEntryRuntimeMutation](generated_generated.md#addledgerentryruntimemutation)
- [AddLedgerEntryRuntimeMutationVariables](generated_generated.md#addledgerentryruntimemutationvariables)
- [BadRequestError](generated_generated.md#badrequesterror)
- [ChartOfAccountsInput](generated_generated.md#chartofaccountsinput)
- [CreateCustomCurrencyInput](generated_generated.md#createcustomcurrencyinput)
- [CreateCustomCurrencyResponse](generated_generated.md#createcustomcurrencyresponse)
- [CreateCustomCurrencyResult](generated_generated.md#createcustomcurrencyresult)
- [CreateCustomLinkMutation](generated_generated.md#createcustomlinkmutation)
- [CreateCustomLinkMutationVariables](generated_generated.md#createcustomlinkmutationvariables)
- [CreateCustomLinkResponse](generated_generated.md#createcustomlinkresponse)
- [CreateCustomLinkResult](generated_generated.md#createcustomlinkresult)
- [CreateLedgerAccountInput](generated_generated.md#createledgeraccountinput)
- [CreateLedgerAccountResponse](generated_generated.md#createledgeraccountresponse)
- [CreateLedgerAccountResult](generated_generated.md#createledgeraccountresult)
- [CreateLedgerAccountsInput](generated_generated.md#createledgeraccountsinput)
- [CreateLedgerAccountsResponse](generated_generated.md#createledgeraccountsresponse)
- [CreateLedgerAccountsResult](generated_generated.md#createledgeraccountsresult)
- [CreateLedgerInput](generated_generated.md#createledgerinput)
- [CreateLedgerMutation](generated_generated.md#createledgermutation)
- [CreateLedgerMutationVariables](generated_generated.md#createledgermutationvariables)
- [CreateLedgerResponse](generated_generated.md#createledgerresponse)
- [CreateLedgerResult](generated_generated.md#createledgerresult)
- [Currency](generated_generated.md#currency)
- [CurrencyAmount](generated_generated.md#currencyamount)
- [CurrencyAmountConnection](generated_generated.md#currencyamountconnection)
- [CurrencyFilter](generated_generated.md#currencyfilter)
- [CurrencyMatchInput](generated_generated.md#currencymatchinput)
- [CustomAccountInput](generated_generated.md#customaccountinput)
- [CustomCurrenciesConnection](generated_generated.md#customcurrenciesconnection)
- [CustomLink](generated_generated.md#customlink)
- [CustomTxInput](generated_generated.md#customtxinput)
- [DateFilter](generated_generated.md#datefilter)
- [DateTimeFilter](generated_generated.md#datetimefilter)
- [EntryGroupMatchInput](generated_generated.md#entrygroupmatchinput)
- [Error](generated_generated.md#error)
- [Exact](generated_generated.md#exact)
- [ExternalAccount](generated_generated.md#externalaccount)
- [ExternalAccountFilter](generated_generated.md#externalaccountfilter)
- [ExternalAccountLedgerAccountsArgs](generated_generated.md#externalaccountledgeraccountsargs)
- [ExternalAccountMatchInput](generated_generated.md#externalaccountmatchinput)
- [ExternalAccountTxsArgs](generated_generated.md#externalaccounttxsargs)
- [ExternalAccountsConnection](generated_generated.md#externalaccountsconnection)
- [GetLedgerAccountBalanceQuery](generated_generated.md#getledgeraccountbalancequery)
- [GetLedgerAccountBalanceQueryVariables](generated_generated.md#getledgeraccountbalancequeryvariables)
- [GetLedgerAccountLinesQuery](generated_generated.md#getledgeraccountlinesquery)
- [GetLedgerAccountLinesQueryVariables](generated_generated.md#getledgeraccountlinesqueryvariables)
- [GetLedgerEntryQuery](generated_generated.md#getledgerentryquery)
- [GetLedgerEntryQueryVariables](generated_generated.md#getledgerentryqueryvariables)
- [GetLedgerQuery](generated_generated.md#getledgerquery)
- [GetLedgerQueryVariables](generated_generated.md#getledgerqueryvariables)
- [GetSchemaQuery](generated_generated.md#getschemaquery)
- [GetSchemaQueryVariables](generated_generated.md#getschemaqueryvariables)
- [GroupBalanceAccountFilter](generated_generated.md#groupbalanceaccountfilter)
- [IkReplay](generated_generated.md#ikreplay)
- [IncreaseLink](generated_generated.md#increaselink)
- [Incremental](generated_generated.md#incremental)
- [InputMaybe](generated_generated.md#inputmaybe)
- [Int96Condition](generated_generated.md#int96condition)
- [Int96ConditionInput](generated_generated.md#int96conditioninput)
- [Int96Filter](generated_generated.md#int96filter)
- [InternalError](generated_generated.md#internalerror)
- [Ledger](generated_generated.md#ledger)
- [LedgerAccount](generated_generated.md#ledgeraccount)
- [LedgerAccountBalanceArgs](generated_generated.md#ledgeraccountbalanceargs)
- [LedgerAccountBalanceChangeArgs](generated_generated.md#ledgeraccountbalancechangeargs)
- [LedgerAccountBalanceChangesArgs](generated_generated.md#ledgeraccountbalancechangesargs)
- [LedgerAccountBalancesArgs](generated_generated.md#ledgeraccountbalancesargs)
- [LedgerAccountChildBalanceArgs](generated_generated.md#ledgeraccountchildbalanceargs)
- [LedgerAccountChildBalanceChangeArgs](generated_generated.md#ledgeraccountchildbalancechangeargs)
- [LedgerAccountChildBalanceChangesArgs](generated_generated.md#ledgeraccountchildbalancechangesargs)
- [LedgerAccountChildBalancesArgs](generated_generated.md#ledgeraccountchildbalancesargs)
- [LedgerAccountChildLedgerAccountsArgs](generated_generated.md#ledgeraccountchildledgeraccountsargs)
- [LedgerAccountCondition](generated_generated.md#ledgeraccountcondition)
- [LedgerAccountConditionInput](generated_generated.md#ledgeraccountconditioninput)
- [LedgerAccountConsistencyConfig](generated_generated.md#ledgeraccountconsistencyconfig)
- [LedgerAccountConsistencyConfigInput](generated_generated.md#ledgeraccountconsistencyconfiginput)
- [LedgerAccountFilter](generated_generated.md#ledgeraccountfilter)
- [LedgerAccountLinesArgs](generated_generated.md#ledgeraccountlinesargs)
- [LedgerAccountMatchInput](generated_generated.md#ledgeraccountmatchinput)
- [LedgerAccountOwnBalanceArgs](generated_generated.md#ledgeraccountownbalanceargs)
- [LedgerAccountOwnBalanceChangeArgs](generated_generated.md#ledgeraccountownbalancechangeargs)
- [LedgerAccountOwnBalanceChangesArgs](generated_generated.md#ledgeraccountownbalancechangesargs)
- [LedgerAccountOwnBalancesArgs](generated_generated.md#ledgeraccountownbalancesargs)
- [LedgerAccountTypeFilter](generated_generated.md#ledgeraccounttypefilter)
- [LedgerAccountUnreconciledTxsArgs](generated_generated.md#ledgeraccountunreconciledtxsargs)
- [LedgerAccountsConnection](generated_generated.md#ledgeraccountsconnection)
- [LedgerAccountsFilterSet](generated_generated.md#ledgeraccountsfilterset)
- [LedgerEntriesConnection](generated_generated.md#ledgerentriesconnection)
- [LedgerEntriesFilterSet](generated_generated.md#ledgerentriesfilterset)
- [LedgerEntry](generated_generated.md#ledgerentry)
- [LedgerEntryCondition](generated_generated.md#ledgerentrycondition)
- [LedgerEntryConditionInput](generated_generated.md#ledgerentryconditioninput)
- [LedgerEntryFilter](generated_generated.md#ledgerentryfilter)
- [LedgerEntryGroup](generated_generated.md#ledgerentrygroup)
- [LedgerEntryGroupBalance](generated_generated.md#ledgerentrygroupbalance)
- [LedgerEntryGroupBalanceConnection](generated_generated.md#ledgerentrygroupbalanceconnection)
- [LedgerEntryGroupBalanceFilterSet](generated_generated.md#ledgerentrygroupbalancefilterset)
- [LedgerEntryGroupBalancesArgs](generated_generated.md#ledgerentrygroupbalancesargs)
- [LedgerEntryGroupInput](generated_generated.md#ledgerentrygroupinput)
- [LedgerEntryGroupLedgerEntriesArgs](generated_generated.md#ledgerentrygroupledgerentriesargs)
- [LedgerEntryGroupMatchInput](generated_generated.md#ledgerentrygroupmatchinput)
- [LedgerEntryGroupsConnection](generated_generated.md#ledgerentrygroupsconnection)
- [LedgerEntryGroupsFilterSet](generated_generated.md#ledgerentrygroupsfilterset)
- [LedgerEntryInput](generated_generated.md#ledgerentryinput)
- [LedgerEntryMatchInput](generated_generated.md#ledgerentrymatchinput)
- [LedgerEntryTag](generated_generated.md#ledgerentrytag)
- [LedgerEntryTagInput](generated_generated.md#ledgerentrytaginput)
- [LedgerLedgerAccountsArgs](generated_generated.md#ledgerledgeraccountsargs)
- [LedgerLedgerEntriesArgs](generated_generated.md#ledgerledgerentriesargs)
- [LedgerLedgerEntryGroupArgs](generated_generated.md#ledgerledgerentrygroupargs)
- [LedgerLedgerEntryGroupsArgs](generated_generated.md#ledgerledgerentrygroupsargs)
- [LedgerLine](generated_generated.md#ledgerline)
- [LedgerLineAmountArgs](generated_generated.md#ledgerlineamountargs)
- [LedgerLineInput](generated_generated.md#ledgerlineinput)
- [LedgerLineMatchInput](generated_generated.md#ledgerlinematchinput)
- [LedgerLinesConnection](generated_generated.md#ledgerlinesconnection)
- [LedgerLinesFilterSet](generated_generated.md#ledgerlinesfilterset)
- [LedgerMatchInput](generated_generated.md#ledgermatchinput)
- [LedgerMigration](generated_generated.md#ledgermigration)
- [LedgerMigrationConnection](generated_generated.md#ledgermigrationconnection)
- [LedgerTypeFilter](generated_generated.md#ledgertypefilter)
- [LedgersConnection](generated_generated.md#ledgersconnection)
- [LedgersFilterSet](generated_generated.md#ledgersfilterset)
- [Link](generated_generated.md#link)
- [LinkMatchInput](generated_generated.md#linkmatchinput)
- [LinkResponse](generated_generated.md#linkresponse)
- [LinksConnection](generated_generated.md#linksconnection)
- [ListLedgerAccountBalancesQuery](generated_generated.md#listledgeraccountbalancesquery)
- [ListLedgerAccountBalancesQueryVariables](generated_generated.md#listledgeraccountbalancesqueryvariables)
- [ListLedgerAccountsQuery](generated_generated.md#listledgeraccountsquery)
- [ListLedgerAccountsQueryVariables](generated_generated.md#listledgeraccountsqueryvariables)
- [ListMultiCurrencyLedgerAccountBalancesQuery](generated_generated.md#listmulticurrencyledgeraccountbalancesquery)
- [ListMultiCurrencyLedgerAccountBalancesQueryVariables](generated_generated.md#listmulticurrencyledgeraccountbalancesqueryvariables)
- [MakeEmpty](generated_generated.md#makeempty)
- [MakeMaybe](generated_generated.md#makemaybe)
- [MakeOptional](generated_generated.md#makeoptional)
- [Maybe](generated_generated.md#maybe)
- [Mutation](generated_generated.md#mutation)
- [MutationAddLedgerEntryArgs](generated_generated.md#mutationaddledgerentryargs)
- [MutationCreateCustomCurrencyArgs](generated_generated.md#mutationcreatecustomcurrencyargs)
- [MutationCreateCustomLinkArgs](generated_generated.md#mutationcreatecustomlinkargs)
- [MutationCreateLedgerAccountArgs](generated_generated.md#mutationcreateledgeraccountargs)
- [MutationCreateLedgerAccountsArgs](generated_generated.md#mutationcreateledgeraccountsargs)
- [MutationCreateLedgerArgs](generated_generated.md#mutationcreateledgerargs)
- [MutationReconcileTxArgs](generated_generated.md#mutationreconciletxargs)
- [MutationStoreSchemaArgs](generated_generated.md#mutationstoreschemaargs)
- [MutationSyncCustomAccountsArgs](generated_generated.md#mutationsynccustomaccountsargs)
- [MutationSyncCustomTxsArgs](generated_generated.md#mutationsynccustomtxsargs)
- [MutationUpdateLedgerAccountArgs](generated_generated.md#mutationupdateledgeraccountargs)
- [MutationUpdateLedgerArgs](generated_generated.md#mutationupdateledgerargs)
- [MutationUpdateLedgerEntryArgs](generated_generated.md#mutationupdateledgerentryargs)
- [NotFoundError](generated_generated.md#notfounderror)
- [PageInfo](generated_generated.md#pageinfo)
- [Query](generated_generated.md#query)
- [QueryCustomCurrenciesArgs](generated_generated.md#querycustomcurrenciesargs)
- [QueryExternalAccountArgs](generated_generated.md#queryexternalaccountargs)
- [QueryLedgerAccountArgs](generated_generated.md#queryledgeraccountargs)
- [QueryLedgerArgs](generated_generated.md#queryledgerargs)
- [QueryLedgerEntryArgs](generated_generated.md#queryledgerentryargs)
- [QueryLedgerEntryGroupArgs](generated_generated.md#queryledgerentrygroupargs)
- [QueryLedgerLineArgs](generated_generated.md#queryledgerlineargs)
- [QueryLedgersArgs](generated_generated.md#queryledgersargs)
- [QueryLinkArgs](generated_generated.md#querylinkargs)
- [QuerySchemaArgs](generated_generated.md#queryschemaargs)
- [QuerySchemasArgs](generated_generated.md#queryschemasargs)
- [QueryTxArgs](generated_generated.md#querytxargs)
- [ReconcileTxMutation](generated_generated.md#reconciletxmutation)
- [ReconcileTxMutationVariables](generated_generated.md#reconciletxmutationvariables)
- [ReconcileTxResponse](generated_generated.md#reconciletxresponse)
- [ReconcileTxResult](generated_generated.md#reconciletxresult)
- [ReconcileTxRuntimeMutation](generated_generated.md#reconciletxruntimemutation)
- [ReconcileTxRuntimeMutationVariables](generated_generated.md#reconciletxruntimemutationvariables)
- [Scalars](generated_generated.md#scalars)
- [SceneEntryInput](generated_generated.md#sceneentryinput)
- [SceneEventInput](generated_generated.md#sceneeventinput)
- [SceneInput](generated_generated.md#sceneinput)
- [Schema](generated_generated.md#schema)
- [SchemaConditionInput](generated_generated.md#schemaconditioninput)
- [SchemaConnection](generated_generated.md#schemaconnection)
- [SchemaConsistencyConfigInput](generated_generated.md#schemaconsistencyconfiginput)
- [SchemaCurrencyMatchInput](generated_generated.md#schemacurrencymatchinput)
- [SchemaExternalAccountMatchInput](generated_generated.md#schemaexternalaccountmatchinput)
- [SchemaInput](generated_generated.md#schemainput)
- [SchemaInt96ConditionInput](generated_generated.md#schemaint96conditioninput)
- [SchemaLedgerAccountInput](generated_generated.md#schemaledgeraccountinput)
- [SchemaLedgerAccountMatchInput](generated_generated.md#schemaledgeraccountmatchinput)
- [SchemaLedgerEntriesInput](generated_generated.md#schemaledgerentriesinput)
- [SchemaLedgerEntryConditionInput](generated_generated.md#schemaledgerentryconditioninput)
- [SchemaLedgerEntryGroupInput](generated_generated.md#schemaledgerentrygroupinput)
- [SchemaLedgerEntryInput](generated_generated.md#schemaledgerentryinput)
- [SchemaLedgerEntryTagInput](generated_generated.md#schemaledgerentrytaginput)
- [SchemaLedgerLineInput](generated_generated.md#schemaledgerlineinput)
- [SchemaLedgersArgs](generated_generated.md#schemaledgersargs)
- [SchemaMatchInput](generated_generated.md#schemamatchinput)
- [SchemaTxMatchInput](generated_generated.md#schematxmatchinput)
- [SchemaVersion](generated_generated.md#schemaversion)
- [SchemaVersionArgs](generated_generated.md#schemaversionargs)
- [SchemaVersionConnection](generated_generated.md#schemaversionconnection)
- [SchemaVersionsArgs](generated_generated.md#schemaversionsargs)
- [Sdk](generated_generated.md#sdk)
- [SdkFunctionWrapper](generated_generated.md#sdkfunctionwrapper)
- [StoreSchemaMutation](generated_generated.md#storeschemamutation)
- [StoreSchemaMutationVariables](generated_generated.md#storeschemamutationvariables)
- [StoreSchemaResponse](generated_generated.md#storeschemaresponse)
- [StoreSchemaResult](generated_generated.md#storeschemaresult)
- [StringFilter](generated_generated.md#stringfilter)
- [StringMatchFilter](generated_generated.md#stringmatchfilter)
- [StripeLink](generated_generated.md#stripelink)
- [SyncCustomAccountsMutation](generated_generated.md#synccustomaccountsmutation)
- [SyncCustomAccountsMutationVariables](generated_generated.md#synccustomaccountsmutationvariables)
- [SyncCustomAccountsResponse](generated_generated.md#synccustomaccountsresponse)
- [SyncCustomAccountsResult](generated_generated.md#synccustomaccountsresult)
- [SyncCustomTxsMutation](generated_generated.md#synccustomtxsmutation)
- [SyncCustomTxsMutationVariables](generated_generated.md#synccustomtxsmutationvariables)
- [SyncCustomTxsResponse](generated_generated.md#synccustomtxsresponse)
- [SyncCustomTxsResult](generated_generated.md#synccustomtxsresult)
- [TagFilter](generated_generated.md#tagfilter)
- [TagMatchInput](generated_generated.md#tagmatchinput)
- [Tx](generated_generated.md#tx)
- [TxMatchInput](generated_generated.md#txmatchinput)
- [TxTypeFilter](generated_generated.md#txtypefilter)
- [TxsConnection](generated_generated.md#txsconnection)
- [UnitLink](generated_generated.md#unitlink)
- [UpdateLedgerAccountInput](generated_generated.md#updateledgeraccountinput)
- [UpdateLedgerAccountResponse](generated_generated.md#updateledgeraccountresponse)
- [UpdateLedgerAccountResult](generated_generated.md#updateledgeraccountresult)
- [UpdateLedgerEntryInput](generated_generated.md#updateledgerentryinput)
- [UpdateLedgerEntryResponse](generated_generated.md#updateledgerentryresponse)
- [UpdateLedgerEntryResult](generated_generated.md#updateledgerentryresult)
- [UpdateLedgerInput](generated_generated.md#updateledgerinput)
- [UpdateLedgerMutation](generated_generated.md#updateledgermutation)
- [UpdateLedgerMutationVariables](generated_generated.md#updateledgermutationvariables)
- [UpdateLedgerResponse](generated_generated.md#updateledgerresponse)
- [UpdateLedgerResult](generated_generated.md#updateledgerresult)

### Variables

- [AddLedgerEntryDocument](generated_generated.md#addledgerentrydocument)
- [AddLedgerEntryRuntimeDocument](generated_generated.md#addledgerentryruntimedocument)
- [CreateCustomLinkDocument](generated_generated.md#createcustomlinkdocument)
- [CreateLedgerDocument](generated_generated.md#createledgerdocument)
- [GetLedgerAccountBalanceDocument](generated_generated.md#getledgeraccountbalancedocument)
- [GetLedgerAccountLinesDocument](generated_generated.md#getledgeraccountlinesdocument)
- [GetLedgerDocument](generated_generated.md#getledgerdocument)
- [GetLedgerEntryDocument](generated_generated.md#getledgerentrydocument)
- [GetSchemaDocument](generated_generated.md#getschemadocument)
- [ListLedgerAccountBalancesDocument](generated_generated.md#listledgeraccountbalancesdocument)
- [ListLedgerAccountsDocument](generated_generated.md#listledgeraccountsdocument)
- [ListMultiCurrencyLedgerAccountBalancesDocument](generated_generated.md#listmulticurrencyledgeraccountbalancesdocument)
- [ReconcileTxDocument](generated_generated.md#reconciletxdocument)
- [ReconcileTxRuntimeDocument](generated_generated.md#reconciletxruntimedocument)
- [StoreSchemaDocument](generated_generated.md#storeschemadocument)
- [SyncCustomAccountsDocument](generated_generated.md#synccustomaccountsdocument)
- [SyncCustomTxsDocument](generated_generated.md#synccustomtxsdocument)
- [UpdateLedgerDocument](generated_generated.md#updateledgerdocument)

### Functions

- [getSdk](generated_generated.md#getsdk)

## Type Aliases

### AddLedgerEntryMutation

Ƭ **AddLedgerEntryMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `addLedgerEntry` | \{ `__typename`: ``"AddLedgerEntryResult"`` ; `entry`: \{ `__typename?`: ``"LedgerEntry"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `posted`: `string` ; `type?`: `string` \| ``null``  } ; `isIkReplay`: `boolean` ; `lines`: \{ `__typename?`: ``"LedgerLine"`` ; `account`: \{ `__typename?`: ``"LedgerAccount"`` ; `path`: `string`  } ; `amount`: `string` ; `id`: `string`  }[]  } \| \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } |

#### Defined in

[generated/generated.ts:2361](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2361)

___

### AddLedgerEntryMutationVariables

Ƭ **AddLedgerEntryMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[] \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)\> ; `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `parameters`: [`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"input"``] ; `posted?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``]\> ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[] \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)\> ; `type`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2351](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2351)

___

### AddLedgerEntryResponse

Ƭ **AddLedgerEntryResponse**: [`AddLedgerEntryResult`](generated_generated.md#addledgerentryresult) \| [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:59](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L59)

___

### AddLedgerEntryResult

Ƭ **AddLedgerEntryResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"AddLedgerEntryResult"`` | - |
| `entry` | [`LedgerEntry`](generated_generated.md#ledgerentry) | The ledger entry that was posted |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | True if this request successfully completed before and the previous response is being returned |
| `lines` | [`LedgerLine`](generated_generated.md#ledgerline)[] | The ledger lines that were created in that entry |

#### Defined in

[generated/generated.ts:64](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L64)

___

### AddLedgerEntryRuntimeMutation

Ƭ **AddLedgerEntryRuntimeMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `addLedgerEntry` | \{ `__typename`: ``"AddLedgerEntryResult"`` ; `entry`: \{ `__typename?`: ``"LedgerEntry"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `posted`: `string` ; `type?`: `string` \| ``null``  } ; `isIkReplay`: `boolean` ; `lines`: \{ `__typename?`: ``"LedgerLine"`` ; `account`: \{ `__typename?`: ``"LedgerAccount"`` ; `path`: `string`  } ; `amount`: `string` ; `id`: `string`  }[]  } \| \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } |

#### Defined in

[generated/generated.ts:2396](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2396)

___

### AddLedgerEntryRuntimeMutationVariables

Ƭ **AddLedgerEntryRuntimeMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[] \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)\> ; `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `lines`: [`LedgerLineInput`](generated_generated.md#ledgerlineinput)[] \| [`LedgerLineInput`](generated_generated.md#ledgerlineinput) ; `posted?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``]\> ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[] \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)\> ; `type`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2386](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2386)

___

### BadRequestError

Ƭ **BadRequestError**: [`Error`](generated_generated.md#error) & \{ `__typename?`: ``"BadRequestError"`` ; `code`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `message`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `retryable`: [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``]  }

Equivalent to an HTTP 400 - request either has missing or incorrect data

#### Defined in

[generated/generated.ts:75](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L75)

___

### ChartOfAccountsInput

Ƭ **ChartOfAccountsInput**: `Object`

The input for your Chart of Accounts in a Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`SchemaLedgerAccountInput`](generated_generated.md#schemaledgeraccountinput)[] | The Ledger Accounts modeled by your Schema. Ledger Accounts may be nested up to a maximum depth of 10. |
| `defaultConsistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConsistencyConfigInput`](generated_generated.md#ledgeraccountconsistencyconfiginput)\> | The default consistency configuration for all Ledger Accounts in this Schema. If a Ledger Account does not specify its own consistency configuration, it will use the default values provided here. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |
| `defaultCurrency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The default currency of each Ledger Account in the Chart Of Accounts. It must be provided if `defaultCurrencyMode` is set to `single`. Additionally, `defaultCurrency` must be omitted if `defaultCurrencyMode` is set to `multi`. |
| `defaultCurrencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMode`](../enums/generated_generated.CurrencyMode.md)\> | The default currency mode of each Ledger Account in the Chart Of Accounts. |

#### Defined in

[generated/generated.ts:97](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L97)

___

### CreateCustomCurrencyInput

Ƭ **CreateCustomCurrencyInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `customCode` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | The currency code for custom currencies. It can be up to 5 characters long. This is used for display purposes. |
| `customCurrencyId` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference#mutations-createcustomcurrency) mutation. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | A human readable name for the currency (e.g. United States Dollar). This is used for display purposes. |
| `precision` | [`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``] | The number of decimal places this currency goes to. For example, United States Dollars have a precision of 2 (i.e. 100 cents in a dollar), whereas the Jordanian Dinar has a precision of 3. This is used for display purposes. |

#### Defined in

[generated/generated.ts:117](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L117)

___

### CreateCustomCurrencyResponse

Ƭ **CreateCustomCurrencyResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CreateCustomCurrencyResult`](generated_generated.md#createcustomcurrencyresult) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:128](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L128)

___

### CreateCustomCurrencyResult

Ƭ **CreateCustomCurrencyResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CreateCustomCurrencyResult"`` | - |
| `customCurrency` | [`Currency`](generated_generated.md#currency) | The Currency that was created. |

#### Defined in

[generated/generated.ts:133](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L133)

___

### CreateCustomLinkMutation

Ƭ **CreateCustomLinkMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `createCustomLink` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"CreateCustomLinkResult"`` ; `isIkReplay`: `boolean` ; `link`: \{ `__typename?`: ``"CustomLink"`` ; `created`: `string` ; `id`: `string` ; `name`: `string`  } \| \{ `__typename?`: ``"IncreaseLink"`` ; `created`: `string` ; `id`: `string` ; `name`: `string`  } \| \{ `__typename?`: ``"StripeLink"`` ; `created`: `string` ; `id`: `string` ; `name`: `string`  } \| \{ `__typename?`: ``"UnitLink"`` ; `created`: `string` ; `id`: `string` ; `name`: `string`  }  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } |

#### Defined in

[generated/generated.ts:2510](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2510)

___

### CreateCustomLinkMutationVariables

Ƭ **CreateCustomLinkMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `name`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2505](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2505)

___

### CreateCustomLinkResponse

Ƭ **CreateCustomLinkResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CreateCustomLinkResult`](generated_generated.md#createcustomlinkresult) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:139](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L139)

___

### CreateCustomLinkResult

Ƭ **CreateCustomLinkResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CreateCustomLinkResult"`` | - |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | - |
| `link` | [`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink) | The custom link that was created. Represents an instance of an external system. |

#### Defined in

[generated/generated.ts:144](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L144)

___

### CreateLedgerAccountInput

Ƭ **CreateLedgerAccountInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `consistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConsistencyConfigInput`](generated_generated.md#ledgeraccountconsistencyconfiginput)\> | The consistency configuration for this Ledger Account. This defines how updates to this Ledger Account's balance are handled. |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The currency of this Ledger Account. If this is not set, and `currencyMode` is not set to `multi`, the workspace-level default is used. |
| `currencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMode`](../enums/generated_generated.CurrencyMode.md)\> | If set to `multi`, creates a multi-currency Ledger Account. If set to `single`, creates a single-currency Ledger Account. |
| `linkedAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput)\> | The External Account to link to this Ledger Account. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | The human-readable name of this Ledger Account. |
| `parent?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput)\> | The parent of this Ledger Account. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)\> | The type of ledger account to create. Required if this is a top-level Ledger Account. If not provided, the type will be inferred from the parent. |

#### Defined in

[generated/generated.ts:151](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L151)

___

### CreateLedgerAccountResponse

Ƭ **CreateLedgerAccountResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CreateLedgerAccountResult`](generated_generated.md#createledgeraccountresult) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:171](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L171)

___

### CreateLedgerAccountResult

Ƭ **CreateLedgerAccountResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CreateLedgerAccountResult"`` | - |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | true if a previous request successfully created this ledger account |
| `ledgerAccount` | [`LedgerAccount`](generated_generated.md#ledgeraccount) | The ledger account that was created |

#### Defined in

[generated/generated.ts:176](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L176)

___

### CreateLedgerAccountsInput

Ƭ **CreateLedgerAccountsInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `childLedgerAccounts?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CreateLedgerAccountsInput`](generated_generated.md#createledgeraccountsinput)[]\> | Ledger Accounts to create as children of this Ledger Account. |
| `consistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConsistencyConfigInput`](generated_generated.md#ledgeraccountconsistencyconfiginput)\> | The consistency configuration for this ledger account. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The currency of this Ledger Account. If this is not set, the workspace level default is used. |
| `currencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMode`](../enums/generated_generated.CurrencyMode.md)\> | The currency mode of this Ledger Account. If this is not set, the workspace level default is used. |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The idempotency key for creating this Ledger Account. |
| `linkedAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput)\> | The External Account to link to this Ledger Account. This can only be specified on leaf Ledger Accounts. See [Reconcile transactions](https://fragment.dev/docs#reconcile-transactions). |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | The name of the Ledger Account. |
| `parent?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput)\> | The parent of this Ledger Account. This is only valid on the top level Ledger Account in the payload. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)\> | The type of this Ledger Account. This field is only required if this is a root Ledger Account. Otherwise, the type will get inherited from its parent. |

#### Defined in

[generated/generated.ts:184](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L184)

___

### CreateLedgerAccountsResponse

Ƭ **CreateLedgerAccountsResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CreateLedgerAccountsResult`](generated_generated.md#createledgeraccountsresult) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:205](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L205)

___

### CreateLedgerAccountsResult

Ƭ **CreateLedgerAccountsResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CreateLedgerAccountsResult"`` | - |
| `ikReplays` | [`IkReplay`](generated_generated.md#ikreplay)[] | Whether the ledger accounts were successfully created by a previous request |
| `ledgerAccounts` | [`LedgerAccount`](generated_generated.md#ledgeraccount)[] | The ledger accounts that were created |

#### Defined in

[generated/generated.ts:210](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L210)

___

### CreateLedgerInput

Ƭ **CreateLedgerInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balanceUTCOffset?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"UTCOffset"``][``"input"``]\> | Use this field to specify a timezone for queries to your Ledger. When aggregating balances, all transactions within a 24 hour period starting at midnight UTC are included in each day. You can specify a different starting hour for balances. For example, use "-08:00" to align balances with Pacific Standard Time. Balance queries would then consider the start of each local day to be at 8am UTC the next day in UTC. The default timezone is UTC. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | - |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerTypes`](../enums/generated_generated.LedgerTypes.md)\> | - |

#### Defined in

[generated/generated.ts:218](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L218)

___

### CreateLedgerMutation

Ƭ **CreateLedgerMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `createLedger` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"CreateLedgerResult"`` ; `isIkReplay`: `boolean` ; `ledger`: \{ `__typename?`: ``"Ledger"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `name`: `string` ; `schema?`: \{ `__typename?`: ``"Schema"`` ; `key`: `string`  } \| ``null``  }  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } |

#### Defined in

[generated/generated.ts:2332](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2332)

___

### CreateLedgerMutationVariables

Ƭ **CreateLedgerMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ledger`: [`CreateLedgerInput`](generated_generated.md#createledgerinput) ; `schemaKey`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2326](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2326)

___

### CreateLedgerResponse

Ƭ **CreateLedgerResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CreateLedgerResult`](generated_generated.md#createledgerresult) \| [`InternalError`](generated_generated.md#internalerror)

#### Defined in

[generated/generated.ts:232](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L232)

___

### CreateLedgerResult

Ƭ **CreateLedgerResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CreateLedgerResult"`` | - |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | true if this request successfully completed before and the previous response is being returned |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | The Ledger that was created |

#### Defined in

[generated/generated.ts:237](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L237)

___

### Currency

Ƭ **Currency**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Currency"`` | - |
| `code` | [`CurrencyCode`](../enums/generated_generated.CurrencyCode.md) | The currency code. This is an [enum type](https://fragment.dev/api-reference#types-scalars-and-enums-currencycode) . |
| `customCode?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | The currency code for custom currencies. This is only set if 'currency' is set to CUSTOM. It can be up to 32 characters long. |
| `customCurrencyId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``]\> | The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference#mutations-createcustomcurrency) mutation. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | A human readable name for the currency (e.g. United States Dollar). This is used for display purposes. |
| `precision` | [`Scalars`](generated_generated.md#scalars)[``"Int"``][``"output"``] | The number of decimal places this currency goes to. For example, United States Dollars have a precision of 2 (i.e. 100 cents in a dollar), whereas the Jordanian Dinar has a precision of 3. This is used for display purposes. |

#### Defined in

[generated/generated.ts:245](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L245)

___

### CurrencyAmount

Ƭ **CurrencyAmount**: `Object`

A single amount accompanied by its currency

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CurrencyAmount"`` | - |
| `amount` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | Numerical integer value, serialized as a string |
| `currency` | [`Currency`](generated_generated.md#currency) | The currency this amount is in |

#### Defined in

[generated/generated.ts:260](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L260)

___

### CurrencyAmountConnection

Ƭ **CurrencyAmountConnection**: `Object`

A paginated list of amounts with their currencies

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CurrencyAmountConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`CurrencyAmount`](generated_generated.md#currencyamount)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:269](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L269)

___

### CurrencyFilter

Ƭ **CurrencyFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | Must match the value provided |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)[]\> | Must match one of the values provided |

#### Defined in

[generated/generated.ts:455](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L455)

___

### CurrencyMatchInput

Ƭ **CurrencyMatchInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | [`CurrencyCode`](../enums/generated_generated.CurrencyCode.md) | The currency code. This is an [enum type](https://fragment.dev/api-reference#types-scalars-and-enums-currencycode). |
| `customCurrencyId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]\> | The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference#mutations-createcustomcurrency) mutation. |

#### Defined in

[generated/generated.ts:462](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L462)

___

### CustomAccountInput

Ƭ **CustomAccountInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The currency of this external account. If this is not set, the workspace level default is used. 'currency' cannot be set if 'currencyMode' is 'multi'. |
| `currencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMode`](../enums/generated_generated.CurrencyMode.md)\> | The currency mode of this external account. If set to multi, creates a multi-currency account. |
| `externalId` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The ID of this account at the external system. This is used as the idempotency key, within the scope of its Custom Link. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | The name of the account at the external system. |

#### Defined in

[generated/generated.ts:475](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L475)

___

### CustomCurrenciesConnection

Ƭ **CustomCurrenciesConnection**: `Object`

A paginated list of Custom Currencies

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CustomCurrenciesConnection"`` | - |
| `nodes` | [`Currency`](generated_generated.md#currency)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:487](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L487)

___

### CustomLink

Ƭ **CustomLink**: [`Link`](generated_generated.md#link) & \{ `__typename?`: ``"CustomLink"`` ; `created`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `externalAccounts`: [`ExternalAccountsConnection`](generated_generated.md#externalaccountsconnection) ; `id`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] ; `name`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]  }

#### Defined in

[generated/generated.ts:495](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L495)

___

### CustomTxInput

Ƭ **CustomTxInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput) | - |
| `amount` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``] | - |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The currency of this tx. Should be set for multi-currency accounts. |
| `description` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | - |
| `externalId` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The ID of this tx at the external system. This is used as the idempotency key, within the scope of its Custom Account. |
| `posted` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``] | - |

#### Defined in

[generated/generated.ts:507](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L507)

___

### DateFilter

Ƭ **DateFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Date"``][``"input"``]\> |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Date"``][``"input"``][]\> |

#### Defined in

[generated/generated.ts:518](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L518)

___

### DateTimeFilter

Ƭ **DateTimeFilter**: `Object`

Filters a timestamp field between two moments in time

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``]\> | The timestamp value must be after this moment. Specified in ISO 8601 format e.g "1968-01-01T16:45:00Z" |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``]\> | The timestamp value must be before this moment. Specified in ISO 8601 format e.g "1968-01-01T16:45:00Z" |

#### Defined in

[generated/generated.ts:524](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L524)

___

### EntryGroupMatchInput

Ƭ **EntryGroupMatchInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |

#### Defined in

[generated/generated.ts:531](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L531)

___

### Error

Ƭ **Error**: `Object`

Base error interface

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The HTTP status code corresponding to the error |
| `message` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The error message |
| `retryable` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | Whether or not the operation is retryable |

#### Defined in

[generated/generated.ts:537](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L537)

___

### Exact

Ƭ **Exact**\<`T`\>: \{ [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

[generated/generated.ts:7](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L7)

___

### ExternalAccount

Ƭ **ExternalAccount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"ExternalAccount"`` | - |
| `currency?` | [`Maybe`](generated_generated.md#maybe)\<[`Currency`](generated_generated.md#currency)\> | The currency of this external account. |
| `currencyMode` | [`CurrencyMode`](../enums/generated_generated.CurrencyMode.md) | Indicates if the account allows multiple currencies or is restricted to a single currency |
| `externalId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | ID used for the external account |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | FRAGMENT ID of External Account |
| `ledgerAccounts?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccountsConnection`](generated_generated.md#ledgeraccountsconnection)\> | Ledger Accounts linked to this External Account. Ledger Accounts are paginated and sorted in reverse-chronological order by created date. |
| `link` | [`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink) | The Link that this External Account belongs to. |
| `linkId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | FRAGMENT ID of this transaction's external link |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | - |
| `txs` | [`TxsConnection`](generated_generated.md#txsconnection) | All Txs in this External Account. |

#### Defined in

[generated/generated.ts:546](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L546)

___

### ExternalAccountFilter

Ƭ **ExternalAccountFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput)\> | Ledger Account must linked to the the specified external account |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput)[]\> | Ledger Account can be linked to any of the specified external accounts |

#### Defined in

[generated/generated.ts:581](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L581)

___

### ExternalAccountLedgerAccountsArgs

Ƭ **ExternalAccountLedgerAccountsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:567](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L567)

___

### ExternalAccountMatchInput

Ƭ **ExternalAccountMatchInput**: `Object`

Specify an External Account by using `id`, or  `linkId` and `externalId`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `externalId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The external system's ID of the External Account. If this is specified, `linkId` is required. `id` is optional, but will be validated if provided. |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the External Account. If this is specified, both `linkId` and `externalId` are optional, but will be validated if provided. |
| `linkId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the Link the External Account is in. If this is specified, `externalId` is required. `id` is optional, but will be validated if provided. |

#### Defined in

[generated/generated.ts:589](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L589)

___

### ExternalAccountTxsArgs

Ƭ **ExternalAccountTxsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:574](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L574)

___

### ExternalAccountsConnection

Ƭ **ExternalAccountsConnection**: `Object`

A paginated list of External Accounts

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"ExternalAccountsConnection"`` | - |
| `nodes` | [`ExternalAccount`](generated_generated.md#externalaccount)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:599](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L599)

___

### GetLedgerAccountBalanceQuery

Ƭ **GetLedgerAccountBalanceQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledgerAccount?` | \{ `__typename?`: ``"LedgerAccount"`` ; `id`: `string` ; `ownBalance`: `string` ; `path`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2835](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2835)

___

### GetLedgerAccountBalanceQueryVariables

Ƭ **GetLedgerAccountBalanceQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> ; `balanceCurrency?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ownBalanceConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\> ; `path`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2827](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2827)

___

### GetLedgerAccountLinesQuery

Ƭ **GetLedgerAccountLinesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledgerAccount?` | \{ `__typename?`: ``"LedgerAccount"`` ; `id`: `string` ; `lines`: \{ `__typename?`: ``"LedgerLinesConnection"`` ; `nodes?`: \{ `__typename?`: ``"LedgerLine"`` ; `amount`: `string` ; `created?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `id`: `string` ; `posted?`: `string` \| ``null``  }[] \| ``null`` ; `pageInfo`: \{ `__typename?`: ``"PageInfo"`` ; `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `path`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2800](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2800)

___

### GetLedgerAccountLinesQueryVariables

Ƭ **GetLedgerAccountLinesQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `filter?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerLinesFilterSet`](generated_generated.md#ledgerlinesfilterset)\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `path`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2791](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2791)

___

### GetLedgerEntryQuery

Ƭ **GetLedgerEntryQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledgerEntry?` | \{ `__typename?`: ``"LedgerEntry"`` ; `created`: `string` ; `description?`: `string` \| ``null`` ; `id`: `string` ; `ik`: `string` ; `lines`: \{ `__typename?`: ``"LedgerLinesConnection"`` ; `nodes?`: \{ `__typename?`: ``"LedgerLine"`` ; `account`: \{ `__typename?`: ``"LedgerAccount"`` ; `path`: `string`  } ; `amount`: `string` ; `id`: `string`  }[] \| ``null``  } ; `posted`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2618](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2618)

___

### GetLedgerEntryQueryVariables

Ƭ **GetLedgerEntryQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2613](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2613)

___

### GetLedgerQuery

Ƭ **GetLedgerQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledger?` | \{ `__typename?`: ``"Ledger"`` ; `balanceUTCOffset`: `string` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `name`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2601](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2601)

___

### GetLedgerQueryVariables

Ƭ **GetLedgerQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `ik`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2597](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2597)

___

### GetSchemaQuery

Ƭ **GetSchemaQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `schema?` | \{ `__typename?`: ``"Schema"`` ; `key`: `string` ; `name`: `string` ; `version`: \{ `__typename?`: ``"SchemaVersion"`` ; `created`: `string` ; `json`: `Record`\<`string`, `unknown`\> ; `version`: `number`  }  } \| ``null`` |

#### Defined in

[generated/generated.ts:2850](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2850)

___

### GetSchemaQueryVariables

Ƭ **GetSchemaQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `key`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `version?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\>  }\>

#### Defined in

[generated/generated.ts:2845](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2845)

___

### GroupBalanceAccountFilter

Ƭ **GroupBalanceAccountFilter**: `Object`

A filter to query balances of a specific subset of accounts

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringFilter`](generated_generated.md#stringfilter)\> | A filter that must match the account ID |
| `path?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringMatchFilter`](generated_generated.md#stringmatchfilter)\> | A filter that must match the account path. Wildcards ('*') may be used only for template variables, and will only match a single variable each. |

#### Defined in

[generated/generated.ts:620](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L620)

___

### IkReplay

Ƭ **IkReplay**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"IkReplay"`` |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] |

#### Defined in

[generated/generated.ts:627](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L627)

___

### IncreaseLink

Ƭ **IncreaseLink**: [`Link`](generated_generated.md#link) & \{ `__typename?`: ``"IncreaseLink"`` ; `created`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `externalAccounts`: [`ExternalAccountsConnection`](generated_generated.md#externalaccountsconnection) ; `id`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] ; `increaseEnv`: [`IncreaseEnv`](../enums/generated_generated.IncreaseEnv.md) ; `name`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]  }

#### Defined in

[generated/generated.ts:638](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L638)

___

### Incremental

Ƭ **Incremental**\<`T`\>: `T` \| \{ [P in keyof T]?: P extends " $fragmentName" \| "\_\_typename" ? T[P] : never }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generated/generated.ts:20](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L20)

___

### InputMaybe

Ƭ **InputMaybe**\<`T`\>: [`Maybe`](generated_generated.md#maybe)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generated/generated.ts:6](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L6)

___

### Int96Condition

Ƭ **Int96Condition**: `Object`

A condition that must be met on an `Int96` field.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Int96Condition"`` | - |
| `eq?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``]\> | Amount must exactly match this value. You may not specify this alongside `gte` or `lte`. |
| `gte?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``]\> | Amount must be greater than or equal to this value. |
| `lte?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``]\> | Amount must be less than or equal to this value. |

#### Defined in

[generated/generated.ts:653](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L653)

___

### Int96ConditionInput

Ƭ **Int96ConditionInput**: `Object`

A condition that must be met on an `Int96` field.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Amount must exactly match this value. You may not specify this alongside `gte` or `lte`. |
| `gte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Amount must be greater than or equal to this value. |
| `lte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Amount must be less than or equal to this value. |

#### Defined in

[generated/generated.ts:664](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L664)

___

### Int96Filter

Ƭ **Int96Filter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Must exactly equal this Int96 value |
| `gte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Must be greater than or equal to this Int96 value |
| `lte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Must be less than or equal to this Int96 value |
| `ne?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | Must not equal this Int96 value |

#### Defined in

[generated/generated.ts:673](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L673)

___

### InternalError

Ƭ **InternalError**: [`Error`](generated_generated.md#error) & \{ `__typename?`: ``"InternalError"`` ; `code`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `message`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `retryable`: [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``]  }

Equivalent to an HTTP 5XX - something went wrong with our API.

#### Defined in

[generated/generated.ts:685](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L685)

___

### Ledger

Ƭ **Ledger**: `Object`

Ledgers are databases designed for managing money

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Ledger"`` | - |
| `balanceUTCOffset` | [`Scalars`](generated_generated.md#scalars)[``"UTCOffset"``][``"output"``] | When aggregating balances, all transactions within a 24 hour period starting at midnight UTC plus this offset are included in each day. |
| `created` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | - |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | - |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The IK passed into the [createLedger](/api-reference#mutations-createledger) mutation. This is treated as a unique identifier for this ledger. |
| `ledgerAccounts?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccountsConnection`](generated_generated.md#ledgeraccountsconnection)\> | Query LedgerAccounts in Ledger. Ledger Accounts are paginated and returned in reverse-chronological order by their created date. |
| `ledgerEntries?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntriesConnection`](generated_generated.md#ledgerentriesconnection)\> | Query Ledger Entries in a Ledger. Ledger Entries are paginated and sorted in reverse-chronological order by posted date. |
| `ledgerEntryGroup` | [`LedgerEntryGroup`](generated_generated.md#ledgerentrygroup) | Query a Ledger Entry Group for this Ledger given its key and value. |
| `ledgerEntryGroups?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntryGroupsConnection`](generated_generated.md#ledgerentrygroupsconnection)\> | Query LedgerEntryGroups in Ledger. Ledger Entry Groups are paginated and returned in order lexigraphically key then inverse chronologically by created. |
| `migrations?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerMigrationConnection`](generated_generated.md#ledgermigrationconnection)\> | Schema migrations affecting this ledger. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The name of the ledger. Can be updated with the [updateLedger](/api-reference#mutations-updateledger) mutation. |
| `schema?` | [`Maybe`](generated_generated.md#maybe)\<[`Schema`](generated_generated.md#schema)\> | Schema key associated with this ledger. |
| `type` | [`LedgerTypes`](../enums/generated_generated.LedgerTypes.md) | - |
| `workspaceId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | **`Deprecated`** Callers should not need to query or store this value. |

#### Defined in

[generated/generated.ts:696](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L696)

___

### LedgerAccount

Ƭ **LedgerAccount**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerAccount"`` | - |
| `balance` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | Total of all lines in this ledger account and child ledger accounts of the same currency as this ledger account |
| `balanceChange` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | How much did the this ledger account's balance change during the specified period. This query will include all child accounts in the same currency as this ledger account. |
| `balanceChanges` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | How much did the this ledger account's balances change during the specified period. This query will include all child accounts of all currencies. |
| `balances` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | Total of all lines in this ledger account and child ledger accounts in all currencies |
| `childBalance` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | Total of all lines in child ledger accounts of the same currency as this ledger account |
| `childBalanceChange` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | How much did the this ledger account's childBalance change during the specified period. This query will only include child accounts which are in the same currency as this one. See childBalanceChanges to include children of different currencies. |
| `childBalanceChanges` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | How much did the this ledger account's child accounts' balances change during the specified period. This query will include all child accounts of all currencies. |
| `childBalances` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | Total of all lines in child ledger accounts of this ledger in all currencies |
| `childLedgerAccounts` | [`LedgerAccountsConnection`](generated_generated.md#ledgeraccountsconnection) | The child Ledger Accounts of this Ledger Accountw |
| `consistencyConfig` | [`LedgerAccountConsistencyConfig`](generated_generated.md#ledgeraccountconsistencyconfig) | The consistency configuration for this Ledger Account. This defines how updates to this Ledger Account's ownBalance are handled. |
| `created` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | - |
| `currency?` | [`Maybe`](generated_generated.md#maybe)\<[`Currency`](generated_generated.md#currency)\> | Currency of this ledger account |
| `currencyMode` | [`CurrencyMode`](../enums/generated_generated.CurrencyMode.md) | Indicates if the account allows multiple currencies or is restricted to a single currency |
| `dashboardUrl` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | URL to the Fragment Dashboard for this Ledger Account. |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | - |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The idempotency key used to create this account |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | Ledger this account is in |
| `ledgerId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | ID of the ledger this account is in |
| `lines` | [`LedgerLinesConnection`](generated_generated.md#ledgerlinesconnection) | List Ledger Lines in this account, sorted by `posted` in reverse chronological order. Does not include Ledger Lines from child Ledger Accounts. |
| `link?` | [`Maybe`](generated_generated.md#maybe)\<[`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink)\> | The Link for the External Account that is linked to this ledger account |
| `linkedAccount?` | [`Maybe`](generated_generated.md#maybe)\<[`ExternalAccount`](generated_generated.md#externalaccount)\> | External Account that is linked to this ledger account |
| `name?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | The name of your Ledger Account |
| `ownBalance` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | Total of all lines in this ledger account, excluding all child ledger accounts |
| `ownBalanceChange` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | How much did the this ledger account's ownBalance change during the specified period. This query will exclude all child accounts. |
| `ownBalanceChanges` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | How much did the this ledger account's ownBalance change during the specified period. This is the total of all lines in this ledger account, excluding all child ledger accounts |
| `ownBalances` | [`CurrencyAmountConnection`](generated_generated.md#currencyamountconnection) | Total of all lines across all currencies in this ledger account, excluding all child ledger accounts |
| `parentLedgerAccount?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccount`](generated_generated.md#ledgeraccount)\> | The parent ledger account of this ledger account |
| `parentLedgerAccountId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``]\> | ID of the parent ledger account of this ledger account |
| `path` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The unique Path of the ledger account. This is a slash-delimited string containing the location of an account in its chart of accounts. For accounts created with a schema, this will be composed of account keys. Else, for accounts created with the createLedgerAccounts API, this will be composed of the IKs of an account and its ancestors. |
| `type` | [`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md) | - |
| `unreconciledTxs?` | [`Maybe`](generated_generated.md#maybe)\<[`TxsConnection`](generated_generated.md#txsconnection)\> | A list of external account transactions that haven't been reconciled to this ledger account yet. Only populated for linked ledger accounts. Transactions are sorted in reverse chronological order by posted date. |
| `workspaceId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | **`Deprecated`** Callers should not need to query or store this value. |

#### Defined in

[generated/generated.ts:756](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L756)

___

### LedgerAccountBalanceArgs

Ƭ **LedgerAccountBalanceArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |

#### Defined in

[generated/generated.ts:826](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L826)

___

### LedgerAccountBalanceChangeArgs

Ƭ **LedgerAccountBalanceChangeArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:832](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L832)

___

### LedgerAccountBalanceChangesArgs

Ƭ **LedgerAccountBalanceChangesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:838](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L838)

___

### LedgerAccountBalancesArgs

Ƭ **LedgerAccountBalancesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:843](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L843)

___

### LedgerAccountChildBalanceArgs

Ƭ **LedgerAccountChildBalanceArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |

#### Defined in

[generated/generated.ts:848](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L848)

___

### LedgerAccountChildBalanceChangeArgs

Ƭ **LedgerAccountChildBalanceChangeArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:854](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L854)

___

### LedgerAccountChildBalanceChangesArgs

Ƭ **LedgerAccountChildBalanceChangesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:860](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L860)

___

### LedgerAccountChildBalancesArgs

Ƭ **LedgerAccountChildBalancesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:865](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L865)

___

### LedgerAccountChildLedgerAccountsArgs

Ƭ **LedgerAccountChildLedgerAccountsArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:870](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L870)

___

### LedgerAccountCondition

Ƭ **LedgerAccountCondition**: `Object`

A set of conditions that a Ledger Account must meet for an operation to succeed.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerAccountCondition"`` | - |
| `ownBalance?` | [`Maybe`](generated_generated.md#maybe)\<[`Int96Condition`](generated_generated.md#int96condition)\> | A condition that the `ownBalance` field must satisfy. Note that this condition always applies to the latest balance, not to balances at a specific date or time. See [Read balances](https://fragment.dev/docs#read-balances) for more on the different types of Ledger Account balances. |

#### Defined in

[generated/generated.ts:919](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L919)

___

### LedgerAccountConditionInput

Ƭ **LedgerAccountConditionInput**: `Object`

A set of conditions that a Ledger Account must meet for an operation to succeed.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ownBalance` | [`Int96ConditionInput`](generated_generated.md#int96conditioninput) | A condition that the ownBalance field must satisfy. Note that this condition always applies to the latest balance, not to balances at a specific date or time. See [Read balances](https://fragment.dev/docs#read-balances) for more on the different types of Ledger Account balances. |

#### Defined in

[generated/generated.ts:926](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L926)

___

### LedgerAccountConsistencyConfig

Ƭ **LedgerAccountConsistencyConfig**: `Object`

The consistency configuration of a Ledger Account's balance updates.
See [Configure consistency](https://fragment.dev/docs#configure-consistency).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerAccountConsistencyConfig"`` | - |
| `lines` | [`LedgerLinesConsistencyMode`](../enums/generated_generated.LedgerLinesConsistencyMode.md) | - |
| `ownBalanceUpdates` | [`BalanceUpdateConsistencyMode`](../enums/generated_generated.BalanceUpdateConsistencyMode.md) | If set to `strong`, then a Ledger Account's `ownBalance` updates will be strongly consistent with the API response. This Ledger Account's balance will be updated and available for strongly consistent reads once you receive an API response. Otherwise if not set or set to `eventual`, `ownBalance` updates are applied asynchronously and may not be immediately reflected in queries. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |

#### Defined in

[generated/generated.ts:935](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L935)

___

### LedgerAccountConsistencyConfigInput

Ƭ **LedgerAccountConsistencyConfigInput**: `Object`

The payload configuring the consistency for this Ledger Account.
See [Configure consistency](https://fragment.dev/docs#configure-consistency).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `lines?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerLinesConsistencyMode`](../enums/generated_generated.LedgerLinesConsistencyMode.md)\> | If set to `strong`, then a Ledger Account's `lines` updates will be strongly consistent with the API response. This Ledger Account's balance will be updated and available for strongly consistent reads before you receive an API response. Otherwise if unset or set to `eventual`, `lines` updates are applied asynchronously and may not be immediately reflected queries. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |
| `ownBalanceUpdates?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`BalanceUpdateConsistencyMode`](../enums/generated_generated.BalanceUpdateConsistencyMode.md)\> | If set to `strong`, then a Ledger Account's `ownBalance` updates will be strongly consistent with the API response. This Ledger Account's balance will be updated and available for strongly consistent reads before you receive an API response. Otherwise if unset or set to `eventual`, `ownBalance` updates are applied asynchronously and may not be immediately reflected queries. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |

#### Defined in

[generated/generated.ts:955](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L955)

___

### LedgerAccountFilter

Ƭ **LedgerAccountFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput)\> | Result must match the specified Ledger Account |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput)[]\> | Results can match any of specified Ledger Accounts |

#### Defined in

[generated/generated.ts:980](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L980)

___

### LedgerAccountLinesArgs

Ƭ **LedgerAccountLinesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerLinesFilterSet`](generated_generated.md#ledgerlinesfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:878](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L878)

___

### LedgerAccountMatchInput

Ƭ **LedgerAccountMatchInput**: `Object`

Specify a Ledger Account by using `id` or `path`.

When specifying a Ledger Account by `path`, you must provide `ledger`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the ledger account |
| `ledger?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerMatchInput`](generated_generated.md#ledgermatchinput)\> | The Ledger to which this Ledger Account belongs. This is required if you are specifying the Ledger Account by `path`. |
| `path?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | The unique path of the ledger account. This is a slash-delimited string containing the keys of an account and all its direct ancestors. |

#### Defined in

[generated/generated.ts:992](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L992)

___

### LedgerAccountOwnBalanceArgs

Ƭ **LedgerAccountOwnBalanceArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |
| `consistencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\> |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |

#### Defined in

[generated/generated.ts:887](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L887)

___

### LedgerAccountOwnBalanceChangeArgs

Ƭ **LedgerAccountOwnBalanceChangeArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:894](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L894)

___

### LedgerAccountOwnBalanceChangesArgs

Ƭ **LedgerAccountOwnBalanceChangesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `period` | [`Scalars`](generated_generated.md#scalars)[``"Period"``][``"input"``] |

#### Defined in

[generated/generated.ts:900](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L900)

___

### LedgerAccountOwnBalancesArgs

Ƭ **LedgerAccountOwnBalancesArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> |
| `consistencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\> |

#### Defined in

[generated/generated.ts:905](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L905)

___

### LedgerAccountTypeFilter

Ƭ **LedgerAccountTypeFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)\> | Results must be of the specified Ledger Account type |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)[]\> | Results can have any of the specified Ledger Account types |

#### Defined in

[generated/generated.ts:1005](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1005)

___

### LedgerAccountUnreconciledTxsArgs

Ƭ **LedgerAccountUnreconciledTxsArgs**: `Object`

A ledger account is a container for money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:911](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L911)

___

### LedgerAccountsConnection

Ƭ **LedgerAccountsConnection**: `Object`

A paginated list of Ledger Accounts

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerAccountsConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccount`](generated_generated.md#ledgeraccount)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:1020](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1020)

___

### LedgerAccountsFilterSet

Ƭ **LedgerAccountsFilterSet**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hasParentLedgerAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"input"``]\> | Use this to filter Ledger Accounts by their parent status |
| `isLinkedAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"input"``]\> | Use this to filter Ledger Accounts by their linked status |
| `ledgerAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountFilter`](generated_generated.md#ledgeraccountfilter)\> | Use this to filter Ledger Accounts by their ID or path |
| `linkedAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ExternalAccountFilter`](generated_generated.md#externalaccountfilter)\> | Use this to filter Ledger Accounts by their external linked account ID |
| `parentLedgerAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountFilter`](generated_generated.md#ledgeraccountfilter)\> | Use this to filter Ledger Accounts by their parent account IDs |
| `path?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringMatchFilter`](generated_generated.md#stringmatchfilter)\> | A filter that must match the account path. Wildcards ('*') may be used only for template variables, and will only match a single variable each. For example: 'assets-root/accounts-receivable/merchant:*' would match: 'assets-root/accounts-receivable/merchant:1' and 'assets-root/accounts-receivable/merchant:1/child'. Wildcards may not be used outside of template variables. For example, passing in 'assets-root/*' as a filter is invalid and would raise a GraphQL error. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypeFilter`](generated_generated.md#ledgeraccounttypefilter)\> | Use this to filter Ledger Accounts by their type |

#### Defined in

[generated/generated.ts:1028](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1028)

___

### LedgerEntriesConnection

Ƭ **LedgerEntriesConnection**: `Object`

A paginated list of Ledger Entries

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntriesConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntry`](generated_generated.md#ledgerentry)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:1050](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1050)

___

### LedgerEntriesFilterSet

Ƭ **LedgerEntriesFilterSet**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`DateFilter`](generated_generated.md#datefilter)\> | - |
| `ledgerEntry?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryFilter`](generated_generated.md#ledgerentryfilter)\> | Use to filter Ledger Entries by their IDs or IKs. |
| `posted?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`DateTimeFilter`](generated_generated.md#datetimefilter)\> | - |
| `tag?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TagFilter`](generated_generated.md#tagfilter)\> | Use this to filter Ledger Entries by tags. The response will include entries that contain tags matching the filter. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringFilter`](generated_generated.md#stringfilter)\> | Use this to filter Ledger Entries by type. Ledger Entry types are defined in Schemas. |

#### Defined in

[generated/generated.ts:1058](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1058)

___

### LedgerEntry

Ƭ **LedgerEntry**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntry"`` | - |
| `conditions` | [`LedgerEntryCondition`](generated_generated.md#ledgerentrycondition)[] | The conditions that were satisfied by this Ledger Entry when it was posted. |
| `created` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | ISO-8601 timestamp this LedgerEntry was created in Fragment. |
| `date` | [`Scalars`](generated_generated.md#scalars)[``"Date"``][``"output"``] | Date this LedgerEntry posted to its Ledger e.g. "2021-01-01". |
| `description?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | Description posted for this Ledger Entry. |
| `groups` | [`LedgerEntryGroup`](generated_generated.md#ledgerentrygroup)[] | The Ledger Entry Groups this Ledger Entry is in. |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | The ID of this LedgerEntry. |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The idempotency key used to post this ledger entry |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | The Ledger that this Ledger Entry is posted to. |
| `ledgerId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | The ID of the Ledger this Ledger Entry is posted to. |
| `lines` | [`LedgerLinesConnection`](generated_generated.md#ledgerlinesconnection) | Lines posted in this Ledger Entry. |
| `posted` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | ISO-8601 timestamp this LedgerEntry posted to its Ledger. |
| `tags` | [`LedgerEntryTag`](generated_generated.md#ledgerentrytag)[] | The set of tags attached to this Ledger Entry. |
| `type?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``]\> | The type of the Ledger Entry. |
| `workspaceId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | **`Deprecated`** Callers should not need to query or store this value. |

#### Defined in

[generated/generated.ts:1069](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1069)

___

### LedgerEntryCondition

Ƭ **LedgerEntryCondition**: `Object`

A set of pre-conditions and post-conditions that a Ledger Account must have satisfied. Each `LedgerEntryCondition` has at least one of `precondition` or `postcondition`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntryCondition"`` | - |
| `account` | [`LedgerAccount`](generated_generated.md#ledgeraccount) | The Ledger Account that must satisfied the provided conditions. |
| `currency` | [`Currency`](generated_generated.md#currency) | The currency of the balance associated with this `LedgerEntryCondition`. |
| `postcondition?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccountCondition`](generated_generated.md#ledgeraccountcondition)\> | The conditions that must be satisfied after the operation. |
| `precondition?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccountCondition`](generated_generated.md#ledgeraccountcondition)\> | The conditions that must be satisfied prior to the operation. |

#### Defined in

[generated/generated.ts:1102](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1102)

___

### LedgerEntryConditionInput

Ƭ **LedgerEntryConditionInput**: `Object`

A set of pre-conditions and post-conditions that a Ledger Account balance must meet for an operation to succeed. You must specify at least one of `precondition` or `postcondition` for each condition.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput) | The Ledger Account that must satisfy the provided conditions. |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | For Ledger Accounts in the `multi` currency mode, you must specify the currency of the balance affected by the condition. You only need to specify this field for multi-currency accounts. |
| `postcondition?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConditionInput`](generated_generated.md#ledgeraccountconditioninput)\> | The conditions that must hold after the operation. |
| `precondition?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConditionInput`](generated_generated.md#ledgeraccountconditioninput)\> | The conditions that must hold prior to the operation. |

#### Defined in

[generated/generated.ts:1115](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1115)

___

### LedgerEntryFilter

Ƭ **LedgerEntryFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryMatchInput`](generated_generated.md#ledgerentrymatchinput)\> | Result must be the specified Ledger Entry. |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryMatchInput`](generated_generated.md#ledgerentrymatchinput)[]\> | Result can be any of the specified Ledger Entries. |

#### Defined in

[generated/generated.ts:1126](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1126)

___

### LedgerEntryGroup

Ƭ **LedgerEntryGroup**: `Object`

A group of Ledger Entries

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntryGroup"`` | - |
| `balances` | [`LedgerEntryGroupBalanceConnection`](generated_generated.md#ledgerentrygroupbalanceconnection) | - |
| `created?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``]\> | ISO-8601 timestamp this LedgerEntryGroup was created in Fragment. |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The key of this Ledger Entry Group. |
| `ledgerEntries` | [`LedgerEntriesConnection`](generated_generated.md#ledgerentriesconnection) | - |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The value associated with Ledger Entry Group. |

#### Defined in

[generated/generated.ts:1134](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1134)

___

### LedgerEntryGroupBalance

Ƭ **LedgerEntryGroupBalance**: `Object`

Represents the total effect of a Ledger Entry Group on a Ledger Account balance for a single currency.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntryGroupBalance"`` | - |
| `account` | [`LedgerAccount`](generated_generated.md#ledgeraccount) | The Ledger Account whose balance is affected. |
| `currency` | [`Currency`](generated_generated.md#currency) | The currency of the affected balance. |
| `ownBalance` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | The total balance change for this Ledger Account and currency. |

#### Defined in

[generated/generated.ts:1165](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1165)

___

### LedgerEntryGroupBalanceConnection

Ƭ **LedgerEntryGroupBalanceConnection**: `Object`

A set of balance changes for a specific Ledger Entry Group.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"LedgerEntryGroupBalanceConnection"`` |
| `nodes` | [`LedgerEntryGroupBalance`](generated_generated.md#ledgerentrygroupbalance)[] |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) |

#### Defined in

[generated/generated.ts:1176](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1176)

___

### LedgerEntryGroupBalanceFilterSet

Ƭ **LedgerEntryGroupBalanceFilterSet**: `Object`

Optional filters for querying balances on a Ledger Entry Group.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`GroupBalanceAccountFilter`](generated_generated.md#groupbalanceaccountfilter)\> | Filter to a subset of accounts |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyFilter`](generated_generated.md#currencyfilter)\> | Filter to one or more currencies |
| `ownBalance?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Int96Filter`](generated_generated.md#int96filter)\> | Filter to only balances in a certain range |

#### Defined in

[generated/generated.ts:1183](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1183)

___

### LedgerEntryGroupBalancesArgs

Ƭ **LedgerEntryGroupBalancesArgs**: `Object`

A group of Ledger Entries

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupBalanceFilterSet`](generated_generated.md#ledgerentrygroupbalancefilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1147](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1147)

___

### LedgerEntryGroupInput

Ƭ **LedgerEntryGroupInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key of this group. Can be up to 128 characters long. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The value associated with this group's key. Can be up to 128 characters long. |

#### Defined in

[generated/generated.ts:1192](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1192)

___

### LedgerEntryGroupLedgerEntriesArgs

Ƭ **LedgerEntryGroupLedgerEntriesArgs**: `Object`

A group of Ledger Entries

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntriesFilterSet`](generated_generated.md#ledgerentriesfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1156](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1156)

___

### LedgerEntryGroupMatchInput

Ƭ **LedgerEntryGroupMatchInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |
| `ledger` | [`LedgerMatchInput`](generated_generated.md#ledgermatchinput) |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |

#### Defined in

[generated/generated.ts:1199](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1199)

___

### LedgerEntryGroupsConnection

Ƭ **LedgerEntryGroupsConnection**: `Object`

A paginated list of Ledger Entry Groups

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntryGroupsConnection"`` | - |
| `nodes` | [`LedgerEntryGroup`](generated_generated.md#ledgerentrygroup)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | Pagination info for this list. |

#### Defined in

[generated/generated.ts:1206](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1206)

___

### LedgerEntryGroupsFilterSet

Ƭ **LedgerEntryGroupsFilterSet**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `created?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`DateTimeFilter`](generated_generated.md#datetimefilter)\> | Use to filter ledger groups by their created timestamp |
| `key?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringFilter`](generated_generated.md#stringfilter)\> | Use to filter ledger groups by their type |

#### Defined in

[generated/generated.ts:1214](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1214)

___

### LedgerEntryInput

Ƭ **LedgerEntryInput**: `Object`

Ledger Entries are limited to 30 Ledger Lines.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryConditionInput`](generated_generated.md#ledgerentryconditioninput)[]\> | Conditions that must be satisfied to post this Ledger Entry. The Ledger Entry will reject with a BadRequestError if any condition is not met. You can only add a condition on a Ledger Account containing a Line in this Ledger Entry. |
| `description?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | If specified, will also be used as the description for LedgerLines unless they specify their own description. |
| `groups?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[]\> | Adds this Ledger Entry to this set of Ledger Entry Groups |
| `ledger?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerMatchInput`](generated_generated.md#ledgermatchinput)\> | The Ledger to which to post this Ledger Entry. Must be linked to a Schema that defines the provided Ledger Entry type. |
| `lines?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerLineInput`](generated_generated.md#ledgerlineinput)[]\> | The Ledger Lines to create as part of this Ledger Entry. This cannot be used with Ledger Entries that have a 'type' i.e. Ledger Entries defined in the Schema. This can be useful during non-routine operations such as an incident. It is not recommended to use 'lines' during routine operations. |
| `parameters?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"input"``]\> | Parameters to be included in a templated Ledger Entry. All provided parameters must be present in the typed Ledger Entry within the Schema linked to the provided Ledger. |
| `posted?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"input"``]\> | ISO 8601 timestamp to post this Ledger Entry e.g. "2021-01-01" or "2021-01-01T16:45:00Z". Will error out if supplied to reconcileTx or createOrder since the transaction timestamp will be used instead |
| `tags?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[]\> | A set of tags attached to this Ledger Entry. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | The type of the Ledger Entry. Must be defined in the Schema linked to the Ledger specified below. |

#### Defined in

[generated/generated.ts:1222](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1222)

___

### LedgerEntryMatchInput

Ƭ **LedgerEntryMatchInput**: `Object`

Specify a Ledger Entry by using `id`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the Ledger Entry |
| `ik?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]\> | The IK provided to the `addLedgerEntry` mutation or the `ik` field returned from a `reconcileTx` mutation. This is required if you have not provided `id`. |
| `ledger?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerMatchInput`](generated_generated.md#ledgermatchinput)\> | The FRAGMENT ID of the Ledger to which this Ledger Entry belongs. This is required if you have not provided `id`. |

#### Defined in

[generated/generated.ts:1244](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1244)

___

### LedgerEntryTag

Ƭ **LedgerEntryTag**: `Object`

A tag attached to a Ledger Entry.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerEntryTag"`` | - |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The key of this tag. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The value associated with this tag's key. |

#### Defined in

[generated/generated.ts:1261](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1261)

___

### LedgerEntryTagInput

Ƭ **LedgerEntryTagInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key of this tag. Can be up to 128 characters long. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The value associated with this tag's key. Can be up to 128 characters long. |

#### Defined in

[generated/generated.ts:1269](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1269)

___

### LedgerLedgerAccountsArgs

Ƭ **LedgerLedgerAccountsArgs**: `Object`

Ledgers are databases designed for managing money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountsFilterSet`](generated_generated.md#ledgeraccountsfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:724](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L724)

___

### LedgerLedgerEntriesArgs

Ƭ **LedgerLedgerEntriesArgs**: `Object`

Ledgers are databases designed for managing money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntriesFilterSet`](generated_generated.md#ledgerentriesfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:733](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L733)

___

### LedgerLedgerEntryGroupArgs

Ƭ **LedgerLedgerEntryGroupArgs**: `Object`

Ledgers are databases designed for managing money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerEntryGroup` | [`EntryGroupMatchInput`](generated_generated.md#entrygroupmatchinput) |

#### Defined in

[generated/generated.ts:742](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L742)

___

### LedgerLedgerEntryGroupsArgs

Ƭ **LedgerLedgerEntryGroupsArgs**: `Object`

Ledgers are databases designed for managing money

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupsFilterSet`](generated_generated.md#ledgerentrygroupsfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:747](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L747)

___

### LedgerLine

Ƭ **LedgerLine**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerLine"`` | - |
| `account` | [`LedgerAccount`](generated_generated.md#ledgeraccount) | LedgerAccount that contains this line |
| `accountId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | - |
| `amount` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | How much this line's LedgerAccount's balance changed in integer cents (i.e. in USD 100 is 1 dollar, 100 cents) |
| `created?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``]\> | ISO-8601 timestamp this LedgerLine was created in Fragment |
| `currency?` | [`Maybe`](generated_generated.md#maybe)\<[`Currency`](generated_generated.md#currency)\> | Currency of this LedgerLine |
| `date?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"Date"``][``"output"``]\> | Date this LedgerLine posted to its LedgerAccount e.g. "2021-01-01" |
| `description?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | Description of this LedgerLine |
| `externalTransferId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | ID in the external system of the payment or transfer that created the transaction linked to this LedgerLine |
| `externalTransferType?` | [`Maybe`](generated_generated.md#maybe)\<[`ExternalTransferType`](../enums/generated_generated.ExternalTransferType.md)\> | Whether the transaction linked to this LedgerLine was a payment or transfer |
| `externalTxId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | ID in the external system of the transaction linked to this LedgerLine |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | - |
| `key?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | - |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | - |
| `ledgerEntry?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntry`](generated_generated.md#ledgerentry)\> | LedgerEntry that contains this line |
| `ledgerEntryId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``]\> | ID of the LedgerEntry that contains this line |
| `ledgerId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | Ledger that contains this line |
| `otherTxExternalAccountExternalId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | ID in the external system of destination or source bank account for an internal bank transfer. Only for internal bank transfers - see otherTxId |
| `otherTxExternalAccountId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | FRAGMENT ID of destination or source bank account. Only for internal bank transfers - see otherTxId |
| `otherTxExternalId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | ID in the external system of transaction in the destination or source bank account. Only for internal bank transfers - see otherTxId |
| `otherTxId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | FRAGMENT ID of the transaction in the destination account (if sending money from this account) or source account (if pulling money into this account). Only applicable if this line is linked to a transaction created through an internal transfer |
| `posted?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``]\> | ISO-8601 timestamp this LedgerLine posted to its LedgerAccount |
| `tx?` | [`Maybe`](generated_generated.md#maybe)\<[`Tx`](generated_generated.md#tx)\> | The transaction linked to this LedgerLine |
| `txId?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | Fragment ID of the transaction linked to this LedgerLine |
| `type` | [`TxType`](../enums/generated_generated.TxType.md) | credit or debit |
| `workspaceId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | **`Deprecated`** Callers should not need to query or store this value. |

#### Defined in

[generated/generated.ts:1276](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1276)

___

### LedgerLineAmountArgs

Ƭ **LedgerLineAmountArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `absolute?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1326](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1326)

___

### LedgerLineInput

Ƭ **LedgerLineInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput) | The LedgerAccount this line is being added to |
| `amount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"input"``]\> | A positive amount increases the balance of its LedgerAccount, a negative amount reduces the balance of its LedgerAccount |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> | The currency the ledger line is in |
| `description?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | If not specified the description from the parent LedgerEntryInput will be used |
| `key?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | Optional identifier for Ledger Line. You can filter lines by key using [LedgerLinesFilterSet](https://fragment.dev/api-reference#types-filter-types-ledgerlinesfilterset). |
| `tx?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TxMatchInput`](generated_generated.md#txmatchinput)\> | Required for reconcileTx to specify the transaction being reconciled, you can specify either the FRAGMENT ID or external ID of the transaction |

#### Defined in

[generated/generated.ts:1330](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1330)

___

### LedgerLineMatchInput

Ƭ **LedgerLineMatchInput**: `Object`

Specify a Ledger Line by using `id`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``] | The FRAGMENT ID of the ledger line |

#### Defined in

[generated/generated.ts:1346](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1346)

___

### LedgerLinesConnection

Ƭ **LedgerLinesConnection**: `Object`

A paginated list of Ledger Lines

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerLinesConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerLine`](generated_generated.md#ledgerline)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:1352](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1352)

___

### LedgerLinesFilterSet

Ƭ **LedgerLinesFilterSet**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`DateFilter`](generated_generated.md#datefilter)\> | - |
| `key?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`StringFilter`](generated_generated.md#stringfilter)\> | Use this to filter Ledger Lines by key. Ledger Line keys are defined in Schemas. |
| `posted?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`DateTimeFilter`](generated_generated.md#datetimefilter)\> | - |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TxTypeFilter`](generated_generated.md#txtypefilter)\> | - |

#### Defined in

[generated/generated.ts:1365](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1365)

___

### LedgerMatchInput

Ƭ **LedgerMatchInput**: `Object`

Specify a Ledger by using `id` or `ik`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the ledger |
| `ik?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]\> | The IK passed into the [createLedger](/api-reference#mutations-createledger) mutation. This is treated as a second unique identifier for this ledger. |

#### Defined in

[generated/generated.ts:1374](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1374)

___

### LedgerMigration

Ƭ **LedgerMigration**: `Object`

Represents a Schema being applied to a Ledger.
It contains metadata about the Ledger, the Schema, and the status of the migration.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerMigration"`` | - |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | The Ledger that the migration is run on. |
| `schemaVersion` | [`SchemaVersion`](generated_generated.md#schemaversion) | - |
| `status` | [`LedgerMigrationStatus`](../enums/generated_generated.LedgerMigrationStatus.md) | The status of the Ledger Migration. |

#### Defined in

[generated/generated.ts:1385](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1385)

___

### LedgerMigrationConnection

Ƭ **LedgerMigrationConnection**: `Object`

A paginated list of Ledger Migrations

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgerMigrationConnection"`` | - |
| `nodes` | [`LedgerMigration`](generated_generated.md#ledgermigration)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | Pagination info for this list. |

#### Defined in

[generated/generated.ts:1395](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1395)

___

### LedgerTypeFilter

Ƭ **LedgerTypeFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerTypes`](../enums/generated_generated.LedgerTypes.md)\> |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerTypes`](../enums/generated_generated.LedgerTypes.md)[]\> |

#### Defined in

[generated/generated.ts:1427](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1427)

___

### LedgersConnection

Ƭ **LedgersConnection**: `Object`

A paginated list of Ledgers

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LedgersConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`Ledger`](generated_generated.md#ledger)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:1437](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1437)

___

### LedgersFilterSet

Ƭ **LedgersFilterSet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerTypeFilter`](generated_generated.md#ledgertypefilter)\> |

#### Defined in

[generated/generated.ts:1445](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1445)

___

### Link

Ƭ **Link**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `created` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | ISO-8601 timestamp when the Link was created. |
| `externalAccounts` | [`ExternalAccountsConnection`](generated_generated.md#externalaccountsconnection) | A list of External Accounts associated with this Link. |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | FRAGMENT ID of the Link. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | Name of the Link as it appears in the Dashboard. |

#### Defined in

[generated/generated.ts:1449](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1449)

___

### LinkMatchInput

Ƭ **LinkMatchInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``] |

#### Defined in

[generated/generated.ts:1460](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1460)

___

### LinkResponse

Ƭ **LinkResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`InternalError`](generated_generated.md#internalerror) \| [`NotFoundError`](generated_generated.md#notfounderror) \| [`StripeLink`](generated_generated.md#stripelink)

#### Defined in

[generated/generated.ts:1464](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1464)

___

### LinksConnection

Ƭ **LinksConnection**: `Object`

A paginated list of Links

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"LinksConnection"`` | - |
| `nodes` | ([`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink))[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:1473](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1473)

___

### ListLedgerAccountBalancesQuery

Ƭ **ListLedgerAccountBalancesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledger?` | \{ `__typename?`: ``"Ledger"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `ledgerAccounts?`: \{ `__typename?`: ``"LedgerAccountsConnection"`` ; `nodes?`: \{ `__typename?`: ``"LedgerAccount"`` ; `balance`: `string` ; `childBalance`: `string` ; `created`: `string` ; `id`: `string` ; `name?`: `string` \| ``null`` ; `ownBalance`: `string` ; `path`: `string` ; `type`: [`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)  }[] \| ``null`` ; `pageInfo`: \{ `__typename?`: ``"PageInfo"`` ; `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `name`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2685](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2685)

___

### ListLedgerAccountBalancesQueryVariables

Ƭ **ListLedgerAccountBalancesQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> ; `balanceCurrency?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ownBalanceConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\>  }\>

#### Defined in

[generated/generated.ts:2675](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2675)

___

### ListLedgerAccountsQuery

Ƭ **ListLedgerAccountsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledger?` | \{ `__typename?`: ``"Ledger"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `ledgerAccounts?`: \{ `__typename?`: ``"LedgerAccountsConnection"`` ; `nodes?`: \{ `__typename?`: ``"LedgerAccount"`` ; `created`: `string` ; `id`: `string` ; `name?`: `string` \| ``null`` ; `path`: `string` ; `type`: [`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)  }[] \| ``null`` ; `pageInfo`: \{ `__typename?`: ``"PageInfo"`` ; `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `name`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2646](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2646)

___

### ListLedgerAccountsQueryVariables

Ƭ **ListLedgerAccountsQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2639](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2639)

___

### ListMultiCurrencyLedgerAccountBalancesQuery

Ƭ **ListMultiCurrencyLedgerAccountBalancesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `ledger?` | \{ `__typename?`: ``"Ledger"`` ; `created`: `string` ; `id`: `string` ; `ik`: `string` ; `ledgerAccounts?`: \{ `__typename?`: ``"LedgerAccountsConnection"`` ; `nodes?`: \{ `__typename?`: ``"LedgerAccount"`` ; `balances`: \{ `__typename?`: ``"CurrencyAmountConnection"`` ; `nodes?`: ...[] \| ``null``  } ; `childBalances`: \{ `__typename?`: ``"CurrencyAmountConnection"`` ; `nodes?`: ...[] \| ``null``  } ; `created`: `string` ; `id`: `string` ; `name?`: `string` \| ``null`` ; `ownBalances`: \{ `__typename?`: ``"CurrencyAmountConnection"`` ; `nodes?`: ...[] \| ``null``  } ; `path`: `string` ; `type`: [`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)  }[] \| ``null`` ; `pageInfo`: \{ `__typename?`: ``"PageInfo"`` ; `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `name`: `string`  } \| ``null`` |

#### Defined in

[generated/generated.ts:2726](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2726)

___

### ListMultiCurrencyLedgerAccountBalancesQueryVariables

Ƭ **ListMultiCurrencyLedgerAccountBalancesQueryVariables**: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"LastMoment"``][``"input"``]\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `ownBalancesConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\>  }\>

#### Defined in

[generated/generated.ts:2717](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2717)

___

### MakeEmpty

Ƭ **MakeEmpty**\<`T`, `K`\>: \{ [\_ in K]?: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `K` | extends keyof `T` |

#### Defined in

[generated/generated.ts:16](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L16)

___

### MakeMaybe

Ƭ **MakeMaybe**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & \{ [SubKey in K]: Maybe\<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[generated/generated.ts:13](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L13)

___

### MakeOptional

Ƭ **MakeOptional**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & \{ [SubKey in K]?: Maybe\<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[generated/generated.ts:10](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L10)

___

### Maybe

Ƭ **Maybe**\<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[generated/generated.ts:5](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L5)

___

### Mutation

Ƭ **Mutation**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Mutation"`` | - |
| `_empty?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | - |
| `addLedgerEntry` | [`AddLedgerEntryResponse`](generated_generated.md#addledgerentryresponse) | Adds a Ledger Entry to a Ledger. This Ledger Entry cannot be into a Linked Ledger Account. For that, use [reconcileTx](https://fragment.dev/api-reference#mutations-reconciletx) |
| `createCustomCurrency` | [`CreateCustomCurrencyResponse`](generated_generated.md#createcustomcurrencyresponse) | Creates a custom currency. |
| `createCustomLink` | [`CreateCustomLinkResponse`](generated_generated.md#createcustomlinkresponse) | Custom Links let you integrate external systems that don't have native support. See [Custom Links](https://fragment.dev/docs#reconcile-transactions-link-any-system) |
| `createLedger` | [`CreateLedgerResponse`](generated_generated.md#createledgerresponse) | Creates a Ledger. |
| `createLedgerAccount` | [`CreateLedgerAccountResponse`](generated_generated.md#createledgeraccountresponse) | - |
| `createLedgerAccounts` | [`CreateLedgerAccountsResponse`](generated_generated.md#createledgeraccountsresponse) | This API call is used to create Ledger Accounts. It is only used if you are not using a Schema. Unlike other mutations that take a single IK, 'createLedgerAccount' accepts an IK for each of the ledger accounts in the request payload. This is so you can recover in the case of a partial failure. One API call can create up to 200 Ledger Accounts, up to 10 levels deep. |
| `reconcileTx` | [`ReconcileTxResponse`](generated_generated.md#reconciletxresponse) | This mutation is used to [reconcile](https://fragment.dev/docs#reconcile-transactions) transactions from an external system into a Ledger Entry. This mutation does not require an idempotency key since a transaction can only be reconciled once per Linked Ledger Account. If you are reconciling a transfer between two Link Accounts which are both linked to the same Ledger, use a transit account in between to split the transfer into two `reconcileTx` calls. |
| `storeSchema` | [`StoreSchemaResponse`](generated_generated.md#storeschemaresponse) | Stores a Schema in your workspace. If no Schema with the same key exists in your worksapce, a new Schema is created. Else, the Schema is updated, and every Ledger associated with it is migrated to the latest version. |
| `syncCustomAccounts` | [`SyncCustomAccountsResponse`](generated_generated.md#synccustomaccountsresponse) | Once you've created a [Custom Link](https://fragment.dev/docs#reconcile-transactions-link-any-system), create accounts under it using this mutation. Each Custom Account is an immutable, single-entry view of all the transactions in the external account. You can sync up to 100 Custom Accounts in one API call. |
| `syncCustomTxs` | [`SyncCustomTxsResponse`](generated_generated.md#synccustomtxsresponse) | You can create transactions under a Custom Account in a [Custom Link](https://fragment.dev/docs#reconcile-transactions-link-any-system) using this mutation. Once you've imported transactions, you can use the reconcileTx mutation to add them to a Ledger via the Linked Ledger Account. You can sync up to 100 Custom Transactions in one API call. |
| `updateLedger` | [`UpdateLedgerResponse`](generated_generated.md#updateledgerresponse) | Updates a Ledger. Currently, you can change only the Ledger 'name'. |
| `updateLedgerAccount` | [`UpdateLedgerAccountResponse`](generated_generated.md#updateledgeraccountresponse) | Updates a ledger account. Only supports name right now. |
| `updateLedgerEntry` | [`UpdateLedgerEntryResponse`](generated_generated.md#updateledgerentryresponse) | Update a ledger entry |

#### Defined in

[generated/generated.ts:1482](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1482)

___

### MutationAddLedgerEntryArgs

Ƭ **MutationAddLedgerEntryArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entry` | [`LedgerEntryInput`](generated_generated.md#ledgerentryinput) |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |

#### Defined in

[generated/generated.ts:1516](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1516)

___

### MutationCreateCustomCurrencyArgs

Ƭ **MutationCreateCustomCurrencyArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `customCurrency` | [`CreateCustomCurrencyInput`](generated_generated.md#createcustomcurrencyinput) |

#### Defined in

[generated/generated.ts:1522](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1522)

___

### MutationCreateCustomLinkArgs

Ƭ **MutationCreateCustomLinkArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] |

#### Defined in

[generated/generated.ts:1527](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1527)

___

### MutationCreateLedgerAccountArgs

Ƭ **MutationCreateLedgerAccountArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |
| `ledger` | [`LedgerMatchInput`](generated_generated.md#ledgermatchinput) |
| `ledgerAccount` | [`CreateLedgerAccountInput`](generated_generated.md#createledgeraccountinput) |

#### Defined in

[generated/generated.ts:1540](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1540)

___

### MutationCreateLedgerAccountsArgs

Ƭ **MutationCreateLedgerAccountsArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledger` | [`LedgerMatchInput`](generated_generated.md#ledgermatchinput) |
| `ledgerAccounts` | [`CreateLedgerAccountsInput`](generated_generated.md#createledgeraccountsinput)[] |

#### Defined in

[generated/generated.ts:1547](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1547)

___

### MutationCreateLedgerArgs

Ƭ **MutationCreateLedgerArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ik` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] |
| `ledger` | [`CreateLedgerInput`](generated_generated.md#createledgerinput) |
| `schema?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaMatchInput`](generated_generated.md#schemamatchinput)\> |

#### Defined in

[generated/generated.ts:1533](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1533)

___

### MutationReconcileTxArgs

Ƭ **MutationReconcileTxArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entry` | [`LedgerEntryInput`](generated_generated.md#ledgerentryinput) |

#### Defined in

[generated/generated.ts:1553](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1553)

___

### MutationStoreSchemaArgs

Ƭ **MutationStoreSchemaArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `schema` | [`SchemaInput`](generated_generated.md#schemainput) |

#### Defined in

[generated/generated.ts:1558](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1558)

___

### MutationSyncCustomAccountsArgs

Ƭ **MutationSyncCustomAccountsArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts` | [`CustomAccountInput`](generated_generated.md#customaccountinput)[] |
| `link` | [`LinkMatchInput`](generated_generated.md#linkmatchinput) |

#### Defined in

[generated/generated.ts:1563](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1563)

___

### MutationSyncCustomTxsArgs

Ƭ **MutationSyncCustomTxsArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link` | [`LinkMatchInput`](generated_generated.md#linkmatchinput) |
| `txs` | [`CustomTxInput`](generated_generated.md#customtxinput)[] |

#### Defined in

[generated/generated.ts:1569](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1569)

___

### MutationUpdateLedgerAccountArgs

Ƭ **MutationUpdateLedgerAccountArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerAccount` | [`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput) |
| `update` | [`UpdateLedgerAccountInput`](generated_generated.md#updateledgeraccountinput) |

#### Defined in

[generated/generated.ts:1581](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1581)

___

### MutationUpdateLedgerArgs

Ƭ **MutationUpdateLedgerArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledger` | [`LedgerMatchInput`](generated_generated.md#ledgermatchinput) |
| `update` | [`UpdateLedgerInput`](generated_generated.md#updateledgerinput) |

#### Defined in

[generated/generated.ts:1575](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1575)

___

### MutationUpdateLedgerEntryArgs

Ƭ **MutationUpdateLedgerEntryArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#mutations)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerEntry` | [`LedgerEntryMatchInput`](generated_generated.md#ledgerentrymatchinput) |
| `update` | [`UpdateLedgerEntryInput`](generated_generated.md#updateledgerentryinput) |

#### Defined in

[generated/generated.ts:1587](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1587)

___

### NotFoundError

Ƭ **NotFoundError**: [`Error`](generated_generated.md#error) & \{ `__typename?`: ``"NotFoundError"`` ; `code`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `message`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `retryable`: [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``]  }

Equivalent to an HTTP 404

#### Defined in

[generated/generated.ts:1593](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1593)

___

### PageInfo

Ƭ **PageInfo**: `Object`

An object containing [pagination](https://fragment.dev/docs#query-data-basics-pagination) details.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"PageInfo"`` |
| `endCursor?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> |
| `hasNextPage` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] |
| `hasPreviousPage` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] |
| `startCursor?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> |

#### Defined in

[generated/generated.ts:1604](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1604)

___

### Query

Ƭ **Query**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Query"`` | - |
| `_empty?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``]\> | - |
| `customCurrencies` | [`CustomCurrenciesConnection`](generated_generated.md#customcurrenciesconnection) | Query Custom Currencies in the workspace |
| `externalAccount?` | [`Maybe`](generated_generated.md#maybe)\<[`ExternalAccount`](generated_generated.md#externalaccount)\> | Get External Account by Link and External ID or FRAGMENT ID. |
| `ledger?` | [`Maybe`](generated_generated.md#maybe)\<[`Ledger`](generated_generated.md#ledger)\> | Get a Ledger by ID |
| `ledgerAccount?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerAccount`](generated_generated.md#ledgeraccount)\> | Get a Ledger Account by ID |
| `ledgerEntry?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntry`](generated_generated.md#ledgerentry)\> | Get Ledger Entry by ID. |
| `ledgerEntryGroup?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntryGroup`](generated_generated.md#ledgerentrygroup)\> | Query a Ledger Entry Group given its Ledger, key, and value. |
| `ledgerLine?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerLine`](generated_generated.md#ledgerline)\> | Get LedgerLine by ID |
| `ledgers?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgersConnection`](generated_generated.md#ledgersconnection)\> | Query Ledgers in workspace. Ledgers are paginated and returned in reverse-chronological order by their created date. |
| `link?` | [`Maybe`](generated_generated.md#maybe)\<[`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink)\> | Get a Link by ID. Returns a BadRequestError if the Link is not found. |
| `links` | [`LinksConnection`](generated_generated.md#linksconnection) | Get all links in a workspace |
| `schema?` | [`Maybe`](generated_generated.md#maybe)\<[`Schema`](generated_generated.md#schema)\> | Get a Schema by key. |
| `schemas?` | [`Maybe`](generated_generated.md#maybe)\<[`SchemaConnection`](generated_generated.md#schemaconnection)\> | Retrieve all of the Schemas in the workspace. |
| `tx?` | [`Maybe`](generated_generated.md#maybe)\<[`Tx`](generated_generated.md#tx)\> | Get a Tx by ID |

#### Defined in

[generated/generated.ts:1613](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1613)

___

### QueryCustomCurrenciesArgs

Ƭ **QueryCustomCurrenciesArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1645](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1645)

___

### QueryExternalAccountArgs

Ƭ **QueryExternalAccountArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `externalAccount` | [`ExternalAccountMatchInput`](generated_generated.md#externalaccountmatchinput) |

#### Defined in

[generated/generated.ts:1653](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1653)

___

### QueryLedgerAccountArgs

Ƭ **QueryLedgerAccountArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerAccount` | [`LedgerAccountMatchInput`](generated_generated.md#ledgeraccountmatchinput) |

#### Defined in

[generated/generated.ts:1663](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1663)

___

### QueryLedgerArgs

Ƭ **QueryLedgerArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledger` | [`LedgerMatchInput`](generated_generated.md#ledgermatchinput) |

#### Defined in

[generated/generated.ts:1658](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1658)

___

### QueryLedgerEntryArgs

Ƭ **QueryLedgerEntryArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerEntry` | [`LedgerEntryMatchInput`](generated_generated.md#ledgerentrymatchinput) |

#### Defined in

[generated/generated.ts:1668](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1668)

___

### QueryLedgerEntryGroupArgs

Ƭ **QueryLedgerEntryGroupArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerEntryGroup` | [`LedgerEntryGroupMatchInput`](generated_generated.md#ledgerentrygroupmatchinput) |

#### Defined in

[generated/generated.ts:1673](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1673)

___

### QueryLedgerLineArgs

Ƭ **QueryLedgerLineArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ledgerLine` | [`LedgerLineMatchInput`](generated_generated.md#ledgerlinematchinput) |

#### Defined in

[generated/generated.ts:1678](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1678)

___

### QueryLedgersArgs

Ƭ **QueryLedgersArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `filter?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgersFilterSet`](generated_generated.md#ledgersfilterset)\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1683](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1683)

___

### QueryLinkArgs

Ƭ **QueryLinkArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link` | [`LinkMatchInput`](generated_generated.md#linkmatchinput) |

#### Defined in

[generated/generated.ts:1692](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1692)

___

### QuerySchemaArgs

Ƭ **QuerySchemaArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `schema` | [`SchemaMatchInput`](generated_generated.md#schemamatchinput) |

#### Defined in

[generated/generated.ts:1697](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1697)

___

### QuerySchemasArgs

Ƭ **QuerySchemasArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1702](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1702)

___

### QueryTxArgs

Ƭ **QueryTxArgs**: `Object`

View the API guide [here](https://fragment.dev/api-reference#queries)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tx` | [`TxMatchInput`](generated_generated.md#txmatchinput) |

#### Defined in

[generated/generated.ts:1710](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1710)

___

### ReconcileTxMutation

Ƭ **ReconcileTxMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `reconcileTx` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"ReconcileTxResult"`` ; `entry`: \{ `__typename?`: ``"LedgerEntry"`` ; `created`: `string` ; `date`: `string` ; `description?`: `string` \| ``null`` ; `id`: `string` ; `ik`: `string` ; `posted`: `string`  } ; `lines`: \{ `__typename?`: ``"LedgerLine"`` ; `account`: \{ `__typename?`: ``"LedgerAccount"`` ; `path`: `string`  } ; `amount`: `string` ; `externalTxId?`: `string` \| ``null`` ; `id`: `string`  }[]  } |

#### Defined in

[generated/generated.ts:2429](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2429)

___

### ReconcileTxMutationVariables

Ƭ **ReconcileTxMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[] \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `parameters`: [`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"input"``] ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[] \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)\> ; `type`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2421](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2421)

___

### ReconcileTxResponse

Ƭ **ReconcileTxResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`ReconcileTxResult`](generated_generated.md#reconciletxresult)

#### Defined in

[generated/generated.ts:1731](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1731)

___

### ReconcileTxResult

Ƭ **ReconcileTxResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"ReconcileTxResult"`` | - |
| `entry` | [`LedgerEntry`](generated_generated.md#ledgerentry) | The ledger entry that was posted |
| `isIkReplay` | [`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"output"``] | True if this request successfully completed before and the previous response is being returned |
| `lines` | [`LedgerLine`](generated_generated.md#ledgerline)[] | The ledger lines that were created in that entry |

#### Defined in

[generated/generated.ts:1736](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1736)

___

### ReconcileTxRuntimeMutation

Ƭ **ReconcileTxRuntimeMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `reconcileTx` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"ReconcileTxResult"`` ; `entry`: \{ `__typename?`: ``"LedgerEntry"`` ; `created`: `string` ; `date`: `string` ; `description?`: `string` \| ``null`` ; `id`: `string` ; `ik`: `string` ; `posted`: `string`  } ; `lines`: \{ `__typename?`: ``"LedgerLine"`` ; `account`: \{ `__typename?`: ``"LedgerAccount"`` ; `path`: `string`  } ; `amount`: `string` ; `externalTxId?`: `string` \| ``null`` ; `id`: `string`  }[]  } |

#### Defined in

[generated/generated.ts:2463](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2463)

___

### ReconcileTxRuntimeMutationVariables

Ƭ **ReconcileTxRuntimeMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[] \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)\> ; `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `lines`: [`LedgerLineInput`](generated_generated.md#ledgerlineinput)[] \| [`LedgerLineInput`](generated_generated.md#ledgerlineinput) ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[] \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)\> ; `type`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2455](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2455)

___

### Scalars

Ƭ **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `AlphaNumericString` | \{ `input`: `string` ; `output`: `string`  } | A string that must be alphanumeric |
| `AlphaNumericString.input` | `string` | - |
| `AlphaNumericString.output` | `string` | - |
| `Boolean` | \{ `input`: `boolean` ; `output`: `boolean`  } | - |
| `Boolean.input` | `boolean` | - |
| `Boolean.output` | `boolean` | - |
| `Date` | \{ `input`: `string` ; `output`: `string`  } | ISO 8601 Date e.g. `1969-07-21` |
| `Date.input` | `string` | - |
| `Date.output` | `string` | - |
| `DateTime` | \{ `input`: `string` ; `output`: `string`  } | ISO 8601 DateTime e.g. `1969-07-16T13:32:00.000Z`. You can also provide a date e.g. `1969-01-01` and it will be converted to `1969-01-01T00:00:00.000Z` |
| `DateTime.input` | `string` | - |
| `DateTime.output` | `string` | - |
| `Float` | \{ `input`: `number` ; `output`: `number`  } | - |
| `Float.input` | `number` | - |
| `Float.output` | `number` | - |
| `ID` | \{ `input`: `string` ; `output`: `string`  } | - |
| `ID.input` | `string` | - |
| `ID.output` | `string` | - |
| `Int` | \{ `input`: `number` ; `output`: `number`  } | - |
| `Int.input` | `number` | - |
| `Int.output` | `number` | - |
| `Int64` | \{ `input`: `string` ; `output`: `string`  } | A string representing integers up to 9,223,372,036,854,775,807 (i.e. 2^63-1) |
| `Int64.input` | `string` | - |
| `Int64.output` | `string` | - |
| `Int96` | \{ `input`: `string` ; `output`: `string`  } | A string representing integers as big as 2^96-1. The number is signed so the range is from -79,228,162,514,264,337,593,543,950,336 to 79,228,162,514,264,337,593,543,950,336. |
| `Int96.input` | `string` | - |
| `Int96.output` | `string` | - |
| `JSON` | \{ `input`: `Record`\<`string`, `unknown`\> ; `output`: `Record`\<`string`, `unknown`\>  } | The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). |
| `JSON.input` | `Record`\<`string`, `unknown`\> | - |
| `JSON.output` | `Record`\<`string`, `unknown`\> | - |
| `JSONObject` | \{ `input`: `string` ; `output`: `string`  } | The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). |
| `JSONObject.input` | `string` | - |
| `JSONObject.output` | `string` | - |
| `LastMoment` | \{ `input`: `string` ; `output`: `string`  } | The last moment of a specific year, month or day or hour e.g. 1969 or 1969-12 or 1969-12-31 or 1969-12-31T23. All of the previous examples are equivalent to `1969-12-31T23:59:59.999`. |
| `LastMoment.input` | `string` | - |
| `LastMoment.output` | `string` | - |
| `ParameterizedString` | \{ `input`: `string` ; `output`: `string`  } | A string of non-zero length that can contain parameterized values via handlebars syntax. ex: `"Hello from {{country}}"`. |
| `ParameterizedString.input` | `string` | - |
| `ParameterizedString.output` | `string` | - |
| `Period` | \{ `input`: `string` ; `output`: `string`  } | A specific year ("2021"), quarter ("2021-Q1"), month ("2021-02"), day ("2021-02-03") or hour ("2021-02-03T04") |
| `Period.input` | `string` | - |
| `Period.output` | `string` | - |
| `SafeString` | \{ `input`: `string` ; `output`: `string`  } | A string with delimiter characters `/`, `#`, and `:` disallowed, as well as parameters in {{handlebar}} syntax. |
| `SafeString.input` | `string` | - |
| `SafeString.output` | `string` | - |
| `String` | \{ `input`: `string` ; `output`: `string`  } | - |
| `String.input` | `string` | - |
| `String.output` | `string` | - |
| `UTCOffset` | \{ `input`: `string` ; `output`: `string`  } | All hour-aligned offsets from -11:00 to +12:00 are supported, e.g. "-08:00" (PT), "-05:00" (ET), "+00:00" (UTC) |
| `UTCOffset.input` | `string` | - |
| `UTCOffset.output` | `string` | - |

#### Defined in

[generated/generated.ts:27](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L27)

___

### SceneEntryInput

Ƭ **SceneEntryInput**: `Object`

A simulated Ledger Entry posted as a part of a Scene.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"input"``]\> | Any parameters to be used as inputs to this simulated Ledger Entry. |
| `type` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The type of the simulated Ledger Entry. Must match one of the types provided in schema.ledgerEntries.types. |

#### Defined in

[generated/generated.ts:1747](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1747)

___

### SceneEventInput

Ƭ **SceneEventInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `entry` | [`SceneEntryInput`](generated_generated.md#sceneentryinput) | The simulated Ledger Entry. |
| `eventType` | [`SceneEventType`](../enums/generated_generated.SceneEventType.md) | The type of the Scene Event. Currently, only entries are supported. |

#### Defined in

[generated/generated.ts:1754](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1754)

___

### SceneInput

Ƭ **SceneInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | [`SceneEventInput`](generated_generated.md#sceneeventinput)[] | A list of simulated ledger entries that make up the Scene. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``] | The human-readable name of the Scene. |

#### Defined in

[generated/generated.ts:1765](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1765)

___

### Schema

Ƭ **Schema**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Schema"`` | - |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"output"``] | The identifier for a Schema. `key` is unique to a Workspace. |
| `ledgers?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgersConnection`](generated_generated.md#ledgersconnection)\> | The paginated list of ledgers the Schema has been applied to. |
| `name` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | The name of a Schema. It defaults to the `key` if not provided in your SchemaInput. |
| `version` | [`SchemaVersion`](generated_generated.md#schemaversion) | The metadata for a specific SchemaVersion. |
| `versions` | [`SchemaVersionConnection`](generated_generated.md#schemaversionconnection) | A paginated list of SchemaVersions. |

#### Defined in

[generated/generated.ts:1772](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1772)

___

### SchemaConditionInput

Ƭ **SchemaConditionInput**: `Object`

A condition that must be met on a Ledger Account balance. The condition can be
either a `precondition` or `postcondition`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ownBalance?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaInt96ConditionInput`](generated_generated.md#schemaint96conditioninput)\> | A condition on the `ownBalance` of the Ledger Account. |

#### Defined in

[generated/generated.ts:1811](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1811)

___

### SchemaConnection

Ƭ **SchemaConnection**: `Object`

A paginated list of Schemas in a Workspace.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"SchemaConnection"`` | - |
| `nodes` | [`Schema`](generated_generated.md#schema)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | Pagination info for this list. |

#### Defined in

[generated/generated.ts:1817](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1817)

___

### SchemaConsistencyConfigInput

Ƭ **SchemaConsistencyConfigInput**: `Object`

The consistency configuration for entities created within Ledgers created by this Schema.

See [Configure consistency](https://fragment.dev/docs#configure-consistency).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaConsistencyMode`](../enums/generated_generated.SchemaConsistencyMode.md)\> | The consistency mode for the Ledger Entries list query within Ledgers created by this Schema. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |

#### Defined in

[generated/generated.ts:1830](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1830)

___

### SchemaCurrencyMatchInput

Ƭ **SchemaCurrencyMatchInput**: `Object`

Matches a Currency. Can be a built-in [CurrencyCode](https://fragment.dev/api-reference#types-scalars-and-enums-currencycode), custom Currency, or a parameterized string.
If you supply a parameterized string, you must pass in a valid CurrencyCode as a parameter when posting a Ledger Entry.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | [`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``] | The currency code. This must either be a [CurrencyCode](https://fragment.dev/api-reference#types-scalars-and-enums-currencycode) or a parameterized string that resolves to a CurrencyCode . |
| `customCurrencyId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference#mutations-createcustomcurrency) mutation. |

#### Defined in

[generated/generated.ts:1855](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1855)

___

### SchemaExternalAccountMatchInput

Ƭ **SchemaExternalAccountMatchInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `externalId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The External systems's ID of the account |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The FRAGMENT ID of the external account |
| `linkId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The FRAGMENT ID of the link |

#### Defined in

[generated/generated.ts:1862](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1862)

___

### SchemaInput

Ƭ **SchemaInput**: `Object`

Input to the API for creating a Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chartOfAccounts` | [`ChartOfAccountsInput`](generated_generated.md#chartofaccountsinput) | The Chart of Accounts for the Schema. |
| `consistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaConsistencyConfigInput`](generated_generated.md#schemaconsistencyconfiginput)\> | The consistency configuration for this Schema. |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key of the Schema. This is a stable, unique identifier for the Schema. Uniqueness is enforced at the Workspace level. |
| `ledgerEntries?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerEntriesInput`](generated_generated.md#schemaledgerentriesinput)\> | The Ledger Entries to add to the Schema. |
| `name?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The human-readable name of the Schema. |
| `scenes?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SceneInput`](generated_generated.md#sceneinput)[]\> | Any scenes associated with this Schema. |

#### Defined in

[generated/generated.ts:1872](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1872)

___

### SchemaInt96ConditionInput

Ƭ **SchemaInt96ConditionInput**: `Object`

A condition that must be met on a field.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | Amount must be exactly equal to this value. You may not specify this alongside `gte` or `lte`. |
| `gte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | Amount must be greater than or equal to this value. |
| `lte?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | Amount must be less than or equal to this value. |

#### Defined in

[generated/generated.ts:1888](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1888)

___

### SchemaLedgerAccountInput

Ƭ **SchemaLedgerAccountInput**: `Object`

Models a Ledger Account in a Schema.
Upon successfully storing a [Schema](https://fragment.dev/api-reference#types-core-types-schema), a [LedgerAccount](https://fragment.dev/api-reference#types-core-types-ledgeraccount) will be created for
each corresponding non-templated `SchemaLedgerAccountInput` in your Chart of Accounts.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerAccountInput`](generated_generated.md#schemaledgeraccountinput)[]\> | Ledger Accounts to create as children of this Ledger Account. Ledger Accounts may be nested up to a maximum depth of 10. |
| `consistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConsistencyConfigInput`](generated_generated.md#ledgeraccountconsistencyconfiginput)\> | The consistency configuration for this ledger account. See [Configure consistency](https://fragment.dev/docs#configure-consistency). |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaCurrencyMatchInput`](generated_generated.md#schemacurrencymatchinput)\> | The currency of this Ledger Account. If this is not set, and `currencyMode` is not set to `multi`, it is derived from the Chart of Accounts' default. |
| `currencyMode?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMode`](../enums/generated_generated.CurrencyMode.md)\> | If set to `multi`, creates a multi-currency Ledger Account. If set to `single`, creates a single-currency Ledger Account. |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key of this Ledger Account. Keys are used to formulate the unique path of the Ledger Account in your Chart of Accounts. Siblings must have unique keys. |
| `linkedAccount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaExternalAccountMatchInput`](generated_generated.md#schemaexternalaccountmatchinput)\> | The External Account to link to this Ledger Account. It must be provided of `linked` is true. |
| `name?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The human-readable name of this Ledger Account. |
| `template?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Boolean"``][``"input"``]\> | Whether or not this Ledger Account should be templated. |
| `type?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountTypes`](../enums/generated_generated.LedgerAccountTypes.md)\> | The type of ledger account to create. Required if this is a top-level Ledger Account. If not provided, the type will be inferred from the parent. |

#### Defined in

[generated/generated.ts:1902](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1902)

___

### SchemaLedgerAccountMatchInput

Ƭ **SchemaLedgerAccountMatchInput**: `Object`

Matches a Ledger Account in a Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``] | The unique path of the Ledger Account in the Schema. This is a slash-delimited string containing the keys of a Ledger Account and all its direct ancestors. ex: expense-root/subscriptions/netflix For Templated Ledger Accounts, you must supply a parameter in the path that will be used to name an instance of the template. ex: `"expense-root/subscriptions/vendor:{{vendor_name}}"` |

#### Defined in

[generated/generated.ts:1933](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1933)

___

### SchemaLedgerEntriesInput

Ƭ **SchemaLedgerEntriesInput**: `Object`

The Ledger Entries in your Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `types` | [`SchemaLedgerEntryInput`](generated_generated.md#schemaledgerentryinput)[] | A list of Ledger Entry definitions. |

#### Defined in

[generated/generated.ts:1945](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1945)

___

### SchemaLedgerEntryConditionInput

Ƭ **SchemaLedgerEntryConditionInput**: `Object`

A condition that must be met on a Ledger Account when a Ledger Entry is posted.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`SchemaLedgerAccountMatchInput`](generated_generated.md#schemaledgeraccountmatchinput) | The Ledger Account to apply the condition to. |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaCurrencyMatchInput`](generated_generated.md#schemacurrencymatchinput)\> | The currency of the balance to apply the condition to. Required if the Ledger Account matched is a multi-currency Ledger Account. Otherwise, this field is defaults to the Ledger Account's currency. |
| `postcondition?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaConditionInput`](generated_generated.md#schemaconditioninput)\> | A `postcondition` must be met after the Ledger Entry updates are applied. |
| `precondition?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaConditionInput`](generated_generated.md#schemaconditioninput)\> | A `precondition` must be met before any Ledger Entry updates are applied. |

#### Defined in

[generated/generated.ts:1951](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1951)

___

### SchemaLedgerEntryGroupInput

Ƭ **SchemaLedgerEntryGroupInput**: `Object`

A Ledger Entry Group associated with a Ledger Entry type.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key for this Ledger Entry Group. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``] | The value associated with this Ledger Entry Group. |

#### Defined in

[generated/generated.ts:1966](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1966)

___

### SchemaLedgerEntryInput

Ƭ **SchemaLedgerEntryInput**: `Object`

A Ledger Entry in a Schema. All Ledger Entries defined in a Schema must have a unique `type`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerEntryConditionInput`](generated_generated.md#schemaledgerentryconditioninput)[]\> | Conditions that must be satisfied to post this Ledger Entry. The Ledger Entry will reject with a BadRequestError if any condition is not met. You can only add a condition on a Ledger Account containing a Line in this Ledger Entry. |
| `description?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | Human-readable description of the Ledger Entry. |
| `groups?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerEntryGroupInput`](generated_generated.md#schemaledgerentrygroupinput)[]\> | Ledger Entries posted with this type will be in these Ledger Entry Groups. |
| `lines?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerLineInput`](generated_generated.md#schemaledgerlineinput)[]\> | The Ledger Lines in the Ledger Entry. If provided, when posting a Typed Entry, a [LedgerEntry](https://fragment.dev/api-reference#types-core-types-ledgerline) will be posted containing [LedgerLines](https://fragment.dev/api-reference#types-core-types-ledgerline) corresponding to the values you provide here. If your lines contain parameters, you must supply values for those parameters that balance out the Ledger Entry. If not provided, lines will be required when posting a Typed Entry. |
| `parameters?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"input"``]\> | Fixed partial set of parameters to be included in a templated Ledger Entry. |
| `tags?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaLedgerEntryTagInput`](generated_generated.md#schemaledgerentrytaginput)[]\> | Ledger Entries posted with this type will be associated with these tags. |
| `type` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The type of this Ledger Entry. This is a stable, unique identifier for this entry. Uniqueness is enforced at the Schema level. You can filter on this field when querying for Ledger Entries. See the docs on [LedgerEntryFilterSet](https://fragment.dev/api-reference#types-filter-types-ledgerentriesfilterset) |

#### Defined in

[generated/generated.ts:1974](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1974)

___

### SchemaLedgerEntryTagInput

Ƭ **SchemaLedgerEntryTagInput**: `Object`

A tag associated with a Ledger Entry type.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key for this tag. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``] | The value associated with the given key for this tag. |

#### Defined in

[generated/generated.ts:1999](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1999)

___

### SchemaLedgerLineInput

Ƭ **SchemaLedgerLineInput**: `Object`

A Ledger Line in a Ledger Entry.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`SchemaLedgerAccountMatchInput`](generated_generated.md#schemaledgeraccountmatchinput) | The Ledger Account this Ledger Line will be posted to. It supports parameters in its attributes via handlebars syntax. |
| `amount?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The amount of the Ledger Line. It supports parameters via the handlebars syntax and addition (+) and subtraction (-). |
| `currency?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaCurrencyMatchInput`](generated_generated.md#schemacurrencymatchinput)\> | The currency of the Ledger Line. This is required if the Ledger Account has currencyMode multi. It supports parameters in its attributes via handlebars syntax. |
| `description?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | Human-readable description of the line. |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key for the Ledger Line. Ledger Line keys must be unique within a Ledger Entry. Key can be filtered on as part of the LedgerLinesFilterSet. |
| `tx?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`SchemaTxMatchInput`](generated_generated.md#schematxmatchinput)\> | The external transaction to reconcile. This field is required if the Ledger Account being posted to is a Linked Ledger Account. Otherwise, this field is disallowed. It supports parameters in its attributes via handlebars syntax. See the docs on [reconciliation and Linked Ledger Accounts](https://fragment.dev/docs#reconcile-transactions). |

#### Defined in

[generated/generated.ts:2007](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2007)

___

### SchemaLedgersArgs

Ƭ **SchemaLedgersArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1789](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1789)

___

### SchemaMatchInput

Ƭ **SchemaMatchInput**: `Object`

An object used to retrieve a Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key to retrieve a Schema by. `key` is unique to a Workspace. |
| `version?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> | Optional parameter to specify version of requested Schema. If not provided, it defaults to 0, representing the latest available version for the provided Schema key. |

#### Defined in

[generated/generated.ts:2035](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2035)

___

### SchemaTxMatchInput

Ƭ **SchemaTxMatchInput**: `Object`

Matches a transaction at an external system.
This is used to specify the transaction being reconciled into a Linked Ledger Account

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `externalId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The external system's ID for the transaction. |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ParameterizedString"``][``"input"``]\> | The FRAGMENT ID for the transaction. |

#### Defined in

[generated/generated.ts:2052](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2052)

___

### SchemaVersion

Ƭ **SchemaVersion**: `Object`

An instance of a Schema stored in a Workspace.
A new SchemaVersion is created each time a Schema is stored.
It stores the Chart of Accounts and list of Ledger Entries as well as a history of its Ledger migrations.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"SchemaVersion"`` | - |
| `created` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | - |
| `json` | [`Scalars`](generated_generated.md#scalars)[``"JSON"``][``"output"``] | - |
| `migrations?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerMigrationConnection`](generated_generated.md#ledgermigrationconnection)\> | - |
| `version` | [`Scalars`](generated_generated.md#scalars)[``"Int"``][``"output"``] | The version of the schema. |

#### Defined in

[generated/generated.ts:2064](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2064)

___

### SchemaVersionArgs

Ƭ **SchemaVersionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1796](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1796)

___

### SchemaVersionConnection

Ƭ **SchemaVersionConnection**: `Object`

A paginated list of SchemaVersions for a given Schema.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"SchemaVersionConnection"`` | - |
| `nodes` | [`SchemaVersion`](generated_generated.md#schemaversion)[] | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | Pagination info for this list. |

#### Defined in

[generated/generated.ts:2074](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2074)

___

### SchemaVersionsArgs

Ƭ **SchemaVersionsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `before?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `first?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |
| `last?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

[generated/generated.ts:1800](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L1800)

___

### Sdk

Ƭ **Sdk**: `ReturnType`\<typeof [`getSdk`](generated_generated.md#getsdk)\>

#### Defined in

[generated/generated.ts:3704](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3704)

___

### SdkFunctionWrapper

Ƭ **SdkFunctionWrapper**: \<T\>(`action`: (`requestHeaders?`: `Record`\<`string`, `string`\>) => `Promise`\<`T`\>, `operationName`: `string`, `operationType?`: `string`, `variables?`: `any`) => `Promise`\<`T`\>

#### Type declaration

▸ \<`T`\>(`action`, `operationName`, `operationType?`, `variables?`): `Promise`\<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | (`requestHeaders?`: `Record`\<`string`, `string`\>) => `Promise`\<`T`\> |
| `operationName` | `string` |
| `operationType?` | `string` |
| `variables?` | `any` |

##### Returns

`Promise`\<`T`\>

#### Defined in

[generated/generated.ts:3399](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3399)

___

### StoreSchemaMutation

Ƭ **StoreSchemaMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `storeSchema` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"StoreSchemaResult"`` ; `schema`: \{ `__typename?`: ``"Schema"`` ; `key`: `string` ; `name`: `string` ; `version`: \{ `__typename?`: ``"SchemaVersion"`` ; `created`: `string` ; `version`: `number`  }  }  } |

#### Defined in

[generated/generated.ts:2306](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2306)

___

### StoreSchemaMutationVariables

Ƭ **StoreSchemaMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `schema`: [`SchemaInput`](generated_generated.md#schemainput)  }\>

#### Defined in

[generated/generated.ts:2302](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2302)

___

### StoreSchemaResponse

Ƭ **StoreSchemaResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`StoreSchemaResult`](generated_generated.md#storeschemaresult)

Returned by the [storeSchema](https://fragment.dev/api-reference#mutations-storeschema) mutation.

#### Defined in

[generated/generated.ts:2083](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2083)

___

### StoreSchemaResult

Ƭ **StoreSchemaResult**: `Object`

`StoreSchemaResult` represents a successful execution of `storeSchema`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"StoreSchemaResult"`` | - |
| `schema` | [`Schema`](generated_generated.md#schema) | The Schema that was stored as a result of calling `storeSchema`. |

#### Defined in

[generated/generated.ts:2089](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2089)

___

### StringFilter

Ƭ **StringFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``][]\> |

#### Defined in

[generated/generated.ts:2095](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2095)

___

### StringMatchFilter

Ƭ **StringMatchFilter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | Must exactly equal the provided value |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``][]\> | Must exactly equal one of the provided values |
| `matches?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | Must match the provided pattern. Wildcards ("*") will match any substring |

#### Defined in

[generated/generated.ts:2100](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2100)

___

### StripeLink

Ƭ **StripeLink**: [`Link`](generated_generated.md#link) & \{ `__typename?`: ``"StripeLink"`` ; `created`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `externalAccounts`: [`ExternalAccountsConnection`](generated_generated.md#externalaccountsconnection) ; `id`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] ; `name`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `stripeEnv`: [`StripeEnv`](../enums/generated_generated.StripeEnv.md)  }

#### Defined in

[generated/generated.ts:2114](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2114)

___

### SyncCustomAccountsMutation

Ƭ **SyncCustomAccountsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `syncCustomAccounts` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"SyncCustomAccountsResult"`` ; `accounts`: \{ `__typename?`: ``"ExternalAccount"`` ; `currency?`: \{ `__typename?`: ``"Currency"`` ; `code`: [`CurrencyCode`](../enums/generated_generated.CurrencyCode.md) ; `customCurrencyId?`: `string` \| ``null``  } \| ``null`` ; `externalId`: `string` ; `id`: `string` ; `name`: `string`  }[]  } |

#### Defined in

[generated/generated.ts:2551](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2551)

___

### SyncCustomAccountsMutationVariables

Ƭ **SyncCustomAccountsMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `accounts`: [`CustomAccountInput`](generated_generated.md#customaccountinput)[] \| [`CustomAccountInput`](generated_generated.md#customaccountinput) ; `linkId`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]  }\>

#### Defined in

[generated/generated.ts:2546](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2546)

___

### SyncCustomAccountsResponse

Ƭ **SyncCustomAccountsResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`SyncCustomAccountsResult`](generated_generated.md#synccustomaccountsresult)

#### Defined in

[generated/generated.ts:2128](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2128)

___

### SyncCustomAccountsResult

Ƭ **SyncCustomAccountsResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"SyncCustomAccountsResult"`` | - |
| `accounts` | [`ExternalAccount`](generated_generated.md#externalaccount)[] | The external accounts that were synced. |

#### Defined in

[generated/generated.ts:2133](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2133)

___

### SyncCustomTxsMutation

Ƭ **SyncCustomTxsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `syncCustomTxs` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"SyncCustomTxsResult"`` ; `txs`: \{ `__typename`: ``"Tx"`` ; `amount`: `string` ; `description`: `string` ; `externalAccountId`: `string` ; `externalId`: `string` ; `id`: `string` ; `linkId`: `string` ; `posted`: `string`  }[]  } |

#### Defined in

[generated/generated.ts:2577](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2577)

___

### SyncCustomTxsMutationVariables

Ƭ **SyncCustomTxsMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `linkId`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``] ; `txs`: [`CustomTxInput`](generated_generated.md#customtxinput)[] \| [`CustomTxInput`](generated_generated.md#customtxinput)  }\>

#### Defined in

[generated/generated.ts:2572](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2572)

___

### SyncCustomTxsResponse

Ƭ **SyncCustomTxsResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`SyncCustomTxsResult`](generated_generated.md#synccustomtxsresult)

#### Defined in

[generated/generated.ts:2139](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2139)

___

### SyncCustomTxsResult

Ƭ **SyncCustomTxsResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"SyncCustomTxsResult"`` |
| `txs` | [`Tx`](generated_generated.md#tx)[] |

#### Defined in

[generated/generated.ts:2144](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2144)

___

### TagFilter

Ƭ **TagFilter**: `Object`

Filters a result set based on the tags it contains.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TagMatchInput`](generated_generated.md#tagmatchinput)\> |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TagMatchInput`](generated_generated.md#tagmatchinput)[]\> |

#### Defined in

[generated/generated.ts:2150](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2150)

___

### TagMatchInput

Ƭ **TagMatchInput**: `Object`

Specifies a single tag that an entity is expected to have. You must specify both the key and the value.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The key of this tag. |
| `value` | [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] | The value associated with this tag's key. |

#### Defined in

[generated/generated.ts:2156](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2156)

___

### Tx

Ƭ **Tx**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Tx"`` | - |
| `accountId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | FRAGMENT ID of this transaction's external account |
| `amount` | [`Scalars`](generated_generated.md#scalars)[``"Int96"``][``"output"``] | Integer amount in cents. Positive indicates money entering the external account, negative indicates money leaving |
| `currency?` | [`Maybe`](generated_generated.md#maybe)\<[`Currency`](generated_generated.md#currency)\> | Currency of this Tx |
| `date` | [`Scalars`](generated_generated.md#scalars)[``"Date"``][``"output"``] | Date this Tx posted to the external account |
| `description` | [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] | Description at the external account (can be overridden within the Fragment Dashboard) |
| `externalAccount` | [`ExternalAccount`](generated_generated.md#externalaccount) | The External Account that this transaction belongs to. |
| `externalAccountId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | ID in the external system of this transaction's external account |
| `externalId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | ID of this transaction in the external system |
| `id` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | - |
| `ledgerEntries?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerEntriesConnection`](generated_generated.md#ledgerentriesconnection)\> | Returns ledger entries that are linked to this transaction. You can link the same external account to multiple ledgers, so there could be multipe entries associated with one transaction - one for each linked ledger account this transaction has been reconciled with |
| `ledgerEntryIds?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``][]\> | Same as ledgerEntries, but returns an array of IDs instead |
| `ledgerLineIds?` | [`Maybe`](generated_generated.md#maybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``][]\> | Same as ledgerLines, but returns an array of IDs instead |
| `ledgerLines?` | [`Maybe`](generated_generated.md#maybe)\<[`LedgerLinesConnection`](generated_generated.md#ledgerlinesconnection)\> | Returns ledger lines that are linked to this transaction. You can link the same external account to multiple ledgers, so there could be multipe lines associated with one transaction - one for each linked ledger account this transaction has been reconciled with |
| `link` | [`CustomLink`](generated_generated.md#customlink) \| [`IncreaseLink`](generated_generated.md#increaselink) \| [`StripeLink`](generated_generated.md#stripelink) \| [`UnitLink`](generated_generated.md#unitlink) | This transaction's Link. |
| `linkId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | FRAGMENT ID of this transaction's Link |
| `posted` | [`Scalars`](generated_generated.md#scalars)[``"DateTime"``][``"output"``] | ISO-8601 timestamp this Tx posted to the external account |
| `workspaceId` | [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] | **`Deprecated`** Callers should not need to query or store this value. |

#### Defined in

[generated/generated.ts:2163](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2163)

___

### TxMatchInput

Ƭ **TxMatchInput**: `Object`

Specify a Tx by using `id` or `externalId`, the Link it belongs to by `linkId`, and the External Account it is a part of by `accountId` or `externalAccountId`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the external account |
| `externalAccountId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The external system's ID for the account |
| `externalId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The external system's ID for the transaction |
| `id?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the transaction |
| `linkId?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"ID"``][``"input"``]\> | The FRAGMENT ID of the link |

#### Defined in

[generated/generated.ts:2201](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2201)

___

### TxTypeFilter

Ƭ **TxTypeFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TxType`](../enums/generated_generated.TxType.md)\> |
| `in?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`TxType`](../enums/generated_generated.TxType.md)[]\> |

#### Defined in

[generated/generated.ts:2219](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2219)

___

### TxsConnection

Ƭ **TxsConnection**: `Object`

A paginated list of Txs

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"TxsConnection"`` | - |
| `nodes?` | [`Maybe`](generated_generated.md#maybe)\<[`Tx`](generated_generated.md#tx)[]\> | The current page of results |
| `pageInfo` | [`PageInfo`](generated_generated.md#pageinfo) | The [pagination info](https://fragment.dev/api-reference#types-connection-types-pageinfo) for this list |

#### Defined in

[generated/generated.ts:2225](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2225)

___

### UnitLink

Ƭ **UnitLink**: [`Link`](generated_generated.md#link) & \{ `__typename?`: ``"UnitLink"`` ; `created`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `externalAccounts`: [`ExternalAccountsConnection`](generated_generated.md#externalaccountsconnection) ; `id`: [`Scalars`](generated_generated.md#scalars)[``"ID"``][``"output"``] ; `name`: [`Scalars`](generated_generated.md#scalars)[``"String"``][``"output"``] ; `unitEnv`: [`UnitEnv`](../enums/generated_generated.UnitEnv.md)  }

#### Defined in

[generated/generated.ts:2238](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2238)

___

### UpdateLedgerAccountInput

Ƭ **UpdateLedgerAccountInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `consistencyConfig?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerAccountConsistencyConfigInput`](generated_generated.md#ledgeraccountconsistencyconfiginput)\> | The consistency configuration for this ledger account. This defines how updates to this ledger account's balance are handled. |
| `name?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | The name to update the ledger account to |

#### Defined in

[generated/generated.ts:2252](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2252)

___

### UpdateLedgerAccountResponse

Ƭ **UpdateLedgerAccountResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`UpdateLedgerAccountResult`](generated_generated.md#updateledgeraccountresult)

#### Defined in

[generated/generated.ts:2259](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2259)

___

### UpdateLedgerAccountResult

Ƭ **UpdateLedgerAccountResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"UpdateLedgerAccountResult"`` | - |
| `ledgerAccount` | [`LedgerAccount`](generated_generated.md#ledgeraccount) | The ledger account that was updated |

#### Defined in

[generated/generated.ts:2264](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2264)

___

### UpdateLedgerEntryInput

Ƭ **UpdateLedgerEntryInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags` | [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[] | The list of Tags to add and/or update on this Ledger Entry. |

#### Defined in

[generated/generated.ts:2270](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2270)

___

### UpdateLedgerEntryResponse

Ƭ **UpdateLedgerEntryResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`UpdateLedgerEntryResult`](generated_generated.md#updateledgerentryresult)

#### Defined in

[generated/generated.ts:2275](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2275)

___

### UpdateLedgerEntryResult

Ƭ **UpdateLedgerEntryResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"UpdateLedgerEntryResult"`` | - |
| `entry` | [`LedgerEntry`](generated_generated.md#ledgerentry) | The Ledger Entry that was updated. |

#### Defined in

[generated/generated.ts:2280](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2280)

___

### UpdateLedgerInput

Ƭ **UpdateLedgerInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | [`InputMaybe`](generated_generated.md#inputmaybe)\<[`Scalars`](generated_generated.md#scalars)[``"String"``][``"input"``]\> | The new Ledger name. |

#### Defined in

[generated/generated.ts:2286](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2286)

___

### UpdateLedgerMutation

Ƭ **UpdateLedgerMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Mutation"`` |
| `updateLedger` | \{ `__typename`: ``"BadRequestError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"InternalError"`` ; `code`: `string` ; `message`: `string`  } \| \{ `__typename`: ``"UpdateLedgerResult"`` ; `ledger`: \{ `__typename?`: ``"Ledger"`` ; `id`: `string` ; `ik`: `string` ; `name`: `string`  }  } |

#### Defined in

[generated/generated.ts:2494](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2494)

___

### UpdateLedgerMutationVariables

Ƭ **UpdateLedgerMutationVariables**: [`Exact`](generated_generated.md#exact)\<\{ `ledgerIk`: [`Scalars`](generated_generated.md#scalars)[``"SafeString"``][``"input"``] ; `update`: [`UpdateLedgerInput`](generated_generated.md#updateledgerinput)  }\>

#### Defined in

[generated/generated.ts:2489](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2489)

___

### UpdateLedgerResponse

Ƭ **UpdateLedgerResponse**: [`BadRequestError`](generated_generated.md#badrequesterror) \| [`InternalError`](generated_generated.md#internalerror) \| [`UpdateLedgerResult`](generated_generated.md#updateledgerresult)

#### Defined in

[generated/generated.ts:2291](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2291)

___

### UpdateLedgerResult

Ƭ **UpdateLedgerResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"UpdateLedgerResult"`` | - |
| `ledger` | [`Ledger`](generated_generated.md#ledger) | The updated Ledger. |

#### Defined in

[generated/generated.ts:2296](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2296)

## Variables

### AddLedgerEntryDocument

• `Const` **AddLedgerEntryDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:2913](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2913)

___

### AddLedgerEntryRuntimeDocument

• `Const` **AddLedgerEntryRuntimeDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:2959](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2959)

___

### CreateCustomLinkDocument

• `Const` **CreateCustomLinkDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3109](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3109)

___

### CreateLedgerDocument

• `Const` **CreateLedgerDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:2886](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2886)

___

### GetLedgerAccountBalanceDocument

• `Const` **GetLedgerAccountBalanceDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3366](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3366)

___

### GetLedgerAccountLinesDocument

• `Const` **GetLedgerAccountLinesDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3336](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3336)

___

### GetLedgerDocument

• `Const` **GetLedgerDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3173](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3173)

___

### GetLedgerEntryDocument

• `Const` **GetLedgerEntryDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3184](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3184)

___

### GetSchemaDocument

• `Const` **GetSchemaDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3385](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3385)

___

### ListLedgerAccountBalancesDocument

• `Const` **ListLedgerAccountBalancesDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3234](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3234)

___

### ListLedgerAccountsDocument

• `Const` **ListLedgerAccountsDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3204](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3204)

___

### ListMultiCurrencyLedgerAccountBalancesDocument

• `Const` **ListMultiCurrencyLedgerAccountBalancesDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3274](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3274)

___

### ReconcileTxDocument

• `Const` **ReconcileTxDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3005](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3005)

___

### ReconcileTxRuntimeDocument

• `Const` **ReconcileTxRuntimeDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3048](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3048)

___

### StoreSchemaDocument

• `Const` **StoreSchemaDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:2865](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L2865)

___

### SyncCustomAccountsDocument

• `Const` **SyncCustomAccountsDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3128](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3128)

___

### SyncCustomTxsDocument

• `Const` **SyncCustomTxsDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3150](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3150)

___

### UpdateLedgerDocument

• `Const` **UpdateLedgerDocument**: `DocumentNode`

#### Defined in

[generated/generated.ts:3091](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3091)

## Functions

### getSdk

▸ **getSdk**(`client`, `withWrapper?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `client` | `GraphQLClient` | `undefined` |
| `withWrapper` | [`SdkFunctionWrapper`](generated_generated.md#sdkfunctionwrapper) | `defaultWrapper` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addLedgerEntry` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput) \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[]\> ; `ik`: `string` ; `ledgerIk`: `string` ; `parameters`: `Record`\<`string`, `unknown`\> ; `posted?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput) \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[]\> ; `type`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`AddLedgerEntryMutation`](generated_generated.md#addledgerentrymutation)\> |
| `addLedgerEntryRuntime` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput) \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[]\> ; `ik`: `string` ; `ledgerIk`: `string` ; `lines`: [`LedgerLineInput`](generated_generated.md#ledgerlineinput) \| [`LedgerLineInput`](generated_generated.md#ledgerlineinput)[] ; `posted?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput) \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[]\> ; `type`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`AddLedgerEntryRuntimeMutation`](generated_generated.md#addledgerentryruntimemutation)\> |
| `createCustomLink` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `ik`: `string` ; `name`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`CreateCustomLinkMutation`](generated_generated.md#createcustomlinkmutation)\> |
| `createLedger` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `ik`: `string` ; `ledger`: [`CreateLedgerInput`](generated_generated.md#createledgerinput) ; `schemaKey`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`CreateLedgerMutation`](generated_generated.md#createledgermutation)\> |
| `getLedger` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `ik`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`GetLedgerQuery`](generated_generated.md#getledgerquery)\> |
| `getLedgerAccountBalance` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `balanceCurrency?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> ; `ledgerIk`: `string` ; `ownBalanceConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\> ; `path`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`GetLedgerAccountBalanceQuery`](generated_generated.md#getledgeraccountbalancequery)\> |
| `getLedgerAccountLines` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `filter?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerLinesFilterSet`](generated_generated.md#ledgerlinesfilterset)\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`number`\> ; `ledgerIk`: `string` ; `path`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`GetLedgerAccountLinesQuery`](generated_generated.md#getledgeraccountlinesquery)\> |
| `getLedgerEntry` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `ik`: `string` ; `ledgerIk`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`GetLedgerEntryQuery`](generated_generated.md#getledgerentryquery)\> |
| `getSchema` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `key`: `string` ; `version?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`number`\>  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`GetSchemaQuery`](generated_generated.md#getschemaquery)\> |
| `listLedgerAccountBalances` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `balanceCurrency?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`CurrencyMatchInput`](generated_generated.md#currencymatchinput)\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`number`\> ; `ledgerIk`: `string` ; `ownBalanceConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\>  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`ListLedgerAccountBalancesQuery`](generated_generated.md#listledgeraccountbalancesquery)\> |
| `listLedgerAccounts` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`number`\> ; `ledgerIk`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`ListLedgerAccountsQuery`](generated_generated.md#listledgeraccountsquery)\> |
| `listMultiCurrencyLedgerAccountBalances` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `after?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `balanceAt?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `before?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`string`\> ; `first?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<`number`\> ; `ledgerIk`: `string` ; `ownBalancesConsistencyMode?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`ReadBalanceConsistencyMode`](../enums/generated_generated.ReadBalanceConsistencyMode.md)\>  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`ListMultiCurrencyLedgerAccountBalancesQuery`](generated_generated.md#listmulticurrencyledgeraccountbalancesquery)\> |
| `reconcileTx` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput) \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[]\> ; `ledgerIk`: `string` ; `parameters`: `Record`\<`string`, `unknown`\> ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput) \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[]\> ; `type`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`ReconcileTxMutation`](generated_generated.md#reconciletxmutation)\> |
| `reconcileTxRuntime` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `groups?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput) \| [`LedgerEntryGroupInput`](generated_generated.md#ledgerentrygroupinput)[]\> ; `ledgerIk`: `string` ; `lines`: [`LedgerLineInput`](generated_generated.md#ledgerlineinput) \| [`LedgerLineInput`](generated_generated.md#ledgerlineinput)[] ; `tags?`: [`InputMaybe`](generated_generated.md#inputmaybe)\<[`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput) \| [`LedgerEntryTagInput`](generated_generated.md#ledgerentrytaginput)[]\> ; `type`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`ReconcileTxRuntimeMutation`](generated_generated.md#reconciletxruntimemutation)\> |
| `storeSchema` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `schema`: [`SchemaInput`](generated_generated.md#schemainput)  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`StoreSchemaMutation`](generated_generated.md#storeschemamutation)\> |
| `syncCustomAccounts` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `accounts`: [`CustomAccountInput`](generated_generated.md#customaccountinput) \| [`CustomAccountInput`](generated_generated.md#customaccountinput)[] ; `linkId`: `string`  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`SyncCustomAccountsMutation`](generated_generated.md#synccustomaccountsmutation)\> |
| `syncCustomTxs` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `linkId`: `string` ; `txs`: [`CustomTxInput`](generated_generated.md#customtxinput) \| [`CustomTxInput`](generated_generated.md#customtxinput)[]  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`SyncCustomTxsMutation`](generated_generated.md#synccustomtxsmutation)\> |
| `updateLedger` | (`variables`: [`Exact`](generated_generated.md#exact)\<\{ `ledgerIk`: `string` ; `update`: [`UpdateLedgerInput`](generated_generated.md#updateledgerinput)  }\>, `requestHeaders?`: `GraphQLClientRequestHeaders`) => `Promise`\<[`UpdateLedgerMutation`](generated_generated.md#updateledgermutation)\> |

#### Defined in

[generated/generated.ts:3413](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/generated/generated.ts#L3413)
