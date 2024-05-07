const b64 = (str: string) => Buffer.from(str).toString("base64");

// Refresh the token 2 minutes before it expires
const EXPIRY_TIME_SKEW = 120;

type GetTokenParams = {
  clientId: string;
  secret: string;
  scope: string;
  authUrl: string;
};
export const getToken = async ({
  clientId,
  secret,
  scope,
  authUrl,
}: GetTokenParams) => {
  if (!authUrl.endsWith("oauth2/token")) {
    throw new Error(
      // common error due to copy-paste.
      "The authUrl passed to createFragmentClient must end in /oauth2/token"
    );
  }
  // encode the client id and secret
  const auth = b64(`${clientId}:${secret}`);

  // create the request body
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("scope", scope);
  data.append("client_id", clientId);

  // retrieve the token
  const response = await fetch(authUrl, {
    body: data,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
      Accept: "*/*",
    },
  });

  const json = await response.json();
  if (!(json.access_token && typeof json.access_token === "string")) {
    throw new Error("Didn't get an access token from OAuth token endpoint");
  }
  if (!(json.expires_in && typeof json.expires_in === "number")) {
    throw new Error("Didn't get an expiration from OAuth token endpoint");
  }
  const expiry_time = new Date(
    new Date().getTime() + (json.expires_in - EXPIRY_TIME_SKEW) * 1000
  );
  const access_token = json.access_token as string;
  return { access_token, expiry_time };
};
