import { GraphQLClient, RequestOptions } from "graphql-request";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
};
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** A string that must be alphanumeric */
    AlphaNumericString: {
        input: string;
        output: string;
    };
    /** ISO 8601 Date e.g. `1969-07-21` */
    Date: {
        input: string;
        output: string;
    };
    /** ISO 8601 DateTime e.g. `1969-07-16T13:32:00.000Z`. You can also provide a date e.g. `1969-01-01` and it will be converted to `1969-01-01T00:00:00.000Z` */
    DateTime: {
        input: string;
        output: string;
    };
    /** The first moment of a specific year, month or day or hour e.g. 1969 or 1969-1 or 1969-1-1 or 1969-1-1T00. All of the previous examples are equivalent to `1969-1-1T00:00:00.000`. */
    FirstMoment: {
        input: string;
        output: string;
    };
    /** A string representing integers up to 9,223,372,036,854,775,807 (i.e. 2^63-1) */
    Int64: {
        input: string;
        output: string;
    };
    /** A string representing integers as big as 2^96-1. The number is signed so the range is from -79,228,162,514,264,337,593,543,950,336 to 79,228,162,514,264,337,593,543,950,336. */
    Int96: {
        input: string;
        output: string;
    };
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: {
        input: Record<string, unknown>;
        output: Record<string, unknown>;
    };
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: {
        input: string;
        output: string;
    };
    /** The last moment of a specific year, month or day or hour e.g. 1969 or 1969-12 or 1969-12-31 or 1969-12-31T23. All of the previous examples are equivalent to `1969-12-31T23:59:59.999`. */
    LastMoment: {
        input: string;
        output: string;
    };
    /** A string of non-zero length that can contain parameterized values via handlebars syntax. ex: `"Hello from {{country}}"`. */
    ParameterizedString: {
        input: string;
        output: string;
    };
    /** A mapping of parameter keys to values. */
    Parameters: {
        input: string;
        output: string;
    };
    /** A specific year ("2021"), quarter ("2021-Q1"), month ("2021-02"), day ("2021-02-03") or hour ("2021-02-03T04") */
    Period: {
        input: string;
        output: string;
    };
    /** A string with delimiter characters `/`, `#`, and `:` disallowed, as well as parameters in {{handlebar}} syntax. */
    SafeString: {
        input: string;
        output: string;
    };
    /** All hour-aligned offsets from -11:00 to +12:00 are supported, e.g. "-08:00" (PT), "-05:00" (ET), "+00:00" (UTC) */
    UTCOffset: {
        input: string;
        output: string;
    };
};
export type AddLedgerEntryResponse = AddLedgerEntryResult | BadRequestError | InternalError;
export type AddLedgerEntryResult = {
    __typename?: "AddLedgerEntryResult";
    /** The ledger entry that was posted */
    entry: LedgerEntry;
    /** True if this request successfully completed before and the previous response is being returned */
    isIkReplay: Scalars["Boolean"]["output"];
    /** The ledger lines that were created in that entry */
    lines: Array<LedgerLine>;
};
/** Equivalent to an HTTP 400 - request either has missing or incorrect data */
export type BadRequestError = Error & {
    __typename?: "BadRequestError";
    /** The HTTP status code corresponding to the error */
    code: Scalars["String"]["output"];
    /** The error message */
    message: Scalars["String"]["output"];
    /** Whether or not the operation is retryable */
    retryable: Scalars["Boolean"]["output"];
};
/** A single amount and the timestamp requested */
export type BalanceChangeDuring = {
    __typename?: "BalanceChangeDuring";
    /** The balance or balance change */
    amount: CurrencyAmount;
    /** The period of the requested balance change */
    period: Scalars["Period"]["output"];
};
/** A paginated list of amounts and their periods */
export type BalanceChangeDuringConnection = {
    __typename?: "BalanceChangeDuringConnection";
    /** The end time of the period across which the balance changes are requested */
    endTime: Scalars["LastMoment"]["output"];
    /** The granularity of the return data */
    granularity: Granularity;
    /** The current page of results */
    nodes: Array<BalanceChangeDuring>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
    /** The start time of the period across which the balance changes are requested */
    startTime: Scalars["FirstMoment"]["output"];
};
/** Used to configure the write-consistency of a Ledger Account's balance. See [Configure consistency](https://fragment.dev/docs/configure-consistency). */
export declare enum BalanceUpdateConsistencyMode {
    Eventual = "eventual",
    Strong = "strong"
}
/** The input for your Chart of Accounts in a Schema. */
export type ChartOfAccountsInput = {
    /** The Ledger Accounts modeled by your Schema. Ledger Accounts may be nested up to a maximum depth of 10. */
    accounts: Array<SchemaLedgerAccountInput>;
    /**
     * The default consistency configuration for all Ledger Accounts in this Schema.
     * If a Ledger Account does not specify its own consistency configuration, it will use the default values provided here.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    defaultConsistencyConfig?: InputMaybe<LedgerAccountConsistencyConfigInput>;
    /**
     * The default currency of each Ledger Account in the Chart Of Accounts.
     * It must be provided if `defaultCurrencyMode` is set to `single`.
     * Additionally, `defaultCurrency` must be omitted if `defaultCurrencyMode` is set to `multi`.
     */
    defaultCurrency?: InputMaybe<CurrencyMatchInput>;
    /** The default currency mode of each Ledger Account in the Chart Of Accounts. */
    defaultCurrencyMode?: InputMaybe<CurrencyMode>;
};
export type CreateCustomCurrencyInput = {
    /** The currency code for custom currencies. It can be up to 5 characters long. This is used for display purposes. */
    customCode: Scalars["String"]["input"];
    /** The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference/api-mutations#createcustomcurrency) mutation. */
    customCurrencyId: Scalars["SafeString"]["input"];
    /** A human readable name for the currency (e.g. United States Dollar). This is used for display purposes. */
    name: Scalars["String"]["input"];
    /** The number of decimal places this currency goes to. For example, United States Dollars have a precision of 2 (i.e. 100 cents in a dollar), whereas the Jordanian Dinar has a precision of 3. This is used for display purposes. */
    precision: Scalars["Int"]["input"];
};
export type CreateCustomCurrencyResponse = BadRequestError | CreateCustomCurrencyResult | InternalError;
export type CreateCustomCurrencyResult = {
    __typename?: "CreateCustomCurrencyResult";
    /** The Currency that was created. */
    customCurrency: Currency;
};
export type CreateCustomLinkResponse = BadRequestError | CreateCustomLinkResult | InternalError;
export type CreateCustomLinkResult = {
    __typename?: "CreateCustomLinkResult";
    isIkReplay: Scalars["Boolean"]["output"];
    /** The custom link that was created. Represents an instance of an external system. */
    link: CustomLink;
};
export type CreateLedgerAccountInput = {
    /** The consistency configuration for this Ledger Account. This defines how updates to this Ledger Account's balance are handled. */
    consistencyConfig?: InputMaybe<LedgerAccountConsistencyConfigInput>;
    /**
     * The currency of this Ledger Account. If this is not set, and `currencyMode` is
     * not set to `multi`, the workspace-level default is used.
     */
    currency?: InputMaybe<CurrencyMatchInput>;
    /** If set to `multi`, creates a multi-currency Ledger Account. If set to `single`, creates a single-currency Ledger Account. */
    currencyMode?: InputMaybe<CurrencyMode>;
    /** The External Account to link to this Ledger Account. */
    linkedAccount?: InputMaybe<ExternalAccountMatchInput>;
    /** The human-readable name of this Ledger Account. */
    name: Scalars["String"]["input"];
    /** The parent of this Ledger Account. */
    parent?: InputMaybe<LedgerAccountMatchInput>;
    /** The type of ledger account to create. Required if this is a top-level Ledger Account. If not provided, the type will be inferred from the parent. */
    type?: InputMaybe<LedgerAccountTypes>;
};
export type CreateLedgerAccountResponse = BadRequestError | CreateLedgerAccountResult | InternalError;
export type CreateLedgerAccountResult = {
    __typename?: "CreateLedgerAccountResult";
    /** true if a previous request successfully created this ledger account */
    isIkReplay: Scalars["Boolean"]["output"];
    /** The ledger account that was created */
    ledgerAccount: LedgerAccount;
};
export type CreateLedgerAccountsInput = {
    /** Ledger Accounts to create as children of this Ledger Account. */
    childLedgerAccounts?: InputMaybe<Array<CreateLedgerAccountsInput>>;
    /** The consistency configuration for this ledger account. See [Configure consistency](https://fragment.dev/docs/configure-consistency). */
    consistencyConfig?: InputMaybe<LedgerAccountConsistencyConfigInput>;
    /** The currency of this Ledger Account. If this is not set, the workspace level default is used. */
    currency?: InputMaybe<CurrencyMatchInput>;
    /** The currency mode of this Ledger Account. If this is not set, the workspace level default is used. */
    currencyMode?: InputMaybe<CurrencyMode>;
    /** The idempotency key for creating this Ledger Account. */
    ik: Scalars["SafeString"]["input"];
    /** The External Account to link to this Ledger Account. This can only be specified on leaf Ledger Accounts. See [Reconcile payments](https://fragment.dev/docs/reconcile-payments). */
    linkedAccount?: InputMaybe<ExternalAccountMatchInput>;
    /** The name of the Ledger Account. */
    name: Scalars["String"]["input"];
    /** The parent of this Ledger Account. This is only valid on the top level Ledger Account in the payload. */
    parent?: InputMaybe<LedgerAccountMatchInput>;
    /** The type of this Ledger Account. This field is only required if this is a root Ledger Account. Otherwise, the type will get inherited from its parent. */
    type?: InputMaybe<LedgerAccountTypes>;
};
export type CreateLedgerAccountsResponse = BadRequestError | CreateLedgerAccountsResult | InternalError;
export type CreateLedgerAccountsResult = {
    __typename?: "CreateLedgerAccountsResult";
    /** Whether the ledger accounts were successfully created by a previous request */
    ikReplays: Array<IkReplay>;
    /** The ledger accounts that were created */
    ledgerAccounts: Array<LedgerAccount>;
};
export type CreateLedgerInput = {
    /**
     * Use this field to specify a timezone for queries to your Ledger.
     *
     * When aggregating balances, all transactions within a 24 hour period starting at midnight UTC are included in each day.
     * You can specify a different starting hour for balances. For example, use "-08:00" to align balances with Pacific Standard Time.
     * Balance queries would then consider the start of each local day to be at 8am UTC the next day in UTC.
     * The default timezone is UTC.
     */
    balanceUTCOffset?: InputMaybe<Scalars["UTCOffset"]["input"]>;
    name: Scalars["String"]["input"];
    type?: InputMaybe<LedgerTypes>;
};
export type CreateLedgerResponse = BadRequestError | CreateLedgerResult | InternalError;
export type CreateLedgerResult = {
    __typename?: "CreateLedgerResult";
    /** true if this request successfully completed before and the previous response is being returned */
    isIkReplay: Scalars["Boolean"]["output"];
    /** The Ledger that was created */
    ledger: Ledger;
};
export type Currency = {
    __typename?: "Currency";
    /** The currency code. This is an [enum type](https://fragment.dev/api-reference/api-types#scalars-and-enums-currencycode) . */
    code: CurrencyCode;
    /** The currency code for custom currencies. This is only set if 'currency' is set to CUSTOM. It can be up to 32 characters long. */
    customCode?: Maybe<Scalars["String"]["output"]>;
    /** The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference/api-mutations#createcustomcurrency) mutation. */
    customCurrencyId?: Maybe<Scalars["SafeString"]["output"]>;
    /** A human readable name for the currency (e.g. United States Dollar). This is used for display purposes. */
    name: Scalars["String"]["output"];
    /** The number of decimal places this currency goes to. For example, United States Dollars have a precision of 2 (i.e. 100 cents in a dollar), whereas the Jordanian Dinar has a precision of 3. This is used for display purposes. */
    precision: Scalars["Int"]["output"];
};
/** A single amount accompanied by its currency */
export type CurrencyAmount = {
    __typename?: "CurrencyAmount";
    /** Numerical integer value, serialized as a string */
    amount: Scalars["Int96"]["output"];
    /** The currency this amount is in */
    currency: Currency;
};
/** A paginated list of amounts with their currencies */
export type CurrencyAmountConnection = {
    __typename?: "CurrencyAmountConnection";
    /** The current page of results */
    nodes: Array<CurrencyAmount>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export declare enum CurrencyCode {
    Aave = "AAVE",
    Ada = "ADA",
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Amd = "AMD",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    Bam = "BAM",
    Bbd = "BBD",
    Bch = "BCH",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Brl = "BRL",
    Bsd = "BSD",
    Btc = "BTC",
    Btn = "BTN",
    Bwp = "BWP",
    Byr = "BYR",
    Bzd = "BZD",
    Cad = "CAD",
    Cdf = "CDF",
    Chf = "CHF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Crc = "CRC",
    Cuc = "CUC",
    Cup = "CUP",
    Custom = "CUSTOM",
    Cve = "CVE",
    Czk = "CZK",
    Dai = "DAI",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    Egp = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eth = "ETH",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Gbp = "GBP",
    Gel = "GEL",
    Ggp = "GGP",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Imp = "IMP",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kmf = "KMF",
    Kpw = "KPW",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Link = "LINK",
    Lkr = "LKR",
    Logical = "LOGICAL",
    Lrd = "LRD",
    Lsl = "LSL",
    Ltc = "LTC",
    Lyd = "LYD",
    Mad = "MAD",
    Matic = "MATIC",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Myr = "MYR",
    Mzn = "MZN",
    Nad = "NAD",
    Ngn = "NGN",
    Nio = "NIO",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    Omr = "OMR",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Php = "PHP",
    Pkr = "PKR",
    Pln = "PLN",
    Pts = "PTS",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sll = "SLL",
    Sol = "SOL",
    Sos = "SOS",
    Spl = "SPL",
    Srd = "SRD",
    Stn = "STN",
    Svc = "SVC",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Tvd = "TVD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Uni = "UNI",
    Usd = "USD",
    Usdc = "USDC",
    Usdt = "USDT",
    Uyu = "UYU",
    Uzs = "UZS",
    Vef = "VEF",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xlm = "XLM",
    Xof = "XOF",
    Xpf = "XPF",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW"
}
export type CurrencyFilter = {
    /** Must match the value provided */
    equalTo?: InputMaybe<CurrencyMatchInput>;
    /** Must match one of the values provided. Limited to 100 items maximum. */
    in?: InputMaybe<Array<CurrencyMatchInput>>;
};
export type CurrencyMatchInput = {
    /** The currency code. This is an [enum type](https://fragment.dev/api-reference/api-types#scalars-and-enums-currencycode). */
    code: CurrencyCode;
    /** The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference/api-mutations#createcustomcurrency) mutation. */
    customCurrencyId?: InputMaybe<Scalars["SafeString"]["input"]>;
};
/** Defines the currency handling of a LedgerAccount, which can either be restricted to a single currency or allow multiple currencies. */
export declare enum CurrencyMode {
    Multi = "multi",
    Single = "single"
}
export type CustomAccountInput = {
    /** The currency of this external account. If this is not set, the workspace level default is used. 'currency' cannot be set if 'currencyMode' is 'multi'. */
    currency?: InputMaybe<CurrencyMatchInput>;
    /** The currency mode of this external account. If set to multi, creates a multi-currency account. */
    currencyMode?: InputMaybe<CurrencyMode>;
    /** The ID of this account at the external system. This is used as the idempotency key, within the scope of its Custom Link. */
    externalId: Scalars["SafeString"]["input"];
    /** The name of the account at the external system. */
    name: Scalars["String"]["input"];
};
/** A paginated list of Custom Currencies */
export type CustomCurrenciesConnection = {
    __typename?: "CustomCurrenciesConnection";
    /** The current page of results */
    nodes: Array<Currency>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export type CustomLink = Link & {
    __typename?: "CustomLink";
    /** ISO-8601 timestamp when the Link was created. */
    created: Scalars["String"]["output"];
    /** URL to the Fragment Dashboard for this Link. */
    dashboardUrl: Scalars["String"]["output"];
    /** A list of External Accounts associated with this Link. */
    externalAccounts: ExternalAccountsConnection;
    /** FRAGMENT ID of the Custom Link. */
    id: Scalars["ID"]["output"];
    /** Name of the Link as it appears in the Fragment Dashboard. */
    name: Scalars["String"]["output"];
};
export type CustomTxInput = {
    account: ExternalAccountMatchInput;
    amount: Scalars["Int96"]["input"];
    /** The currency of this tx. Should be set for multi-currency accounts. */
    currency?: InputMaybe<CurrencyMatchInput>;
    description: Scalars["String"]["input"];
    /** The ID of this tx at the external system. This is used as the idempotency key, within the scope of its Custom Account. */
    externalId: Scalars["SafeString"]["input"];
    posted: Scalars["DateTime"]["input"];
};
export type DateFilter = {
    equalTo?: InputMaybe<Scalars["Date"]["input"]>;
    /** Must match one of the values provided. Limited to 100 items maximum. */
    in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
};
/** Filters a timestamp field between two moments in time */
export type DateTimeFilter = {
    /** The timestamp value must be after this moment. Specified in ISO 8601 format e.g "1968-01-01T16:45:00Z" */
    after?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** The timestamp value must be before this moment. Specified in ISO 8601 format e.g "1968-01-01T16:45:00Z" */
    before?: InputMaybe<Scalars["DateTime"]["input"]>;
};
export type DeleteCustomTxsResponse = BadRequestError | DeleteCustomTxsResult | InternalError;
export type DeleteCustomTxsResult = {
    __typename?: "DeleteCustomTxsResult";
    /** List of Txs deleted in this operation */
    txs: Array<DeletedCustomTx>;
};
export type DeleteLedgerResponse = BadRequestError | DeleteLedgerResult | InternalError;
export type DeleteLedgerResult = {
    __typename?: "DeleteLedgerResult";
    success: Scalars["Boolean"]["output"];
};
export type DeleteSchemaResponse = BadRequestError | DeleteSchemaResult | InternalError;
export type DeleteSchemaResult = {
    __typename?: "DeleteSchemaResult";
    success: Scalars["Boolean"]["output"];
};
export type DeletedCustomTx = {
    __typename?: "DeletedCustomTx";
    /** A deleted Tx */
    tx: Tx;
};
export type EntryGroupMatchInput = {
    key: Scalars["SafeString"]["input"];
    value: Scalars["SafeString"]["input"];
};
/** Base error interface */
export type Error = {
    /** The HTTP status code corresponding to the error */
    code: Scalars["String"]["output"];
    /** The error message */
    message: Scalars["String"]["output"];
    /** Whether or not the operation is retryable */
    retryable: Scalars["Boolean"]["output"];
};
export type ExternalAccount = {
    __typename?: "ExternalAccount";
    /** The currency of this external account. */
    currency?: Maybe<Currency>;
    /** Indicates if the account allows multiple currencies or is restricted to a single currency */
    currencyMode: CurrencyMode;
    /** ID used for the external account */
    externalId: Scalars["ID"]["output"];
    /** FRAGMENT ID of External Account */
    id: Scalars["ID"]["output"];
    /** Ledger Accounts linked to this External Account. Ledger Accounts are paginated and sorted in reverse-chronological order by created date. */
    ledgerAccounts: LedgerAccountsConnection;
    /** The Link that this External Account belongs to. */
    link: CustomLink | IncreaseLink | StripeLink | UnitLink;
    /** FRAGMENT ID of this transaction's external link */
    linkId: Scalars["ID"]["output"];
    name: Scalars["String"]["output"];
    /** All Txs in this External Account. */
    txs: TxsConnection;
};
export type ExternalAccountLedgerAccountsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type ExternalAccountTxsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type ExternalAccountFilter = {
    /** Ledger Account must linked to the the specified external account */
    equalTo?: InputMaybe<ExternalAccountMatchInput>;
    /** Ledger Account can be linked to any of the specified external accounts. Limited to 100 items maximum. */
    in?: InputMaybe<Array<ExternalAccountMatchInput>>;
};
/** Specify an External Account by using `id`, or `linkId` and `externalId`. */
export type ExternalAccountMatchInput = {
    /** The external system's ID of the External Account. If this is specified, `linkId` is required. `id` is optional, but will be validated if provided. */
    externalId?: InputMaybe<Scalars["ID"]["input"]>;
    /** The FRAGMENT ID of the External Account. If this is specified, both `linkId` and `externalId` are optional, but will be validated if provided. */
    id?: InputMaybe<Scalars["ID"]["input"]>;
    /** The FRAGMENT ID of the Link the External Account is in. If this is specified, `externalId` is required. `id` is optional, but will be validated if provided. */
    linkId?: InputMaybe<Scalars["ID"]["input"]>;
};
/** A paginated list of External Accounts */
export type ExternalAccountsConnection = {
    __typename?: "ExternalAccountsConnection";
    /** The current page of results */
    nodes: Array<ExternalAccount>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export declare enum ExternalTransferType {
    Ach = "ach",
    Card = "card",
    Check = "check",
    Internal = "internal",
    Wire = "wire"
}
export declare enum ExternalTxSource {
    Increase = "increase"
}
export declare enum Granularity {
    Daily = "daily",
    Hourly = "hourly",
    Monthly = "monthly"
}
/** A filter to query balances of a specific subset of accounts */
export type GroupBalanceAccountFilter = {
    /** A filter that must match the account ID */
    id?: InputMaybe<StringFilter>;
    /** A filter that must match the account path. Wildcards ('*') may be used only for template variables, and will only match a single variable each. */
    path?: InputMaybe<StringMatchFilter>;
};
/** A single amount and the timestamp requested */
export type HistoricalBalance = {
    __typename?: "HistoricalBalance";
    /** The balance or balance change */
    amount: CurrencyAmount;
    /** The timestamp of the requested balance */
    at: Scalars["LastMoment"]["output"];
};
/** A paginated list of amounts and their periods */
export type HistoricalBalanceConnection = {
    __typename?: "HistoricalBalanceConnection";
    /** The end time of the period across which the balance changes are requested */
    endTime: Scalars["LastMoment"]["output"];
    /** The granularity of the return data */
    granularity: Granularity;
    /** The current page of results */
    nodes: Array<HistoricalBalance>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
    /** The start time of the period across which the balance changes are requested */
    startTime: Scalars["FirstMoment"]["output"];
};
export type IkReplay = {
    __typename?: "IkReplay";
    ik: Scalars["SafeString"]["output"];
    isIkReplay: Scalars["Boolean"]["output"];
};
export declare enum IncreaseEnv {
    Production = "production",
    Sandbox = "sandbox"
}
export type IncreaseLink = Link & {
    __typename?: "IncreaseLink";
    /** ISO-8601 timestamp when the Link was created. */
    created: Scalars["String"]["output"];
    /** URL to the Fragment Dashboard for this Link. */
    dashboardUrl: Scalars["String"]["output"];
    /** A list of External Accounts associated with this Link. */
    externalAccounts: ExternalAccountsConnection;
    /** FRAGMENT ID of the Increase Link. */
    id: Scalars["ID"]["output"];
    /** The environment of the Increase Link, either sandbox or production. */
    increaseEnv: IncreaseEnv;
    /** Name of the Link as it appears in the Dashboard. */
    name: Scalars["String"]["output"];
};
/** A condition that must be met on an `Int96` field. */
export type Int96Condition = {
    __typename?: "Int96Condition";
    /** Amount must exactly match this value. You may not specify this alongside `gte` or `lte`. */
    eq?: Maybe<Scalars["Int96"]["output"]>;
    /** Amount must be greater than or equal to this value. */
    gte?: Maybe<Scalars["Int96"]["output"]>;
    /** Amount must be less than or equal to this value. */
    lte?: Maybe<Scalars["Int96"]["output"]>;
};
/** A condition that must be met on an `Int96` field. */
export type Int96ConditionInput = {
    /** Amount must exactly match this value. You may not specify this alongside `gte` or `lte`. */
    eq?: InputMaybe<Scalars["Int96"]["input"]>;
    /** Amount must be greater than or equal to this value. */
    gte?: InputMaybe<Scalars["Int96"]["input"]>;
    /** Amount must be less than or equal to this value. */
    lte?: InputMaybe<Scalars["Int96"]["input"]>;
};
export type Int96Filter = {
    /** Must exactly equal this Int96 value */
    eq?: InputMaybe<Scalars["Int96"]["input"]>;
    /** Must be greater than or equal to this Int96 value */
    gte?: InputMaybe<Scalars["Int96"]["input"]>;
    /** Must be less than or equal to this Int96 value */
    lte?: InputMaybe<Scalars["Int96"]["input"]>;
    /** Must not equal this Int96 value */
    ne?: InputMaybe<Scalars["Int96"]["input"]>;
};
/** Equivalent to an HTTP 5XX - something went wrong with our API. */
export type InternalError = Error & {
    __typename?: "InternalError";
    /** The HTTP status code corresponding to the error */
    code: Scalars["String"]["output"];
    /** The error message */
    message: Scalars["String"]["output"];
    /** Whether or not the operation is retryable */
    retryable: Scalars["Boolean"]["output"];
};
/** Ledgers are databases designed for managing money */
export type Ledger = {
    __typename?: "Ledger";
    /** When aggregating balances, all transactions within a 24 hour period starting at midnight UTC plus this offset are included in each day. */
    balanceUTCOffset: Scalars["UTCOffset"]["output"];
    created: Scalars["DateTime"]["output"];
    /** URL to the Fragment Dashboard for this Ledger. */
    dashboardUrl: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    /** The IK passed into the [createLedger](/api-reference/api-mutations#createledger) mutation. This is treated as a unique identifier for this Ledger. */
    ik: Scalars["SafeString"]["output"];
    /** Query LedgerAccounts in Ledger. Ledger Accounts are paginated and returned in reverse-chronological order by their created date. */
    ledgerAccounts: LedgerAccountsConnection;
    /** Query Ledger Entries in a Ledger. Ledger Entries are paginated and sorted in reverse-chronological order by posted date. */
    ledgerEntries: LedgerEntriesConnection;
    /** Query a Ledger Entry Group for this Ledger given its key and value. */
    ledgerEntryGroup: LedgerEntryGroup;
    /** Query LedgerEntryGroups in Ledger. Ledger Entry Groups are paginated and returned in order lexigraphically key then inverse chronologically by created. */
    ledgerEntryGroups: LedgerEntryGroupsConnection;
    /** Schema migrations affecting this Ledger. */
    migrations: LedgerMigrationConnection;
    /** The name of the Ledger. Can be updated with the [updateLedger](/api-reference/api-mutations#updateledger) mutation. */
    name: Scalars["String"]["output"];
    /** Schema key associated with this Ledger. */
    schema?: Maybe<Schema>;
    type: LedgerTypes;
    /** @deprecated Callers should not need to query or store this value. */
    workspaceId: Scalars["ID"]["output"];
};
/** Ledgers are databases designed for managing money */
export type LedgerLedgerAccountsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerAccountsFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** Ledgers are databases designed for managing money */
export type LedgerLedgerEntriesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerEntriesFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** Ledgers are databases designed for managing money */
export type LedgerLedgerEntryGroupArgs = {
    ledgerEntryGroup: EntryGroupMatchInput;
};
/** Ledgers are databases designed for managing money */
export type LedgerLedgerEntryGroupsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerEntryGroupsFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A ledger account is a container for money */
export type LedgerAccount = {
    __typename?: "LedgerAccount";
    /** Total of all lines in this ledger account and child ledger accounts of the same currency as this ledger account */
    balance: Scalars["Int96"]["output"];
    /** How much did the this ledger account's balance change during the specified period. This query will include all child accounts in the same currency as this ledger account. */
    balanceChange: Scalars["Int96"]["output"];
    /** How much did the this ledger account's balances change during the specified period. This query will include all child accounts of all currencies. */
    balanceChanges: CurrencyAmountConnection;
    /**
     * How much did the ledger account's balances change over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance changes for each day in the month.
     */
    balanceChangesDuring: BalanceChangeDuringConnection;
    /** Total of all lines in this ledger account and child ledger accounts in all currencies */
    balances: CurrencyAmountConnection;
    /**
     * The ledger account's balances over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance for each day in the month.
     */
    balancesDuring: HistoricalBalanceConnection;
    /** Total of all lines in child ledger accounts of the same currency as this ledger account */
    childBalance: Scalars["Int96"]["output"];
    /** How much did the this ledger account's childBalance change during the specified period. This query will only include child accounts which are in the same currency as this one. See childBalanceChanges to include children of different currencies. */
    childBalanceChange: Scalars["Int96"]["output"];
    /** How much did the this ledger account's child accounts' balances change during the specified period. This query will include all child accounts of all currencies. */
    childBalanceChanges: CurrencyAmountConnection;
    /**
     * How much did the ledger account's childBalances change over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance changes for each day in the month.
     */
    childBalanceChangesDuring: BalanceChangeDuringConnection;
    /** Total of all lines in child ledger accounts of this ledger in all currencies */
    childBalances: CurrencyAmountConnection;
    /**
     * The ledger account's childBalances over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance for each day in the month.
     */
    childBalancesDuring: HistoricalBalanceConnection;
    /** The child Ledger Accounts of this Ledger Accountw */
    childLedgerAccounts: LedgerAccountsConnection;
    /** The consistency configuration for this Ledger Account. This defines how updates to this Ledger Account's ownBalance are handled. */
    consistencyConfig: LedgerAccountConsistencyConfig;
    created: Scalars["DateTime"]["output"];
    /** Currency of this ledger account */
    currency?: Maybe<Currency>;
    /** Indicates if the account allows multiple currencies or is restricted to a single currency */
    currencyMode: CurrencyMode;
    /** URL to the Fragment Dashboard for this Ledger Account. */
    dashboardUrl: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    /** The idempotency key used to create this account */
    ik: Scalars["String"]["output"];
    /** Ledger this account is in */
    ledger: Ledger;
    /** ID of the ledger this account is in */
    ledgerId: Scalars["ID"]["output"];
    /** List Ledger Lines in this account, sorted by `posted` in reverse chronological order. Does not include Ledger Lines from child Ledger Accounts. */
    lines: LedgerLinesConnection;
    /** The Link for the External Account that is linked to this ledger account */
    link?: Maybe<CustomLink | IncreaseLink | StripeLink | UnitLink>;
    /** External Account that is linked to this ledger account */
    linkedAccount?: Maybe<ExternalAccount>;
    /** The name of your Ledger Account */
    name?: Maybe<Scalars["String"]["output"]>;
    /** Total of all lines in this ledger account, excluding all child ledger accounts */
    ownBalance: Scalars["Int96"]["output"];
    /** How much did the this ledger account's ownBalance change during the specified period. This query will exclude all child accounts. */
    ownBalanceChange: Scalars["Int96"]["output"];
    /** How much did the this ledger account's ownBalance change during the specified period. This is the total of all lines in this ledger account, excluding all child ledger accounts */
    ownBalanceChanges: CurrencyAmountConnection;
    /**
     * How much did the ledger account's ownBalances change over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance changes for each day in the month.
     */
    ownBalanceChangesDuring: BalanceChangeDuringConnection;
    /** Total of all lines across all currencies in this ledger account, excluding all child ledger accounts */
    ownBalances: CurrencyAmountConnection;
    /**
     * The ledger account's ownBalances over a time period with a specified granularity.
     * For example, if the period is 1969-07 and the granularity is daily, the query will return the balance for each day in the month.
     */
    ownBalancesDuring: HistoricalBalanceConnection;
    /** The parent ledger account of this ledger account */
    parentLedgerAccount?: Maybe<LedgerAccount>;
    /** ID of the parent ledger account of this ledger account */
    parentLedgerAccountId?: Maybe<Scalars["ID"]["output"]>;
    /**
     * The unique Path of the ledger account. This is a slash-delimited string containing the location of an account in its chart of accounts.
     * For accounts created with a schema, this will be composed of account keys. Else, for accounts created with the createLedgerAccounts API,
     * this will be composed of the IKs of an account and its ancestors.
     */
    path: Scalars["String"]["output"];
    type: LedgerAccountTypes;
    /** A list of external account transactions that haven't been reconciled to this ledger account yet. Only populated for linked ledger accounts. Transactions are sorted in reverse chronological order by posted date. */
    unreconciledTxs: TxsConnection;
    /** @deprecated Callers should not need to query or store this value. */
    workspaceId: Scalars["ID"]["output"];
};
/** A ledger account is a container for money */
export type LedgerAccountBalanceArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
    currency?: InputMaybe<CurrencyMatchInput>;
};
/** A ledger account is a container for money */
export type LedgerAccountBalanceChangeArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountBalanceChangesArgs = {
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountBalanceChangesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountBalancesArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
};
/** A ledger account is a container for money */
export type LedgerAccountBalancesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalanceArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
    currency?: InputMaybe<CurrencyMatchInput>;
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalanceChangeArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalanceChangesArgs = {
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalanceChangesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalancesArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
};
/** A ledger account is a container for money */
export type LedgerAccountChildBalancesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountChildLedgerAccountsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A ledger account is a container for money */
export type LedgerAccountLinesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerLinesFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalanceArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
    consistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
    currency?: InputMaybe<CurrencyMatchInput>;
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalanceChangeArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalanceChangesArgs = {
    period: Scalars["Period"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalanceChangesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalancesArgs = {
    at?: InputMaybe<Scalars["LastMoment"]["input"]>;
    consistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
};
/** A ledger account is a container for money */
export type LedgerAccountOwnBalancesDuringArgs = {
    currency?: InputMaybe<CurrencyMatchInput>;
    duration: Scalars["Int"]["input"];
    granularity: Granularity;
    startTime: Scalars["FirstMoment"]["input"];
};
/** A ledger account is a container for money */
export type LedgerAccountUnreconciledTxsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A set of conditions that a Ledger Account must meet for an operation to succeed. */
export type LedgerAccountCondition = {
    __typename?: "LedgerAccountCondition";
    /** A condition that the `ownBalance` field must satisfy. Note that this condition always applies to the latest balance, not to balances at a specific date or time. See [Read balances](https://fragment.dev/docs/read-balances) for more on the different types of Ledger Account balances. */
    ownBalance?: Maybe<Int96Condition>;
};
/** A set of conditions that a Ledger Account must meet for an operation to succeed. */
export type LedgerAccountConditionInput = {
    /** A condition that the ownBalance field must satisfy. Note that this condition always applies to the latest balance, not to balances at a specific date or time. See [Read balances](https://fragment.dev/read-balances) for more on the different types of Ledger Account balances. */
    ownBalance: Int96ConditionInput;
};
/**
 * The consistency configuration of a Ledger Account's balance updates.
 * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
 */
export type LedgerAccountConsistencyConfig = {
    __typename?: "LedgerAccountConsistencyConfig";
    lines: LedgerLinesConsistencyMode;
    /**
     * If set to `strong`, then a Ledger Account's `ownBalance` updates will be strongly consistent with
     * the API response. This Ledger Account's balance will be updated and
     * available for strongly consistent reads once you receive an API response.
     *
     * Otherwise if not set or set to `eventual`, `ownBalance` updates are applied
     * asynchronously and may not be immediately reflected in queries.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    ownBalanceUpdates: BalanceUpdateConsistencyMode;
};
/**
 * The payload configuring the consistency for this Ledger Account.
 * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
 */
export type LedgerAccountConsistencyConfigInput = {
    /**
     * The consistency configuration for Ledger Entry Groups affecting this account.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    groups?: InputMaybe<Array<LedgerAccountGroupConsistencyConfigInput>>;
    /**
     * If set to `strong`, then a Ledger Account's `lines` updates will be strongly consistent with the API response.
     * This Ledger Account's balance will be updated and available for strongly consistent reads before you receive an API response.
     *
     * Otherwise if unset or set to `eventual`, `lines` updates are applied asynchronously and may not be immediately reflected in queries.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    lines?: InputMaybe<LedgerLinesConsistencyMode>;
    /**
     * If set to `strong`, then a Ledger Account's `ownBalance` updates will be strongly consistent with the API response.
     * This Ledger Account's balance will be updated and available for strongly consistent reads before you receive an API response.
     *
     * Otherwise if unset or set to `eventual`, `ownBalance` updates are applied asynchronously and may not be immediately reflected in queries.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    ownBalanceUpdates?: InputMaybe<BalanceUpdateConsistencyMode>;
};
export type LedgerAccountFilter = {
    /** Result must match the specified Ledger Account */
    equalTo?: InputMaybe<LedgerAccountMatchInput>;
    /** Results can match any of specified Ledger Accounts */
    in?: InputMaybe<Array<LedgerAccountMatchInput>>;
};
/** The consistency configuration for a specific Ledger Entry Group in this account. */
export type LedgerAccountGroupConsistencyConfigInput = {
    /** The group key for this configuration. */
    key: Scalars["String"]["input"];
    /**
     * If set to `strong`, then Ledger Entry Group `ownBalance`s updates for this account will be strongly consistent with the API response.
     * This Ledger Account's Ledger Entry Group balances will be updated and available for strongly consistent reads before you receive an API response.
     *
     * Otherwise if unset or set to `eventual`, Ledger Entry Group `ownBalance` updates are applied asynchronously and may not be immediately reflected in queries.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    ownBalanceUpdates: BalanceUpdateConsistencyMode;
};
/**
 * Specify a Ledger Account by using `id` or `path`.
 *
 * When specifying a Ledger Account by `path`, you must provide `ledger`.
 */
export type LedgerAccountMatchInput = {
    /** The FRAGMENT ID of the Ledger Account */
    id?: InputMaybe<Scalars["ID"]["input"]>;
    /** The Ledger to which this Ledger Account belongs. This is required if you are specifying the Ledger Account by `path`. */
    ledger?: InputMaybe<LedgerMatchInput>;
    /**
     * The unique path of the Ledger Account.
     * This is a slash-delimited string containing the keys of an account and all its direct ancestors.
     */
    path?: InputMaybe<Scalars["String"]["input"]>;
};
export type LedgerAccountTypeFilter = {
    /** Results must be of the specified Ledger Account type */
    equalTo?: InputMaybe<LedgerAccountTypes>;
    /** Results can have any of the specified Ledger Account types */
    in?: InputMaybe<Array<LedgerAccountTypes>>;
};
export declare enum LedgerAccountTypes {
    Asset = "asset",
    Expense = "expense",
    Income = "income",
    Liability = "liability"
}
/** A paginated list of Ledger Accounts */
export type LedgerAccountsConnection = {
    __typename?: "LedgerAccountsConnection";
    /** The current page of results */
    nodes: Array<LedgerAccount>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export type LedgerAccountsFilterSet = {
    /** Use this to filter Ledger Accounts by their parent status */
    hasParentLedgerAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Use this to filter Ledger Accounts by their linked status */
    isLinkedAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Use this to filter Ledger Accounts by their ID or path */
    ledgerAccount?: InputMaybe<LedgerAccountFilter>;
    /** Use this to filter Ledger Accounts by their external linked account ID */
    linkedAccount?: InputMaybe<ExternalAccountFilter>;
    /** Use this to filter Ledger Accounts by their parent account IDs */
    parentLedgerAccount?: InputMaybe<LedgerAccountFilter>;
    /**
     * A filter that must match the account path. Wildcards ('*') may be used only for template variables, and will only match a single variable each.
     * For example: 'assets-root/accounts-receivable/merchant:*' would match: 'assets-root/accounts-receivable/merchant:1' and 'assets-root/accounts-receivable/merchant:1/child'.
     * Wildcards may not be used outside of template variables. For example, passing in 'assets-root/*' as a filter is invalid and would raise a GraphQL error.
     */
    path?: InputMaybe<StringMatchFilter>;
    /** Use this to filter Ledger Accounts by their type */
    type?: InputMaybe<LedgerAccountTypeFilter>;
};
/** A paginated list of Ledger Entries */
export type LedgerEntriesConnection = {
    __typename?: "LedgerEntriesConnection";
    /** The current page of results */
    nodes: Array<LedgerEntry>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export type LedgerEntriesFilterSet = {
    date?: InputMaybe<DateFilter>;
    /** Use to filter Ledger Entries by their IDs or IKs. */
    ledgerEntry?: InputMaybe<LedgerEntryFilter>;
    posted?: InputMaybe<DateTimeFilter>;
    /** Use this to filter Ledger Entries by tags. The response will include entries that contain tags matching the filter. */
    tag?: InputMaybe<TagFilter>;
    /** Use this to filter Ledger Entries by type. Ledger Entry types are defined in Schemas. */
    type?: InputMaybe<StringFilter>;
};
export type LedgerEntry = {
    __typename?: "LedgerEntry";
    /** The conditions that were satisfied by this Ledger Entry when it was posted. */
    conditions: Array<LedgerEntryCondition>;
    /** ISO-8601 timestamp this LedgerEntry was created in Fragment. */
    created: Scalars["DateTime"]["output"];
    /** URL to the Fragment Dashboard for this Ledger Entry. */
    dashboardUrl: Scalars["String"]["output"];
    /** Date this LedgerEntry posted to its Ledger e.g. "2021-01-01". */
    date: Scalars["Date"]["output"];
    /** Description posted for this Ledger Entry. */
    description?: Maybe<Scalars["String"]["output"]>;
    /** The Ledger Entry Groups this Ledger Entry is in. */
    groups: Array<LedgerEntryGroup>;
    /** The ID of this LedgerEntry. */
    id: Scalars["ID"]["output"];
    /** The idempotency key used to post this ledger entry */
    ik: Scalars["String"]["output"];
    /** The Ledger that this Ledger Entry is posted to. */
    ledger: Ledger;
    /** The ID of the Ledger this Ledger Entry is posted to. */
    ledgerId: Scalars["ID"]["output"];
    /** Lines posted in this Ledger Entry. */
    lines: LedgerLinesConnection;
    /** The parameters used to post this Ledger Entry. */
    parameters?: Maybe<Scalars["Parameters"]["output"]>;
    /** ISO-8601 timestamp this LedgerEntry posted to its Ledger. */
    posted: Scalars["DateTime"]["output"];
    /** The set of tags attached to this Ledger Entry. */
    tags: Array<LedgerEntryTag>;
    /** The type of the Ledger Entry. */
    type?: Maybe<Scalars["SafeString"]["output"]>;
    /** @deprecated Callers should not need to query or store this value. */
    workspaceId: Scalars["ID"]["output"];
};
/** A set of pre-conditions and post-conditions that a Ledger Account must have satisfied. Each `LedgerEntryCondition` has at least one of `precondition` or `postcondition`. */
export type LedgerEntryCondition = {
    __typename?: "LedgerEntryCondition";
    /** The Ledger Account that must satisfied the provided conditions. */
    account: LedgerAccount;
    /** The currency of the balance associated with this `LedgerEntryCondition`. */
    currency: Currency;
    /** The conditions that must be satisfied after the operation. */
    postcondition?: Maybe<LedgerAccountCondition>;
    /** The conditions that must be satisfied prior to the operation. */
    precondition?: Maybe<LedgerAccountCondition>;
};
/** A set of pre-conditions and post-conditions that a Ledger Account balance must meet for an operation to succeed. You must specify at least one of `precondition` or `postcondition` for each condition. */
export type LedgerEntryConditionInput = {
    /** The Ledger Account that must satisfy the provided conditions. */
    account: LedgerAccountMatchInput;
    /** For Ledger Accounts in the `multi` currency mode, you must specify the currency of the balance affected by the condition. You only need to specify this field for multi-currency accounts. */
    currency?: InputMaybe<CurrencyMatchInput>;
    /** The conditions that must hold after the operation. */
    postcondition?: InputMaybe<LedgerAccountConditionInput>;
    /** The conditions that must hold prior to the operation. */
    precondition?: InputMaybe<LedgerAccountConditionInput>;
};
export type LedgerEntryFilter = {
    /** Result must be the specified Ledger Entry. */
    equalTo?: InputMaybe<LedgerEntryMatchInput>;
    /** Result can be any of the specified Ledger Entries. Limited to 100 items maximum. */
    in?: InputMaybe<Array<LedgerEntryMatchInput>>;
};
/** A group of Ledger Entries */
export type LedgerEntryGroup = {
    __typename?: "LedgerEntryGroup";
    balances: LedgerEntryGroupBalanceConnection;
    /** ISO-8601 timestamp this LedgerEntryGroup was created in Fragment. */
    created?: Maybe<Scalars["DateTime"]["output"]>;
    /** URL to the Fragment Dashboard for this Ledger Entry Group. */
    dashboardUrl: Scalars["String"]["output"];
    /** The key of this Ledger Entry Group. */
    key: Scalars["SafeString"]["output"];
    /** The Ledger that this Ledger Entry Group is within. */
    ledger: Ledger;
    ledgerEntries: LedgerEntriesConnection;
    /** The ID of the Ledger this Ledger Entry Group is within. */
    ledgerId: Scalars["ID"]["output"];
    /** The value associated with Ledger Entry Group. */
    value: Scalars["SafeString"]["output"];
};
/** A group of Ledger Entries */
export type LedgerEntryGroupBalancesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerEntryGroupBalanceFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A group of Ledger Entries */
export type LedgerEntryGroupLedgerEntriesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerEntriesFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** Represents the total effect of a Ledger Entry Group on a Ledger Account balance for a single currency. */
export type LedgerEntryGroupBalance = {
    __typename?: "LedgerEntryGroupBalance";
    /** The Ledger Account whose balance is affected. */
    account: LedgerAccount;
    /** The currency of the affected balance. */
    currency: Currency;
    /** The total balance change for this Ledger Account and currency. */
    ownBalance: Scalars["Int96"]["output"];
};
/** Represents the total effect of a Ledger Entry Group on a Ledger Account balance for a single currency. */
export type LedgerEntryGroupBalanceOwnBalanceArgs = {
    consistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
};
/** A set of balance changes for a specific Ledger Entry Group. */
export type LedgerEntryGroupBalanceConnection = {
    __typename?: "LedgerEntryGroupBalanceConnection";
    nodes: Array<LedgerEntryGroupBalance>;
    pageInfo: PageInfo;
};
/** Optional filters for querying balances on a Ledger Entry Group. */
export type LedgerEntryGroupBalanceFilterSet = {
    /** Filter to a subset of accounts */
    account?: InputMaybe<GroupBalanceAccountFilter>;
    /** Filter to one or more currencies */
    currency?: InputMaybe<CurrencyFilter>;
    /** Filter to only balances in a certain range */
    ownBalance?: InputMaybe<Int96Filter>;
};
export type LedgerEntryGroupInput = {
    /** The key of this group. Can be up to 128 characters long. */
    key: Scalars["SafeString"]["input"];
    /** The value associated with this group's key. Can be up to 128 characters long. */
    value: Scalars["SafeString"]["input"];
};
export type LedgerEntryGroupMatchInput = {
    key: Scalars["SafeString"]["input"];
    ledger: LedgerMatchInput;
    value: Scalars["SafeString"]["input"];
};
/** A paginated list of Ledger Entry Groups */
export type LedgerEntryGroupsConnection = {
    __typename?: "LedgerEntryGroupsConnection";
    /** The current page of results */
    nodes: Array<LedgerEntryGroup>;
    /** Pagination info for this list. */
    pageInfo: PageInfo;
};
export type LedgerEntryGroupsFilterSet = {
    /** Use to filter Ledger Entry Groups by their created timestamp */
    created?: InputMaybe<DateTimeFilter>;
    /** Use to filter Ledger Entry Groups by their key */
    key?: InputMaybe<StringFilter>;
    /** Use to filter Ledger Entry Groups by their value */
    value?: InputMaybe<StringFilter>;
};
/** Ledger Entries are limited to 30 Ledger Lines. */
export type LedgerEntryInput = {
    /** Conditions that must be satisfied to post this Ledger Entry. The Ledger Entry will reject with a BadRequestError if any condition is not met. You can only add a condition on a Ledger Account containing a Line in this Ledger Entry. */
    conditions?: InputMaybe<Array<LedgerEntryConditionInput>>;
    /** If specified, will also be used as the description for LedgerLines unless they specify their own description. */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Adds this Ledger Entry to this set of Ledger Entry Groups */
    groups?: InputMaybe<Array<LedgerEntryGroupInput>>;
    /** The Ledger to which to post this Ledger Entry. Must be linked to a Schema that defines the provided Ledger Entry type. */
    ledger?: InputMaybe<LedgerMatchInput>;
    /** The Ledger Lines to create as part of this Ledger Entry. This cannot be used with Ledger Entries that have a 'type' i.e.  Ledger Entries defined in the Schema. This can be useful during non-routine operations such as an incident. It is not recommended to use 'lines' during routine operations. */
    lines?: InputMaybe<Array<LedgerLineInput>>;
    /** Parameters to be included in a templated Ledger Entry. All provided parameters must be present in the typed Ledger Entry within the Schema linked to the provided Ledger. */
    parameters?: InputMaybe<Scalars["JSON"]["input"]>;
    /** ISO 8601 timestamp to post this Ledger Entry e.g. "2021-01-01" or "2021-01-01T16:45:00Z". Will error out if supplied to reconcileTx or createOrder since the transaction timestamp will be used instead */
    posted?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** A set of tags attached to this Ledger Entry. */
    tags?: InputMaybe<Array<LedgerEntryTagInput>>;
    /** The type of the Ledger Entry. Must be defined in the Schema linked to the Ledger specified below. */
    type?: InputMaybe<Scalars["String"]["input"]>;
    /** Experimental: This field is reserved for an upcoming feature and is not yet supported. */
    version?: InputMaybe<Scalars["Int"]["input"]>;
};
/** Specify a Ledger Entry by using `id`. */
export type LedgerEntryMatchInput = {
    /** The FRAGMENT ID of the Ledger Entry */
    id?: InputMaybe<Scalars["ID"]["input"]>;
    /** The IK provided to the `addLedgerEntry` mutation or the `ik` field returned from a `reconcileTx` mutation. This is required if you have not provided `id`. */
    ik?: InputMaybe<Scalars["SafeString"]["input"]>;
    /** The FRAGMENT ID of the Ledger to which this Ledger Entry belongs. This is required if you have not provided `id`. */
    ledger?: InputMaybe<LedgerMatchInput>;
};
/** A tag attached to a Ledger Entry. */
export type LedgerEntryTag = {
    __typename?: "LedgerEntryTag";
    /** The key of this tag. */
    key: Scalars["SafeString"]["output"];
    /** The value associated with this tag's key. */
    value: Scalars["SafeString"]["output"];
};
export type LedgerEntryTagInput = {
    /** The key of this tag. Can be up to 128 characters long. */
    key: Scalars["SafeString"]["input"];
    /** The value associated with this tag's key. Can be up to 128 characters long. */
    value: Scalars["SafeString"]["input"];
};
export type LedgerLine = {
    __typename?: "LedgerLine";
    /** LedgerAccount that contains this line */
    account: LedgerAccount;
    accountId: Scalars["ID"]["output"];
    /** How much this line's LedgerAccount's balance changed in integer cents  (i.e. in USD 100 is 1 dollar, 100 cents) */
    amount: Scalars["Int96"]["output"];
    /** ISO-8601 timestamp this LedgerLine was created in Fragment */
    created?: Maybe<Scalars["DateTime"]["output"]>;
    /** Currency of this LedgerLine */
    currency?: Maybe<Currency>;
    /** Date this LedgerLine posted to its LedgerAccount e.g. "2021-01-01" */
    date?: Maybe<Scalars["Date"]["output"]>;
    /** Description of this LedgerLine */
    description?: Maybe<Scalars["String"]["output"]>;
    /** ID in the external system of the payment or transfer that created the transaction linked to this LedgerLine */
    externalTransferId?: Maybe<Scalars["String"]["output"]>;
    /** Whether the transaction linked to this LedgerLine was a payment or transfer */
    externalTransferType?: Maybe<ExternalTransferType>;
    /** ID in the external system of the transaction linked to this LedgerLine */
    externalTxId?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    key?: Maybe<Scalars["String"]["output"]>;
    ledger: Ledger;
    /** LedgerEntry that contains this line */
    ledgerEntry: LedgerEntry;
    /** ID of the LedgerEntry that contains this line */
    ledgerEntryId: Scalars["ID"]["output"];
    /** Ledger that contains this line */
    ledgerId: Scalars["ID"]["output"];
    /** ID in the external system of destination or source bank account for an internal bank transfer. Only for internal bank transfers - see otherTxId */
    otherTxExternalAccountExternalId?: Maybe<Scalars["String"]["output"]>;
    /** FRAGMENT ID of destination or source bank account. Only for internal bank transfers - see otherTxId */
    otherTxExternalAccountId?: Maybe<Scalars["String"]["output"]>;
    /** ID in the external system of transaction in the destination or source bank account. Only for internal bank transfers - see otherTxId */
    otherTxExternalId?: Maybe<Scalars["String"]["output"]>;
    /** FRAGMENT ID of the transaction in the destination account (if sending money from this account) or source account (if pulling money into this account). Only applicable if this line is linked to a transaction created through an internal transfer */
    otherTxId?: Maybe<Scalars["String"]["output"]>;
    /** ISO-8601 timestamp this LedgerLine posted to its LedgerAccount */
    posted?: Maybe<Scalars["DateTime"]["output"]>;
    /** The transaction linked to this LedgerLine */
    tx?: Maybe<Tx>;
    /** Fragment ID of the transaction linked to this LedgerLine */
    txId?: Maybe<Scalars["String"]["output"]>;
    /** credit or debit */
    type: TxType;
    /** @deprecated Callers should not need to query or store this value. */
    workspaceId: Scalars["ID"]["output"];
};
export type LedgerLineAmountArgs = {
    absolute?: InputMaybe<Scalars["Boolean"]["input"]>;
};
export type LedgerLineInput = {
    /** The LedgerAccount this line is being added to */
    account: LedgerAccountMatchInput;
    /** A positive amount increases the balance of its LedgerAccount, a negative amount reduces the balance of its LedgerAccount */
    amount?: InputMaybe<Scalars["Int96"]["input"]>;
    /** The currency the ledger line is in */
    currency?: InputMaybe<CurrencyMatchInput>;
    /** If not specified the description from the parent LedgerEntryInput will be used */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Optional identifier for Ledger Line. You can filter lines by key using [LedgerLinesFilterSet](https://fragment.dev/api-reference/api-types#filter-types-ledgerlinesfilterset). */
    key?: InputMaybe<Scalars["String"]["input"]>;
    /** Required for reconcileTx to specify the transaction being reconciled, you can specify either the FRAGMENT ID or external ID of the transaction */
    tx?: InputMaybe<TxMatchInput>;
};
/** Specify a Ledger Line by using `id`. */
export type LedgerLineMatchInput = {
    /** The FRAGMENT ID of the ledger line */
    id: Scalars["ID"]["input"];
};
/** A paginated list of Ledger Lines */
export type LedgerLinesConnection = {
    __typename?: "LedgerLinesConnection";
    /** The current page of results */
    nodes: Array<LedgerLine>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export declare enum LedgerLinesConsistencyMode {
    Eventual = "eventual",
    Strong = "strong"
}
export type LedgerLinesFilterSet = {
    /** Filter by the created timestamp of the Ledger Line. This is the wall-clock time when the Ledger Line was created. */
    created?: InputMaybe<DateTimeFilter>;
    /** Filter by the posted date of the Ledger Line. This is identical to using `posted`, but only supports day-level granularity. */
    date?: InputMaybe<DateFilter>;
    /** Use this to filter Ledger Lines by key. Ledger Line keys are defined in Schemas. */
    key?: InputMaybe<StringFilter>;
    /** Filter by the posted timestamp of the Ledger Line. */
    posted?: InputMaybe<DateTimeFilter>;
    type?: InputMaybe<TxTypeFilter>;
};
/** Specify a Ledger by using `id` or `ik`. */
export type LedgerMatchInput = {
    /** The FRAGMENT ID of the Ledger */
    id?: InputMaybe<Scalars["ID"]["input"]>;
    /** The IK passed into the [createLedger](/api-reference/api-mutations#createledger) mutation. This is treated as a second unique identifier for this Ledger. */
    ik?: InputMaybe<Scalars["SafeString"]["input"]>;
};
/**
 * Represents a Schema being applied to a Ledger.
 * It contains metadata about the Ledger, the Schema, and the status of the migration.
 */
export type LedgerMigration = {
    __typename?: "LedgerMigration";
    /** The Ledger that the migration is run on. */
    ledger: Ledger;
    schemaVersion: SchemaVersion;
    /** The status of the Ledger Migration. */
    status: LedgerMigrationStatus;
};
/** A paginated list of Ledger Migrations */
export type LedgerMigrationConnection = {
    __typename?: "LedgerMigrationConnection";
    /** The current page of results */
    nodes: Array<LedgerMigration>;
    /** Pagination info for this list. */
    pageInfo: PageInfo;
};
/** The status of a ledger migration. */
export declare enum LedgerMigrationStatus {
    /**
     * The Ledger Migration has been successfully completed.
     * This is a terminal state.
     */
    Completed = "completed",
    /**
     * The Ledger Migration has failed.
     * This can happen either due to an invalid schema or an internal error.
     * This is a terminal state.
     */
    Failed = "failed",
    /** The Ledger Migration has been queued. */
    Queued = "queued",
    /**
     * The Ledger Migration has been skipped because a newer version is available.
     * This is a terminal state.
     */
    Skipped = "skipped",
    /** The Ledger Migration has been started. */
    Started = "started"
}
export type LedgerTypeFilter = {
    equalTo?: InputMaybe<LedgerTypes>;
    /** Must match one of the values provided. Limited to 100 items maximum. */
    in?: InputMaybe<Array<LedgerTypes>>;
};
export declare enum LedgerTypes {
    Double = "double"
}
/** A paginated list of Ledgers */
export type LedgersConnection = {
    __typename?: "LedgersConnection";
    /** The current page of results */
    nodes: Array<Ledger>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export type LedgersFilterSet = {
    hasSchema?: InputMaybe<Scalars["Boolean"]["input"]>;
    type?: InputMaybe<LedgerTypeFilter>;
};
export type Link = {
    /** ISO-8601 timestamp when the Link was created. */
    created: Scalars["String"]["output"];
    /** URL to the Fragment Dashboard for this Link. */
    dashboardUrl: Scalars["String"]["output"];
    /** A list of External Accounts associated with this Link. */
    externalAccounts: ExternalAccountsConnection;
    /** FRAGMENT ID of the Link. */
    id: Scalars["ID"]["output"];
    /** Name of the Link as it appears in the Dashboard. */
    name: Scalars["String"]["output"];
};
export type LinkMatchInput = {
    id: Scalars["ID"]["input"];
};
/** A paginated list of Links */
export type LinksConnection = {
    __typename?: "LinksConnection";
    /** The current page of results */
    nodes: Array<CustomLink | IncreaseLink | StripeLink | UnitLink>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type Mutation = {
    __typename?: "Mutation";
    _empty?: Maybe<Scalars["String"]["output"]>;
    /** Adds a Ledger Entry to a Ledger. This Ledger Entry cannot be into a Linked Ledger Account. For that, use [reconcileTx](https://fragment.dev/api-reference/api-mutations#reconciletx) */
    addLedgerEntry: AddLedgerEntryResponse;
    /** Creates a custom currency.  */
    createCustomCurrency: CreateCustomCurrencyResponse;
    /** Custom Links let you integrate external systems that don't have native support. See [Custom Links](https://fragment.dev/docs/sync-payments#custom-link) */
    createCustomLink: CreateCustomLinkResponse;
    /** Creates a Ledger.  */
    createLedger: CreateLedgerResponse;
    createLedgerAccount: CreateLedgerAccountResponse;
    /** This API call is used to create Ledger Accounts. It is only used if you are not using a Schema. Unlike other mutations that take a single IK, 'createLedgerAccount' accepts an IK for each of the ledger accounts in the request payload. This is so you can recover in the case of a partial failure.  One API call can create up to 200 Ledger Accounts, up to 10 levels deep. */
    createLedgerAccounts: CreateLedgerAccountsResponse;
    /** Delete Txs on a Custom Link. Once deleted, a Tx will not show up in listing queries, but can be resolved by if you lookup by its Fragment ID. */
    deleteCustomTxs: DeleteCustomTxsResponse;
    /**
     * Delete a Ledger.
     *
     * After using the deleteLedger mutation you can re-use the ik in a new ledger after a 30 second wait.
     */
    deleteLedger: DeleteLedgerResponse;
    /** Delete a Schema */
    deleteSchema: DeleteSchemaResponse;
    /** This mutation is used to [reconcile](https://fragment.dev/docs/reconcile-payments#reconcile-a-tx) transactions from an external system into a Ledger Entry. This mutation does not require an idempotency key since a transaction can only be reconciled once per Linked Ledger Account.  If you are reconciling a transfer between two Link Accounts which are both linked to the same Ledger, use a transit account in between to split the transfer into two `reconcileTx` calls. */
    reconcileTx: ReconcileTxResponse;
    /**
     * Stores a Schema in your workspace. If no Schema with the same key exists in your worksapce, a new Schema is created.
     * Else, the Schema is updated, and every Ledger associated with it is migrated to the latest version.
     */
    storeSchema: StoreSchemaResponse;
    /** Once you've created a [Custom Link](https://fragment.dev/docs/sync-payments#custom-link), create accounts under it using this mutation. Each Custom Account is an immutable, single-entry view of all the transactions in the external account. You can sync up to 100 Custom Accounts in one API call. */
    syncCustomAccounts: SyncCustomAccountsResponse;
    /** You can create transactions under a Custom Account in a [Custom Link](https://fragment.dev/docs/sync-payments#custom-link) using this mutation. Once you've imported transactions, you can use the reconcileTx mutation to add them to a Ledger via the Linked Ledger Account. You can sync up to 100 Custom Transactions in one API call. */
    syncCustomTxs: SyncCustomTxsResponse;
    /** Updates a Ledger. Currently, you can change only the Ledger 'name'. */
    updateLedger: UpdateLedgerResponse;
    /** Updates a ledger account. Only supports name right now. */
    updateLedgerAccount: UpdateLedgerAccountResponse;
    /** Update a ledger entry */
    updateLedgerEntry: UpdateLedgerEntryResponse;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationAddLedgerEntryArgs = {
    entry: LedgerEntryInput;
    ik: Scalars["SafeString"]["input"];
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationCreateCustomCurrencyArgs = {
    customCurrency: CreateCustomCurrencyInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationCreateCustomLinkArgs = {
    ik: Scalars["SafeString"]["input"];
    name: Scalars["String"]["input"];
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationCreateLedgerArgs = {
    ik: Scalars["SafeString"]["input"];
    ledger: CreateLedgerInput;
    schema?: InputMaybe<SchemaMatchInput>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationCreateLedgerAccountArgs = {
    ik: Scalars["SafeString"]["input"];
    ledger: LedgerMatchInput;
    ledgerAccount: CreateLedgerAccountInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationCreateLedgerAccountsArgs = {
    ledger: LedgerMatchInput;
    ledgerAccounts: Array<CreateLedgerAccountsInput>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationDeleteCustomTxsArgs = {
    txs: Array<Scalars["ID"]["input"]>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationDeleteLedgerArgs = {
    ledger: LedgerMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationDeleteSchemaArgs = {
    schema: SchemaMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationReconcileTxArgs = {
    entry: LedgerEntryInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationStoreSchemaArgs = {
    schema: SchemaInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationSyncCustomAccountsArgs = {
    accounts: Array<CustomAccountInput>;
    link: LinkMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationSyncCustomTxsArgs = {
    link: LinkMatchInput;
    txs: Array<CustomTxInput>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationUpdateLedgerArgs = {
    ledger: LedgerMatchInput;
    update: UpdateLedgerInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationUpdateLedgerAccountArgs = {
    ledgerAccount: LedgerAccountMatchInput;
    update: UpdateLedgerAccountInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-mutations) */
export type MutationUpdateLedgerEntryArgs = {
    ledgerEntry: LedgerEntryMatchInput;
    update: UpdateLedgerEntryInput;
};
/** Equivalent to an HTTP 404 */
export type NotFoundError = Error & {
    __typename?: "NotFoundError";
    /** The HTTP status code corresponding to the error */
    code: Scalars["String"]["output"];
    /** The error message */
    message: Scalars["String"]["output"];
    /** Whether or not the operation is retryable */
    retryable: Scalars["Boolean"]["output"];
};
/** An object containing [pagination](https://fragment.dev/docs/query-data#basics-pagination) details. */
export type PageInfo = {
    __typename?: "PageInfo";
    endCursor?: Maybe<Scalars["String"]["output"]>;
    hasNextPage: Scalars["Boolean"]["output"];
    hasPreviousPage: Scalars["Boolean"]["output"];
    startCursor?: Maybe<Scalars["String"]["output"]>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type Query = {
    __typename?: "Query";
    _empty?: Maybe<Scalars["String"]["output"]>;
    /** Query Custom Currencies in the workspace */
    customCurrencies: CustomCurrenciesConnection;
    /** Get External Account by Link and External ID or FRAGMENT ID. */
    externalAccount?: Maybe<ExternalAccount>;
    /** Get a Ledger by ID */
    ledger?: Maybe<Ledger>;
    /** Get a Ledger Account by ID */
    ledgerAccount?: Maybe<LedgerAccount>;
    /** Get Ledger Entry by ID. */
    ledgerEntry?: Maybe<LedgerEntry>;
    /** Query a Ledger Entry Group given its Ledger, key, and value. */
    ledgerEntryGroup?: Maybe<LedgerEntryGroup>;
    /** Get LedgerLine by ID */
    ledgerLine?: Maybe<LedgerLine>;
    /** Query Ledgers in workspace. Ledgers are paginated and returned in reverse-chronological order by their created date. */
    ledgers: LedgersConnection;
    /** Get a Link by ID. Returns a BadRequestError if the Link is not found. */
    link?: Maybe<CustomLink | IncreaseLink | StripeLink | UnitLink>;
    /** Get all links in a workspace */
    links: LinksConnection;
    /** Get a Schema by key. */
    schema?: Maybe<Schema>;
    /** Retrieve all of the Schemas in the workspace. */
    schemas: SchemaConnection;
    /** Get a Tx by ID */
    tx?: Maybe<Tx>;
    /** Get the current Workspace */
    workspace: Workspace;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryCustomCurrenciesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryExternalAccountArgs = {
    externalAccount: ExternalAccountMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgerArgs = {
    ledger: LedgerMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgerAccountArgs = {
    ledgerAccount: LedgerAccountMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgerEntryArgs = {
    ledgerEntry: LedgerEntryMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgerEntryGroupArgs = {
    ledgerEntryGroup: LedgerEntryGroupMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgerLineArgs = {
    ledgerLine: LedgerLineMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLedgersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgersFilterSet>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryLinkArgs = {
    link: LinkMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QuerySchemaArgs = {
    schema: SchemaMatchInput;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QuerySchemasArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/** View the API guide [here](https://fragment.dev/api-reference/api-queries) */
export type QueryTxArgs = {
    tx: TxMatchInput;
};
/** The consistency configuration of a Ledger Account's balance queries. If not provided as an argument to a balance query, the default behavior is to read eventually consistent balances. See [Configure consistency](https://fragment.dev/docs/configure-consistency). */
export declare enum ReadBalanceConsistencyMode {
    /** Balance queries will read eventually consistent balances. This is the default behavior if `ReadBalanceConsistencyMode` is not provided as an argument to the balance field. Both Ledger Accounts configured with strongly and eventually consistent balance updates support this enum. */
    Eventual = "eventual",
    /** Balance queries will read strongly consistent balances. This is only allowed if the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig` is `strong`. */
    Strong = "strong",
    /** Balance queries will use the value from the Ledger Account's `ownBalanceUpdates` in its `consistencyConfig`. */
    UseAccount = "use_account"
}
export type ReconcileTxResponse = BadRequestError | InternalError | ReconcileTxResult;
export type ReconcileTxResult = {
    __typename?: "ReconcileTxResult";
    /** The ledger entry that was posted */
    entry: LedgerEntry;
    /** True if this request successfully completed before and the previous response is being returned */
    isIkReplay: Scalars["Boolean"]["output"];
    /** The ledger lines that were created in that entry */
    lines: Array<LedgerLine>;
};
/** A simulated Ledger Entry posted as a part of a Scene. */
export type SceneEntryInput = {
    /** Any parameters to be used as inputs to this simulated Ledger Entry. */
    parameters?: InputMaybe<Scalars["JSON"]["input"]>;
    /** The type of the simulated Ledger Entry. Must match one of the types provided in schema.ledgerEntries.types. */
    type: Scalars["SafeString"]["input"];
};
export type SceneEventInput = {
    /** The simulated Ledger Entry. */
    entry: SceneEntryInput;
    /** The type of the Scene Event. Currently, only entries are supported. */
    eventType: SceneEventType;
};
export declare enum SceneEventType {
    Entry = "entry"
}
export type SceneInput = {
    /** A list of simulated ledger entries that make up the Scene. */
    events: Array<SceneEventInput>;
    /** The human-readable name of the Scene. */
    name: Scalars["String"]["input"];
};
export type Schema = {
    __typename?: "Schema";
    /**
     * The identifier for a Schema.
     * `key` is unique to a Workspace.
     */
    key: Scalars["SafeString"]["output"];
    /** The paginated list of ledgers the Schema has been applied to. */
    ledgers: LedgersConnection;
    /** The name of a Schema. It defaults to the `key` if not provided in your SchemaInput. */
    name: Scalars["String"]["output"];
    /** The metadata for a specific SchemaVersion. */
    version: SchemaVersion;
    /** A paginated list of SchemaVersions. */
    versions: SchemaVersionConnection;
};
export type SchemaLedgersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
export type SchemaVersionArgs = {
    version?: InputMaybe<Scalars["Int"]["input"]>;
};
export type SchemaVersionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
};
/**
 * A condition that must be met on a Ledger Account balance. The condition can be
 * either a `precondition` or `postcondition`.
 */
export type SchemaConditionInput = {
    /** A condition on the `ownBalance` of the Ledger Account. */
    ownBalance?: InputMaybe<SchemaInt96ConditionInput>;
};
/** A paginated list of Schemas in a Workspace. */
export type SchemaConnection = {
    __typename?: "SchemaConnection";
    /** The current page of results */
    nodes: Array<Schema>;
    /** Pagination info for this list. */
    pageInfo: PageInfo;
};
/**
 * The consistency configuration for entities created within Ledgers created by this Schema.
 *
 * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
 */
export type SchemaConsistencyConfigInput = {
    /**
     * The consistency mode for the Ledger Entries list query within Ledgers created by this Schema.
     *
     * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
     */
    entries?: InputMaybe<SchemaConsistencyMode>;
};
/**
 * The consistency modes available for entities created within this Schema.
 *
 * See [Configure consistency](https://fragment.dev/docs/configure-consistency).
 */
export declare enum SchemaConsistencyMode {
    /** Eventually consistent entity updates */
    Eventual = "eventual",
    /** Strongly consistent entity updates */
    Strong = "strong"
}
/**
 * Matches a Currency. Can be a built-in [CurrencyCode](https://fragment.dev/api-reference/api-types#scalars-and-enums-currencycode), custom Currency, or a parameterized string.
 * If you supply a parameterized string, you must pass in a valid CurrencyCode as a parameter when posting a Ledger Entry.
 */
export type SchemaCurrencyMatchInput = {
    /** The currency code. This must either be a [CurrencyCode](https://fragment.dev/api-reference/api-types#scalars-and-enums-currencycode) or a parameterized string that resolves to a CurrencyCode . */
    code: Scalars["ParameterizedString"]["input"];
    /** The ID for a custom currency. This is specified when creating the custom currency using the [createCustomCurrency](https://fragment.dev/api-reference/api-mutations#createcustomcurrency) mutation. */
    customCurrencyId?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
};
export type SchemaExternalAccountMatchInput = {
    /** The External systems's ID of the account */
    externalId?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** The FRAGMENT ID of the external account */
    id?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** The FRAGMENT ID of the link */
    linkId?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
};
/** Input to the API for creating a Schema. */
export type SchemaInput = {
    /** The Chart of Accounts for the Schema. */
    chartOfAccounts: ChartOfAccountsInput;
    /** The consistency configuration for this Schema. */
    consistencyConfig?: InputMaybe<SchemaConsistencyConfigInput>;
    /** The key of the Schema. This is a stable, unique identifier for the Schema. Uniqueness is enforced at the Workspace level. */
    key: Scalars["SafeString"]["input"];
    /** The Ledger Entries to add to the Schema. */
    ledgerEntries?: InputMaybe<SchemaLedgerEntriesInput>;
    /** The human-readable name of the Schema. */
    name?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** Any scenes associated with this Schema. */
    scenes?: InputMaybe<Array<SceneInput>>;
};
/** A condition that must be met on a field. */
export type SchemaInt96ConditionInput = {
    /** Amount must be exactly equal to this value. You may not specify this alongside `gte` or `lte`. */
    eq?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** Amount must be greater than or equal to this value. */
    gte?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** Amount must be less than or equal to this value. */
    lte?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
};
/**
 * Models a Ledger Account in a Schema.
 * Upon successfully storing a [Schema](https://fragment.dev/api-reference/api-types#core-types-schema), a [LedgerAccount](https://fragment.dev/api-reference/api-types#core-types-ledgeraccount) will be created for
 * each corresponding non-templated `SchemaLedgerAccountInput` in your Chart of Accounts.
 */
export type SchemaLedgerAccountInput = {
    /** Ledger Accounts to create as children of this Ledger Account. Ledger Accounts may be nested up to a maximum depth of 10. */
    children?: InputMaybe<Array<SchemaLedgerAccountInput>>;
    /** The consistency configuration for this ledger account. See [Configure consistency](https://fragment.dev/docs/configure-consistency). */
    consistencyConfig?: InputMaybe<LedgerAccountConsistencyConfigInput>;
    /**
     * The currency of this Ledger Account. If this is not set, and `currencyMode` is
     * not set to `multi`, it is derived from the Chart of Accounts' default.
     */
    currency?: InputMaybe<SchemaCurrencyMatchInput>;
    /** If set to `multi`, creates a multi-currency Ledger Account. If set to `single`, creates a single-currency Ledger Account. */
    currencyMode?: InputMaybe<CurrencyMode>;
    /**
     * The key of this Ledger Account. Keys are used to formulate the unique path of the Ledger Account in your Chart of Accounts.
     * Siblings must have unique keys.
     */
    key: Scalars["SafeString"]["input"];
    /**
     * The External Account to link to this Ledger Account.
     * It must be provided of `linked` is true.
     */
    linkedAccount?: InputMaybe<SchemaExternalAccountMatchInput>;
    /** The human-readable name of this Ledger Account. */
    name?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** Whether or not this Ledger Account should be templated. */
    template?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The type of ledger account to create. Required if this is a top-level Ledger Account. If not provided, the type will be inferred from the parent. */
    type?: InputMaybe<LedgerAccountTypes>;
};
/** Matches a Ledger Account in a Schema. */
export type SchemaLedgerAccountMatchInput = {
    /**
     * The unique path of the Ledger Account in the Schema.
     * This is a slash-delimited string containing the keys of a Ledger Account and all its direct ancestors.
     * ex: expense-root/subscriptions/netflix
     * For Templated Ledger Accounts, you must supply a parameter in the path that will be used to name an instance of the template.
     * ex: `"expense-root/subscriptions/vendor:{{vendor_name}}"`
     */
    path: Scalars["ParameterizedString"]["input"];
};
/** The Ledger Entries in your Schema. */
export type SchemaLedgerEntriesInput = {
    /** A list of Ledger Entry definitions. */
    types: Array<SchemaLedgerEntryInput>;
};
/** A condition that must be met on a Ledger Account when a Ledger Entry is posted. */
export type SchemaLedgerEntryConditionInput = {
    /** The Ledger Account to apply the condition to. */
    account: SchemaLedgerAccountMatchInput;
    /**
     * The currency of the balance to apply the condition to. Required if the Ledger Account matched is a multi-currency Ledger Account.
     * Otherwise, this field is defaults to the Ledger Account's currency.
     */
    currency?: InputMaybe<SchemaCurrencyMatchInput>;
    /** A `postcondition` must be met after the Ledger Entry updates are applied. */
    postcondition?: InputMaybe<SchemaConditionInput>;
    /** A `precondition` must be met before any Ledger Entry updates are applied. */
    precondition?: InputMaybe<SchemaConditionInput>;
};
/** A Ledger Entry Group associated with a Ledger Entry type. */
export type SchemaLedgerEntryGroupInput = {
    /** The key for this Ledger Entry Group. */
    key: Scalars["SafeString"]["input"];
    /** The value associated with this Ledger Entry Group. */
    value: Scalars["ParameterizedString"]["input"];
};
/** A Ledger Entry in a Schema. All Ledger Entries defined in a Schema must have a unique `type`. */
export type SchemaLedgerEntryInput = {
    /** Conditions that must be satisfied to post this Ledger Entry. The Ledger Entry will reject with a BadRequestError if any condition is not met. You can only add a condition on a Ledger Account containing a Line in this Ledger Entry. */
    conditions?: InputMaybe<Array<SchemaLedgerEntryConditionInput>>;
    /** Human-readable description of the Ledger Entry. */
    description?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** Ledger Entries posted with this type will be in these Ledger Entry Groups. */
    groups?: InputMaybe<Array<SchemaLedgerEntryGroupInput>>;
    /**
     * The Ledger Lines in the Ledger Entry.
     * If provided, when posting a Typed Entry, a [LedgerEntry](https://fragment.dev/api-reference/api-types#core-types-ledgerline) will be posted containing [LedgerLines](https://fragment.dev/api-reference/api-types#core-types-ledgerline) corresponding
     * to the values you provide here. If your lines contain parameters, you must supply values for those parameters that balance out the Ledger Entry. If not provided, lines will be required when posting a Typed Entry.
     */
    lines?: InputMaybe<Array<SchemaLedgerLineInput>>;
    /** Fixed partial set of parameters to be included in a templated Ledger Entry. */
    parameters?: InputMaybe<Scalars["JSON"]["input"]>;
    /** Ledger Entries posted with this type will be associated with these tags. */
    tags?: InputMaybe<Array<SchemaLedgerEntryTagInput>>;
    /**
     * The type of this Ledger Entry. This is a stable, unique identifier for this entry. Uniqueness is enforced at the Schema level.
     * You can filter on this field when querying for Ledger Entries. See the docs on [LedgerEntryFilterSet](https://fragment.dev/api-reference/api-types#filter-types-ledgerentriesfilterset)
     */
    type: Scalars["SafeString"]["input"];
    /** Experimental: This field is not yet supported. */
    version?: InputMaybe<Scalars["Int"]["input"]>;
};
/** A tag associated with a Ledger Entry type. */
export type SchemaLedgerEntryTagInput = {
    /** The key for this tag. */
    key: Scalars["SafeString"]["input"];
    /** The value associated with the given key for this tag. */
    value: Scalars["ParameterizedString"]["input"];
};
/** A Ledger Line in a Ledger Entry. */
export type SchemaLedgerLineInput = {
    /**
     * The Ledger Account this Ledger Line will be posted to.
     * It supports parameters in its attributes via handlebars syntax.
     */
    account: SchemaLedgerAccountMatchInput;
    /** The amount of the Ledger Line. It supports parameters via the handlebars syntax and addition (+) and subtraction (-). */
    amount?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /**
     * The currency of the Ledger Line. This is required if the Ledger Account has currencyMode multi.
     * It supports parameters in its attributes via handlebars syntax.
     */
    currency?: InputMaybe<SchemaCurrencyMatchInput>;
    /** Human-readable description of the line. */
    description?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** The key for the Ledger Line. Ledger Line keys must be unique within a Ledger Entry. Key can be filtered on as part of the LedgerLinesFilterSet. */
    key: Scalars["SafeString"]["input"];
    /**
     * The external transaction to reconcile.
     * This field is required if the Ledger Account being posted to is a Linked Ledger Account. Otherwise, this field is disallowed.
     * It supports parameters in its attributes via handlebars syntax.
     *
     * See the docs on [reconciling payments](https://fragment.dev/docs/reconcile-payments).
     */
    tx?: InputMaybe<SchemaTxMatchInput>;
};
/** An object used to retrieve a Schema. */
export type SchemaMatchInput = {
    /**
     * The key to retrieve a Schema by.
     * `key` is unique to a Workspace.
     */
    key: Scalars["SafeString"]["input"];
    /** Optional parameter to specify version of requested Schema. If not provided, it defaults to 0, representing the latest available version for the provided Schema key. */
    version?: InputMaybe<Scalars["Int"]["input"]>;
};
/**
 * Matches a transaction at an external system.
 * This is used to specify the transaction being reconciled into a Linked Ledger Account
 */
export type SchemaTxMatchInput = {
    /** The external system's ID for the transaction. */
    externalId?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
    /** The FRAGMENT ID for the transaction. */
    id?: InputMaybe<Scalars["ParameterizedString"]["input"]>;
};
/**
 * An instance of a Schema stored in a Workspace.
 * A new SchemaVersion is created each time a Schema is stored.
 * It stores the Chart of Accounts and list of Ledger Entries as well as a history of its Ledger migrations.
 */
export type SchemaVersion = {
    __typename?: "SchemaVersion";
    created: Scalars["DateTime"]["output"];
    json: Scalars["JSON"]["output"];
    migrations: LedgerMigrationConnection;
    /** The version of the schema. */
    version: Scalars["Int"]["output"];
};
/** A paginated list of SchemaVersions for a given Schema. */
export type SchemaVersionConnection = {
    __typename?: "SchemaVersionConnection";
    /** The current page of results */
    nodes: Array<SchemaVersion>;
    /** Pagination info for this list. */
    pageInfo: PageInfo;
};
/** Returned by the [storeSchema](https://fragment.dev/api-reference/api-mutations#storeschema) mutation. */
export type StoreSchemaResponse = BadRequestError | InternalError | StoreSchemaResult;
/** `StoreSchemaResult` represents a successful execution of `storeSchema`. */
export type StoreSchemaResult = {
    __typename?: "StoreSchemaResult";
    /** The Schema that was stored as a result of calling `storeSchema`. */
    schema: Schema;
};
export type StringFilter = {
    equalTo?: InputMaybe<Scalars["String"]["input"]>;
    /** Must match one of the values provided. Limited to 100 items maximum. */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
};
export type StringMatchFilter = {
    /** Must contain the provided pattern somewhere within the string. For example, 'contains: hat' will match 'hat', 'chat', and 'hate'. */
    contains?: InputMaybe<Scalars["String"]["input"]>;
    /** Must exactly equal the provided value */
    equalTo?: InputMaybe<Scalars["String"]["input"]>;
    /** Must exactly equal one of the provided values. Limited to 100 items maximum. */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** Must match the provided pattern. Wildcards ("*") will match any substring */
    matches?: InputMaybe<Scalars["String"]["input"]>;
};
export declare enum StripeEnv {
    Livemode = "livemode",
    Testmode = "testmode"
}
export type StripeLink = Link & {
    __typename?: "StripeLink";
    /** ISO-8601 timestamp when the Link was created. */
    created: Scalars["String"]["output"];
    /** URL to the Fragment Dashboard for this Link. */
    dashboardUrl: Scalars["String"]["output"];
    /** A list of External Accounts associated with this Link. */
    externalAccounts: ExternalAccountsConnection;
    /** FRAGMENT ID of the Custom Link. */
    id: Scalars["ID"]["output"];
    /** Name of the Link as it appears in the Fragment Dashboard. */
    name: Scalars["String"]["output"];
    /** The environment of the Stripe Link, either testmode or livemode. */
    stripeEnv: StripeEnv;
};
export type SyncCustomAccountsResponse = BadRequestError | InternalError | SyncCustomAccountsResult;
export type SyncCustomAccountsResult = {
    __typename?: "SyncCustomAccountsResult";
    /** The external accounts that were synced. */
    accounts: Array<ExternalAccount>;
};
export type SyncCustomTxsResponse = BadRequestError | InternalError | SyncCustomTxsResult;
export type SyncCustomTxsResult = {
    __typename?: "SyncCustomTxsResult";
    txs: Array<Tx>;
};
/** Filters a result set based on the tags it contains. */
export type TagFilter = {
    /** Matches tag values based on the existence of the provided string within the tag value. The key is matched exactly. */
    contains?: InputMaybe<TagMatchInput>;
    /** Matches tags based on the exact value provided. The key and value are both matched exactly. */
    equalTo?: InputMaybe<TagMatchInput>;
    /** Matches tags based on a list of possible tag matches. The key and value are both matched exactly. Limited to 100 items maximum. */
    in?: InputMaybe<Array<TagMatchInput>>;
};
/** Specifies a single tag that an entity is expected to have. You must specify both the key and the value. */
export type TagMatchInput = {
    /** The key of this tag. */
    key: Scalars["SafeString"]["input"];
    /** The value associated with this tag's key. */
    value: Scalars["SafeString"]["input"];
};
export type Tx = {
    __typename?: "Tx";
    /** FRAGMENT ID of this transaction's external account */
    accountId: Scalars["ID"]["output"];
    /** Integer amount in cents. Positive indicates money entering the external account, negative indicates money leaving */
    amount: Scalars["Int96"]["output"];
    /** Currency of this Tx */
    currency?: Maybe<Currency>;
    /** Date this Tx posted to the external account */
    date: Scalars["Date"]["output"];
    /** ISO-8601 timestamp when this Tx was deleted */
    deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** Description at the external account */
    description: Scalars["String"]["output"];
    /** The External Account that this transaction belongs to. */
    externalAccount: ExternalAccount;
    /** ID in the external system of this transaction's external account */
    externalAccountId: Scalars["ID"]["output"];
    /** ID of this transaction in the external system */
    externalId: Scalars["ID"]["output"];
    /** FRAGMENT ID of this Tx. If you delete a Tx via deleteCustomTxs, it will not show up in listing queries, but can be resolved by if you lookup by its Fragment ID. If you resync a Tx with the same externalId, its Fragment ID will be different than the previous Tx. */
    id: Scalars["ID"]["output"];
    /** Whether this Tx has been deleted via deleteCustomTxs */
    isDeleted: Scalars["Boolean"]["output"];
    /** Returns ledger entries that are linked to this transaction. You can link the same external account to multiple ledgers, so there could be multiple entries associated with one transaction - one for each linked ledger account this transaction has been reconciled with */
    ledgerEntries: LedgerEntriesConnection;
    /** Same as ledgerEntries, but returns an array of IDs instead */
    ledgerEntryIds?: Maybe<Array<Scalars["ID"]["output"]>>;
    /** Same as ledgerLines, but returns an array of IDs instead */
    ledgerLineIds?: Maybe<Array<Scalars["ID"]["output"]>>;
    /** Returns ledger lines that are linked to this transaction. You can link the same external account to multiple ledgers, so there could be multipe lines associated with one transaction - one for each linked ledger account this transaction has been reconciled with */
    ledgerLines: LedgerLinesConnection;
    /** This transaction's Link. */
    link: CustomLink | IncreaseLink | StripeLink | UnitLink;
    /** FRAGMENT ID of this transaction's Link */
    linkId: Scalars["ID"]["output"];
    /** ISO-8601 timestamp when this Tx posted to the external account */
    posted: Scalars["DateTime"]["output"];
    /** When a Tx is deleted and a new Tx is synced with the same externalId, its sequence will be higher than the previous Tx. You can use this to distinguish different instances of Txs that have the same externalId. */
    sequence: Scalars["Int"]["output"];
    /** @deprecated Callers should not need to query or store this value. */
    workspaceId: Scalars["ID"]["output"];
};
/** Specify a Tx by using `id` or `externalId`, the Link it belongs to by `linkId`, and the External Account it is a part of by `accountId` or `externalAccountId`. */
export type TxMatchInput = {
    /** The FRAGMENT ID of the external account */
    accountId?: InputMaybe<Scalars["ID"]["input"]>;
    /** The external system's ID for the account */
    externalAccountId?: InputMaybe<Scalars["ID"]["input"]>;
    /** The external system's ID for the transaction */
    externalId?: InputMaybe<Scalars["ID"]["input"]>;
    /** The FRAGMENT ID of the transaction */
    id?: InputMaybe<Scalars["ID"]["input"]>;
    /** The FRAGMENT ID of the link */
    linkId?: InputMaybe<Scalars["ID"]["input"]>;
};
export declare enum TxType {
    Credit = "credit",
    Debit = "debit"
}
export type TxTypeFilter = {
    equalTo?: InputMaybe<TxType>;
    /** Must match one of the values provided. Limited to 100 items maximum. */
    in?: InputMaybe<Array<TxType>>;
};
/** A paginated list of Txs */
export type TxsConnection = {
    __typename?: "TxsConnection";
    /** The current page of results */
    nodes: Array<Tx>;
    /** The [pagination info](https://fragment.dev/api-reference/api-types#connection-types-pageinfo) for this list */
    pageInfo: PageInfo;
};
export declare enum UnitEnv {
    Production = "production",
    Sandbox = "sandbox"
}
export type UnitLink = Link & {
    __typename?: "UnitLink";
    /** ISO-8601 timestamp when the Link was created. */
    created: Scalars["String"]["output"];
    /** URL to the Fragment Dashboard for this Link. */
    dashboardUrl: Scalars["String"]["output"];
    /** A list of External Accounts associated with this Link. */
    externalAccounts: ExternalAccountsConnection;
    /** FRAGMENT ID of the Unit Link. */
    id: Scalars["ID"]["output"];
    /** Name of the Link as it appears in the Dashboard. */
    name: Scalars["String"]["output"];
    /** The environment of the Unit Link, either sandbox or production. */
    unitEnv: UnitEnv;
};
export type UpdateLedgerAccountInput = {
    /** The consistency configuration for this ledger account. This defines how updates to this ledger account's balance are handled. */
    consistencyConfig?: InputMaybe<LedgerAccountConsistencyConfigInput>;
    /** The name to update the ledger account to */
    name?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateLedgerAccountResponse = BadRequestError | InternalError | UpdateLedgerAccountResult;
export type UpdateLedgerAccountResult = {
    __typename?: "UpdateLedgerAccountResult";
    /** The ledger account that was updated */
    ledgerAccount: LedgerAccount;
};
export type UpdateLedgerEntryInput = {
    /** The list of Groups to add to this Ledger Entry. */
    groups?: InputMaybe<Array<LedgerEntryGroupInput>>;
    /** The list of Tags to add and/or update on this Ledger Entry. */
    tags?: InputMaybe<Array<LedgerEntryTagInput>>;
};
export type UpdateLedgerEntryResponse = BadRequestError | InternalError | UpdateLedgerEntryResult;
export type UpdateLedgerEntryResult = {
    __typename?: "UpdateLedgerEntryResult";
    /** The Ledger Entry that was updated. */
    entry: LedgerEntry;
};
export type UpdateLedgerInput = {
    /** The new Ledger name.  */
    name?: InputMaybe<Scalars["String"]["input"]>;
};
export type UpdateLedgerResponse = BadRequestError | InternalError | UpdateLedgerResult;
export type UpdateLedgerResult = {
    __typename?: "UpdateLedgerResult";
    /** The updated Ledger.  */
    ledger: Ledger;
};
export type Workspace = {
    __typename?: "Workspace";
    /** The ID of the Workspace */
    id: Scalars["String"]["output"];
    /** The name of the Workspace */
    name: Scalars["String"]["output"];
};
export type StoreSchemaMutationVariables = Exact<{
    schema: SchemaInput;
}>;
export type StoreSchemaMutation = {
    __typename?: "Mutation";
    storeSchema: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "StoreSchemaResult";
        schema: {
            __typename?: "Schema";
            key: string;
            name: string;
            version: {
                __typename?: "SchemaVersion";
                created: string;
                version: number;
            };
        };
    };
};
export type CreateLedgerMutationVariables = Exact<{
    ik: Scalars["SafeString"]["input"];
    ledger: CreateLedgerInput;
    schemaKey: Scalars["SafeString"]["input"];
}>;
export type CreateLedgerMutation = {
    __typename?: "Mutation";
    createLedger: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "CreateLedgerResult";
        isIkReplay: boolean;
        ledger: {
            __typename?: "Ledger";
            id: string;
            ik: string;
            name: string;
            created: string;
            schema?: {
                __typename?: "Schema";
                key: string;
            } | null;
        };
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    };
};
export type AddLedgerEntryMutationVariables = Exact<{
    ik: Scalars["SafeString"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
    type: Scalars["String"]["input"];
    posted?: InputMaybe<Scalars["DateTime"]["input"]>;
    parameters: Scalars["JSON"]["input"];
    tags?: InputMaybe<Array<LedgerEntryTagInput> | LedgerEntryTagInput>;
    groups?: InputMaybe<Array<LedgerEntryGroupInput> | LedgerEntryGroupInput>;
}>;
export type AddLedgerEntryMutation = {
    __typename?: "Mutation";
    addLedgerEntry: {
        __typename: "AddLedgerEntryResult";
        isIkReplay: boolean;
        entry: {
            __typename?: "LedgerEntry";
            type?: string | null;
            id: string;
            ik: string;
            posted: string;
            created: string;
        };
        lines: Array<{
            __typename?: "LedgerLine";
            id: string;
            amount: string;
            account: {
                __typename?: "LedgerAccount";
                path: string;
            };
        }>;
    } | {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    };
};
export type AddLedgerEntryRuntimeMutationVariables = Exact<{
    ik: Scalars["SafeString"]["input"];
    type: Scalars["String"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
    posted?: InputMaybe<Scalars["DateTime"]["input"]>;
    lines: Array<LedgerLineInput> | LedgerLineInput;
    tags?: InputMaybe<Array<LedgerEntryTagInput> | LedgerEntryTagInput>;
    groups?: InputMaybe<Array<LedgerEntryGroupInput> | LedgerEntryGroupInput>;
}>;
export type AddLedgerEntryRuntimeMutation = {
    __typename?: "Mutation";
    addLedgerEntry: {
        __typename: "AddLedgerEntryResult";
        isIkReplay: boolean;
        entry: {
            __typename?: "LedgerEntry";
            type?: string | null;
            id: string;
            ik: string;
            posted: string;
            created: string;
        };
        lines: Array<{
            __typename?: "LedgerLine";
            id: string;
            amount: string;
            account: {
                __typename?: "LedgerAccount";
                path: string;
            };
        }>;
    } | {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    };
};
export type ReconcileTxMutationVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    type: Scalars["String"]["input"];
    parameters: Scalars["JSON"]["input"];
    tags?: InputMaybe<Array<LedgerEntryTagInput> | LedgerEntryTagInput>;
    groups?: InputMaybe<Array<LedgerEntryGroupInput> | LedgerEntryGroupInput>;
}>;
export type ReconcileTxMutation = {
    __typename?: "Mutation";
    reconcileTx: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "ReconcileTxResult";
        entry: {
            __typename?: "LedgerEntry";
            id: string;
            ik: string;
            date: string;
            posted: string;
            created: string;
            description?: string | null;
        };
        lines: Array<{
            __typename?: "LedgerLine";
            id: string;
            amount: string;
            externalTxId?: string | null;
            account: {
                __typename?: "LedgerAccount";
                path: string;
            };
        }>;
    };
};
export type ReconcileTxRuntimeMutationVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    type: Scalars["String"]["input"];
    lines: Array<LedgerLineInput> | LedgerLineInput;
    tags?: InputMaybe<Array<LedgerEntryTagInput> | LedgerEntryTagInput>;
    groups?: InputMaybe<Array<LedgerEntryGroupInput> | LedgerEntryGroupInput>;
}>;
export type ReconcileTxRuntimeMutation = {
    __typename?: "Mutation";
    reconcileTx: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "ReconcileTxResult";
        entry: {
            __typename?: "LedgerEntry";
            id: string;
            ik: string;
            date: string;
            posted: string;
            created: string;
            description?: string | null;
        };
        lines: Array<{
            __typename?: "LedgerLine";
            id: string;
            amount: string;
            externalTxId?: string | null;
            account: {
                __typename?: "LedgerAccount";
                path: string;
            };
        }>;
    };
};
export type UpdateLedgerEntryMutationVariables = Exact<{
    entryIk: Scalars["SafeString"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
    update: UpdateLedgerEntryInput;
}>;
export type UpdateLedgerEntryMutation = {
    __typename?: "Mutation";
    updateLedgerEntry: {
        __typename: "BadRequestError";
        code: string;
        message: string;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
    } | {
        __typename: "UpdateLedgerEntryResult";
        entry: {
            __typename?: "LedgerEntry";
            id: string;
            ik: string;
            posted: string;
            created: string;
            description?: string | null;
            lines: {
                __typename?: "LedgerLinesConnection";
                nodes: Array<{
                    __typename?: "LedgerLine";
                    id: string;
                    amount: string;
                    account: {
                        __typename?: "LedgerAccount";
                        path: string;
                    };
                }>;
            };
            groups: Array<{
                __typename?: "LedgerEntryGroup";
                key: string;
                value: string;
            }>;
            tags: Array<{
                __typename?: "LedgerEntryTag";
                key: string;
                value: string;
            }>;
        };
    };
};
export type UpdateLedgerMutationVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    update: UpdateLedgerInput;
}>;
export type UpdateLedgerMutation = {
    __typename?: "Mutation";
    updateLedger: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "UpdateLedgerResult";
        ledger: {
            __typename?: "Ledger";
            id: string;
            ik: string;
            name: string;
        };
    };
};
export type CreateCustomLinkMutationVariables = Exact<{
    name: Scalars["String"]["input"];
    ik: Scalars["SafeString"]["input"];
}>;
export type CreateCustomLinkMutation = {
    __typename?: "Mutation";
    createCustomLink: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "CreateCustomLinkResult";
        isIkReplay: boolean;
        link: {
            __typename?: "CustomLink";
            id: string;
            name: string;
            created: string;
        };
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    };
};
export type SyncCustomAccountsMutationVariables = Exact<{
    linkId: Scalars["ID"]["input"];
    accounts: Array<CustomAccountInput> | CustomAccountInput;
}>;
export type SyncCustomAccountsMutation = {
    __typename?: "Mutation";
    syncCustomAccounts: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "SyncCustomAccountsResult";
        accounts: Array<{
            __typename?: "ExternalAccount";
            id: string;
            externalId: string;
            name: string;
            currency?: {
                __typename?: "Currency";
                code: CurrencyCode;
                customCurrencyId?: string | null;
            } | null;
        }>;
    };
};
export type SyncCustomTxsMutationVariables = Exact<{
    linkId: Scalars["ID"]["input"];
    txs: Array<CustomTxInput> | CustomTxInput;
}>;
export type SyncCustomTxsMutation = {
    __typename?: "Mutation";
    syncCustomTxs: {
        __typename: "BadRequestError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "InternalError";
        code: string;
        message: string;
        retryable: boolean;
    } | {
        __typename: "SyncCustomTxsResult";
        txs: Array<{
            __typename: "Tx";
            linkId: string;
            id: string;
            externalId: string;
            externalAccountId: string;
            amount: string;
            description: string;
            posted: string;
        }>;
    };
};
export type GetLedgerQueryVariables = Exact<{
    ik: Scalars["SafeString"]["input"];
}>;
export type GetLedgerQuery = {
    __typename?: "Query";
    ledger?: {
        __typename?: "Ledger";
        id: string;
        ik: string;
        name: string;
        created: string;
        balanceUTCOffset: string;
    } | null;
};
export type GetLedgerEntryQueryVariables = Exact<{
    ik: Scalars["SafeString"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
}>;
export type GetLedgerEntryQuery = {
    __typename?: "Query";
    ledgerEntry?: {
        __typename?: "LedgerEntry";
        id: string;
        ik: string;
        posted: string;
        created: string;
        description?: string | null;
        lines: {
            __typename?: "LedgerLinesConnection";
            nodes: Array<{
                __typename?: "LedgerLine";
                id: string;
                amount: string;
                account: {
                    __typename?: "LedgerAccount";
                    path: string;
                };
            }>;
        };
    } | null;
};
export type ListLedgerAccountsQueryVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
}>;
export type ListLedgerAccountsQuery = {
    __typename?: "Query";
    ledger?: {
        __typename?: "Ledger";
        id: string;
        ik: string;
        name: string;
        created: string;
        ledgerAccounts: {
            __typename?: "LedgerAccountsConnection";
            nodes: Array<{
                __typename?: "LedgerAccount";
                id: string;
                path: string;
                name?: string | null;
                type: LedgerAccountTypes;
                created: string;
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export type ListLedgerAccountBalancesQueryVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    balanceCurrency?: InputMaybe<CurrencyMatchInput>;
    balanceAt?: InputMaybe<Scalars["LastMoment"]["input"]>;
    ownBalanceConsistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
}>;
export type ListLedgerAccountBalancesQuery = {
    __typename?: "Query";
    ledger?: {
        __typename?: "Ledger";
        id: string;
        ik: string;
        name: string;
        created: string;
        ledgerAccounts: {
            __typename?: "LedgerAccountsConnection";
            nodes: Array<{
                __typename?: "LedgerAccount";
                id: string;
                path: string;
                name?: string | null;
                type: LedgerAccountTypes;
                created: string;
                ownBalance: string;
                childBalance: string;
                balance: string;
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export type ListMultiCurrencyLedgerAccountBalancesQueryVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    balanceAt?: InputMaybe<Scalars["LastMoment"]["input"]>;
    ownBalancesConsistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
}>;
export type ListMultiCurrencyLedgerAccountBalancesQuery = {
    __typename?: "Query";
    ledger?: {
        __typename?: "Ledger";
        id: string;
        ik: string;
        name: string;
        created: string;
        ledgerAccounts: {
            __typename?: "LedgerAccountsConnection";
            nodes: Array<{
                __typename?: "LedgerAccount";
                id: string;
                path: string;
                name?: string | null;
                type: LedgerAccountTypes;
                created: string;
                ownBalances: {
                    __typename?: "CurrencyAmountConnection";
                    nodes: Array<{
                        __typename?: "CurrencyAmount";
                        amount: string;
                        currency: {
                            __typename?: "Currency";
                            code: CurrencyCode;
                            customCurrencyId?: string | null;
                        };
                    }>;
                };
                childBalances: {
                    __typename?: "CurrencyAmountConnection";
                    nodes: Array<{
                        __typename?: "CurrencyAmount";
                        amount: string;
                        currency: {
                            __typename?: "Currency";
                            code: CurrencyCode;
                            customCurrencyId?: string | null;
                        };
                    }>;
                };
                balances: {
                    __typename?: "CurrencyAmountConnection";
                    nodes: Array<{
                        __typename?: "CurrencyAmount";
                        amount: string;
                        currency: {
                            __typename?: "Currency";
                            code: CurrencyCode;
                            customCurrencyId?: string | null;
                        };
                    }>;
                };
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export type GetLedgerAccountLinesQueryVariables = Exact<{
    path: Scalars["String"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerLinesFilterSet>;
}>;
export type GetLedgerAccountLinesQuery = {
    __typename?: "Query";
    ledgerAccount?: {
        __typename?: "LedgerAccount";
        id: string;
        path: string;
        lines: {
            __typename?: "LedgerLinesConnection";
            nodes: Array<{
                __typename?: "LedgerLine";
                id: string;
                posted?: string | null;
                created?: string | null;
                amount: string;
                description?: string | null;
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export type GetLedgerAccountBalanceQueryVariables = Exact<{
    path: Scalars["String"]["input"];
    ledgerIk: Scalars["SafeString"]["input"];
    balanceCurrency?: InputMaybe<CurrencyMatchInput>;
    balanceAt?: InputMaybe<Scalars["LastMoment"]["input"]>;
    ownBalanceConsistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
}>;
export type GetLedgerAccountBalanceQuery = {
    __typename?: "Query";
    ledgerAccount?: {
        __typename?: "LedgerAccount";
        id: string;
        path: string;
        ownBalance: string;
    } | null;
};
export type GetSchemaQueryVariables = Exact<{
    key: Scalars["SafeString"]["input"];
    version?: InputMaybe<Scalars["Int"]["input"]>;
}>;
export type GetSchemaQuery = {
    __typename?: "Query";
    schema?: {
        __typename?: "Schema";
        key: string;
        name: string;
        version: {
            __typename?: "SchemaVersion";
            created: string;
            version: number;
            json: Record<string, unknown>;
        };
    } | null;
};
export type ListLedgerEntriesQueryVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    after?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LedgerEntriesFilterSet>;
}>;
export type ListLedgerEntriesQuery = {
    __typename?: "Query";
    ledger?: {
        __typename?: "Ledger";
        ledgerEntries: {
            __typename?: "LedgerEntriesConnection";
            nodes: Array<{
                __typename?: "LedgerEntry";
                ik: string;
                type?: string | null;
                posted: string;
                lines: {
                    __typename?: "LedgerLinesConnection";
                    nodes: Array<{
                        __typename?: "LedgerLine";
                        amount: string;
                        account: {
                            __typename?: "LedgerAccount";
                            path: string;
                        };
                    }>;
                };
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export type GetWorkspaceQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetWorkspaceQuery = {
    __typename?: "Query";
    workspace: {
        __typename?: "Workspace";
        id: string;
        name: string;
    };
};
export type ListLedgerEntryGroupBalancesQueryVariables = Exact<{
    ledgerIk: Scalars["SafeString"]["input"];
    groupKey: Scalars["SafeString"]["input"];
    groupValue: Scalars["SafeString"]["input"];
    consistencyMode?: InputMaybe<ReadBalanceConsistencyMode>;
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    filter?: InputMaybe<LedgerEntryGroupBalanceFilterSet>;
}>;
export type ListLedgerEntryGroupBalancesQuery = {
    __typename?: "Query";
    ledgerEntryGroup?: {
        __typename?: "LedgerEntryGroup";
        key: string;
        value: string;
        created?: string | null;
        balances: {
            __typename?: "LedgerEntryGroupBalanceConnection";
            nodes: Array<{
                __typename?: "LedgerEntryGroupBalance";
                ownBalance: string;
                account: {
                    __typename?: "LedgerAccount";
                    path: string;
                };
                currency: {
                    __typename?: "Currency";
                    code: CurrencyCode;
                    customCurrencyId?: string | null;
                };
            }>;
            pageInfo: {
                __typename?: "PageInfo";
                hasNextPage: boolean;
                endCursor?: string | null;
                hasPreviousPage: boolean;
                startCursor?: string | null;
            };
        };
    } | null;
};
export declare const StoreSchemaDocument: import("graphql").DocumentNode;
export declare const CreateLedgerDocument: import("graphql").DocumentNode;
export declare const AddLedgerEntryDocument: import("graphql").DocumentNode;
export declare const AddLedgerEntryRuntimeDocument: import("graphql").DocumentNode;
export declare const ReconcileTxDocument: import("graphql").DocumentNode;
export declare const ReconcileTxRuntimeDocument: import("graphql").DocumentNode;
export declare const UpdateLedgerEntryDocument: import("graphql").DocumentNode;
export declare const UpdateLedgerDocument: import("graphql").DocumentNode;
export declare const CreateCustomLinkDocument: import("graphql").DocumentNode;
export declare const SyncCustomAccountsDocument: import("graphql").DocumentNode;
export declare const SyncCustomTxsDocument: import("graphql").DocumentNode;
export declare const GetLedgerDocument: import("graphql").DocumentNode;
export declare const GetLedgerEntryDocument: import("graphql").DocumentNode;
export declare const ListLedgerAccountsDocument: import("graphql").DocumentNode;
export declare const ListLedgerAccountBalancesDocument: import("graphql").DocumentNode;
export declare const ListMultiCurrencyLedgerAccountBalancesDocument: import("graphql").DocumentNode;
export declare const GetLedgerAccountLinesDocument: import("graphql").DocumentNode;
export declare const GetLedgerAccountBalanceDocument: import("graphql").DocumentNode;
export declare const GetSchemaDocument: import("graphql").DocumentNode;
export declare const ListLedgerEntriesDocument: import("graphql").DocumentNode;
export declare const GetWorkspaceDocument: import("graphql").DocumentNode;
export declare const ListLedgerEntryGroupBalancesDocument: import("graphql").DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    storeSchema(variables: StoreSchemaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StoreSchemaMutation>;
    createLedger(variables: CreateLedgerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateLedgerMutation>;
    addLedgerEntry(variables: AddLedgerEntryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLedgerEntryMutation>;
    addLedgerEntryRuntime(variables: AddLedgerEntryRuntimeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLedgerEntryRuntimeMutation>;
    reconcileTx(variables: ReconcileTxMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReconcileTxMutation>;
    reconcileTxRuntime(variables: ReconcileTxRuntimeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReconcileTxRuntimeMutation>;
    updateLedgerEntry(variables: UpdateLedgerEntryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateLedgerEntryMutation>;
    updateLedger(variables: UpdateLedgerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateLedgerMutation>;
    createCustomLink(variables: CreateCustomLinkMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCustomLinkMutation>;
    syncCustomAccounts(variables: SyncCustomAccountsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SyncCustomAccountsMutation>;
    syncCustomTxs(variables: SyncCustomTxsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SyncCustomTxsMutation>;
    getLedger(variables: GetLedgerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLedgerQuery>;
    getLedgerEntry(variables: GetLedgerEntryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLedgerEntryQuery>;
    listLedgerAccounts(variables: ListLedgerAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListLedgerAccountsQuery>;
    listLedgerAccountBalances(variables: ListLedgerAccountBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListLedgerAccountBalancesQuery>;
    listMultiCurrencyLedgerAccountBalances(variables: ListMultiCurrencyLedgerAccountBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListMultiCurrencyLedgerAccountBalancesQuery>;
    getLedgerAccountLines(variables: GetLedgerAccountLinesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLedgerAccountLinesQuery>;
    getLedgerAccountBalance(variables: GetLedgerAccountBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLedgerAccountBalanceQuery>;
    getSchema(variables: GetSchemaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSchemaQuery>;
    listLedgerEntries(variables: ListLedgerEntriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListLedgerEntriesQuery>;
    getWorkspace(variables?: GetWorkspaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetWorkspaceQuery>;
    listLedgerEntryGroupBalances(variables: ListLedgerEntryGroupBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListLedgerEntryGroupBalancesQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
export {};
//# sourceMappingURL=generated.d.ts.map