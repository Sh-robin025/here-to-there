import React from "react";
import heroImage from "../../assets/hero-image.png";
import Button from "../../styles/button";
import Container from "../../styles/container";
import { Col, Grid } from "../../styles/layout";

const HeroSection = () => {
  return (
    <Container>
      <Grid cols={2} md={1} height="70vh">
        <Col
          span={1}
          className="text-center d-flex justify-content-center align-items-center flex-column"
        >
          <h1 className="text-uppercase font-weight-bold primary-color">Ride Sharing</h1>
          <h3 className="text-uppercase">platform services</h3>
          <Button className="mt-3">Become a Rider</Button>
        </Col>
        <Col span={1} className="d-flex justify-content-center align-items-center">
          <img src={heroImage} alt="" />
        </Col>
      </Grid>
    </Container>
  );
};

export default HeroSection;
