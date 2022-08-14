import React from "react";
import choice from "../../assets/choice.png";
import driver from "../../assets/driver.png";
import time from "../../assets/time.png";
import Card from "../../styles/card";
import Container from "../../styles/container";
import { Col, Grid, SectionWrapper } from "../../styles/layout";

const Why = () => {
  return (
    <SectionWrapper className="text-center py-5">
      <Container>
        <h2 className="text-uppercase font-weight-bold text-shadow">Why Here to There</h2>
        <Grid cols={3} sm={1} className="my-4">
          <Col>
            <Card bg="#fff" shadow>
              <img src={choice} alt="" height={120} />
              <h4>Freedom of Choice</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus soluta debitis
                quam aperiam, rem quibusdam? Pariatur cum placeat doloremque alias at quas numquam
                cupiditate dignissimos. Enim placeat excepturi modi necessitatibus!
              </p>
            </Card>
          </Col>
          <Col>
            <Card bg="#fff" shadow>
              <img src={driver} alt="" height={120} />
              <h4>Experienced Driver</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus soluta debitis
                quam aperiam, rem quibusdam? Pariatur cum placeat doloremque alias at quas numquam
                cupiditate dignissimos. Enim placeat excepturi modi necessitatibus!
              </p>
            </Card>
          </Col>
          <Col>
            <Card bg="#fff" shadow>
              <img src={time} alt="" height={120} />
              <h4>Freedom of Choice</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus soluta debitis
                quam aperiam, rem quibusdam? Pariatur cum placeat doloremque alias at quas numquam
                cupiditate dignissimos. Enim placeat excepturi modi necessitatibus!
              </p>
            </Card>
          </Col>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default Why;
