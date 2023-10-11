export function generateRandomString(s:string) {
  return `${s}_${(Math.random() + 1).toString(36).substring(7)}`
}