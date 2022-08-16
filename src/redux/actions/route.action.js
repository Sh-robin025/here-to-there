import { actionTypes } from "../actionTypes";

const setDestinedRoute = (path) => {
  return { type: actionTypes.SET_DESTINED_PATH, payload: path };
};

export default setDestinedRoute;
