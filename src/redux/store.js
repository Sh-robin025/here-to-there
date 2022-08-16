import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import routeReducer from "./reducers/route.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  user_credentials: userReducer,
  destined: routeReducer,
});

const persistConfig = {
  key: "here-to-there",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export default store;
