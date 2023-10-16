export default defineNuxtRouteMiddleware(async (to) => {
  if (process.server) return;

  const userDataStore = useUserData();

  if (!userDataStore.isUserAuthenticated && to.path === "/socket") {
    if (!isAuthenticationTokenAssigned()) {
      return navigateTo("/login");
    }

    try {
      await setUserData();
    } catch (e) {
      return navigateTo("/login");
    }
  }
});
