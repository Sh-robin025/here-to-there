import React, { useEffect, useState } from "react";
import getMyRides from "../../services/getMyRides";
import Container from "../../styles/container";

const MyRides = () => {
  const [rides, setRides] = useState(null);

  useEffect(() => {
    getMyRides().then((res) => setRides(res));
  }, []);

  return (
    <Container height="100vh">
      <h2>Here will display users all ride.</h2>
      <h1>There are {rides.length} rides for me</h1>
      {/* {my_rides.length && } */}
    </Container>
  );
};

export default MyRides;
