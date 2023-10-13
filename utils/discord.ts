export function formatUserData(userData: {
  username: string;
  avatar: string;
  id: string;
}) {
  return {
    name: userData.username,
    avatar: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`,
  };
}

export const getAuthLink = (redirectUri: string) => {
  const props = {
    client_id: "1161273721026261115",
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "identify guilds",
  };

  return (
    "https://discord.com/api/oauth2/authorize?" +
    new URLSearchParams(Object.entries(props)).toString().replace("+", "%20")
  );
};

export const $discordFetch = (url: string, ...rest: any[]) => {
  const token = getAuthToken();
  const fetch = token
    ? $fetch.create({
        baseURL: "https://discord.com/api",
        headers: {
          Authorization: token,
        },
      })
    : $fetch;
  return fetch(url, ...rest);
};

export const DiscordRepo = {
  async getUserData(): User {
    return await $discordFetch("/users/@me");
  },
};
