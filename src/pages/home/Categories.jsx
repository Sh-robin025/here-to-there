import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRideCategory } from "../../redux/actions/ride.action";
import Card from "../../styles/card";
import Container from "../../styles/container";
import { Col, Grid, SectionWrapper } from "../../styles/layout";
import categories from "../../utils/categories";

const Categories = () => {
  const dispatch = useDispatch();

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
                <h3 className="my-2">
                  <Link to="ride_request" onClick={() => dispatch(setRideCategory(item.name))}>
                    {item.name}
                  </Link>
                </h3>
              </Card>
            </Col>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default Categories;
