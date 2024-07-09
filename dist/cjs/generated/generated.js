"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLedgerEntryGroupBalancesDocument = exports.GetWorkspaceDocument = exports.ListLedgerEntriesDocument = exports.GetSchemaDocument = exports.GetLedgerAccountBalanceDocument = exports.GetLedgerAccountLinesDocument = exports.ListMultiCurrencyLedgerAccountBalancesDocument = exports.ListLedgerAccountBalancesDocument = exports.ListLedgerAccountsDocument = exports.GetLedgerEntryDocument = exports.GetLedgerDocument = exports.SyncCustomTxsDocument = exports.SyncCustomAccountsDocument = exports.CreateCustomLinkDocument = exports.UpdateLedgerDocument = exports.UpdateLedgerEntryDocument = exports.ReconcileTxRuntimeDocument = exports.ReconcileTxDocument = exports.AddLedgerEntryRuntimeDocument = exports.AddLedgerEntryDocument = exports.CreateLedgerDocument = exports.StoreSchemaDocument = exports.UnitEnv = exports.TxType = exports.StripeEnv = exports.SchemaConsistencyMode = exports.SceneEventType = exports.ReadBalanceConsistencyMode = exports.LedgerTypes = exports.LedgerMigrationStatus = exports.LedgerLinesConsistencyMode = exports.LedgerAccountTypes = exports.IncreaseEnv = exports.ExternalTxSource = exports.ExternalTransferType = exports.CurrencyMode = exports.CurrencyCode = exports.BalanceUpdateConsistencyMode = void 0;
exports.getSdk = getSdk;
const graphql_tag_1 = require("graphql-tag");
/**
 * Used to configure the write-consistency of a Ledger Account's balance.
 * See [Configure consistency](https://fragment.dev/docs#configure-consistency).
 */
