import { SET_REGISTER_DATA, SET_LOGIN_DATA, SET_IS_LOGGED_IN } from "./types";

export const setRegisteredData = (data) => {
  return {
    type: SET_REGISTER_DATA,
    payload: {
      data,
    },
  };
};

export const setLoginData = (data) => {
  return {
    type: SET_LOGIN_DATA,
    payload: {
      data,
    },
  };
};

export const setIsLoggedIn = (value) => {
  return {
    type: SET_IS_LOGGED_IN,
    payload: {
      value,
    },
  };
};
