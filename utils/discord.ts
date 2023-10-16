export function formatUserData({
  global_name,
  username,
  avatar,
  id,
}: {
  global_name: string;
  username: string;
  avatar: string;
  id: string;
}): User {
  return {
    id,
    name: global_name || username,
    avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
  };
}

export const getAuthLink = (redirectUri: string): string => {
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
  async getUserData(): Promise<User | void> {
    return await $discordFetch("/users/@me");
  },
};
