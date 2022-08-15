import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth";
import HomePage from "../pages/home";
import { firebaseInit } from "../utils/firebase";

const AppRouter = () => {
  firebaseInit();

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouter;
