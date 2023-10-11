const getProps = (redirectUri:string) => ({
  client_id: "1161273721026261115",
  redirect_uri: redirectUri,
  response_type: "code",
  scope: "identify guilds",
});

const getAuthLink = (redirectUri:string) =>
  "https://discord.com/api/oauth2/authorize?" +
  new URLSearchParams(Object.entries(getProps(redirectUri))).toString().replace("+", "%20");

export { getAuthLink };
