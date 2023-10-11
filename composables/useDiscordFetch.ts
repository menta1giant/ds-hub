export const useDiscordFetch = () => {
  const token = getCookie('authToken')
  const nuxtApp = useNuxtApp()
  return token ?
    nuxtApp.$discordFetch(token) :
    $fetch
}