export const DiscordRepo = {
  async getUserData() {
    return await useDiscordFetch()("/users/@me");
  },
};
