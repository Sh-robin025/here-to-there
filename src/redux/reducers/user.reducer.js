import { actionTypes } from "../actionTypes";

const initialState = null;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      state = payload;
      return state;

    case actionTypes.USER_LOGOUT:
      state = payload;
      return state;

    default:
      return state;
  }
};

export default userReducer;
