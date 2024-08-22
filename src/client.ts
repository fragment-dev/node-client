import retry from "async-retry";
import { ClientError, GraphQLClient } from "graphql-request";

import {
  SdkFunctionWrapper,
  getSdk as getDefaultSdk,
} from "../generated/generated.js";
import { version } from "../generated/version.js";
import { getToken } from "./getToken.js";
import { BadRequestError, FragmentError, InternalError } from "./errors.js";
import { DEFAULT_RETRY_CONFIG, type RetryConfig } from "./retryConfig.js";

type RetryableErrorObject<T extends object> = T & { retryable: boolean };

const getRetryableField = <T extends object>(error: T): boolean => {
  if (Object.prototype.hasOwnProperty.call(error, "retryable")) {
    if (typeof (error as RetryableErrorObject<T>).retryable === "boolean") {
      return (error as RetryableErrorObject<T>).retryable;
    }
  }
  return false;
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

    return retry(async (bail): ReturnType<typeof request> => {
      if (operationType === "mutation") {
        const data = await request(requestHeaders);
        const dataKeys = Object.keys(data as any);
        if (dataKeys.length > 1) {
          bail(
            new FragmentError({
              message: `You can only invoke a single mutation with a mutation operation. You specified ${dataKeys.length} for operation ${operationName}.`,
            }),
          );
        }
        const [graphQlOperationName] = dataKeys;
        const typeName = (data as any)[graphQlOperationName]
          .__typename as string;
        const { code, message } = (data as any)[graphQlOperationName];
        const retryable = getRetryableField(
          (data as any)[graphQlOperationName] as any,
        );

        switch (typeName) {
          case "InternalError": {
            const err = new InternalError({
              cause: (data as any)[graphQlOperationName],
              message,
            });
            if (!retryable) {
              bail(err);
            } else {
              throw err;
            }
          }
          case "BadRequestError": {
            const err = new BadRequestError({
              code: code,
              cause: (data as any)[graphQlOperationName],
              message,
            });
            if (!retryable) {
              bail(err);
            } else {
              throw err;
            }
          }
          default:
            if (typeName.endsWith("Error")) {
              bail(
                new FragmentError({
                  message: `Encountered unsupported error type: ${typeName}`,
                  cause: (data as any)[graphQlOperationName],
                }),
              );
            }
            break;
        }
        return data;
      }

      if (operationType === "query") {
        try {
          const data = await request(requestHeaders);
          return data;
        } catch (error) {
          if (error instanceof ClientError) {
            bail(
              new FragmentError({
                cause: error,
              }),
            );
          } else {
            bail(error as Error);
          }
        }
      }

      bail(
        new FragmentError({
          message: `Unknown operation type: ${operationType}`,
        }),
      );

      return {} as never;
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
