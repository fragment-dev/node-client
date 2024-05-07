type GetTokenParams = {
    clientId: string;
    secret: string;
    scope: string;
    authUrl: string;
};
export declare const getToken: ({ clientId, secret, scope, authUrl, }: GetTokenParams) => Promise<{
    access_token: string;
    expiry_time: Date;
}>;
export {};
//# sourceMappingURL=getToken.d.ts.map