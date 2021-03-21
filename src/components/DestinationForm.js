import React, { useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const DestinationForm = (props) => {
    const { destination, getInputValue } = props;
    const [startDate, setStartDate] = useState();


    return (
        <Form className="col-md-3">
            <Form.Group controlId="formBasicName">
                <Form.Label>Pick From</Form.Label>
                <Form.Control type="text" name="from" placeholder="Where you start?"
                    onBlur={getInputValue} />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>Drop To</Form.Label>
                <Form.Control type="text" name="to" placeholder="Where you go ?"
                    onBlur={getInputValue} />
            </Form.Group>
            {
                startDate && <ReactDatePicker
                    name="date"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    onBlur={getInputValue}
                />
            }

            <fieldset>
                <Form.Group as={Row}>
                    <Col sm={12} style={{ fontSize: '15px' }}>
                        <Form.Check
                            onClick={() => setStartDate()}
                            type="radio"
                            label="Immediate Ride"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            onClick={() => setStartDate(new Date())}
                            type="radio"
                            label="Book For After"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                    </Col>
                </Form.Group>
            </fieldset>
            <Button variant="success" block
                onClick={() => destination()}> Search </Button>
        </Form>
    );
};

export default DestinationForm;