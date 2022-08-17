import { actionTypes } from "../actionTypes";

const initialState = "";

const pageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DESTINED_PAGE:
      state = payload;
      return state;

    default:
      return state;
  }
};

export default pageReducer;
