//const REDIRECT_URL = 'https://ds-hub.vercel.app/auth/discord'
const REDIRECT_URL = process.env.REDIRECT_URL!;

const PROPS = {
  client_id: "1161273721026261115",
  redirect_uri: REDIRECT_URL,
  response_type: "code",
  scope: "identify guilds",
};

const getAuthLink = () =>
  "https://discord.com/api/oauth2/authorize?" +
  new URLSearchParams(Object.entries(PROPS)).toString().replace("+", "%20");

const getDiscordUserInfoFetchParams = (code: string) => {
  const params = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.SECRET_CODE!,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URL,
  };

  return params;
};

export { getAuthLink, getDiscordUserInfoFetchParams };
