import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth";
import HomePage from "../pages/home";
import RideRequest from "../pages/rideRequest";
import Protected from "./Protected";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/ride_request" element={<Protected page={<RideRequest />} />} />
    </Routes>
  );
};

export default AppRouter;
