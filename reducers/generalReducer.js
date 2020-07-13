import { combineReducers } from "redux";
import { darkMode, lightMode } from "../consts";
import {
  SET_DARK_MODE,
  SET_LIGHT_MODE,
  SET_USERNAME
} from "../actions/generalActions";

const DEFAULT_STATE = {
  theme: darkMode,
  darkModeOn: true,
  inputUsername: ""
};

const generalReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, theme: darkMode, darkModeOn: true };
    case SET_LIGHT_MODE:
      return { ...state, theme: lightMode, darkModeOn: false };
    case SET_USERNAME:
      return { ...state, inputUsername: action.username };
    default:
      return state;
  }
};

export default combineReducers({
  general: generalReducer
});
