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
exports.getToken = void 0;
const b64 = (str) => Buffer.from(str).toString("base64");
// Refresh the token 2 minutes before it expires
const EXPIRY_TIME_SKEW = 120;
const getToken = (_a) => __awaiter(void 0, [_a], void 0, function* ({ clientId, secret, scope, authUrl, }) {
    if (!authUrl.endsWith("oauth2/token")) {
        throw new Error(
        // common error due to copy-paste.
        "The authUrl passed to createFragmentClient must end in /oauth2/token");
    }
    // encode the client id and secret
    const auth = b64(`${clientId}:${secret}`);
    // create the request body
    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");
    data.append("scope", scope);
    data.append("client_id", clientId);
    // retrieve the token
    const response = yield fetch(authUrl, {
        body: data,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${auth}`,
            Accept: "*/*",
        },
    });
    const json = yield response.json();
    if (!(json.access_token && typeof json.access_token === "string")) {
        throw new Error("Didn't get an access token from OAuth token endpoint");
    }
    if (!(json.expires_in && typeof json.expires_in === "number")) {
        throw new Error("Didn't get an expiration from OAuth token endpoint");
    }
    const expiry_time = new Date(new Date().getTime() + (json.expires_in - EXPIRY_TIME_SKEW) * 1000);
    const access_token = json.access_token;
    return { access_token, expiry_time };
});
exports.getToken = getToken;
