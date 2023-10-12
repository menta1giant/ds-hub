export default defineNuxtPlugin(() => {
  return {
    provide: {
      discordFetch: (token: string) => {
        return $fetch.create({
          baseURL: "https://discord.com/api",
          headers: {
            Authorization: token,
          },
        });
      },
    },
  };
});
