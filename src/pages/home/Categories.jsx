import React from "react";
import bike from "../../assets/bike.png";
import bus from "../../assets/bus.png";
import car from "../../assets/car.png";
import train from "../../assets/train.png";
import Card from "../../styles/card";
import Container from "../../styles/container";
import { Col, Grid, SectionWrapper } from "../../styles/layout";

const Categories = () => {
  return (
    <SectionWrapper bg="#fff" className="py-5">
      <Container className="text-center">
        <h2 className="text-uppercase font-weight-bold text-shadow">Welcome to Here to There</h2>
        <h5>Which Ride Do You Want?</h5>
        <Grid cols={4} md={2} sm={1} className="my-4">
          {categories.map((item, key) => (
            <Col span={1} key={key}>
              <Card shadow>
                <img src={item.image} alt="" height={100} />
                <h3 className="my-2">{item.name}</h3>
              </Card>
            </Col>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

const categories = [
  { name: "Bike", image: bike },
  { name: "Car", image: car },
  { name: "Bus", image: bus },
  { name: "train", image: train },
];

export default Categories;
