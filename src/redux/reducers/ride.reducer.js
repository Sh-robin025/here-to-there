import { actionTypes } from "../actionTypes";

const initialState = {
  selected: "",
  my_rides: [],
};

const rideReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.RIDE_SELECT:
      state.selected = payload;
      return state;

    case actionTypes.SET_MY_RIDES:
      state.my_rides = payload;
      return state;

    default:
      return state;
  }
};

export default rideReducer;
