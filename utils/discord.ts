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

export const DiscordRepo = {
  async getUserData() {
    return await useDiscordFetch()("/users/@me");
  },
};
