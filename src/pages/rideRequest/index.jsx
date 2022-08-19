import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import sendRideRequest from "../../services/rideRequest";
import Button from "../../styles/button";
import Card from "../../styles/card";
import Container from "../../styles/container";
import Form from "../../styles/form";
import { Col, Grid } from "../../styles/layout";
import categories from "../../utils/categories";
import LocationPick from "./LocationPick";
import Map from "./Map";

const RideRequest = () => {
  const [sending, setSending] = useState(false);
  const [rideRequest, setRideRequest] = useState({
    from: "",
    to: "",
    type: "immediate_booking",
    pickDate: new Date(),
  });

  const navigate = useNavigate();
  const { ride_state, user_credentials } = useSelector((state) => state);

  const selectedRide = categories.find((i) => i.name === ride_state.selected);

  const handleRequest = async (e) => {
    e.preventDefault();
    setSending(true);

    const reqData = {
      ...rideRequest,
      category: ride_state.selected,
      client: user_credentials,
      status: "Pending",
    };

    const res = await sendRideRequest(reqData);
    toast.success(res);
    navigate("/greeting");
    setSending(false);
  };

  return (
    <Container>
      <Grid cols={10} md={1} height="90vh">
        <Col span={4} className="d-flex flex-column justify-content-center">
          <Card bg="#fff" shadow className="d-flex flex-column align-items-center">
            <img src={selectedRide?.image} alt="" height={100} />
            <Form vertical onSubmit={handleRequest} width="100%">
              <LocationPick
                placeholder="Pickup Point"
                required
                onChange={(val) => setRideRequest({ ...rideRequest, from: val })}
              />
              <h2>To</h2>
              <LocationPick
                placeholder="Destination"
                required
                onChange={(val) => setRideRequest({ ...rideRequest, to: val })}
              />

              <div>
                <div>
                  <input
                    type="radio"
                    id="immediate"
                    name="immediate"
                    value="immediate_booking"
                    checked={rideRequest.type === "immediate_booking"}
                    onChange={({ target }) =>
                      setRideRequest({ ...rideRequest, type: target.value })
                    }
                  />
                   <label htmlFor="immediate">Immediate Ride</label>
                </div>

                <div>
                  <input
                    type="radio"
                    value="advance_booking"
                    id="advance_booking"
                    name="advance_booking"
                    checked={rideRequest.type === "advance_booking"}
                    onChange={({ target }) =>
                      setRideRequest({ ...rideRequest, type: target.value })
                    }
                  />
                   <label htmlFor="advance_booking">Advance Booking</label>
                </div>
              </div>

              {rideRequest.type === "advance_booking" && (
                <div>
                  <label>* Pick Date and Time</label>
                  <ReactDatePicker
                    showTimeSelect
                    selected={rideRequest.pickDate}
                    onChange={(e) => setRideRequest({ ...rideRequest, pickDate: e })}
                  />
                </div>
              )}

              <Button type="submit" className="mt-3">
                {sending ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Pls Wait...
                  </>
                ) : (
                  "Get Ride"
                )}
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
