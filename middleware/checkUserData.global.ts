export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return
  console.log('i\'m middleware')

  const userDataStore = useUserData();

  if (!userDataStore.$state.userData.name && to.path !== '/login') {
    if (!getAuthToken()) {
      return navigateTo('/login')
    } 
    console.log('gettin')
    await setUserData();
  }
});