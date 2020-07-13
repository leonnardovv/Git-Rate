export const SET_DARK_MODE = "general/SET_DARK_MODE";
export const SET_LIGHT_MODE = "general/SET_LIGHT_MODE";
export const SET_USERNAME = "general/SET_USERNAME";

export function setDarkMode() {
  return { type: SET_DARK_MODE };
}

export function setLightMode() {
  return { type: SET_LIGHT_MODE };
}

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}
