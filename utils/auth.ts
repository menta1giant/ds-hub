function setAuthToken(token:string) {
  setCookie('authToken', token, 30);
}

export function getAuthToken() {
  return getCookie('authToken');
}

export async function setUserData() {
  const userDataStore = useUserData();
  const userData = await DiscordRepo.getUserData() as Object;
  console.log(userData);

  userDataStore.setUserData(formatUserData(userData as User))
}

export const AuthRepo = {
  discordAuth: async (code:string) => {
    const { token_type, access_token }:any = await $fetch("/api/discord-auth", {
      query: { code: code },
    });

    const authToken = `${token_type} ${access_token}`;
    setAuthToken(authToken);
  }
}