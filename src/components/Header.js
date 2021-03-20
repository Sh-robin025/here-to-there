import React, { useContext } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signedUserContext } from '../App';
import logo from '../images/logo-removebg-preview.png'

const Header = () => {
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    return (
        <Container>
            <div className="row justify-content-between align-items-center p-2">
                <div className="col-md-6">
                    <img src={logo} style={{ height: '60px' }} alt="" />
                </div>
                <Row className="col-md-6 align-items-center justify-content-around">
                    <a href="/">Home</a>
                    <a href="/destination">Destination</a>
                    <a href="">Blog</a>
                    {
                        <h5>{signedUser?.displayName}</h5>
                    }
                    {
                        signedUser === null ? <Link to="/login"><Button >Sign in</Button></Link>
                            : <Link to="/login"><Button onClick={() => setSignedUser(null)}>Sign out</Button></Link>
                    }
                </Row>
            </div >
        </Container>
    );
};

export default Header;