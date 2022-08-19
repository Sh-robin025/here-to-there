import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getMyRides from "../../services/getMyRides";
import Container from "../../styles/container";
import SingleRide from "./SingleRide";

const MyRides = () => {
  const { my_rides } = useSelector((state) => state.ride_state);

  useEffect(() => {
    getMyRides();
  }, []);

  return (
    <Container height="100vh" className="py-5">
      {my_rides.map((ride, key) => (
        <SingleRide ride={ride} key={key} />
      ))}
    </Container>
  );
};

export default MyRides;
