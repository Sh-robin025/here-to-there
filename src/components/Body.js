import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { vehicleContext } from '../App';
import data from '../data/data.json';
import Vehicle from './Vehicle';


const Body = () => {
    const [vehicle, setVehicle] = useContext(vehicleContext)
    useEffect(() => {
        setVehicle(data)
    }, [])

    return (
        <Container className="row mt-5">
            {
                vehicle?.map(item => <Vehicle key={item.id} data={item} />)
            }
        </Container>
    );
};

export default Body;