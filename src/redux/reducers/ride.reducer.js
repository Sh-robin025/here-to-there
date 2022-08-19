import { actionTypes } from "../actionTypes";

const initialState = {
  selected: "",
  my_rides: [],
};

const rideReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.RIDE_SELECT:
      return { ...state, selected: payload };

    case actionTypes.SET_MY_RIDES:
      return { ...state, my_rides: payload };

    default:
      return state;
  }
};

export default rideReducer;
