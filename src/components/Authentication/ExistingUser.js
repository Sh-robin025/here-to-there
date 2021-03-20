import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { signedUserContext } from '../../App';
import { initialization, handleLogInUser } from './FirebaseAuth';
import { userContext } from './SignIn';

const ExistingUser = () => {
    const [newUser, setNewUser] = useContext(userContext)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    initialization()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        let validData;
        if (e.target.name === 'email') {
            validData = /\S+@\S+\.\S+/.test(e.target.value)
            if (validData) {
                setError(null)
                const userInfo = { ...user }
                userInfo.email = e.target.value;
                setUser(userInfo)
            } else {
                const userInfo = { ...user }
                userInfo.email = '';
                setUser(userInfo)
                const errors = { ...error }
                errors.email = true
                setError(errors);
            }
        }
        if (e.target.name === 'password') {
            validData = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
            if (validData) {
                setError(null)
                const userInfo = { ...user }
                userInfo.password = e.target.value;
                setUser(userInfo)
            } else {
                const userInfo = { ...user }
                userInfo.password = '';
                setUser(userInfo)
                const errors = { ...error }
                errors.password = true
                setError(errors)
            }
        }
        e.preventDefault()
    }

    const handleLogIn = (e) => {
        if (user === null) {
            alert("fill up the form first,rather you can not sign up !");
        }
        if (user.email && user.password) {
            handleLogInUser(user.email, user.password)
                .then(data => {
                    setSignedUser(data);
                    history.replace(from);
                })
        }
        e.preventDefault()
    }
    return (
        <div className="row justify-content-center">
            <Form className="col-md-4 bg-light p-4 mt-5" style={{ border: '1px solid black' }}>
                <Form.Label>Log in</Form.Label> <br /> <br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Control required name="email" type="email" placeholder="Email"
                        onBlur={handleBlur}
                        style={{ border: 'none', borderBottom: '1px solid gray' }} />
                    {
                        error?.email ? <span style={{ color: 'red', fontSize: '12px' }}>* valid email required.</span> : ""
                    }
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control required name="password" type="password" placeholder="Password"
                        onBlur={handleBlur}
                        style={{ border: 'none', borderBottom: '1px solid gray' }} />
                    {
                        error?.password ? <span style={{ color: 'red', fontSize: '12px' }}>* Password length minimum 6 character.</span> : ""
                    }
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Form.Group controlId="formBasicCheckbox" style={{ fontSize: '15px' }}>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <a href="" style={{ fontSize: '15px' }}>Forgot Password ?</a>
                </div>
                <br />
                <Button variant="primary" block type="submit"
                    onClick={handleLogIn}
                >Submit</Button> <br />
                <p style={{ fontSize: '15px', textAlign: 'center' }}>Don't have account ? <span style={{ borderBottom: "1px solid blue",color:"blue", cursor: "pointer" }} onClick={() => setNewUser(!newUser)}> Create a  account.</span></p>
            </Form>
        </div >
    );
};

export default ExistingUser;