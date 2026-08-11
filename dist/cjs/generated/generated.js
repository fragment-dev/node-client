"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLedgerEntriesDocument = exports.GetSchemaDocument = exports.GetLedgerAccountBalanceDocument = exports.GetLedgerAccountLinesDocument = exports.ListMultiCurrencyLedgerAccountBalancesDocument = exports.ListLedgerAccountBalancesDocument = exports.ListLedgerAccountsDocument = exports.GetLedgerEntryDocument = exports.GetLedgerDocument = exports.DeleteCustomTxsDocument = exports.SyncCustomTxsDocument = exports.SyncCustomAccountsDocument = exports.CreateCustomLinkDocument = exports.UpdateLedgerDocument = exports.UpdateLedgerEntryDocument = exports.ReconcileTxRuntimeDocument = exports.ReconcileTxDocument = exports.AddLedgerEntryRuntimeDocument = exports.MigrateLedgerEntryDocument = exports.ReverseLedgerEntryDocument = exports.AddLedgerEntryDocument = exports.AddLedgerEntriesDocument = exports.DeleteLedgerDocument = exports.CreateLedgerDocument = exports.DeleteSchemaDocument = exports.StoreSchemaDocument = exports.UnitEnv = exports.TxType = exports.StripeEnv = exports.SchemaLedgerEntryStatus = exports.SchemaLedgerAccountStatus = exports.SchemaConsistencyMode = exports.SceneEventType = exports.ReadBalanceConsistencyMode = exports.PostLinesAs = exports.PaymentStatus = exports.LinkType = exports.LedgerTypes = exports.LedgerMigrationStatus = exports.LedgerLinesConsistencyMode = exports.LedgerDataMigrationStatus = exports.LedgerAccountTypes = exports.LedgerAccountClearingStatus = exports.IncreaseEnv = exports.Granularity = exports.ExternalTxSource = exports.ExternalTransferType = exports.CurrencyMode = exports.CurrencyCode = exports.BalanceUpdateConsistencyMode = void 0;
exports.getSdk = exports.CreateCustomCurrencyDocument = exports.GetEntriesToMigrateForLedgerAccountDataMigrationDocument = exports.GetAccountDataMigrationsDocument = exports.GetEntriesToMigrateForLedgerEntryDataMigrationDocument = exports.GetEntryDataMigrationsDocument = exports.ListLedgerEntryGroupBalancesDocument = exports.GetWorkspaceDocument = void 0;
const graphql_tag_1 = require("graphql-tag");
/** Used to configure the write-consistency of a Ledger Account's balance. See [Configure consistency](https://fragment.dev/guides/configure-consistency). */
var BalanceUpdateConsistencyMode;
(function (BalanceUpdateConsistencyMode) {
    BalanceUpdateConsistencyMode["Eventual"] = "eventual";
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
    CurrencyCode["Cadc"] = "CADC";
    CurrencyCode["Cadt"] = "CADT";
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
    CurrencyCode["Eurc"] = "EURC";
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
    CurrencyCode["Usdg"] = "USDG";
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
var Granularity;
(function (Granularity) {
    Granularity["Daily"] = "daily";
    Granularity["Hourly"] = "hourly";
    Granularity["Monthly"] = "monthly";
})(Granularity || (exports.Granularity = Granularity = {}));
var IncreaseEnv;
(function (IncreaseEnv) {
    IncreaseEnv["Production"] = "production";
    IncreaseEnv["Sandbox"] = "sandbox";
})(IncreaseEnv || (exports.IncreaseEnv = IncreaseEnv = {}));
/** The clearing status of a Ledger Account. */
var LedgerAccountClearingStatus;
(function (LedgerAccountClearingStatus) {
    /** The account has no outstanding balances. */
    LedgerAccountClearingStatus["Cleared"] = "cleared";
    /** The account has outstanding balances that have not been cleared. */
    LedgerAccountClearingStatus["Pending"] = "pending";
})(LedgerAccountClearingStatus || (exports.LedgerAccountClearingStatus = LedgerAccountClearingStatus = {}));
var LedgerAccountTypes;
(function (LedgerAccountTypes) {
    LedgerAccountTypes["Asset"] = "asset";
    LedgerAccountTypes["Expense"] = "expense";
    LedgerAccountTypes["Income"] = "income";
    LedgerAccountTypes["Liability"] = "liability";
})(LedgerAccountTypes || (exports.LedgerAccountTypes = LedgerAccountTypes = {}));
/** The status of a ledger data migration. */
var LedgerDataMigrationStatus;
(function (LedgerDataMigrationStatus) {
    /** The migration is active. */
    LedgerDataMigrationStatus["Active"] = "active";
    /** The migration is inactive. */
    LedgerDataMigrationStatus["Inactive"] = "inactive";
})(LedgerDataMigrationStatus || (exports.LedgerDataMigrationStatus = LedgerDataMigrationStatus = {}));
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
/** The type of Link an external account belongs to. */
var LinkType;
(function (LinkType) {
    /** A Custom Link */
    LinkType["CustomLink"] = "CustomLink";
    /** An Increase Link */
    LinkType["IncreaseLink"] = "IncreaseLink";
    /** A Stripe Link */
    LinkType["StripeLink"] = "StripeLink";
    /** A Unit Link */
    LinkType["UnitLink"] = "UnitLink";
})(LinkType || (exports.LinkType = LinkType = {}));
/**
 * EXPERIMENTAL — subject to change.
 *
 * Status of a Payment.
 */
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Processing"] = "processing";
    PaymentStatus["RequiresConfirmation"] = "requires_confirmation";
    PaymentStatus["Settled"] = "settled";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
/**
 * Controls how lines are posted for a Ledger Entry.
 * New entries created via the dashboard default to `net_amounts`.
 * Existing entries without this field set are treated as `raw_lines`.
 */
var PostLinesAs;
(function (PostLinesAs) {
    /** Lines targeting the same account, currency, and tx are aggregated into a single line with the net amount. Lines that sum to zero are skipped. If all lines sum to zero, no lines are skipped. */
    PostLinesAs["NetAmounts"] = "net_amounts";
    /** Lines are posted as-is without aggregation. */
    PostLinesAs["RawLines"] = "raw_lines";
    /** Lines with a zero amount are skipped, but lines are not aggregated. If all lines have a zero amount, no lines are skipped. */
    PostLinesAs["SkipZeroLines"] = "skip_zero_lines";
})(PostLinesAs || (exports.PostLinesAs = PostLinesAs = {}));
/** The consistency configuration of a Ledger Account's balance queries. If not provided as an argument to a balance query, the default behavior is to read eventually consistent balances. See [Configure consistency](https://fragment.dev/guides/configure-consistency). */
var ReadBalanceConsistencyMode;
(function (ReadBalanceConsistencyMode) {
    /** Balance queries will read eventually consistent balances. This is the default behavior if `ReadBalanceConsistencyMode` is not provided as an argument to the balance field. Both Ledger Accounts configured with strongly and eventually consistent balance updates support this enum. */
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
 * See [Configure consistency](https://fragment.dev/guides/configure-consistency).
 */
var SchemaConsistencyMode;
(function (SchemaConsistencyMode) {
    /** Eventually consistent entity updates */
    SchemaConsistencyMode["Eventual"] = "eventual";
    /** Strongly consistent entity updates */
    SchemaConsistencyMode["Strong"] = "strong";
})(SchemaConsistencyMode || (exports.SchemaConsistencyMode = SchemaConsistencyMode = {}));
/** The status of a Ledger Account. */
var SchemaLedgerAccountStatus;
(function (SchemaLedgerAccountStatus) {
    /** The Ledger Account is active. */
    SchemaLedgerAccountStatus["Active"] = "active";
    /** The Ledger Account is archived. */
    SchemaLedgerAccountStatus["Archived"] = "archived";
    /** The Ledger Account is disabled. */
    SchemaLedgerAccountStatus["Disabled"] = "disabled";
})(SchemaLedgerAccountStatus || (exports.SchemaLedgerAccountStatus = SchemaLedgerAccountStatus = {}));
/** The status of a Ledger Entry. */
var SchemaLedgerEntryStatus;
(function (SchemaLedgerEntryStatus) {
    /** The Ledger Entry is active. */
    SchemaLedgerEntryStatus["Active"] = "active";
    /** The Ledger Entry is archived. */
    SchemaLedgerEntryStatus["Archived"] = "archived";
    /** The Ledger Entry is disabled. */
    SchemaLedgerEntryStatus["Disabled"] = "disabled";
})(SchemaLedgerEntryStatus || (exports.SchemaLedgerEntryStatus = SchemaLedgerEntryStatus = {}));
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.DeleteSchemaDocument = (0, graphql_tag_1.gql) `
  mutation deleteSchema($schema: SchemaMatchInput!) {
    deleteSchema(schema: $schema) {
      __typename
      ... on DeleteSchemaResult {
        success
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.DeleteLedgerDocument = (0, graphql_tag_1.gql) `
  mutation deleteLedger($ledger: LedgerMatchInput!) {
    deleteLedger(ledger: $ledger) {
      __typename
      ... on DeleteLedgerResult {
        success
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.AddLedgerEntriesDocument = (0, graphql_tag_1.gql) `
  mutation addLedgerEntries($entries: [AddLedgerEntryInput!]!) {
    addLedgerEntries(entries: $entries) {
      __typename
      ... on AddLedgerEntriesResult {
        results {
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
      }
      ... on AddLedgerEntriesError {
        code
        message
        retryable
        errors {
          ik
          code
          message
          retryable
        }
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.AddLedgerEntryDocument = (0, graphql_tag_1.gql) `
  mutation addLedgerEntry(
    $ik: SafeString!
    $ledgerIk: SafeString!
    $type: String!
    $typeVersion: Int
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
        typeVersion: $typeVersion
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.ReverseLedgerEntryDocument = (0, graphql_tag_1.gql) `
  mutation reverseLedgerEntry($id: ID!) {
    reverseLedgerEntry(id: $id) {
      __typename
      ... on ReverseLedgerEntryResult {
        reversingLedgerEntry {
          ik
          id
          created
          posted
          type
          description
          hidden
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
        reversedLedgerEntry {
          ik
          id
          created
          posted
          type
          description
          hidden
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
        isIkReplay
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.MigrateLedgerEntryDocument = (0, graphql_tag_1.gql) `
  mutation migrateLedgerEntry($id: ID!, $newLedgerEntry: LedgerEntryInput!) {
    migrateLedgerEntry(input: { id: $id, newLedgerEntry: $newLedgerEntry }) {
      __typename
      ... on MigrateLedgerEntryResult {
        reversingLedgerEntry {
          ik
          id
          created
          posted
          type
          description
          reversedAt
          hidden
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
        reversedLedgerEntry {
          ik
          id
          created
          posted
          type
          description
          reversedAt
          hidden
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
        newLedgerEntry {
          ik
          id
          created
          posted
          type
          description
          reversedAt
          hidden
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
        isIkReplay
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.AddLedgerEntryRuntimeDocument = (0, graphql_tag_1.gql) `
  mutation addLedgerEntryRuntime(
    $ik: SafeString!
    $type: String!
    $typeVersion: Int
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
        typeVersion: $typeVersion
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.ReconcileTxDocument = (0, graphql_tag_1.gql) `
  mutation reconcileTx(
    $ledgerIk: SafeString!
    $type: String!
    $typeVersion: Int
    $parameters: JSON!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    reconcileTx(
      entry: {
        ledger: { ik: $ledgerIk }
        type: $type
        typeVersion: $typeVersion
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.ReconcileTxRuntimeDocument = (0, graphql_tag_1.gql) `
  mutation reconcileTxRuntime(
    $ledgerIk: SafeString!
    $type: String!
    $typeVersion: Int
    $lines: [LedgerLineInput!]!
    $tags: [LedgerEntryTagInput!]
    $groups: [LedgerEntryGroupInput!]
  ) {
    reconcileTx(
      entry: {
        ledger: { ik: $ledgerIk }
        type: $type
        typeVersion: $typeVersion
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
      }
    }
  }
`;
exports.DeleteCustomTxsDocument = (0, graphql_tag_1.gql) `
  mutation deleteCustomTxs($txs: [ID!]!) {
    deleteCustomTxs(txs: $txs) {
      __typename
      ... on DeleteCustomTxsResult {
        txs {
          tx {
            linkId
            id
            externalId
            externalAccountId
            amount
            description
            posted
            deletedAt
          }
        }
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
    $childBalanceConsistencyMode: ReadBalanceConsistencyMode
    $balanceConsistencyMode: ReadBalanceConsistencyMode
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
          childBalance(
            currency: $balanceCurrency
            at: $balanceAt
            consistencyMode: $childBalanceConsistencyMode
          )
          balance(
            currency: $balanceCurrency
            at: $balanceAt
            consistencyMode: $balanceConsistencyMode
          )
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
    $childBalancesConsistencyMode: ReadBalanceConsistencyMode
    $balancesConsistencyMode: ReadBalanceConsistencyMode
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
          childBalances(
            at: $balanceAt
            consistencyMode: $childBalancesConsistencyMode
          ) {
            nodes {
              currency {
                code
                customCurrencyId
              }
              amount
            }
          }
          balances(at: $balanceAt, consistencyMode: $balancesConsistencyMode) {
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
    $balanceConsistencyMode: ReadBalanceConsistencyMode
  ) {
    ledgerAccount(ledgerAccount: { ledger: { ik: $ledgerIk }, path: $path }) {
      id
      path
      balance(
        currency: $balanceCurrency
        at: $balanceAt
        consistencyMode: $balanceConsistencyMode
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
exports.GetEntryDataMigrationsDocument = (0, graphql_tag_1.gql) `
  query getEntryDataMigrations(
    $ledgerIk: SafeString!
    $filter: LedgerEntryDataMigrationsFilterSet
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      ledgerEntryDataMigrations(
        first: $first
        after: $after
        before: $before
        last: $last
        filter: $filter
      ) {
        nodes {
          entryType
          typeVersion
          status
          currentMigration {
            schemaVersion
            status
          }
          ledgerEntries {
            nodes {
              id
              type
              posted
              parameters
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
          history {
            nodes {
              schemaVersion
              status
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
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
exports.GetEntriesToMigrateForLedgerEntryDataMigrationDocument = (0, graphql_tag_1.gql) `
  query getEntriesToMigrateForLedgerEntryDataMigration(
    $ledgerIk: SafeString!
    $entryType: String!
    $typeVersion: String!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      ledgerEntryDataMigrations(
        filter: {
          entryType: { equalTo: $entryType }
          typeVersion: { equalTo: $typeVersion }
        }
      ) {
        nodes {
          ledgerEntries(
            first: $first
            after: $after
            last: $last
            before: $before
          ) {
            nodes {
              id
              ik
              type
              typeVersion
              description
              posted
              created
              parameters
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
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
        }
      }
    }
  }
`;
exports.GetAccountDataMigrationsDocument = (0, graphql_tag_1.gql) `
  query getAccountDataMigrations(
    $ledgerIk: SafeString!
    $filter: LedgerAccountDataMigrationsFilterSet
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      ledgerAccountDataMigrations(
        first: $first
        after: $after
        before: $before
        last: $last
        filter: $filter
      ) {
        nodes {
          accountPath
          status
          currentMigration {
            schemaVersion
            status
          }
          ledgerEntries {
            nodes {
              id
              type
              posted
              parameters
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
          history {
            nodes {
              schemaVersion
              status
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
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
exports.GetEntriesToMigrateForLedgerAccountDataMigrationDocument = (0, graphql_tag_1.gql) `
  query getEntriesToMigrateForLedgerAccountDataMigration(
    $ledgerIk: SafeString!
    $accountPath: String!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    ledger(ledger: { ik: $ledgerIk }) {
      ledgerAccountDataMigrations(
        filter: { accountPath: { equalTo: $accountPath } }
      ) {
        nodes {
          ledgerEntries(
            first: $first
            after: $after
            last: $last
            before: $before
          ) {
            nodes {
              id
              ik
              type
              typeVersion
              description
              posted
              created
              parameters
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
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
        }
      }
    }
  }
`;
exports.CreateCustomCurrencyDocument = (0, graphql_tag_1.gql) `
  mutation createCustomCurrency(
    $id: SafeString!
    $name: String!
    $precision: Int!
    $customCode: String!
  ) {
    createCustomCurrency(
      customCurrency: {
        customCurrencyId: $id
        name: $name
        precision: $precision
        customCode: $customCode
      }
    ) {
      ... on CreateCustomCurrencyResult {
        customCurrency {
          code
          customCurrencyId
          precision
          name
          customCode
        }
      }
      ... on BadRequestError {
        code
        message
        retryable
      }
      ... on InternalError {
        code
        message
        retryable
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
        deleteSchema(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteSchemaDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "deleteSchema", "mutation", variables);
        },
        createLedger(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateLedgerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "createLedger", "mutation", variables);
        },
        deleteLedger(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteLedgerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "deleteLedger", "mutation", variables);
        },
        addLedgerEntries(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddLedgerEntriesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "addLedgerEntries", "mutation", variables);
        },
        addLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "addLedgerEntry", "mutation", variables);
        },
        reverseLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ReverseLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "reverseLedgerEntry", "mutation", variables);
        },
        migrateLedgerEntry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MigrateLedgerEntryDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "migrateLedgerEntry", "mutation", variables);
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
        deleteCustomTxs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteCustomTxsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "deleteCustomTxs", "mutation", variables);
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
        getEntryDataMigrations(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetEntryDataMigrationsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getEntryDataMigrations", "query", variables);
        },
        getEntriesToMigrateForLedgerEntryDataMigration(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetEntriesToMigrateForLedgerEntryDataMigrationDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getEntriesToMigrateForLedgerEntryDataMigration", "query", variables);
        },
        getAccountDataMigrations(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetAccountDataMigrationsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getAccountDataMigrations", "query", variables);
        },
        getEntriesToMigrateForLedgerAccountDataMigration(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetEntriesToMigrateForLedgerAccountDataMigrationDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "getEntriesToMigrateForLedgerAccountDataMigration", "query", variables);
        },
        createCustomCurrency(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateCustomCurrencyDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), "createCustomCurrency", "mutation", variables);
        },
    };
}
exports.getSdk = getSdk;
