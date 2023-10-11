export function formatUserData(userData:{username:string,avatar:string, id:string}) {
  return {
    name: userData.username,
    avatar: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
  }
}