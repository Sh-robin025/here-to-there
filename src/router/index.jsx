import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth";
import Greeting from "../pages/Greeting";
import HomePage from "../pages/home";
import MyRides from "../pages/myRides";
import RideRequest from "../pages/rideRequest";
import Protected from "./Protected";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/ride_request" element={<Protected page={<RideRequest />} />} />
      <Route path="/my-rides" element={<Protected page={<MyRides />} />} />
      <Route path="/greeting" element={<Protected page={<Greeting />} />} />
    </Routes>
  );
};

export default AppRouter;
