import { GraphQLClient } from "graphql-request";
import { SdkFunctionWrapper, getSdk as getDefaultSdk } from "../generated/generated.js";
import { type RetryConfig } from "./retryConfig.js";
export type FragmentClient = ReturnType<typeof getDefaultSdk>;
type CreateFragmentClientParams = {
    apiUrl: string;
    clientId: string;
    clientSecret: string;
    scope: string;
    authUrl: string;
};
type CreateFragmentClientInput<T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => any> = {
    params: CreateFragmentClientParams;
    getSdk?: T;
    retryConfig?: RetryConfig;
};
type CreateFragmentClientResult<T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => any> = T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => infer U ? U extends FragmentClient ? U : FragmentClient & U : never;
export declare const createFragmentClient: <T extends (client: GraphQLClient, wrapper: SdkFunctionWrapper) => any = typeof getDefaultSdk>({ params, getSdk, retryConfig, }: CreateFragmentClientInput<T>) => CreateFragmentClientResult<T>;
export {};
//# sourceMappingURL=client.d.ts.map