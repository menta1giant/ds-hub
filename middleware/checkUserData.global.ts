export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return
  console.log('i\'m middleware')

  const userDataStore = useUserData();
  console.log(to.path);

  if (!userDataStore.$state.userData.name && to.path === '/socket') {
    if (!getAuthToken()) {
      return navigateTo('/login')
    } 
    console.log('gettin')
    await setUserData();
  }
});