import React, { useEffect } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import styled from "styled-components";
import deleteRide from "../../services/deleteRide";
import updateStatus from "../../services/updateRideStatus";
import { Col, Grid } from "../../styles/layout";
import categories from "../../utils/categories";

const SingleRide = ({ ride }) => {
  const category = categories.find((i) => i.name === ride.category);

  useEffect(() => {
    new Date(ride.pickDate.seconds) < new Date().setTime(new Date().getTime() + 5 * 60 * 60) &&
      updateStatus(ride.id, "Completed");
  }, [ride]);

  return (
    <Wrapper>
      <Grid cols={2} md={1}>
        <Col className="d-flex align-items-center">
          <img src={category.image} alt="" className="mr-4" />
          <div>
            <h4>
              {ride.from} To {ride.to}
            </h4>
            <span>{ride.category}</span>
            <p>Cash Payment</p>
          </div>
        </Col>

        <Col className="d-flex align-items-center justify-content-between">
          <div className="mr-3">
            <time className="d-flex align-items-center">
              <BsCalendar2Date className="mr-2" />
              {new Date(ride.pickDate.seconds * 1000).toDateString()}
            </time>
            <p>Immediate Booking</p>
          </div>

          <div className="actions">
            {ride.status === "Completed" && (
              <>
                <button className="btn-success">
                  <GrCompliance /> Completed
                </button>
                <button className="btn-outline-danger" onClick={() => deleteRide(ride.id)}>
                  Delete
                </button>
              </>
            )}

            {ride.status === "Pending" && (
              <>
                <button className="btn-primary">
                  <MdPendingActions /> Pending
                </button>
                <button
                  className="btn-outline-danger"
                  onClick={() => updateStatus(ride.id, "Canceled")}
                >
                  Cancel
                </button>
              </>
            )}

            {ride.status === "Canceled" && (
              <>
                <button className="btn-secondary">
                  <TiCancel /> Canceled
                </button>
                <button className="btn-outline-danger" onClick={() => deleteRide(ride.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 20px;
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  transition: all ease 0.7s;

  img {
    height: 100px;
  }

  :hover {
    box-shadow: 0px 0px 20px #444;
  }

  span {
    background: #d33f1a;
    color: #fff;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 13px;
  }

  .actions {
    display: flex;
    gap: 10px;
    button {
      padding: 5px 20px;
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 80px;
    }
  }
`;

export default SingleRide;
