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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFragmentClient = void 0;
const graphql_request_1 = require("graphql-request");
const generated_js_1 = require("../generated/generated.js");
const version_js_1 = require("../generated/version.js");
const getToken_js_1 = require("./getToken.js");
const errors_js_1 = require("./errors.js");
const createRequestWrapper = (tokenCache, params) => (request, operationName, operationType) => __awaiter(void 0, void 0, void 0, function* () {
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
    if (operationType === "mutation") {
        const data = yield request(requestHeaders);
        const dataKeys = Object.keys(data);
        if (dataKeys.length > 1) {
            throw new errors_js_1.FragmentError({
                message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
            });
        }
        const [graphQlOperationName] = dataKeys;
        const typeName = data[graphQlOperationName].__typename;
        const { code, message } = data[graphQlOperationName];
        switch (typeName) {
            case "InternalError":
                throw new errors_js_1.InternalError({
                    cause: data[graphQlOperationName],
                    message,
                });
            case "BadRequestError":
                throw new errors_js_1.BadRequestError({
                    code: code,
                    cause: data[graphQlOperationName],
                    message,
                });
            default:
                if (typeName.endsWith("Error")) {
                    throw new errors_js_1.FragmentError({
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
            const data = yield request(requestHeaders);
            return data;
        }
        catch (error) {
            if (error instanceof graphql_request_1.ClientError) {
                throw new errors_js_1.FragmentError({
                    cause: error,
                });
            }
            else {
                throw error;
            }
        }
    }
    throw new errors_js_1.FragmentError({
        message: `Unknown operation type: ${operationType}`,
    });
});
const createFragmentClient = ({ params, getSdk, }) => {
    const { apiUrl } = params;
    const graphql = new graphql_request_1.GraphQLClient(apiUrl);
    const tokenCache = {};
    const requestWrapper = createRequestWrapper(tokenCache, params);
    if (getSdk) {
        return Object.assign(Object.assign({}, (0, generated_js_1.getSdk)(graphql, requestWrapper)), getSdk(graphql, requestWrapper));
    }
    return (0, generated_js_1.getSdk)(graphql, requestWrapper);
};
exports.createFragmentClient = createFragmentClient;
