import React, { createContext, useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { vehicleContext } from '../App';


const Vehicle = (props) => {
    const { name, img } = props.data;
    const [vehicle, setVehicle] = useContext(vehicleContext)
    const history = useHistory()
    const selectedVehicle = () => {
        setVehicle({ name, img })
        history.push("/destination");
    }

    return (
        <div className="col-md-3 text-center">
            <Card
                onClick={() => selectedVehicle()}
                style={{ width: '14rem', margin: '20px', padding: '30px', borderRadius: '10px' }}>
                <Card.Img variant="top" src={img}
                    style={{ height: '100px' }} />
                <Card.Title className="mt-4">{name}</Card.Title>
            </Card>
        </div>
    );
};

export default Vehicle;