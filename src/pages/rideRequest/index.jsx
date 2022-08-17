import React from "react";
import Button from "../../styles/button";
import Card from "../../styles/card";
import Container from "../../styles/container";
import Form from "../../styles/form";
import { Col, Grid } from "../../styles/layout";
import LocationPick from "./LocationPick";
import Map from "./Map";

const RideRequest = () => {
  const handleRequest = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Grid cols={10} md={1} height="90vh">
        <Col span={4} className="d-flex flex-column justify-content-center">
          <Card bg="#fff" shadow>
            <Form vertical onSubmit={handleRequest}>
              <LocationPick placeholder="Pickup Point" onChange={(val) => console.log(val)} />
              <h2>To</h2>
              <LocationPick placeholder="Destination" onChange={(val) => console.log(val)} />
              <Button type="submit" className="mt-3">
                Get Ride
              </Button>
            </Form>
          </Card>
        </Col>
        <Col span={6}>
          <Map />
        </Col>
      </Grid>
    </Container>
  );
};

export default RideRequest;
