import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AppLayout from "./layout";
import AppRouter from "./router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
