import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { firebaseInit } from "./firebase.config";
import "./global.css";
import AppLayout from "./layout";
import store from "./redux/store";
import AppRouter from "./router";

const persister = persistStore(store);

firebaseInit();

const root = document.getElementById("root");
const app = createRoot(root);

app.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
