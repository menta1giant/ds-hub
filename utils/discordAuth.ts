const REDIRECT_URL = 'https://ds-hub.vercel.app/auth/discord'

const PROPS = {
  client_id: '1161273721026261115',
  redirect_uri: REDIRECT_URL,
  response_type: 'code',
  scope: 'identify guilds'
}

const getAuthLink = () => 'https://discord.com/api/oauth2/authorize?' + (new URLSearchParams(Object.entries(PROPS))).toString().replace("+", "%20")

export default getAuthLink