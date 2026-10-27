import retry from "async-retry";
import { ClientError, GraphQLClient } from "graphql-request";

import {
  SdkFunctionWrapper,
  getSdk as getDefaultSdk,
} from "../generated/generated.js";
import { version } from "../generated/version.js";
import { getToken } from "./getToken.js";
import {
  AddLedgerEntriesError,
  BadRequestError,
  FragmentError,
  InternalError,
  type MutationErrorPayload,
} from "./errors.js";
import { DEFAULT_RETRY_CONFIG, type RetryConfig } from "./retryConfig.js";

type Attempt<T> = { data: T } | { error: Error; retryable: boolean };

const isRetryableHttpStatus = (status: number): boolean =>
  status === 429 || status >= 500;

// graphql-request's node-fetch rejects a failed connection with a FetchError of
// type "system"; any other rejection is not a transport failure.
const isNetworkError = (error: unknown): boolean =>
  error instanceof Error &&
  error.name === "FetchError" &&
  (error as { type?: unknown }).type === "system";

const classifyRequestError = (error: unknown): Attempt<never> => {
  if (error instanceof ClientError) {
    return {
      error: new FragmentError({ cause: error }),
      retryable: isRetryableHttpStatus(error.response.status),
    };
  }
  return { error: error as Error, retryable: isNetworkError(error) };
};

const classifyMutationData = <T>(
  data: T,
  operationName: string,
): Attempt<T> => {
  const payloads = data as Record<string, MutationErrorPayload>;
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
      if (typeName.endsWith("Error")) {
        return {
          error: new FragmentError({
            message: `Encountered unsupported error type: ${typeName}`,
            cause: payload,
          }),
          retryable: false,
        };
      }
      return { data };
  }
};

export type FragmentClient = ReturnType<typeof getDefaultSdk>;

type CreateFragmentClientParams = {
  apiUrl: string;
  clientId: string;
  clientSecret: string;
  scope: string;
  authUrl: string;
};

type TokenCache = {
  token?: {
    access_token: string;
    expiry_time: Date;
  };
};

const createRequestWrapper =
  (
    tokenCache: TokenCache,
    params: CreateFragmentClientParams,
    retryConfig: RetryConfig,
  ): SdkFunctionWrapper =>
  async (request, operationName, operationType) => {
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

    if (
      !tokenCache.token ||
      (tokenCache.token.expiry_time &&
        new Date() > tokenCache.token.expiry_time)
    ) {
      await updateToken();
    }

    if (!tokenCache.token) {
      throw new FragmentError({
        message: `No Fragment token found in token cache`,
      });
    }

    const requestHeaders: Record<string, string> = {
      Authorization: `Bearer ${tokenCache.token.access_token}`,
      ["X-Fragment-Client"]: `node-client@${version}`,
    };

    const classifyData = <T>(data: T): Attempt<T> => {
      if (operationType === "mutation") {
        return classifyMutationData(data, operationName);
      }
      return { data };
    };

    return retry(async (bail) => {
      const attempt = await request(requestHeaders).then(
        classifyData,
        classifyRequestError,
      );
      if ("data" in attempt) return attempt.data;
      if (attempt.retryable) throw attempt.error;
      bail(attempt.error);
      return undefined as never;
    }, retryConfig);
  };

type CreateFragmentClientInput<
  T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => any,
> = {
  params: CreateFragmentClientParams;
  getSdk?: T;
  retryConfig?: RetryConfig;
};

type CreateFragmentClientResult<
  T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => any,
> = T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => infer U
  ? U extends FragmentClient
    ? U
    : FragmentClient & U
  : never;

export const createFragmentClient = <
  T extends (
    client: GraphQLClient,
    wrapper: SdkFunctionWrapper,
  ) => any = typeof getDefaultSdk,
>({
  params,
  getSdk,
  retryConfig = DEFAULT_RETRY_CONFIG,
}: CreateFragmentClientInput<T>): CreateFragmentClientResult<T> => {
  const { apiUrl } = params;
  const graphql = new GraphQLClient(apiUrl);
  const tokenCache: TokenCache = {};
  const requestWrapper = createRequestWrapper(tokenCache, params, retryConfig);
  if (getSdk) {
    return {
      ...getDefaultSdk(graphql, requestWrapper),
      ...getSdk(graphql, requestWrapper),
    };
  }
  return getDefaultSdk(
    graphql,
    requestWrapper,
  ) as CreateFragmentClientResult<T>;
};