var BalanceUpdateConsistencyMode;
(function (BalanceUpdateConsistencyMode) {
    /** Eventually consistent balance updates. */
    BalanceUpdateConsistencyMode["Eventual"] = "eventual";
    /** Strongly consistent balance updates. */
    BalanceUpdateConsistencyMode["Strong"] = "strong";
})(BalanceUpdateConsistencyMode || (exports.BalanceUpdateConsistencyMode = BalanceUpdateConsistencyMode = {}));
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["Aave"] = "AAVE";
    CurrencyCode["Ada"] = "ADA";
    CurrencyCode["Aed"] = "AED";
    CurrencyCode["Afn"] = "AFN";
    CurrencyCode["All"] = "ALL";
    CurrencyCode["Amd"] = "AMD";
    CurrencyCode["Ang"] = "ANG";
    CurrencyCode["Aoa"] = "AOA";
    CurrencyCode["Ars"] = "ARS";
    CurrencyCode["Aud"] = "AUD";
    CurrencyCode["Awg"] = "AWG";
    CurrencyCode["Azn"] = "AZN";
    CurrencyCode["Bam"] = "BAM";
    CurrencyCode["Bbd"] = "BBD";
    CurrencyCode["Bch"] = "BCH";
    CurrencyCode["Bdt"] = "BDT";
    CurrencyCode["Bgn"] = "BGN";
    CurrencyCode["Bhd"] = "BHD";
    CurrencyCode["Bif"] = "BIF";
    CurrencyCode["Bmd"] = "BMD";
    CurrencyCode["Bnd"] = "BND";
    CurrencyCode["Bob"] = "BOB";
    CurrencyCode["Brl"] = "BRL";
    CurrencyCode["Bsd"] = "BSD";
    CurrencyCode["Btc"] = "BTC";
    CurrencyCode["Btn"] = "BTN";
    CurrencyCode["Bwp"] = "BWP";
    CurrencyCode["Byr"] = "BYR";
    CurrencyCode["Bzd"] = "BZD";
    CurrencyCode["Cad"] = "CAD";
    CurrencyCode["Cdf"] = "CDF";
    CurrencyCode["Chf"] = "CHF";
    CurrencyCode["Clp"] = "CLP";
    CurrencyCode["Cny"] = "CNY";
    CurrencyCode["Cop"] = "COP";
    CurrencyCode["Crc"] = "CRC";
    CurrencyCode["Cuc"] = "CUC";
    CurrencyCode["Cup"] = "CUP";
    CurrencyCode["Custom"] = "CUSTOM";
    CurrencyCode["Cve"] = "CVE";
    CurrencyCode["Czk"] = "CZK";
    CurrencyCode["Dai"] = "DAI";
    CurrencyCode["Djf"] = "DJF";
    CurrencyCode["Dkk"] = "DKK";
    CurrencyCode["Dop"] = "DOP";
    CurrencyCode["Dzd"] = "DZD";
    CurrencyCode["Egp"] = "EGP";
    CurrencyCode["Ern"] = "ERN";
    CurrencyCode["Etb"] = "ETB";
    CurrencyCode["Eth"] = "ETH";
    CurrencyCode["Eur"] = "EUR";
    CurrencyCode["Fjd"] = "FJD";
    CurrencyCode["Fkp"] = "FKP";
    CurrencyCode["Gbp"] = "GBP";
    CurrencyCode["Gel"] = "GEL";
    CurrencyCode["Ggp"] = "GGP";
    CurrencyCode["Ghs"] = "GHS";
    CurrencyCode["Gip"] = "GIP";
    CurrencyCode["Gmd"] = "GMD";
    CurrencyCode["Gnf"] = "GNF";
    CurrencyCode["Gtq"] = "GTQ";
    CurrencyCode["Gyd"] = "GYD";
    CurrencyCode["Hkd"] = "HKD";
    CurrencyCode["Hnl"] = "HNL";
    CurrencyCode["Hrk"] = "HRK";
    CurrencyCode["Htg"] = "HTG";
    CurrencyCode["Huf"] = "HUF";
    CurrencyCode["Idr"] = "IDR";
    CurrencyCode["Ils"] = "ILS";
    CurrencyCode["Imp"] = "IMP";
    CurrencyCode["Inr"] = "INR";
    CurrencyCode["Iqd"] = "IQD";
    CurrencyCode["Irr"] = "IRR";
    CurrencyCode["Isk"] = "ISK";
    CurrencyCode["Jmd"] = "JMD";
    CurrencyCode["Jod"] = "JOD";
    CurrencyCode["Jpy"] = "JPY";
    CurrencyCode["Kes"] = "KES";
    CurrencyCode["Kgs"] = "KGS";
    CurrencyCode["Khr"] = "KHR";
    CurrencyCode["Kmf"] = "KMF";
    CurrencyCode["Kpw"] = "KPW";
    CurrencyCode["Krw"] = "KRW";
    CurrencyCode["Kwd"] = "KWD";
    CurrencyCode["Kyd"] = "KYD";
    CurrencyCode["Kzt"] = "KZT";
    CurrencyCode["Lak"] = "LAK";
    CurrencyCode["Lbp"] = "LBP";
    CurrencyCode["Link"] = "LINK";
    CurrencyCode["Lkr"] = "LKR";
    CurrencyCode["Logical"] = "LOGICAL";
    CurrencyCode["Lrd"] = "LRD";
    CurrencyCode["Lsl"] = "LSL";
    CurrencyCode["Ltc"] = "LTC";
    CurrencyCode["Lyd"] = "LYD";
    CurrencyCode["Mad"] = "MAD";
    CurrencyCode["Matic"] = "MATIC";
    CurrencyCode["Mdl"] = "MDL";
    CurrencyCode["Mga"] = "MGA";
    CurrencyCode["Mkd"] = "MKD";
    CurrencyCode["Mmk"] = "MMK";
    CurrencyCode["Mnt"] = "MNT";
    CurrencyCode["Mop"] = "MOP";
    CurrencyCode["Mur"] = "MUR";
    CurrencyCode["Mvr"] = "MVR";
    CurrencyCode["Mwk"] = "MWK";
    CurrencyCode["Mxn"] = "MXN";
    CurrencyCode["Myr"] = "MYR";
    CurrencyCode["Mzn"] = "MZN";
    CurrencyCode["Nad"] = "NAD";
    CurrencyCode["Ngn"] = "NGN";
    CurrencyCode["Nio"] = "NIO";
    CurrencyCode["Nok"] = "NOK";
    CurrencyCode["Npr"] = "NPR";
    CurrencyCode["Nzd"] = "NZD";
    CurrencyCode["Omr"] = "OMR";
    CurrencyCode["Pab"] = "PAB";
    CurrencyCode["Pen"] = "PEN";
    CurrencyCode["Pgk"] = "PGK";
    CurrencyCode["Php"] = "PHP";
    CurrencyCode["Pkr"] = "PKR";
    CurrencyCode["Pln"] = "PLN";
    CurrencyCode["Pts"] = "PTS";
    CurrencyCode["Pyg"] = "PYG";
    CurrencyCode["Qar"] = "QAR";
    CurrencyCode["Ron"] = "RON";
    CurrencyCode["Rsd"] = "RSD";
    CurrencyCode["Rub"] = "RUB";
    CurrencyCode["Rwf"] = "RWF";
    CurrencyCode["Sar"] = "SAR";
    CurrencyCode["Sbd"] = "SBD";
    CurrencyCode["Scr"] = "SCR";
    CurrencyCode["Sdg"] = "SDG";
    CurrencyCode["Sek"] = "SEK";
    CurrencyCode["Sgd"] = "SGD";
    CurrencyCode["Shp"] = "SHP";
    CurrencyCode["Sll"] = "SLL";
    CurrencyCode["Sol"] = "SOL";
    CurrencyCode["Sos"] = "SOS";
    CurrencyCode["Spl"] = "SPL";
    CurrencyCode["Srd"] = "SRD";
    CurrencyCode["Stn"] = "STN";
    CurrencyCode["Svc"] = "SVC";
    CurrencyCode["Syp"] = "SYP";
    CurrencyCode["Szl"] = "SZL";
    CurrencyCode["Thb"] = "THB";
    CurrencyCode["Tjs"] = "TJS";
    CurrencyCode["Tmt"] = "TMT";
    CurrencyCode["Tnd"] = "TND";
    CurrencyCode["Top"] = "TOP";
    CurrencyCode["Try"] = "TRY";
    CurrencyCode["Ttd"] = "TTD";
    CurrencyCode["Tvd"] = "TVD";
    CurrencyCode["Twd"] = "TWD";
    CurrencyCode["Tzs"] = "TZS";
    CurrencyCode["Uah"] = "UAH";
    CurrencyCode["Ugx"] = "UGX";
    CurrencyCode["Uni"] = "UNI";
    CurrencyCode["Usd"] = "USD";
    CurrencyCode["Usdc"] = "USDC";
    CurrencyCode["Usdt"] = "USDT";
    CurrencyCode["Uyu"] = "UYU";
    CurrencyCode["Uzs"] = "UZS";
    CurrencyCode["Vef"] = "VEF";
    CurrencyCode["Vnd"] = "VND";
    CurrencyCode["Vuv"] = "VUV";
    CurrencyCode["Wst"] = "WST";
    CurrencyCode["Xaf"] = "XAF";
    CurrencyCode["Xcd"] = "XCD";
    CurrencyCode["Xlm"] = "XLM";
    CurrencyCode["Xof"] = "XOF";
    CurrencyCode["Xpf"] = "XPF";
    CurrencyCode["Yer"] = "YER";
    CurrencyCode["Zar"] = "ZAR";
    CurrencyCode["Zmw"] = "ZMW";
})(CurrencyCode || (exports.CurrencyCode = CurrencyCode = {}));
/** Defines the currency handling of a LedgerAccount, which can either be restricted to a single currency or allow multiple currencies. */
var CurrencyMode;
(function (CurrencyMode) {
    CurrencyMode["Multi"] = "multi";
    CurrencyMode["Single"] = "single";
})(CurrencyMode || (exports.CurrencyMode = CurrencyMode = {}));
var ExternalTransferType;
(function (ExternalTransferType) {
    ExternalTransferType["Ach"] = "ach";
    ExternalTransferType["Card"] = "card";
    ExternalTransferType["Check"] = "check";
    ExternalTransferType["Internal"] = "internal";
    ExternalTransferType["Wire"] = "wire";
})(ExternalTransferType || (exports.ExternalTransferType = ExternalTransferType = {}));
var ExternalTxSource;
(function (ExternalTxSource) {
    ExternalTxSource["Increase"] = "increase";
})(ExternalTxSource || (exports.ExternalTxSource = ExternalTxSource = {}));
var IncreaseEnv;
(function (IncreaseEnv) {
    IncreaseEnv["Production"] = "production";
    IncreaseEnv["Sandbox"] = "sandbox";
})(IncreaseEnv || (exports.IncreaseEnv = IncreaseEnv = {}));
var LedgerAccountTypes;
(function (LedgerAccountTypes) {
    LedgerAccountTypes["Asset"] = "asset";
    LedgerAccountTypes["Expense"] = "expense";
    LedgerAccountTypes["Income"] = "income";
    LedgerAccountTypes["Liability"] = "liability";
})(LedgerAccountTypes || (exports.LedgerAccountTypes = LedgerAccountTypes = {}));
var LedgerLinesConsistencyMode;
(function (LedgerLinesConsistencyMode) {
    LedgerLinesConsistencyMode["Eventual"] = "eventual";
    LedgerLinesConsistencyMode["Strong"] = "strong";
})(LedgerLinesConsistencyMode || (exports.LedgerLinesConsistencyMode = LedgerLinesConsistencyMode = {}));
/** The status of a ledger migration. */
var LedgerMigrationStatus;
(function (LedgerMigrationStatus) {
    /**
     * The Ledger Migration has been successfully completed.
     * This is a terminal state.
     */
    LedgerMigrationStatus["Completed"] = "completed";
    /**
     * The Ledger Migration has failed.
     * This can happen either due to an invalid schema or an internal error.
     * This is a terminal state.
     */
    LedgerMigrationStatus["Failed"] = "failed";
    /** The Ledger Migration has been queued. */
    LedgerMigrationStatus["Queued"] = "queued";
    /**
     * The Ledger Migration has been skipped because a newer version is available.
     * This is a terminal state.
     */
    LedgerMigrationStatus["Skipped"] = "skipped";
    /** The Ledger Migration has been started. */
    LedgerMigrationStatus["Started"] = "started";
})(LedgerMigrationStatus || (exports.LedgerMigrationStatus = LedgerMigrationStatus = {}));
var LedgerTypes;
(function (LedgerTypes) {
    LedgerTypes["Double"] = "double";
})(LedgerTypes || (exports.LedgerTypes = LedgerTypes = {}));
/**
 * The consistency configuration of a Ledger Account's balance queries.
 * If not provided as an argument to a balance query, the default behavior is to read eventually consistent balances.
 * See [Configure consistency](https://fragment.dev/docs#configure-consistency).
 */
