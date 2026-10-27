import retry from "async-retry";
import { ClientError, GraphQLClient } from "graphql-request";
import { getSdk as getDefaultSdk, } from "../generated/generated.js";
import { version } from "../generated/version.js";
import { getToken } from "./getToken.js";
import { AddLedgerEntriesError, BadRequestError, FragmentError, InternalError, } from "./errors.js";
import { DEFAULT_RETRY_CONFIG } from "./retryConfig.js";
const isRetryableHttpStatus = (status) => status === 429 || status >= 500;
// graphql-request's node-fetch rejects a failed connection with a FetchError of
// type "system"; any other rejection is not a transport failure.
const isNetworkError = (error) => error instanceof Error &&
    error.name === "FetchError" &&
    error.type === "system";
const classifyRequestError = (error) => error instanceof ClientError
    ? {
        error: new FragmentError({ cause: error }),
        retryable: isRetryableHttpStatus(error.response.status),
    }
    : { error: error, retryable: isNetworkError(error) };
const classifyMutationData = (data, operationName) => {
    const payloads = data;
    const dataKeys = Object.keys(payloads);
    if (dataKeys.length > 1) {
        return {
            error: new FragmentError({
                message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
            }),
            retryable: false,
        };
    }
    const [graphQlOperationName] = dataKeys;
    const payload = payloads[graphQlOperationName];
    const { __typename: typeName, code, message } = payload;
    const retryable = payload.retryable === true;
    switch (typeName) {
        case "InternalError":
            return {
                error: new InternalError({ cause: payload, message }),
                retryable,
            };
        case "AddLedgerEntriesError":
            // The errors for each Ledger Entry responsible for the failure are
            // what tell a caller which entries to fix, so they are surfaced
            // rather than collapsed into the top-level message.
            return {
                error: new AddLedgerEntriesError({
                    code,
                    cause: payload,
                    message,
                    errors: payload.errors ?? [],
                }),
                retryable,
            };
        case "BadRequestError":
            return {
                error: new BadRequestError({ code, cause: payload, message }),
                retryable,
            };
        default:
            return typeName.endsWith("Error")
                ? {
                    error: new FragmentError({
                        message: `Encountered unsupported error type: ${typeName}`,
                        cause: payload,
                    }),
                    retryable: false,
                }
                : { data };
    }
};
const createRequestWrapper = (tokenCache, params, retryConfig) => async (request, operationName, operationType) => {
    if (operationType !== "query" && operationType !== "mutation") {
        throw new FragmentError({
            message: `Unknown operation type: ${operationType}`,
        });
    }
    const { clientId, clientSecret, scope, authUrl } = params;
    const updateToken = async () => {
        const { access_token, expiry_time } = await getToken({
            clientId,
            secret: clientSecret,
            scope,
            authUrl,
        });
        tokenCache.token = {
            access_token,
            expiry_time,
        };
    };
    if (!tokenCache.token ||
        (tokenCache.token.expiry_time &&
            new Date() > tokenCache.token.expiry_time)) {
        await updateToken();
    }
    if (!tokenCache.token) {
        throw new FragmentError({
            message: `No Fragment token found in token cache`,
        });
    }
    const requestHeaders = {
        Authorization: `Bearer ${tokenCache.token.access_token}`,
        ["X-Fragment-Client"]: `node-client@${version}`,
    };
    return retry(async (bail) => {
        const attempt = await request(requestHeaders).then((data) => operationType === "mutation"
            ? classifyMutationData(data, operationName)
            : { data }, classifyRequestError);
        if ("data" in attempt)
            return attempt.data;
        if (attempt.retryable)
            throw attempt.error;
        bail(attempt.error);
        return undefined;
    }, retryConfig);
};
export const createFragmentClient = ({ params, getSdk, retryConfig = DEFAULT_RETRY_CONFIG, }) => {
    const { apiUrl } = params;
    const graphql = new GraphQLClient(apiUrl);
    const tokenCache = {};
    const requestWrapper = createRequestWrapper(tokenCache, params, retryConfig);
    if (getSdk) {
        return {
            ...getDefaultSdk(graphql, requestWrapper),
            ...getSdk(graphql, requestWrapper),
        };
    }
    return getDefaultSdk(graphql, requestWrapper);
};
