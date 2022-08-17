import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pageReducer from "./reducers/page.reducer";
import rideReducer from "./reducers/ride.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  user_credentials: userReducer,
  destined_page: pageReducer,
  ride_state: rideReducer,
});

const persistConfig = {
  key: "here-to-there",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export default store;
