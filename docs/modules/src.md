[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / src

# Module: src

## Table of contents

### References

- [AddLedgerEntryDocument](src.md#addledgerentrydocument)
- [AddLedgerEntryMutation](src.md#addledgerentrymutation)
- [AddLedgerEntryMutationVariables](src.md#addledgerentrymutationvariables)
- [AddLedgerEntryResponse](src.md#addledgerentryresponse)
- [AddLedgerEntryResult](src.md#addledgerentryresult)
- [AddLedgerEntryRuntimeDocument](src.md#addledgerentryruntimedocument)
- [AddLedgerEntryRuntimeMutation](src.md#addledgerentryruntimemutation)
- [AddLedgerEntryRuntimeMutationVariables](src.md#addledgerentryruntimemutationvariables)
- [BadRequestError](src.md#badrequesterror)
- [BalanceUpdateConsistencyMode](src.md#balanceupdateconsistencymode)
- [ChartOfAccountsInput](src.md#chartofaccountsinput)
- [CreateCustomCurrencyInput](src.md#createcustomcurrencyinput)
- [CreateCustomCurrencyResponse](src.md#createcustomcurrencyresponse)
- [CreateCustomCurrencyResult](src.md#createcustomcurrencyresult)
- [CreateCustomLinkDocument](src.md#createcustomlinkdocument)
- [CreateCustomLinkMutation](src.md#createcustomlinkmutation)
- [CreateCustomLinkMutationVariables](src.md#createcustomlinkmutationvariables)
- [CreateCustomLinkResponse](src.md#createcustomlinkresponse)
- [CreateCustomLinkResult](src.md#createcustomlinkresult)
- [CreateLedgerAccountInput](src.md#createledgeraccountinput)
- [CreateLedgerAccountResponse](src.md#createledgeraccountresponse)
- [CreateLedgerAccountResult](src.md#createledgeraccountresult)
- [CreateLedgerAccountsInput](src.md#createledgeraccountsinput)
- [CreateLedgerAccountsResponse](src.md#createledgeraccountsresponse)
- [CreateLedgerAccountsResult](src.md#createledgeraccountsresult)
- [CreateLedgerDocument](src.md#createledgerdocument)
- [CreateLedgerInput](src.md#createledgerinput)
- [CreateLedgerMutation](src.md#createledgermutation)
- [CreateLedgerMutationVariables](src.md#createledgermutationvariables)
- [CreateLedgerResponse](src.md#createledgerresponse)
- [CreateLedgerResult](src.md#createledgerresult)
- [Currency](src.md#currency)
- [CurrencyAmount](src.md#currencyamount)
- [CurrencyAmountConnection](src.md#currencyamountconnection)
- [CurrencyCode](src.md#currencycode)
- [CurrencyFilter](src.md#currencyfilter)
- [CurrencyMatchInput](src.md#currencymatchinput)
- [CurrencyMode](src.md#currencymode)
- [CustomAccountInput](src.md#customaccountinput)
- [CustomCurrenciesConnection](src.md#customcurrenciesconnection)
- [CustomLink](src.md#customlink)
- [CustomTxInput](src.md#customtxinput)
- [DateFilter](src.md#datefilter)
- [DateTimeFilter](src.md#datetimefilter)
- [EntryGroupMatchInput](src.md#entrygroupmatchinput)
- [Error](src.md#error)
- [Exact](src.md#exact)
- [ExternalAccount](src.md#externalaccount)
- [ExternalAccountFilter](src.md#externalaccountfilter)
- [ExternalAccountLedgerAccountsArgs](src.md#externalaccountledgeraccountsargs)
- [ExternalAccountMatchInput](src.md#externalaccountmatchinput)
- [ExternalAccountTxsArgs](src.md#externalaccounttxsargs)
- [ExternalAccountsConnection](src.md#externalaccountsconnection)
- [ExternalTransferType](src.md#externaltransfertype)
- [ExternalTxSource](src.md#externaltxsource)
- [FragmentClient](src.md#fragmentclient)
- [GetLedgerAccountBalanceDocument](src.md#getledgeraccountbalancedocument)
- [GetLedgerAccountBalanceQuery](src.md#getledgeraccountbalancequery)
- [GetLedgerAccountBalanceQueryVariables](src.md#getledgeraccountbalancequeryvariables)
- [GetLedgerAccountLinesDocument](src.md#getledgeraccountlinesdocument)
- [GetLedgerAccountLinesQuery](src.md#getledgeraccountlinesquery)
- [GetLedgerAccountLinesQueryVariables](src.md#getledgeraccountlinesqueryvariables)
- [GetLedgerDocument](src.md#getledgerdocument)
- [GetLedgerEntryDocument](src.md#getledgerentrydocument)
- [GetLedgerEntryQuery](src.md#getledgerentryquery)
- [GetLedgerEntryQueryVariables](src.md#getledgerentryqueryvariables)
- [GetLedgerQuery](src.md#getledgerquery)
- [GetLedgerQueryVariables](src.md#getledgerqueryvariables)
- [GetSchemaDocument](src.md#getschemadocument)
- [GetSchemaQuery](src.md#getschemaquery)
- [GetSchemaQueryVariables](src.md#getschemaqueryvariables)
- [GroupBalanceAccountFilter](src.md#groupbalanceaccountfilter)
- [IkReplay](src.md#ikreplay)
- [IncreaseEnv](src.md#increaseenv)
- [IncreaseLink](src.md#increaselink)
- [Incremental](src.md#incremental)
- [InputMaybe](src.md#inputmaybe)
- [Int96Condition](src.md#int96condition)
- [Int96ConditionInput](src.md#int96conditioninput)
- [Int96Filter](src.md#int96filter)
- [InternalError](src.md#internalerror)
- [Ledger](src.md#ledger)
- [LedgerAccount](src.md#ledgeraccount)
- [LedgerAccountBalanceArgs](src.md#ledgeraccountbalanceargs)
- [LedgerAccountBalanceChangeArgs](src.md#ledgeraccountbalancechangeargs)
- [LedgerAccountBalanceChangesArgs](src.md#ledgeraccountbalancechangesargs)
- [LedgerAccountBalancesArgs](src.md#ledgeraccountbalancesargs)
- [LedgerAccountChildBalanceArgs](src.md#ledgeraccountchildbalanceargs)
- [LedgerAccountChildBalanceChangeArgs](src.md#ledgeraccountchildbalancechangeargs)
- [LedgerAccountChildBalanceChangesArgs](src.md#ledgeraccountchildbalancechangesargs)
- [LedgerAccountChildBalancesArgs](src.md#ledgeraccountchildbalancesargs)
- [LedgerAccountChildLedgerAccountsArgs](src.md#ledgeraccountchildledgeraccountsargs)
- [LedgerAccountCondition](src.md#ledgeraccountcondition)
- [LedgerAccountConditionInput](src.md#ledgeraccountconditioninput)
- [LedgerAccountConsistencyConfig](src.md#ledgeraccountconsistencyconfig)
- [LedgerAccountConsistencyConfigInput](src.md#ledgeraccountconsistencyconfiginput)
- [LedgerAccountFilter](src.md#ledgeraccountfilter)
- [LedgerAccountLinesArgs](src.md#ledgeraccountlinesargs)
- [LedgerAccountMatchInput](src.md#ledgeraccountmatchinput)
- [LedgerAccountOwnBalanceArgs](src.md#ledgeraccountownbalanceargs)
- [LedgerAccountOwnBalanceChangeArgs](src.md#ledgeraccountownbalancechangeargs)
- [LedgerAccountOwnBalanceChangesArgs](src.md#ledgeraccountownbalancechangesargs)
- [LedgerAccountOwnBalancesArgs](src.md#ledgeraccountownbalancesargs)
- [LedgerAccountTypeFilter](src.md#ledgeraccounttypefilter)
- [LedgerAccountTypes](src.md#ledgeraccounttypes)
- [LedgerAccountUnreconciledTxsArgs](src.md#ledgeraccountunreconciledtxsargs)
- [LedgerAccountsConnection](src.md#ledgeraccountsconnection)
- [LedgerAccountsFilterSet](src.md#ledgeraccountsfilterset)
- [LedgerEntriesConnection](src.md#ledgerentriesconnection)
- [LedgerEntriesFilterSet](src.md#ledgerentriesfilterset)
- [LedgerEntry](src.md#ledgerentry)
- [LedgerEntryCondition](src.md#ledgerentrycondition)
- [LedgerEntryConditionInput](src.md#ledgerentryconditioninput)
- [LedgerEntryFilter](src.md#ledgerentryfilter)
- [LedgerEntryGroup](src.md#ledgerentrygroup)
- [LedgerEntryGroupBalance](src.md#ledgerentrygroupbalance)
- [LedgerEntryGroupBalanceConnection](src.md#ledgerentrygroupbalanceconnection)
- [LedgerEntryGroupBalanceFilterSet](src.md#ledgerentrygroupbalancefilterset)
- [LedgerEntryGroupBalancesArgs](src.md#ledgerentrygroupbalancesargs)
- [LedgerEntryGroupInput](src.md#ledgerentrygroupinput)
- [LedgerEntryGroupLedgerEntriesArgs](src.md#ledgerentrygroupledgerentriesargs)
- [LedgerEntryGroupMatchInput](src.md#ledgerentrygroupmatchinput)
- [LedgerEntryGroupsConnection](src.md#ledgerentrygroupsconnection)
- [LedgerEntryGroupsFilterSet](src.md#ledgerentrygroupsfilterset)
- [LedgerEntryInput](src.md#ledgerentryinput)
- [LedgerEntryMatchInput](src.md#ledgerentrymatchinput)
- [LedgerEntryTag](src.md#ledgerentrytag)
- [LedgerEntryTagInput](src.md#ledgerentrytaginput)
- [LedgerLedgerAccountsArgs](src.md#ledgerledgeraccountsargs)
- [LedgerLedgerEntriesArgs](src.md#ledgerledgerentriesargs)
- [LedgerLedgerEntryGroupArgs](src.md#ledgerledgerentrygroupargs)
- [LedgerLedgerEntryGroupsArgs](src.md#ledgerledgerentrygroupsargs)
- [LedgerLine](src.md#ledgerline)
- [LedgerLineAmountArgs](src.md#ledgerlineamountargs)
- [LedgerLineInput](src.md#ledgerlineinput)
- [LedgerLineMatchInput](src.md#ledgerlinematchinput)
- [LedgerLinesConnection](src.md#ledgerlinesconnection)
- [LedgerLinesConsistencyMode](src.md#ledgerlinesconsistencymode)
- [LedgerLinesFilterSet](src.md#ledgerlinesfilterset)
- [LedgerMatchInput](src.md#ledgermatchinput)
- [LedgerMigration](src.md#ledgermigration)
- [LedgerMigrationConnection](src.md#ledgermigrationconnection)
- [LedgerMigrationStatus](src.md#ledgermigrationstatus)
- [LedgerTypeFilter](src.md#ledgertypefilter)
- [LedgerTypes](src.md#ledgertypes)
- [LedgersConnection](src.md#ledgersconnection)
- [LedgersFilterSet](src.md#ledgersfilterset)
- [Link](src.md#link)
- [LinkMatchInput](src.md#linkmatchinput)
- [LinkResponse](src.md#linkresponse)
- [LinksConnection](src.md#linksconnection)
- [ListLedgerAccountBalancesDocument](src.md#listledgeraccountbalancesdocument)
- [ListLedgerAccountBalancesQuery](src.md#listledgeraccountbalancesquery)
- [ListLedgerAccountBalancesQueryVariables](src.md#listledgeraccountbalancesqueryvariables)
- [ListLedgerAccountsDocument](src.md#listledgeraccountsdocument)
- [ListLedgerAccountsQuery](src.md#listledgeraccountsquery)
- [ListLedgerAccountsQueryVariables](src.md#listledgeraccountsqueryvariables)
- [ListMultiCurrencyLedgerAccountBalancesDocument](src.md#listmulticurrencyledgeraccountbalancesdocument)
- [ListMultiCurrencyLedgerAccountBalancesQuery](src.md#listmulticurrencyledgeraccountbalancesquery)
- [ListMultiCurrencyLedgerAccountBalancesQueryVariables](src.md#listmulticurrencyledgeraccountbalancesqueryvariables)
- [MakeEmpty](src.md#makeempty)
- [MakeMaybe](src.md#makemaybe)
- [MakeOptional](src.md#makeoptional)
- [Maybe](src.md#maybe)
- [Mutation](src.md#mutation)
- [MutationAddLedgerEntryArgs](src.md#mutationaddledgerentryargs)
- [MutationCreateCustomCurrencyArgs](src.md#mutationcreatecustomcurrencyargs)
- [MutationCreateCustomLinkArgs](src.md#mutationcreatecustomlinkargs)
- [MutationCreateLedgerAccountArgs](src.md#mutationcreateledgeraccountargs)
- [MutationCreateLedgerAccountsArgs](src.md#mutationcreateledgeraccountsargs)
- [MutationCreateLedgerArgs](src.md#mutationcreateledgerargs)
- [MutationReconcileTxArgs](src.md#mutationreconciletxargs)
- [MutationStoreSchemaArgs](src.md#mutationstoreschemaargs)
- [MutationSyncCustomAccountsArgs](src.md#mutationsynccustomaccountsargs)
- [MutationSyncCustomTxsArgs](src.md#mutationsynccustomtxsargs)
- [MutationUpdateLedgerAccountArgs](src.md#mutationupdateledgeraccountargs)
- [MutationUpdateLedgerArgs](src.md#mutationupdateledgerargs)
- [MutationUpdateLedgerEntryArgs](src.md#mutationupdateledgerentryargs)
- [NotFoundError](src.md#notfounderror)
- [PageInfo](src.md#pageinfo)
- [Query](src.md#query)
- [QueryCustomCurrenciesArgs](src.md#querycustomcurrenciesargs)
- [QueryExternalAccountArgs](src.md#queryexternalaccountargs)
- [QueryLedgerAccountArgs](src.md#queryledgeraccountargs)
- [QueryLedgerArgs](src.md#queryledgerargs)
- [QueryLedgerEntryArgs](src.md#queryledgerentryargs)
- [QueryLedgerEntryGroupArgs](src.md#queryledgerentrygroupargs)
- [QueryLedgerLineArgs](src.md#queryledgerlineargs)
- [QueryLedgersArgs](src.md#queryledgersargs)
- [QueryLinkArgs](src.md#querylinkargs)
- [QuerySchemaArgs](src.md#queryschemaargs)
- [QuerySchemasArgs](src.md#queryschemasargs)
- [QueryTxArgs](src.md#querytxargs)
- [ReadBalanceConsistencyMode](src.md#readbalanceconsistencymode)
- [ReconcileTxDocument](src.md#reconciletxdocument)
- [ReconcileTxMutation](src.md#reconciletxmutation)
- [ReconcileTxMutationVariables](src.md#reconciletxmutationvariables)
- [ReconcileTxResponse](src.md#reconciletxresponse)
- [ReconcileTxResult](src.md#reconciletxresult)
- [ReconcileTxRuntimeDocument](src.md#reconciletxruntimedocument)
- [ReconcileTxRuntimeMutation](src.md#reconciletxruntimemutation)
- [ReconcileTxRuntimeMutationVariables](src.md#reconciletxruntimemutationvariables)
- [Scalars](src.md#scalars)
- [SceneEntryInput](src.md#sceneentryinput)
- [SceneEventInput](src.md#sceneeventinput)
- [SceneEventType](src.md#sceneeventtype)
- [SceneInput](src.md#sceneinput)
- [Schema](src.md#schema)
- [SchemaConditionInput](src.md#schemaconditioninput)
- [SchemaConnection](src.md#schemaconnection)
- [SchemaConsistencyConfigInput](src.md#schemaconsistencyconfiginput)
- [SchemaConsistencyMode](src.md#schemaconsistencymode)
- [SchemaCurrencyMatchInput](src.md#schemacurrencymatchinput)
- [SchemaExternalAccountMatchInput](src.md#schemaexternalaccountmatchinput)
- [SchemaInput](src.md#schemainput)
- [SchemaInt96ConditionInput](src.md#schemaint96conditioninput)
- [SchemaLedgerAccountInput](src.md#schemaledgeraccountinput)
- [SchemaLedgerAccountMatchInput](src.md#schemaledgeraccountmatchinput)
- [SchemaLedgerEntriesInput](src.md#schemaledgerentriesinput)
- [SchemaLedgerEntryConditionInput](src.md#schemaledgerentryconditioninput)
- [SchemaLedgerEntryGroupInput](src.md#schemaledgerentrygroupinput)
- [SchemaLedgerEntryInput](src.md#schemaledgerentryinput)
- [SchemaLedgerEntryTagInput](src.md#schemaledgerentrytaginput)
- [SchemaLedgerLineInput](src.md#schemaledgerlineinput)
- [SchemaLedgersArgs](src.md#schemaledgersargs)
- [SchemaMatchInput](src.md#schemamatchinput)
- [SchemaTxMatchInput](src.md#schematxmatchinput)
- [SchemaVersion](src.md#schemaversion)
- [SchemaVersionArgs](src.md#schemaversionargs)
- [SchemaVersionConnection](src.md#schemaversionconnection)
- [SchemaVersionsArgs](src.md#schemaversionsargs)
- [Sdk](src.md#sdk)
- [SdkFunctionWrapper](src.md#sdkfunctionwrapper)
- [StoreSchemaDocument](src.md#storeschemadocument)
- [StoreSchemaMutation](src.md#storeschemamutation)
- [StoreSchemaMutationVariables](src.md#storeschemamutationvariables)
- [StoreSchemaResponse](src.md#storeschemaresponse)
- [StoreSchemaResult](src.md#storeschemaresult)
- [StringFilter](src.md#stringfilter)
- [StringMatchFilter](src.md#stringmatchfilter)
- [StripeEnv](src.md#stripeenv)
- [StripeLink](src.md#stripelink)
- [SyncCustomAccountsDocument](src.md#synccustomaccountsdocument)
- [SyncCustomAccountsMutation](src.md#synccustomaccountsmutation)
- [SyncCustomAccountsMutationVariables](src.md#synccustomaccountsmutationvariables)
- [SyncCustomAccountsResponse](src.md#synccustomaccountsresponse)
- [SyncCustomAccountsResult](src.md#synccustomaccountsresult)
- [SyncCustomTxsDocument](src.md#synccustomtxsdocument)
- [SyncCustomTxsMutation](src.md#synccustomtxsmutation)
- [SyncCustomTxsMutationVariables](src.md#synccustomtxsmutationvariables)
- [SyncCustomTxsResponse](src.md#synccustomtxsresponse)
- [SyncCustomTxsResult](src.md#synccustomtxsresult)
- [TagFilter](src.md#tagfilter)
- [TagMatchInput](src.md#tagmatchinput)
- [Tx](src.md#tx)
- [TxMatchInput](src.md#txmatchinput)
- [TxType](src.md#txtype)
- [TxTypeFilter](src.md#txtypefilter)
- [TxsConnection](src.md#txsconnection)
- [UnitEnv](src.md#unitenv)
- [UnitLink](src.md#unitlink)
- [UpdateLedgerAccountInput](src.md#updateledgeraccountinput)
- [UpdateLedgerAccountResponse](src.md#updateledgeraccountresponse)
- [UpdateLedgerAccountResult](src.md#updateledgeraccountresult)
- [UpdateLedgerDocument](src.md#updateledgerdocument)
- [UpdateLedgerEntryInput](src.md#updateledgerentryinput)
- [UpdateLedgerEntryResponse](src.md#updateledgerentryresponse)
- [UpdateLedgerEntryResult](src.md#updateledgerentryresult)
- [UpdateLedgerInput](src.md#updateledgerinput)
- [UpdateLedgerMutation](src.md#updateledgermutation)
- [UpdateLedgerMutationVariables](src.md#updateledgermutationvariables)
- [UpdateLedgerResponse](src.md#updateledgerresponse)
- [UpdateLedgerResult](src.md#updateledgerresult)
- [createFragmentClient](src.md#createfragmentclient)

### Functions

- [getSdk](src.md#getsdk)

## References

### AddLedgerEntryDocument

Re-exports [AddLedgerEntryDocument](generated_generated.md#addledgerentrydocument)

___

### AddLedgerEntryMutation

Re-exports [AddLedgerEntryMutation](generated_generated.md#addledgerentrymutation)

___

### AddLedgerEntryMutationVariables

Re-exports [AddLedgerEntryMutationVariables](generated_generated.md#addledgerentrymutationvariables)

___

### AddLedgerEntryResponse

Re-exports [AddLedgerEntryResponse](generated_generated.md#addledgerentryresponse)

___

### AddLedgerEntryResult

Re-exports [AddLedgerEntryResult](generated_generated.md#addledgerentryresult)

___

### AddLedgerEntryRuntimeDocument

Re-exports [AddLedgerEntryRuntimeDocument](generated_generated.md#addledgerentryruntimedocument)

___

### AddLedgerEntryRuntimeMutation

Re-exports [AddLedgerEntryRuntimeMutation](generated_generated.md#addledgerentryruntimemutation)

___

### AddLedgerEntryRuntimeMutationVariables

Re-exports [AddLedgerEntryRuntimeMutationVariables](generated_generated.md#addledgerentryruntimemutationvariables)

___

### BadRequestError

Re-exports [BadRequestError](generated_generated.md#badrequesterror)

___

### BalanceUpdateConsistencyMode

Re-exports [BalanceUpdateConsistencyMode](../enums/generated_generated.BalanceUpdateConsistencyMode.md)

___

### ChartOfAccountsInput

Re-exports [ChartOfAccountsInput](generated_generated.md#chartofaccountsinput)

___

### CreateCustomCurrencyInput

Re-exports [CreateCustomCurrencyInput](generated_generated.md#createcustomcurrencyinput)

___

### CreateCustomCurrencyResponse

Re-exports [CreateCustomCurrencyResponse](generated_generated.md#createcustomcurrencyresponse)

___

### CreateCustomCurrencyResult

Re-exports [CreateCustomCurrencyResult](generated_generated.md#createcustomcurrencyresult)

___

### CreateCustomLinkDocument

Re-exports [CreateCustomLinkDocument](generated_generated.md#createcustomlinkdocument)

___

### CreateCustomLinkMutation

Re-exports [CreateCustomLinkMutation](generated_generated.md#createcustomlinkmutation)

___

### CreateCustomLinkMutationVariables

Re-exports [CreateCustomLinkMutationVariables](generated_generated.md#createcustomlinkmutationvariables)

___

### CreateCustomLinkResponse

Re-exports [CreateCustomLinkResponse](generated_generated.md#createcustomlinkresponse)

___

### CreateCustomLinkResult

Re-exports [CreateCustomLinkResult](generated_generated.md#createcustomlinkresult)

___

### CreateLedgerAccountInput

Re-exports [CreateLedgerAccountInput](generated_generated.md#createledgeraccountinput)

___

### CreateLedgerAccountResponse

Re-exports [CreateLedgerAccountResponse](generated_generated.md#createledgeraccountresponse)

___

### CreateLedgerAccountResult

Re-exports [CreateLedgerAccountResult](generated_generated.md#createledgeraccountresult)

___

### CreateLedgerAccountsInput

Re-exports [CreateLedgerAccountsInput](generated_generated.md#createledgeraccountsinput)

___

### CreateLedgerAccountsResponse

Re-exports [CreateLedgerAccountsResponse](generated_generated.md#createledgeraccountsresponse)

___

### CreateLedgerAccountsResult

Re-exports [CreateLedgerAccountsResult](generated_generated.md#createledgeraccountsresult)

___

### CreateLedgerDocument

Re-exports [CreateLedgerDocument](generated_generated.md#createledgerdocument)

___

### CreateLedgerInput

Re-exports [CreateLedgerInput](generated_generated.md#createledgerinput)

___

### CreateLedgerMutation

Re-exports [CreateLedgerMutation](generated_generated.md#createledgermutation)

___

### CreateLedgerMutationVariables

Re-exports [CreateLedgerMutationVariables](generated_generated.md#createledgermutationvariables)

___

### CreateLedgerResponse

Re-exports [CreateLedgerResponse](generated_generated.md#createledgerresponse)

___

### CreateLedgerResult

Re-exports [CreateLedgerResult](generated_generated.md#createledgerresult)

___

### Currency

Re-exports [Currency](generated_generated.md#currency)

___

### CurrencyAmount

Re-exports [CurrencyAmount](generated_generated.md#currencyamount)

___

### CurrencyAmountConnection

Re-exports [CurrencyAmountConnection](generated_generated.md#currencyamountconnection)

___

### CurrencyCode

Re-exports [CurrencyCode](../enums/generated_generated.CurrencyCode.md)

___

### CurrencyFilter

Re-exports [CurrencyFilter](generated_generated.md#currencyfilter)

___

### CurrencyMatchInput

Re-exports [CurrencyMatchInput](generated_generated.md#currencymatchinput)

___

### CurrencyMode

Re-exports [CurrencyMode](../enums/generated_generated.CurrencyMode.md)

___

### CustomAccountInput

Re-exports [CustomAccountInput](generated_generated.md#customaccountinput)

___

### CustomCurrenciesConnection

Re-exports [CustomCurrenciesConnection](generated_generated.md#customcurrenciesconnection)

___

### CustomLink

Re-exports [CustomLink](generated_generated.md#customlink)

___

### CustomTxInput

Re-exports [CustomTxInput](generated_generated.md#customtxinput)

___

### DateFilter

Re-exports [DateFilter](generated_generated.md#datefilter)

___

### DateTimeFilter

Re-exports [DateTimeFilter](generated_generated.md#datetimefilter)

___

### EntryGroupMatchInput

Re-exports [EntryGroupMatchInput](generated_generated.md#entrygroupmatchinput)

___

### Error

Re-exports [Error](generated_generated.md#error)

___

### Exact

Re-exports [Exact](generated_generated.md#exact)

___

### ExternalAccount

Re-exports [ExternalAccount](generated_generated.md#externalaccount)

___

### ExternalAccountFilter

Re-exports [ExternalAccountFilter](generated_generated.md#externalaccountfilter)

___

### ExternalAccountLedgerAccountsArgs

Re-exports [ExternalAccountLedgerAccountsArgs](generated_generated.md#externalaccountledgeraccountsargs)

___

### ExternalAccountMatchInput

Re-exports [ExternalAccountMatchInput](generated_generated.md#externalaccountmatchinput)

___

### ExternalAccountTxsArgs

Re-exports [ExternalAccountTxsArgs](generated_generated.md#externalaccounttxsargs)

___

### ExternalAccountsConnection

Re-exports [ExternalAccountsConnection](generated_generated.md#externalaccountsconnection)

___

### ExternalTransferType

Re-exports [ExternalTransferType](../enums/generated_generated.ExternalTransferType.md)

___

### ExternalTxSource

Re-exports [ExternalTxSource](../enums/generated_generated.ExternalTxSource.md)

___

### FragmentClient

Re-exports [FragmentClient](src_client.md#fragmentclient)

___

### GetLedgerAccountBalanceDocument

Re-exports [GetLedgerAccountBalanceDocument](generated_generated.md#getledgeraccountbalancedocument)

___

### GetLedgerAccountBalanceQuery

Re-exports [GetLedgerAccountBalanceQuery](generated_generated.md#getledgeraccountbalancequery)

___

### GetLedgerAccountBalanceQueryVariables

Re-exports [GetLedgerAccountBalanceQueryVariables](generated_generated.md#getledgeraccountbalancequeryvariables)

___

### GetLedgerAccountLinesDocument

Re-exports [GetLedgerAccountLinesDocument](generated_generated.md#getledgeraccountlinesdocument)

___

### GetLedgerAccountLinesQuery

Re-exports [GetLedgerAccountLinesQuery](generated_generated.md#getledgeraccountlinesquery)

___

### GetLedgerAccountLinesQueryVariables

Re-exports [GetLedgerAccountLinesQueryVariables](generated_generated.md#getledgeraccountlinesqueryvariables)

___

### GetLedgerDocument

Re-exports [GetLedgerDocument](generated_generated.md#getledgerdocument)

___

### GetLedgerEntryDocument

Re-exports [GetLedgerEntryDocument](generated_generated.md#getledgerentrydocument)

___

### GetLedgerEntryQuery

Re-exports [GetLedgerEntryQuery](generated_generated.md#getledgerentryquery)

___

### GetLedgerEntryQueryVariables

Re-exports [GetLedgerEntryQueryVariables](generated_generated.md#getledgerentryqueryvariables)

___

### GetLedgerQuery

Re-exports [GetLedgerQuery](generated_generated.md#getledgerquery)

___

### GetLedgerQueryVariables

Re-exports [GetLedgerQueryVariables](generated_generated.md#getledgerqueryvariables)

___

### GetSchemaDocument

Re-exports [GetSchemaDocument](generated_generated.md#getschemadocument)

___

### GetSchemaQuery

Re-exports [GetSchemaQuery](generated_generated.md#getschemaquery)

___

### GetSchemaQueryVariables

Re-exports [GetSchemaQueryVariables](generated_generated.md#getschemaqueryvariables)

___

### GroupBalanceAccountFilter

Re-exports [GroupBalanceAccountFilter](generated_generated.md#groupbalanceaccountfilter)

___

### IkReplay

Re-exports [IkReplay](generated_generated.md#ikreplay)

___

### IncreaseEnv

Re-exports [IncreaseEnv](../enums/generated_generated.IncreaseEnv.md)

___

### IncreaseLink

Re-exports [IncreaseLink](generated_generated.md#increaselink)

___

### Incremental

Re-exports [Incremental](generated_generated.md#incremental)

___

### InputMaybe

Re-exports [InputMaybe](generated_generated.md#inputmaybe)

___

### Int96Condition

Re-exports [Int96Condition](generated_generated.md#int96condition)

___

### Int96ConditionInput

Re-exports [Int96ConditionInput](generated_generated.md#int96conditioninput)

___

### Int96Filter

Re-exports [Int96Filter](generated_generated.md#int96filter)

___

### InternalError

Re-exports [InternalError](generated_generated.md#internalerror)

___

### Ledger

Re-exports [Ledger](generated_generated.md#ledger)

___

### LedgerAccount

Re-exports [LedgerAccount](generated_generated.md#ledgeraccount)

___

### LedgerAccountBalanceArgs

Re-exports [LedgerAccountBalanceArgs](generated_generated.md#ledgeraccountbalanceargs)

___

### LedgerAccountBalanceChangeArgs

Re-exports [LedgerAccountBalanceChangeArgs](generated_generated.md#ledgeraccountbalancechangeargs)

___

### LedgerAccountBalanceChangesArgs

Re-exports [LedgerAccountBalanceChangesArgs](generated_generated.md#ledgeraccountbalancechangesargs)

___

### LedgerAccountBalancesArgs

Re-exports [LedgerAccountBalancesArgs](generated_generated.md#ledgeraccountbalancesargs)

___

### LedgerAccountChildBalanceArgs

Re-exports [LedgerAccountChildBalanceArgs](generated_generated.md#ledgeraccountchildbalanceargs)

___

### LedgerAccountChildBalanceChangeArgs

Re-exports [LedgerAccountChildBalanceChangeArgs](generated_generated.md#ledgeraccountchildbalancechangeargs)

___

### LedgerAccountChildBalanceChangesArgs

Re-exports [LedgerAccountChildBalanceChangesArgs](generated_generated.md#ledgeraccountchildbalancechangesargs)

___

### LedgerAccountChildBalancesArgs

Re-exports [LedgerAccountChildBalancesArgs](generated_generated.md#ledgeraccountchildbalancesargs)

___

### LedgerAccountChildLedgerAccountsArgs

Re-exports [LedgerAccountChildLedgerAccountsArgs](generated_generated.md#ledgeraccountchildledgeraccountsargs)

___

### LedgerAccountCondition

Re-exports [LedgerAccountCondition](generated_generated.md#ledgeraccountcondition)

___

### LedgerAccountConditionInput

Re-exports [LedgerAccountConditionInput](generated_generated.md#ledgeraccountconditioninput)

___

### LedgerAccountConsistencyConfig

Re-exports [LedgerAccountConsistencyConfig](generated_generated.md#ledgeraccountconsistencyconfig)

___

### LedgerAccountConsistencyConfigInput

Re-exports [LedgerAccountConsistencyConfigInput](generated_generated.md#ledgeraccountconsistencyconfiginput)

___

### LedgerAccountFilter

Re-exports [LedgerAccountFilter](generated_generated.md#ledgeraccountfilter)

___

### LedgerAccountLinesArgs

Re-exports [LedgerAccountLinesArgs](generated_generated.md#ledgeraccountlinesargs)

___

### LedgerAccountMatchInput

Re-exports [LedgerAccountMatchInput](generated_generated.md#ledgeraccountmatchinput)

___

### LedgerAccountOwnBalanceArgs

Re-exports [LedgerAccountOwnBalanceArgs](generated_generated.md#ledgeraccountownbalanceargs)

___

### LedgerAccountOwnBalanceChangeArgs

Re-exports [LedgerAccountOwnBalanceChangeArgs](generated_generated.md#ledgeraccountownbalancechangeargs)

___

### LedgerAccountOwnBalanceChangesArgs

Re-exports [LedgerAccountOwnBalanceChangesArgs](generated_generated.md#ledgeraccountownbalancechangesargs)

___

### LedgerAccountOwnBalancesArgs

Re-exports [LedgerAccountOwnBalancesArgs](generated_generated.md#ledgeraccountownbalancesargs)

___

### LedgerAccountTypeFilter

Re-exports [LedgerAccountTypeFilter](generated_generated.md#ledgeraccounttypefilter)

___

### LedgerAccountTypes

Re-exports [LedgerAccountTypes](../enums/generated_generated.LedgerAccountTypes.md)

___

### LedgerAccountUnreconciledTxsArgs

Re-exports [LedgerAccountUnreconciledTxsArgs](generated_generated.md#ledgeraccountunreconciledtxsargs)

___

### LedgerAccountsConnection

Re-exports [LedgerAccountsConnection](generated_generated.md#ledgeraccountsconnection)

___

### LedgerAccountsFilterSet

Re-exports [LedgerAccountsFilterSet](generated_generated.md#ledgeraccountsfilterset)

___

### LedgerEntriesConnection

Re-exports [LedgerEntriesConnection](generated_generated.md#ledgerentriesconnection)

___

### LedgerEntriesFilterSet

Re-exports [LedgerEntriesFilterSet](generated_generated.md#ledgerentriesfilterset)

___

### LedgerEntry

Re-exports [LedgerEntry](generated_generated.md#ledgerentry)

___

### LedgerEntryCondition

Re-exports [LedgerEntryCondition](generated_generated.md#ledgerentrycondition)

___

### LedgerEntryConditionInput

Re-exports [LedgerEntryConditionInput](generated_generated.md#ledgerentryconditioninput)

___

### LedgerEntryFilter

Re-exports [LedgerEntryFilter](generated_generated.md#ledgerentryfilter)

___

### LedgerEntryGroup

Re-exports [LedgerEntryGroup](generated_generated.md#ledgerentrygroup)

___

### LedgerEntryGroupBalance

Re-exports [LedgerEntryGroupBalance](generated_generated.md#ledgerentrygroupbalance)

___

### LedgerEntryGroupBalanceConnection

Re-exports [LedgerEntryGroupBalanceConnection](generated_generated.md#ledgerentrygroupbalanceconnection)

___

### LedgerEntryGroupBalanceFilterSet

Re-exports [LedgerEntryGroupBalanceFilterSet](generated_generated.md#ledgerentrygroupbalancefilterset)

___

### LedgerEntryGroupBalancesArgs

Re-exports [LedgerEntryGroupBalancesArgs](generated_generated.md#ledgerentrygroupbalancesargs)

___

### LedgerEntryGroupInput

Re-exports [LedgerEntryGroupInput](generated_generated.md#ledgerentrygroupinput)

___

### LedgerEntryGroupLedgerEntriesArgs

Re-exports [LedgerEntryGroupLedgerEntriesArgs](generated_generated.md#ledgerentrygroupledgerentriesargs)

___

### LedgerEntryGroupMatchInput

Re-exports [LedgerEntryGroupMatchInput](generated_generated.md#ledgerentrygroupmatchinput)

___

### LedgerEntryGroupsConnection

Re-exports [LedgerEntryGroupsConnection](generated_generated.md#ledgerentrygroupsconnection)

___

### LedgerEntryGroupsFilterSet

Re-exports [LedgerEntryGroupsFilterSet](generated_generated.md#ledgerentrygroupsfilterset)

___

### LedgerEntryInput

Re-exports [LedgerEntryInput](generated_generated.md#ledgerentryinput)

___

### LedgerEntryMatchInput

Re-exports [LedgerEntryMatchInput](generated_generated.md#ledgerentrymatchinput)

___

### LedgerEntryTag

Re-exports [LedgerEntryTag](generated_generated.md#ledgerentrytag)

___

### LedgerEntryTagInput

Re-exports [LedgerEntryTagInput](generated_generated.md#ledgerentrytaginput)

___

### LedgerLedgerAccountsArgs

Re-exports [LedgerLedgerAccountsArgs](generated_generated.md#ledgerledgeraccountsargs)

___

### LedgerLedgerEntriesArgs

Re-exports [LedgerLedgerEntriesArgs](generated_generated.md#ledgerledgerentriesargs)

___

### LedgerLedgerEntryGroupArgs

Re-exports [LedgerLedgerEntryGroupArgs](generated_generated.md#ledgerledgerentrygroupargs)

___

### LedgerLedgerEntryGroupsArgs

Re-exports [LedgerLedgerEntryGroupsArgs](generated_generated.md#ledgerledgerentrygroupsargs)

___

### LedgerLine

Re-exports [LedgerLine](generated_generated.md#ledgerline)

___

### LedgerLineAmountArgs

Re-exports [LedgerLineAmountArgs](generated_generated.md#ledgerlineamountargs)

___

### LedgerLineInput

Re-exports [LedgerLineInput](generated_generated.md#ledgerlineinput)

___

### LedgerLineMatchInput

Re-exports [LedgerLineMatchInput](generated_generated.md#ledgerlinematchinput)

___

### LedgerLinesConnection

Re-exports [LedgerLinesConnection](generated_generated.md#ledgerlinesconnection)

___

### LedgerLinesConsistencyMode

Re-exports [LedgerLinesConsistencyMode](../enums/generated_generated.LedgerLinesConsistencyMode.md)

___

### LedgerLinesFilterSet

Re-exports [LedgerLinesFilterSet](generated_generated.md#ledgerlinesfilterset)

___

### LedgerMatchInput

Re-exports [LedgerMatchInput](generated_generated.md#ledgermatchinput)

___

### LedgerMigration

Re-exports [LedgerMigration](generated_generated.md#ledgermigration)

___

### LedgerMigrationConnection

Re-exports [LedgerMigrationConnection](generated_generated.md#ledgermigrationconnection)

___

### LedgerMigrationStatus

Re-exports [LedgerMigrationStatus](../enums/generated_generated.LedgerMigrationStatus.md)

___

### LedgerTypeFilter

Re-exports [LedgerTypeFilter](generated_generated.md#ledgertypefilter)

___

### LedgerTypes

Re-exports [LedgerTypes](../enums/generated_generated.LedgerTypes.md)

___

### LedgersConnection

Re-exports [LedgersConnection](generated_generated.md#ledgersconnection)

___

### LedgersFilterSet

Re-exports [LedgersFilterSet](generated_generated.md#ledgersfilterset)

___

### Link

Re-exports [Link](generated_generated.md#link)

___

### LinkMatchInput

Re-exports [LinkMatchInput](generated_generated.md#linkmatchinput)

___

### LinkResponse

Re-exports [LinkResponse](generated_generated.md#linkresponse)

___

### LinksConnection

Re-exports [LinksConnection](generated_generated.md#linksconnection)

___

### ListLedgerAccountBalancesDocument

Re-exports [ListLedgerAccountBalancesDocument](generated_generated.md#listledgeraccountbalancesdocument)

___

### ListLedgerAccountBalancesQuery

Re-exports [ListLedgerAccountBalancesQuery](generated_generated.md#listledgeraccountbalancesquery)

___

### ListLedgerAccountBalancesQueryVariables

Re-exports [ListLedgerAccountBalancesQueryVariables](generated_generated.md#listledgeraccountbalancesqueryvariables)

___

### ListLedgerAccountsDocument

Re-exports [ListLedgerAccountsDocument](generated_generated.md#listledgeraccountsdocument)

___

### ListLedgerAccountsQuery

Re-exports [ListLedgerAccountsQuery](generated_generated.md#listledgeraccountsquery)

___

### ListLedgerAccountsQueryVariables

Re-exports [ListLedgerAccountsQueryVariables](generated_generated.md#listledgeraccountsqueryvariables)

___

### ListMultiCurrencyLedgerAccountBalancesDocument

Re-exports [ListMultiCurrencyLedgerAccountBalancesDocument](generated_generated.md#listmulticurrencyledgeraccountbalancesdocument)

___

### ListMultiCurrencyLedgerAccountBalancesQuery

Re-exports [ListMultiCurrencyLedgerAccountBalancesQuery](generated_generated.md#listmulticurrencyledgeraccountbalancesquery)

___

### ListMultiCurrencyLedgerAccountBalancesQueryVariables

Re-exports [ListMultiCurrencyLedgerAccountBalancesQueryVariables](generated_generated.md#listmulticurrencyledgeraccountbalancesqueryvariables)

___

### MakeEmpty

Re-exports [MakeEmpty](generated_generated.md#makeempty)

___

### MakeMaybe

Re-exports [MakeMaybe](generated_generated.md#makemaybe)

___

### MakeOptional

Re-exports [MakeOptional](generated_generated.md#makeoptional)

___

### Maybe

Re-exports [Maybe](generated_generated.md#maybe)

___

### Mutation

Re-exports [Mutation](generated_generated.md#mutation)

___

### MutationAddLedgerEntryArgs

Re-exports [MutationAddLedgerEntryArgs](generated_generated.md#mutationaddledgerentryargs)

___

### MutationCreateCustomCurrencyArgs

Re-exports [MutationCreateCustomCurrencyArgs](generated_generated.md#mutationcreatecustomcurrencyargs)

___

### MutationCreateCustomLinkArgs

Re-exports [MutationCreateCustomLinkArgs](generated_generated.md#mutationcreatecustomlinkargs)

___

### MutationCreateLedgerAccountArgs

Re-exports [MutationCreateLedgerAccountArgs](generated_generated.md#mutationcreateledgeraccountargs)

___

### MutationCreateLedgerAccountsArgs

Re-exports [MutationCreateLedgerAccountsArgs](generated_generated.md#mutationcreateledgeraccountsargs)

___

### MutationCreateLedgerArgs

Re-exports [MutationCreateLedgerArgs](generated_generated.md#mutationcreateledgerargs)

___

### MutationReconcileTxArgs

Re-exports [MutationReconcileTxArgs](generated_generated.md#mutationreconciletxargs)

___

### MutationStoreSchemaArgs

Re-exports [MutationStoreSchemaArgs](generated_generated.md#mutationstoreschemaargs)

___

### MutationSyncCustomAccountsArgs

Re-exports [MutationSyncCustomAccountsArgs](generated_generated.md#mutationsynccustomaccountsargs)

___

### MutationSyncCustomTxsArgs

Re-exports [MutationSyncCustomTxsArgs](generated_generated.md#mutationsynccustomtxsargs)

___

### MutationUpdateLedgerAccountArgs

Re-exports [MutationUpdateLedgerAccountArgs](generated_generated.md#mutationupdateledgeraccountargs)

___

### MutationUpdateLedgerArgs

Re-exports [MutationUpdateLedgerArgs](generated_generated.md#mutationupdateledgerargs)

___

### MutationUpdateLedgerEntryArgs

Re-exports [MutationUpdateLedgerEntryArgs](generated_generated.md#mutationupdateledgerentryargs)

___

### NotFoundError

Re-exports [NotFoundError](generated_generated.md#notfounderror)

___

### PageInfo

Re-exports [PageInfo](generated_generated.md#pageinfo)

___

### Query

Re-exports [Query](generated_generated.md#query)

___

### QueryCustomCurrenciesArgs

Re-exports [QueryCustomCurrenciesArgs](generated_generated.md#querycustomcurrenciesargs)

___

### QueryExternalAccountArgs

Re-exports [QueryExternalAccountArgs](generated_generated.md#queryexternalaccountargs)

___

### QueryLedgerAccountArgs

Re-exports [QueryLedgerAccountArgs](generated_generated.md#queryledgeraccountargs)

___

### QueryLedgerArgs

Re-exports [QueryLedgerArgs](generated_generated.md#queryledgerargs)

___

### QueryLedgerEntryArgs

Re-exports [QueryLedgerEntryArgs](generated_generated.md#queryledgerentryargs)

___

### QueryLedgerEntryGroupArgs

Re-exports [QueryLedgerEntryGroupArgs](generated_generated.md#queryledgerentrygroupargs)

___

### QueryLedgerLineArgs

Re-exports [QueryLedgerLineArgs](generated_generated.md#queryledgerlineargs)

___

### QueryLedgersArgs

Re-exports [QueryLedgersArgs](generated_generated.md#queryledgersargs)

___

### QueryLinkArgs

Re-exports [QueryLinkArgs](generated_generated.md#querylinkargs)

___

### QuerySchemaArgs

Re-exports [QuerySchemaArgs](generated_generated.md#queryschemaargs)

___

### QuerySchemasArgs

Re-exports [QuerySchemasArgs](generated_generated.md#queryschemasargs)

___

### QueryTxArgs

Re-exports [QueryTxArgs](generated_generated.md#querytxargs)

___

### ReadBalanceConsistencyMode

Re-exports [ReadBalanceConsistencyMode](../enums/generated_generated.ReadBalanceConsistencyMode.md)

___

### ReconcileTxDocument

Re-exports [ReconcileTxDocument](generated_generated.md#reconciletxdocument)

___

### ReconcileTxMutation

Re-exports [ReconcileTxMutation](generated_generated.md#reconciletxmutation)

___

### ReconcileTxMutationVariables

Re-exports [ReconcileTxMutationVariables](generated_generated.md#reconciletxmutationvariables)

___

### ReconcileTxResponse

Re-exports [ReconcileTxResponse](generated_generated.md#reconciletxresponse)

___

### ReconcileTxResult

Re-exports [ReconcileTxResult](generated_generated.md#reconciletxresult)

___

### ReconcileTxRuntimeDocument

Re-exports [ReconcileTxRuntimeDocument](generated_generated.md#reconciletxruntimedocument)

___

### ReconcileTxRuntimeMutation

Re-exports [ReconcileTxRuntimeMutation](generated_generated.md#reconciletxruntimemutation)

___

### ReconcileTxRuntimeMutationVariables

Re-exports [ReconcileTxRuntimeMutationVariables](generated_generated.md#reconciletxruntimemutationvariables)

___

### Scalars

Re-exports [Scalars](generated_generated.md#scalars)

___

### SceneEntryInput

Re-exports [SceneEntryInput](generated_generated.md#sceneentryinput)

___

### SceneEventInput

Re-exports [SceneEventInput](generated_generated.md#sceneeventinput)

___

### SceneEventType

Re-exports [SceneEventType](../enums/generated_generated.SceneEventType.md)

___

### SceneInput

Re-exports [SceneInput](generated_generated.md#sceneinput)

___

### Schema

Re-exports [Schema](generated_generated.md#schema)

___

### SchemaConditionInput

Re-exports [SchemaConditionInput](generated_generated.md#schemaconditioninput)

___

### SchemaConnection

Re-exports [SchemaConnection](generated_generated.md#schemaconnection)

___

### SchemaConsistencyConfigInput

Re-exports [SchemaConsistencyConfigInput](generated_generated.md#schemaconsistencyconfiginput)

___

### SchemaConsistencyMode

Re-exports [SchemaConsistencyMode](../enums/generated_generated.SchemaConsistencyMode.md)

___

### SchemaCurrencyMatchInput

Re-exports [SchemaCurrencyMatchInput](generated_generated.md#schemacurrencymatchinput)

___

### SchemaExternalAccountMatchInput

Re-exports [SchemaExternalAccountMatchInput](generated_generated.md#schemaexternalaccountmatchinput)

___

### SchemaInput

Re-exports [SchemaInput](generated_generated.md#schemainput)

___

### SchemaInt96ConditionInput

Re-exports [SchemaInt96ConditionInput](generated_generated.md#schemaint96conditioninput)

___

### SchemaLedgerAccountInput

Re-exports [SchemaLedgerAccountInput](generated_generated.md#schemaledgeraccountinput)

___

### SchemaLedgerAccountMatchInput

Re-exports [SchemaLedgerAccountMatchInput](generated_generated.md#schemaledgeraccountmatchinput)

___

### SchemaLedgerEntriesInput

Re-exports [SchemaLedgerEntriesInput](generated_generated.md#schemaledgerentriesinput)

___

### SchemaLedgerEntryConditionInput

Re-exports [SchemaLedgerEntryConditionInput](generated_generated.md#schemaledgerentryconditioninput)

___

### SchemaLedgerEntryGroupInput

Re-exports [SchemaLedgerEntryGroupInput](generated_generated.md#schemaledgerentrygroupinput)

___

### SchemaLedgerEntryInput

Re-exports [SchemaLedgerEntryInput](generated_generated.md#schemaledgerentryinput)

___

### SchemaLedgerEntryTagInput

Re-exports [SchemaLedgerEntryTagInput](generated_generated.md#schemaledgerentrytaginput)

___

### SchemaLedgerLineInput

Re-exports [SchemaLedgerLineInput](generated_generated.md#schemaledgerlineinput)

___

### SchemaLedgersArgs

Re-exports [SchemaLedgersArgs](generated_generated.md#schemaledgersargs)

___

### SchemaMatchInput

Re-exports [SchemaMatchInput](generated_generated.md#schemamatchinput)

___

### SchemaTxMatchInput

Re-exports [SchemaTxMatchInput](generated_generated.md#schematxmatchinput)

___

### SchemaVersion

Re-exports [SchemaVersion](generated_generated.md#schemaversion)

___

### SchemaVersionArgs

Re-exports [SchemaVersionArgs](generated_generated.md#schemaversionargs)

___

### SchemaVersionConnection

Re-exports [SchemaVersionConnection](generated_generated.md#schemaversionconnection)

___

### SchemaVersionsArgs

Re-exports [SchemaVersionsArgs](generated_generated.md#schemaversionsargs)

___

### Sdk

Re-exports [Sdk](generated_generated.md#sdk)

___

### SdkFunctionWrapper

Re-exports [SdkFunctionWrapper](generated_generated.md#sdkfunctionwrapper)

___

### StoreSchemaDocument

Re-exports [StoreSchemaDocument](generated_generated.md#storeschemadocument)

___

### StoreSchemaMutation

Re-exports [StoreSchemaMutation](generated_generated.md#storeschemamutation)

___

### StoreSchemaMutationVariables

Re-exports [StoreSchemaMutationVariables](generated_generated.md#storeschemamutationvariables)

___

### StoreSchemaResponse

Re-exports [StoreSchemaResponse](generated_generated.md#storeschemaresponse)

___

### StoreSchemaResult

Re-exports [StoreSchemaResult](generated_generated.md#storeschemaresult)

___

### StringFilter

Re-exports [StringFilter](generated_generated.md#stringfilter)

___

### StringMatchFilter

Re-exports [StringMatchFilter](generated_generated.md#stringmatchfilter)

___

### StripeEnv

Re-exports [StripeEnv](../enums/generated_generated.StripeEnv.md)

___

### StripeLink

Re-exports [StripeLink](generated_generated.md#stripelink)

___

### SyncCustomAccountsDocument

Re-exports [SyncCustomAccountsDocument](generated_generated.md#synccustomaccountsdocument)

___

### SyncCustomAccountsMutation

Re-exports [SyncCustomAccountsMutation](generated_generated.md#synccustomaccountsmutation)

___

### SyncCustomAccountsMutationVariables

Re-exports [SyncCustomAccountsMutationVariables](generated_generated.md#synccustomaccountsmutationvariables)

___

### SyncCustomAccountsResponse

Re-exports [SyncCustomAccountsResponse](generated_generated.md#synccustomaccountsresponse)

___

### SyncCustomAccountsResult

Re-exports [SyncCustomAccountsResult](generated_generated.md#synccustomaccountsresult)

___

### SyncCustomTxsDocument

Re-exports [SyncCustomTxsDocument](generated_generated.md#synccustomtxsdocument)

___

### SyncCustomTxsMutation

Re-exports [SyncCustomTxsMutation](generated_generated.md#synccustomtxsmutation)

___

### SyncCustomTxsMutationVariables

Re-exports [SyncCustomTxsMutationVariables](generated_generated.md#synccustomtxsmutationvariables)

___

### SyncCustomTxsResponse

Re-exports [SyncCustomTxsResponse](generated_generated.md#synccustomtxsresponse)

___

### SyncCustomTxsResult

Re-exports [SyncCustomTxsResult](generated_generated.md#synccustomtxsresult)

___

### TagFilter

Re-exports [TagFilter](generated_generated.md#tagfilter)

___

### TagMatchInput

Re-exports [TagMatchInput](generated_generated.md#tagmatchinput)

___

### Tx

Re-exports [Tx](generated_generated.md#tx)

___

### TxMatchInput

Re-exports [TxMatchInput](generated_generated.md#txmatchinput)

___

### TxType

Re-exports [TxType](../enums/generated_generated.TxType.md)

___

### TxTypeFilter

Re-exports [TxTypeFilter](generated_generated.md#txtypefilter)

___

### TxsConnection

Re-exports [TxsConnection](generated_generated.md#txsconnection)

___

### UnitEnv

Re-exports [UnitEnv](../enums/generated_generated.UnitEnv.md)

___

### UnitLink

Re-exports [UnitLink](generated_generated.md#unitlink)

___

### UpdateLedgerAccountInput

Re-exports [UpdateLedgerAccountInput](generated_generated.md#updateledgeraccountinput)

___

### UpdateLedgerAccountResponse

Re-exports [UpdateLedgerAccountResponse](generated_generated.md#updateledgeraccountresponse)

___

### UpdateLedgerAccountResult

Re-exports [UpdateLedgerAccountResult](generated_generated.md#updateledgeraccountresult)

___

### UpdateLedgerDocument

Re-exports [UpdateLedgerDocument](generated_generated.md#updateledgerdocument)

___

### UpdateLedgerEntryInput

Re-exports [UpdateLedgerEntryInput](generated_generated.md#updateledgerentryinput)

___

### UpdateLedgerEntryResponse

Re-exports [UpdateLedgerEntryResponse](generated_generated.md#updateledgerentryresponse)

___

### UpdateLedgerEntryResult

Re-exports [UpdateLedgerEntryResult](generated_generated.md#updateledgerentryresult)

___

### UpdateLedgerInput

Re-exports [UpdateLedgerInput](generated_generated.md#updateledgerinput)

___

### UpdateLedgerMutation

Re-exports [UpdateLedgerMutation](generated_generated.md#updateledgermutation)

___

### UpdateLedgerMutationVariables

Re-exports [UpdateLedgerMutationVariables](generated_generated.md#updateledgermutationvariables)

___

### UpdateLedgerResponse

Re-exports [UpdateLedgerResponse](generated_generated.md#updateledgerresponse)

___

### UpdateLedgerResult

Re-exports [UpdateLedgerResult](generated_generated.md#updateledgerresult)

___

### createFragmentClient

Re-exports [createFragmentClient](src_client.md#createfragmentclient)

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
