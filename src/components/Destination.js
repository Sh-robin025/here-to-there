
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { vehicleContext } from '../App';
import Calculation from './Calculation';
import DestinationForm from './DestinationForm';
import GoogleMap from './GoogleMap';

const Destination = () => {
    const [inputValue, setInputValue] = useState()
    const [destination, setDestination] = useState(null)
    const [vehicle, setVehicle] = useContext(vehicleContext)
    const searchRide = () => {
        if (vehicle.img === undefined) {
            alert("go to home page and select your ride first.")
        }
        if (vehicle.img && inputValue?.from && inputValue?.to) {
            setDestination(true)
        }
    }
    const getInputValue = (e) => {
        if (e.target.name === 'from') {
            const typed = { ...inputValue }
            typed[e.target.name] = e.target.value
            setInputValue(typed)
        }
        if (e.target.name === 'to') {
            const typed = { ...inputValue }
            typed[e.target.name] = e.target.value
            setInputValue(typed)
        }
        if (e.target.name === 'date') {
            const typed = { ...inputValue }
            typed[e.target.name] = e.target.value
            setInputValue(typed)
        }
    }

    return (
        <Container>
            <div className="row mt-5">
                {
                    destination ? <Calculation inputValue={inputValue} /> : <DestinationForm destination={searchRide}
                        getInputValue={getInputValue} />
                }
                <GoogleMap />
            </div>
        </Container>
    );
};

export default Destination;