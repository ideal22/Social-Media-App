import { SET_REGISTER_DATA, SET_LOGIN_DATA, SET_IS_LOGGED_IN } from "./types";

const intitialState = {
  userRegisterData: {},
  userLoginData: {},
  isLoggedIn: false,
};

export const rootReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_REGISTER_DATA:
      return { ...state, userRegisterData: action.payload.data };
    case SET_LOGIN_DATA:
      return { ...state, userLoginData: action.payload.data };
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload.value };
    default:
      return state;
  }
};
