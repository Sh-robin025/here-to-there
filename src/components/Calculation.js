import { faUser, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { vehicleContext } from '../App';

const Calculation = (props) => {
    const { from, to, date } = props?.inputValue;
    const [vehicle, setVehicle] = useContext(vehicleContext)

    return (
        <div className="col-md-3 bg-info rounded pt-2 pb-2">
            <ListGroup className="list-group-flush">
                <ListGroupItem className="justify-content-between align-items-center m-2 py-2 rounded bg-warning">
                    <div className="destination">
                        <li>{from}</li>
                        <li>{to}</li>
                        {date && <li>{date}</li>}
                    </div>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center m-2 rounded">
                    <img src={vehicle?.img} style={{ height: '55px' }} alt="" />
                    <h6>{vehicle?.name}</h6>
                    <h6><FontAwesomeIcon icon={faUser} /> 1</h6><h6>$60</h6>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center m-2 rounded">
                    <img src={vehicle?.img} style={{ height: '55px' }} alt="" />
                    <h6>{vehicle?.name}</h6>
                    <h6><FontAwesomeIcon icon={faUserFriends} /> 2</h6><h6>$40</h6>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center m-2 rounded">
                    <img src={vehicle?.img} style={{ height: '55px' }} alt="" />
                    <h6>{vehicle?.name}</h6>
                    <h6><FontAwesomeIcon icon={faUsers} /> 4</h6><h6>$25</h6>
                </ListGroupItem>
            </ListGroup>
        </div >
    );
};

export default Calculation;