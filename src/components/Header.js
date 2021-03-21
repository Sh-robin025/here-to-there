import React, { useContext } from 'react';
import { Button, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signedUserContext } from '../App';
import logo from '../images/logo-removebg-preview.png';
import '../App.css'

const Header = () => {
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    return (
        <Container>
            <div className="row justify-content-between align-items-center p-2 header">
                <div className="col-md-6">
                    <img src={logo} style={{ height: '60px' }} alt="" />
                </div>
                <Row className="col-md-6 align-items-center justify-content-around">
                    <Link to="/">Home</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="">Blog</Link>
                    {
                        signedUser === null ? <Link to="/login"><Button >Sign in</Button></Link>
                            : <DropdownButton id="dropdown-basic-button"
                                title={signedUser?.displayName}>
                                <Dropdown.Item>
                                    <img src={signedUser?.photoURL}
                                        style={{ width: '50px', borderRadius: '50%' }} alt="" />
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/login"><Button onClick={() => setSignedUser(null)}>Sign out</Button></Link>
                                </Dropdown.Item>
                            </DropdownButton>
                    }
                </Row>
            </div >
        </Container>
    );
};

export default Header;