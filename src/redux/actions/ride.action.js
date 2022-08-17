import { actionTypes } from "../actionTypes";

const setRideCategory = (ride) => {
  return { type: actionTypes.RIDE_SELECT, payload: ride };
};

const setMyRides = (rides) => {
  return { type: actionTypes.SET_MY_RIDES, payload: rides };
};

export { setRideCategory, setMyRides };
