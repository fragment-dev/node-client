"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFragmentClient = void 0;
const async_retry_1 = __importDefault(require("async-retry"));
const graphql_request_1 = require("graphql-request");
const generated_js_1 = require("../generated/generated.js");
const version_js_1 = require("../generated/version.js");
const getToken_js_1 = require("./getToken.js");
const errors_js_1 = require("./errors.js");
const retryConfig_js_1 = require("./retryConfig.js");
const isRetryableHttpStatus = (status) => status === 429 || status >= 500;
const classifyRequestError = (error) => error instanceof graphql_request_1.ClientError
    ? {
        error: new errors_js_1.FragmentError({ cause: error }),
        retryable: isRetryableHttpStatus(error.response.status),
    }
    : { error: error, retryable: true };
const classifyMutationData = (data, operationName) => {
    var _a;
    const payloads = data;
    const dataKeys = Object.keys(payloads);
    if (dataKeys.length > 1) {
        return {
            error: new errors_js_1.FragmentError({
                message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
            }),
            retryable: false,
        };
    }
    const [graphQlOperationName] = dataKeys;
    const payload = payloads[graphQlOperationName];
    const { __typename: typeName, code, message } = payload;
    const retryable = payload.retryable === true;
    // `cause` carries the raw GraphQL error payload, which is not an Error instance.
    const cause = payload;
    switch (typeName) {
        case "InternalError":
            return { error: new errors_js_1.InternalError({ cause, message }), retryable };
        case "AddLedgerEntriesError":
            // The errors for each Ledger Entry responsible for the failure are
            // what tell a caller which entries to fix, so they are surfaced
            // rather than collapsed into the top-level message.
            return {
                error: new errors_js_1.AddLedgerEntriesError({
                    code,
                    cause,
                    message,
                    errors: (_a = payload.errors) !== null && _a !== void 0 ? _a : [],
                }),
                retryable,
            };
        case "BadRequestError":
            return {
                error: new errors_js_1.BadRequestError({ code, cause, message }),
                retryable,
            };
        default:
            return typeName.endsWith("Error")
                ? {
                    error: new errors_js_1.FragmentError({
                        message: `Encountered unsupported error type: ${typeName}`,
                        cause,
                    }),
                    retryable: false,
                }
                : { data };
    }
};
const createRequestWrapper = (tokenCache, params, retryConfig) => (request, operationName, operationType) => __awaiter(void 0, void 0, void 0, function* () {
    if (operationType !== "query" && operationType !== "mutation") {
        throw new errors_js_1.FragmentError({
            message: `Unknown operation type: ${operationType}`,
        });
    }
    const { clientId, clientSecret, scope, authUrl } = params;
    const updateToken = () => __awaiter(void 0, void 0, void 0, function* () {
        const { access_token, expiry_time } = yield (0, getToken_js_1.getToken)({
            clientId,
            secret: clientSecret,
            scope,
            authUrl,
        });
        tokenCache.token = {
            access_token,
            expiry_time,
        };
    });
    if (!tokenCache.token ||
        (tokenCache.token.expiry_time &&
            new Date() > tokenCache.token.expiry_time)) {
        yield updateToken();
    }
    if (!tokenCache.token) {
        throw new errors_js_1.FragmentError({
            message: `No Fragment token found in token cache`,
        });
    }
    const requestHeaders = {
        Authorization: `Bearer ${tokenCache.token.access_token}`,
        ["X-Fragment-Client"]: `node-client@${version_js_1.version}`,
    };
    return (0, async_retry_1.default)((bail) => __awaiter(void 0, void 0, void 0, function* () {
        const attempt = yield request(requestHeaders).then((data) => operationType === "mutation"
            ? classifyMutationData(data, operationName)
            : { data }, classifyRequestError);
        if ("data" in attempt)
            return attempt.data;
        if (attempt.retryable)
            throw attempt.error;
        bail(attempt.error);
        return undefined;
    }), retryConfig);
});
const createFragmentClient = ({ params, getSdk, retryConfig = retryConfig_js_1.DEFAULT_RETRY_CONFIG, }) => {
    const { apiUrl } = params;
    const graphql = new graphql_request_1.GraphQLClient(apiUrl);
    const tokenCache = {};
    const requestWrapper = createRequestWrapper(tokenCache, params, retryConfig);
    if (getSdk) {
        return Object.assign(Object.assign({}, (0, generated_js_1.getSdk)(graphql, requestWrapper)), getSdk(graphql, requestWrapper));
    }
    return (0, generated_js_1.getSdk)(graphql, requestWrapper);
};
exports.createFragmentClient = createFragmentClient;
