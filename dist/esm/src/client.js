import retry from "async-retry";
import { ClientError, GraphQLClient } from "graphql-request";
import { getSdk as getDefaultSdk, } from "../generated/generated.js";
import { version } from "../generated/version.js";
import { getToken } from "./getToken.js";
import { BadRequestError, FragmentError, InternalError } from "./errors.js";
import { DEFAULT_RETRY_CONFIG } from "./retryConfig.js";
const getRetryableField = (error) => {
    if (Object.prototype.hasOwnProperty.call(error, "retryable")) {
        if (typeof error.retryable === "boolean") {
            return error.retryable;
        }
    }
    return false;
};
const createRequestWrapper = (tokenCache, params, retryConfig) => async (request, operationName, operationType) => {
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
        if (operationType === "mutation") {
            const data = await request(requestHeaders);
            const dataKeys = Object.keys(data);
            if (dataKeys.length > 1) {
                bail(new FragmentError({
                    message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
                }));
            }
            const [graphQlOperationName] = dataKeys;
            const typeName = data[graphQlOperationName]
                .__typename;
            const { code, message } = data[graphQlOperationName];
            const retryable = getRetryableField(data[graphQlOperationName]);
            switch (typeName) {
                case "InternalError": {
                    const err = new InternalError({
                        cause: data[graphQlOperationName],
                        message,
                    });
                    if (!retryable) {
                        bail(err);
                    }
                    else {
                        throw err;
                    }
                }
                case "BadRequestError": {
                    const err = new BadRequestError({
                        code: code,
                        cause: data[graphQlOperationName],
                        message,
                    });
                    if (!retryable) {
                        bail(err);
                    }
                    else {
                        throw err;
                    }
                }
                default:
                    if (typeName.endsWith("Error")) {
                        bail(new FragmentError({
                            message: `Encountered unsupported error type: ${typeName}`,
                            cause: data[graphQlOperationName],
                        }));
                    }
                    break;
            }
            return data;
        }
        if (operationType === "query") {
            try {
                const data = await request(requestHeaders);
                return data;
            }
            catch (error) {
                if (error instanceof ClientError) {
                    bail(new FragmentError({
                        cause: error,
                    }));
                }
                else {
                    bail(error);
                }
            }
        }
        bail(new FragmentError({
            message: `Unknown operation type: ${operationType}`,
        }));
        return {};
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
