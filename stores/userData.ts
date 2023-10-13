export const useUserData = defineStore("userData", {
  state: () => ({
    userData: {} as User,
  }),
  getters: {
    isUserAuthenticated: (state) => !!state.userData.name,
  },
  actions: {
    setUserData(data: User) {
      this.$patch((state) => {
        state.userData = data;
      });
    },
  },
});
