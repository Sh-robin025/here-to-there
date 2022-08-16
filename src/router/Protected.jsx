import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import setDestinedRoute from "../redux/actions/route.action";

const Protected = ({ page }) => {
  const user = useSelector((state) => state.user_credentials);
  const dispatch = useDispatch();

  const location = useLocation().pathname.split("/")[1];

  if (!user) {
    dispatch(setDestinedRoute(location));
    return <Navigate to="/login" />;
  }

  dispatch(setDestinedRoute(""));

  return page;
};

export default Protected;
