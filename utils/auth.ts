function setAuthToken(token: string) {
  setCookie("authToken", token, 30);
}

function getAuthToken() {
  return getCookie("authToken");
}

export function isAuthenticationTokenAssigned() {
  return !!getAuthToken();
}

export async function setUserData() {
  const userDataStore = useUserData();
  const userData:User = await DiscordRepo.getUserData();

  userDataStore.setUserData(formatUserData(userData));
}

export const AuthRepo = {
  discordAuth: async (code: string) => {
    const { token_type, access_token }: any = await $fetch(
      "/api/discord-auth",
      {
        query: { code },
      },
    );

    const authToken = `${token_type} ${access_token}`;
    setAuthToken(authToken);
  },
};
