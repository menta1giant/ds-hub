const REDIRECT_URL = 'https://ds-hub.vercel.app/auth/discord'

const PROPS = {
  client_id: '1161273721026261115',
  redirect_uri: REDIRECT_URL,
  response_type: 'code',
  scope: 'identify'
}

const getAuthLink = () => 'https://discord.com/api/oauth2/authorize?' + new URLSearchParams(Object.entries(PROPS))
//https://discord.com/api/oauth2/authorize?client_id=1161273721026261115&redirect_uri=https%3A%2F%2Fds-hub.vercel.app%2Fauth%2Fdiscord&response_type=code&scope=identify+guilds
//https://discord.com/api/oauth2/authorize?client_id=1161273721026261115&redirect_uri=https%3A%2F%2Fds-hub.vercel.app%2Fauth%2Fdiscord&response_type=code&scope=identify%20guilds
//https://discord.com/api/oauth2/authorize?client_id=1161273721026261115&redirect_uri=https%3A%2F%2Fds-hub.vercel.app%2Fauth%2Fdiscord&response_type=code&scope=identify%2520guilds

export default getAuthLink