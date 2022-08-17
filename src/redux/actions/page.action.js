import { actionTypes } from "../actionTypes";

const setDestinedPage = (path) => {
  return { type: actionTypes.SET_DESTINED_PAGE, payload: path };
};

export default setDestinedPage;
