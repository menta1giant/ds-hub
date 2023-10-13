const DISCORD_FETCH_USER_DATA_URL = "https://discord.com/api/oauth2/token";

const getDiscordUserInfoFetchParams = (code: string) => {
  const config = useRuntimeConfig();
  const formdata = new FormData();
  formdata.append("client_id", config.CLIENT_ID);
  formdata.append("client_secret", config.SECRET_CODE);
  formdata.append("grant_type", "authorization_code");
  formdata.append("code", code);
  formdata.append("redirect_uri", encodeURI(config.public.REDIRECT_URL));

  return formdata;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const params = getDiscordUserInfoFetchParams(String(query.code));

  const data = await $fetch(DISCORD_FETCH_USER_DATA_URL, {
    method: "POST",
    body: params,
  });

  return data;
});
