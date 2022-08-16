import React from "react";
import { useDispatch } from "react-redux";
import setDestinedRoute from "../../redux/actions/route.action";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Why from "./Why";

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(setDestinedRoute(""));

  return (
    <>
      <HeroSection />
      <Categories />
      <Why />
    </>
  );
};

export default HomePage;
