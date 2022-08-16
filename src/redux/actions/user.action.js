import { actionTypes } from "../actionTypes";

const userLogin = (user) => {
  return { type: actionTypes.USER_LOGIN, payload: user };
};

const userLogout = () => {
  return { type: actionTypes.USER_LOGOUT, payload: null };
};

export const userActions = {
  login: userLogin,
  logout: userLogout,
};
