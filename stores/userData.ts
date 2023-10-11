export const useUserData = defineStore('userData', {
  state: () => ({
    userData: {} as User
  }),

  actions: {
    setUserData(data:User) {
      this.$patch((state) => {
        state.userData = data;
      })
    }
  },
})