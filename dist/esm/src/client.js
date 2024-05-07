import { ClientError, GraphQLClient } from "graphql-request";
import { getSdk as getDefaultSdk, } from "../generated/generated.js";
import { version } from "../generated/version.js";
import { getToken } from "./getToken.js";
import { BadRequestError, FragmentError, InternalError } from "./errors.js";
const createRequestWrapper = (tokenCache, params) => async (request, operationName, operationType) => {
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
    if (operationType === "mutation") {
        const data = await request(requestHeaders);
        const dataKeys = Object.keys(data);
        if (dataKeys.length > 1) {
            throw new FragmentError({
                message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
            });
        }
        const [graphQlOperationName] = dataKeys;
        const typeName = data[graphQlOperationName].__typename;
        const { code, message } = data[graphQlOperationName];
        switch (typeName) {
            case "InternalError":
                throw new InternalError({
                    cause: data[graphQlOperationName],
                    message,
                });
            case "BadRequestError":
                throw new BadRequestError({
                    code: code,
                    cause: data[graphQlOperationName],
                    message,
                });
            default:
                if (typeName.endsWith("Error")) {
                    throw new FragmentError({
                        message: `Encountered unsupported error type: ${typeName}`,
                        cause: data[graphQlOperationName],
                    });
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
                throw new FragmentError({
                    cause: error,
                });
            }
            else {
                throw error;
            }
        }
    }
    throw new FragmentError({
        message: `Unknown operation type: ${operationType}`,
    });
};
export const createFragmentClient = ({ params, getSdk, }) => {
    const { apiUrl } = params;
    const graphql = new GraphQLClient(apiUrl);
    const tokenCache = {};
    const requestWrapper = createRequestWrapper(tokenCache, params);
    if (getSdk) {
        return {
            ...getDefaultSdk(graphql, requestWrapper),
            ...getSdk(graphql, requestWrapper),
        };
    }
    return getDefaultSdk(graphql, requestWrapper);
};
