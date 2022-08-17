import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Confetti from "react-confetti";
import success from "../../assets/success.gif";
import Button from "../../styles/button";
import Container from "../../styles/container";

const Greeting = () => {
  return (
    <Container height="100vh" className="d-flex flex-column align-items-center">
      {/* <Confetti /> */}
      <img src={success} alt="" className="mt-5" />
      <h1 className="text-shadow">Congratulation!</h1>
      <h3>Successfully Sent Your Request.</h3>
      <br />
      <Link to="/my-rides">
        <Button>
          <FaClipboardList /> My Rides
        </Button>
      </Link>
    </Container>
  );
};

export default Greeting;
