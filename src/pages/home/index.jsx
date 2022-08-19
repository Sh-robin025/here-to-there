import React from "react";
import { useDispatch } from "react-redux";
import setDestinedPage from "../../redux/actions/page.action";
import { setMyRides } from "../../redux/actions/ride.action";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Why from "./Why";

const HomePage = () => {
  const dispatch = useDispatch();

  dispatch(setDestinedPage(""));
  dispatch(setMyRides([]));

  return (
    <>
      <HeroSection />
      <Categories />
      <Why />
    </>
  );
};

export default HomePage;
