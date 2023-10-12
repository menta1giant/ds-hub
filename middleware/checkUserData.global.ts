export default defineNuxtRouteMiddleware(async (to) => {
  if (process.server) return;

  const userDataStore = useUserData();

  if (!userDataStore.$state.userData.name && to.path === "/socket") {
    if (!getAuthToken()) {
      return navigateTo("/login");
    }

    await setUserData();
  }
});
