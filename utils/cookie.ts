import { millisecondsInADay } from "./date";

export function setCookie(name: string, value: string, expiresInDays: number) {
  const date = new Date();
  date.setTime(date.getTime() + expiresInDays * millisecondsInADay);

  const expires = `expires=${date.toUTCString()};`;

  document.cookie = `${name}=${value};${expires}path=/`;
}

export function deleteCookie(name: string) {
  setCookie(name, "", -1);
}

export function getCookie(cname: string) {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
