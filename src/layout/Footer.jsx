import React from "react";
import apple from "../assets/Apple_logo.png";
import google from "../assets/google_play.webp";
import Card from "../styles/card";
import Container from "../styles/container";

const Footer = () => {
  return (
    <div className="text-center bg-light pt-5">
      <Container>
        <h2 className="primary-color font-weight-bold">DOWNLOAD APP</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <Card className="border text-light d-flex align-items-center p-3" bg="#111">
            <img src={google} alt="" height={50} className="mr-3" />
            <div>
              <p>Download From</p>
              <h4>Google play</h4>
            </div>
          </Card>
          <Card className="border text-light d-flex align-items-center p-3" bg="#111">
            <img src={apple} alt="" height={50} className="mr-3" />
            <div>
              <p>Download From</p>
              <h4>Apple store</h4>
            </div>
          </Card>
        </div>

        <h6 className="border-top py-2">2021 &copy; All Right Resarved Here To There</h6>
      </Container>
    </div>
  );
};

export default Footer;
