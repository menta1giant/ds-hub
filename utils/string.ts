function generateRandomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

export function generateRandomHashString(str: string) {
  return `${str}_${generateRandomString()}`;
}