var ReadBalanceConsistencyMode;
(function (ReadBalanceConsistencyMode) {
    /**
     * Balance queries will read eventually consistent balances. This is the default behavior if `ReadBalanceConsistencyMode` is not provided as an argument to the balance field.
     * Both Ledger Accounts configured with strongly and eventually consistent balance updates support this enum.
     */
    ReadBalanceConsistencyMode["Eventual"] = "eventual";
    /** Balance queries will read strongly consistent balances. This is only allowed if the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig` is `strong`. */
    ReadBalanceConsistencyMode["Strong"] = "strong";
    /** Balance queries will use the value from the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig`. */
    ReadBalanceConsistencyMode["UseAccount"] = "use_account";
})(ReadBalanceConsistencyMode || (exports.ReadBalanceConsistencyMode = ReadBalanceConsistencyMode = {}));
var SceneEventType;
(function (SceneEventType) {
    SceneEventType["Entry"] = "entry";
})(SceneEventType || (exports.SceneEventType = SceneEventType = {}));
/**
 * The consistency modes available for entities created within this Schema.
 *
 * See [Configure consistency](https://fragment.dev/docs#configure-consistency).
 */
var SchemaConsistencyMode;
(function (SchemaConsistencyMode) {
    /** Eventually consistent entity updates */
    SchemaConsistencyMode["Eventual"] = "eventual";
    /** Strongly consistent entity updates */
    SchemaConsistencyMode["Strong"] = "strong";
})(SchemaConsistencyMode || (exports.SchemaConsistencyMode = SchemaConsistencyMode = {}));
var StripeEnv;
(function (StripeEnv) {
    StripeEnv["Livemode"] = "livemode";
    StripeEnv["Testmode"] = "testmode";
})(StripeEnv || (exports.StripeEnv = StripeEnv = {}));
var TxType;
(function (TxType) {
    TxType["Credit"] = "credit";
    TxType["Debit"] = "debit";
})(TxType || (exports.TxType = TxType = {}));
var UnitEnv;
(function (UnitEnv) {
    UnitEnv["Production"] = "production";
    UnitEnv["Sandbox"] = "sandbox";
})(UnitEnv || (exports.UnitEnv = UnitEnv = {}));
exports.StoreSchemaDocument = (0, graphql_tag_1.gql) `
  mutation storeSchema($schema: SchemaInput!) {
    storeSchema(schema: $schema) {
      __typename
      ... on StoreSchemaResult {
        schema {
          key
          name
          version {
            created
            version
          }
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.CreateLedgerDocument = (0, graphql_tag_1.gql) `
  mutation createLedger(
    $ik: SafeString!
    $ledger: CreateLedgerInput!
    $schemaKey: SafeString!
  ) {
    createLedger(ik: $ik, ledger: $ledger, schema: { key: $schemaKey }) {
      __typename
      ... on CreateLedgerResult {
        ledger {
          id
          ik
          name
          created
          schema {
            key
          }
        }
        isIkReplay
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.AddLedgerEntryDocument = (0, graphql_tag_1.gql) `
  mutation addLedgerEntry(
    $ik: SafeString!
    $ledgerIk: SafeString!
    $type: String!
    $posted: DateTime
    $parameters: JSON!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    addLedgerEntry(
      ik: $ik
      entry: {
        ledger: { ik: $ledgerIk }
        type: $type
        posted: $posted
        parameters: $parameters
        tags: $tags
        groups: $groups
      }
    ) {
      __typename
      ... on AddLedgerEntryResult {
        isIkReplay
        entry {
          type
          id
          ik
          posted
          created
        }
        lines {
          id
          amount
          account {
            path
          }
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.AddLedgerEntryRuntimeDocument = (0, graphql_tag_1.gql) `
  mutation addLedgerEntryRuntime(
    $ik: SafeString!
    $type: String!
    $ledgerIk: SafeString!
    $posted: DateTime
    $lines: [LedgerLineInput!]!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    addLedgerEntry(
      ik: $ik
      entry: {
        type: $type
        ledger: { ik: $ledgerIk }
        posted: $posted
        lines: $lines
        tags: $tags
        groups: $groups
      }
    ) {
      __typename
      ... on AddLedgerEntryResult {
        isIkReplay
        entry {
          type
          id
          ik
          posted
          created
        }
        lines {
          id
          amount
          account {
            path
          }
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.ReconcileTxDocument = (0, graphql_tag_1.gql) `
  mutation reconcileTx(
    $ledgerIk: SafeString!
    $type: String!
    $parameters: JSON!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    reconcileTx(
      entry: {
        ledger: { ik: $ledgerIk }
        type: $type
        parameters: $parameters
        tags: $tags
        groups: $groups
      }
    ) {
      __typename
      ... on ReconcileTxResult {
        entry {
          id
          ik
          date
          posted
          created
          description
        }
        lines {
          id
          amount
          account {
            path
          }
          externalTxId
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.ReconcileTxRuntimeDocument = (0, graphql_tag_1.gql) `
  mutation reconcileTxRuntime(
    $ledgerIk: SafeString!
    $type: String!
    $lines: [LedgerLineInput!]!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    reconcileTx(
      entry: {
        ledger: { ik: $ledgerIk }
        type: $type
        lines: $lines
        tags: $tags
        groups: $groups
      }
    ) {
      __typename
      ... on ReconcileTxResult {
        entry {
          id
          ik
          date
          posted
          created
          description
        }
        lines {
          id
          amount
          account {
            path
          }
          externalTxId
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.UpdateLedgerEntryDocument = (0, graphql_tag_1.gql) `
  mutation updateLedgerEntry(
    $entryIk: SafeString!
    $ledgerIk: SafeString!
    $update: UpdateLedgerEntryInput!
  ) {
    updateLedgerEntry(
      ledgerEntry: { ik: $entryIk, ledger: { ik: $ledgerIk } }
      update: $update
    ) {
      __typename
      ... on UpdateLedgerEntryResult {
        entry {
          id
          ik
          posted
          created
          description
          lines {
            nodes {
              id
              amount
              account {
                path
              }
            }
          }
          groups {
            key
            value
          }
          tags {
            key
            value
          }
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.UpdateLedgerDocument = (0, graphql_tag_1.gql) `
  mutation updateLedger($ledgerIk: SafeString!, $update: UpdateLedgerInput!) {
    updateLedger(ledger: { ik: $ledgerIk }, update: $update) {
      __typename
      ... on UpdateLedgerResult {
        ledger {
          id
          ik
          name
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.CreateCustomLinkDocument = (0, graphql_tag_1.gql) `
  mutation createCustomLink($name: String!, $ik: SafeString!) {
    createCustomLink(name: $name, ik: $ik) {
      __typename
      ... on CreateCustomLinkResult {
        link {
          id
          name
          created
        }
        isIkReplay
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.SyncCustomAccountsDocument = (0, graphql_tag_1.gql) `
  mutation syncCustomAccounts($linkId: ID!, $accounts: [CustomAccountInput!]!) {
    syncCustomAccounts(link: { id: $linkId }, accounts: $accounts) {
      __typename
      ... on SyncCustomAccountsResult {
        accounts {
          id
          externalId
          name
          currency {
            code
            customCurrencyId
          }
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.SyncCustomTxsDocument = (0, graphql_tag_1.gql) `
  mutation syncCustomTxs($linkId: ID!, $txs: [CustomTxInput!]!) {
    syncCustomTxs(link: { id: $linkId }, txs: $txs) {
      __typename
      ... on SyncCustomTxsResult {
        txs {
          __typename
          linkId
          id
          externalId
          externalAccountId
          amount
          description
          posted
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
exports.GetLedgerDocument = (0, graphql_tag_1.gql) `
  query getLedger($ik: SafeString!) {
    ledger(ledger: { ik: $ik }) {
      id
      ik
      name
      created
      balanceUTCOffset
    }
  }
`;
exports.GetLedgerEntryDocument = (0, graphql_tag_1.gql) `
  query getLedgerEntry($ik: SafeString!, $ledgerIk: SafeString!) {
    ledgerEntry(ledgerEntry: { ik: $ik, ledger: { ik: $ledgerIk } }) {
      id
      ik
      posted
      created
      description
      lines {
        nodes {
          id
          amount
          account {
            path
          }
        }
      }
    }
  }
`;
exports.ListLedgerAccountsDocument = (0, graphql_tag_1.gql) `
  query listLedgerAccounts(
    $ledgerIk: SafeString!
    $after: String
    $first: Int
    $before: String
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      id
      ik
      name
      created
      ledgerAccounts(after: $after, first: $first, before: $before) {
        nodes {
          id
          path
          name
          type
          created
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
exports.ListLedgerAccountBalancesDocument = (0, graphql_tag_1.gql) `
  query listLedgerAccountBalances(
    $ledgerIk: SafeString!
    $after: String
    $first: Int
    $before: String
    $balanceCurrency: CurrencyMatchInput
    $balanceAt: LastMoment
    $ownBalanceConsistencyMode: ReadBalanceConsistencyMode
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      id
      ik
      name
      created
      ledgerAccounts(after: $after, first: $first, before: $before) {
        nodes {
          id
          path
          name
          type
          created
          ownBalance(
            currency: $balanceCurrency
            at: $balanceAt
            consistencyMode: $ownBalanceConsistencyMode
          )
          childBalance(currency: $balanceCurrency, at: $balanceAt)
          balance(currency: $balanceCurrency, at: $balanceAt)
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
exports.ListMultiCurrencyLedgerAccountBalancesDocument = (0, graphql_tag_1.gql) `
  query listMultiCurrencyLedgerAccountBalances(
    $ledgerIk: SafeString!
    $after: String
    $first: Int
    $before: String
    $balanceAt: LastMoment
    $ownBalancesConsistencyMode: ReadBalanceConsistencyMode
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      id
      ik
      name
      created
      ledgerAccounts(after: $after, first: $first, before: $before) {
        nodes {
          id
          path
          name
          type
          created
          ownBalances(
            at: $balanceAt
            consistencyMode: $ownBalancesConsistencyMode
          ) {
            nodes {
              currency {
                code
                customCurrencyId
              }
              amount
            }
          }
          childBalances(at: $balanceAt) {
            nodes {
              currency {
                code
                customCurrencyId
              }
              amount
            }
          }
          balances(at: $balanceAt) {
            nodes {
              currency {
                code
                customCurrencyId
              }
              amount
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
exports.GetLedgerAccountLinesDocument = (0, graphql_tag_1.gql) `
  query getLedgerAccountLines(
    $path: String!
    $ledgerIk: SafeString!
    $after: String
    $first: Int
    $before: String
    $filter: LedgerLinesFilterSet
  ) {
    ledgerAccount(ledgerAccount: { ledger: { ik: $ledgerIk }, path: $path }) {
      id
      path
      lines(after: $after, first: $first, before: $before, filter: $filter) {
        nodes {
          id
          posted
          created
          amount
          description
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
exports.GetLedgerAccountBalanceDocument = (0, graphql_tag_1.gql) `
  query getLedgerAccountBalance(
    $path: String!
    $ledgerIk: SafeString!
    $balanceCurrency: CurrencyMatchInput
    $balanceAt: LastMoment
    $ownBalanceConsistencyMode: ReadBalanceConsistencyMode
  ) {
    ledgerAccount(ledgerAccount: { ledger: { ik: $ledgerIk }, path: $path }) {
      id
      path
      ownBalance(
        currency: $balanceCurrency
        at: $balanceAt
        consistencyMode: $ownBalanceConsistencyMode
      )
    }
  }
`;
exports.GetSchemaDocument = (0, graphql_tag_1.gql) `
  query getSchema($key: SafeString!, $version: Int) {
    schema(schema: { key: $key, version: $version }) {
      key
      name
      version {
        created
        version
        json
      }
    }
  }
`;
exports.ListLedgerEntriesDocument = (0, graphql_tag_1.gql) `
  query listLedgerEntries(
    $ledgerIk: SafeString!
    $after: String
    $first: Int
    $before: String
    $filter: LedgerEntriesFilterSet
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      ledgerEntries(
        after: $after
        first: $first
        before: $before
        filter: $filter
      ) {
        nodes {
          ik
          type
          posted
          lines {
            nodes {
              amount
              account {
                path
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
exports.GetWorkspaceDocument = (0, graphql_tag_1.gql) `
  query getWorkspace {
    workspace {
      id
      name
    }
  }
`;
exports.ListLedgerEntryGroupBalancesDocument = (0, graphql_tag_1.gql) `
  query listLedgerEntryGroupBalances(
    $ledgerIk: SafeString!
    $groupKey: SafeString!
    $groupValue: SafeString!
    $consistencyMode: ReadBalanceConsistencyMode = use_account
    $after: String
    $before: String
    $first: Int
    $last: Int
    $filter: LedgerEntryGroupBalanceFilterSet
  ) {
    ledgerEntryGroup(
      ledgerEntryGroup: {
        ledger: { ik: $ledgerIk }
        key: $groupKey
        value: $groupValue
      }
    ) {
      key
      value
      created
      balances(
        after: $after
        before: $before
        first: $first
        last: $last
        filter: $filter
      ) {
        nodes {
          account {
            path
          }
          currency {
            code
            customCurrencyId
          }
          ownBalance(consistencyMode: $consistencyMode)
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        storeSchema(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.StoreSchemaDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "storeSchema", "mutation", variables);
        },
        createLedger(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateLedgerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "createLedger", "mutation", variables);
        },
        addLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "addLedgerEntry", "mutation", variables);
        },
        addLedgerEntryRuntime(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddLedgerEntryRuntimeDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "addLedgerEntryRuntime", "mutation", variables);
        },
        reconcileTx(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ReconcileTxDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "reconcileTx", "mutation", variables);
        },
        reconcileTxRuntime(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ReconcileTxRuntimeDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "reconcileTxRuntime", "mutation", variables);
        },
        updateLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "updateLedgerEntry", "mutation", variables);
        },
        updateLedger(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateLedgerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "updateLedger", "mutation", variables);
        },
        createCustomLink(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateCustomLinkDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "createCustomLink", "mutation", variables);
        },
        syncCustomAccounts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SyncCustomAccountsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "syncCustomAccounts", "mutation", variables);
        },
        syncCustomTxs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SyncCustomTxsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "syncCustomTxs", "mutation", variables);
        },
        getLedger(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetLedgerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getLedger", "query", variables);
        },
        getLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getLedgerEntry", "query", variables);
        },
        listLedgerAccounts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ListLedgerAccountsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "listLedgerAccounts", "query", variables);
        },
        listLedgerAccountBalances(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ListLedgerAccountBalancesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "listLedgerAccountBalances", "query", variables);
        },
        listMultiCurrencyLedgerAccountBalances(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ListMultiCurrencyLedgerAccountBalancesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "listMultiCurrencyLedgerAccountBalances", "query", variables);
        },
        getLedgerAccountLines(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetLedgerAccountLinesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getLedgerAccountLines", "query", variables);
        },
        getLedgerAccountBalance(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetLedgerAccountBalanceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getLedgerAccountBalance", "query", variables);
        },
        getSchema(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSchemaDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getSchema", "query", variables);
        },
        listLedgerEntries(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ListLedgerEntriesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "listLedgerEntries", "query", variables);
        },
        getWorkspace(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetWorkspaceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getWorkspace", "query", variables);
        },
        listLedgerEntryGroupBalances(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ListLedgerEntryGroupBalancesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "listLedgerEntryGroupBalances", "query", variables);
        },
    };
}
