import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { handleCreateUser, initialization } from './FirebaseAuth';
import { signedUserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    initialization()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        let validData;
        if (e.target.name === 'name') {
            validData = /^[^\s]+( [^\s]+)+$/.test(e.target.value)
            if (validData) {
                setError(null)
                const userInfo = { ...user }
                userInfo.name = e.target.value;
                setUser(userInfo)
            } else {
                const errors = { ...error }
                errors.name = true
                setError(errors)
            }
        }
        if (e.target.name === 'email') {
            validData = /\S+@\S+\.\S+/.test(e.target.value);
            if (validData) {
                setError(null)
                const userInfo = { ...user }
                userInfo.email = e.target.value;
                setUser(userInfo)
            } else {
                const errors = { ...error }
                errors.email = true
                setError(errors)
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
                const errors = { ...error }
                errors.password = true
                setError(errors)
            }
        }
        if (e.target.name === 'passwordCon') {
            const pWord = user.password
            validData = pWord === e.target.value
            if (validData) {
                setError(null)
                const userInfo = { ...user }
                userInfo.passwordCon = e.target.value;
                setUser(userInfo)
            } else {
                const errors = { ...error }
                errors.passwordCon = true
                setError(errors)
            }
        }
    }
    const createUser = (e) => {
        if (user === null) {
            alert("fill up the form first,rather you can not sign up !");
        }
        if (user?.email && user?.password) {
            handleCreateUser(user.name, user.email, user.password)
                .then(data => {
                    setSignedUser(data)
                    history.replace(from);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        e.preventDefault()
    }

    return (
        <Row className="justify-content-center mt-5">
            <Form className="col-md-5 bg-light p-4">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>Name : </Form.Label>
                    <Col sm={7}>
                        <Form.Control required type="text" name="name" placeholder="Name"
                            onBlur={handleBlur} />
                        {
                            error?.name ? <span style={{ color: 'red', fontSize: '12px' }}>* name must be two words</span> : ""
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>Email : </Form.Label>
                    <Col sm={7}>
                        <Form.Control required type="email" name="email" placeholder="Email"
                            onBlur={handleBlur} />
                        {
                            error?.email ? <span style={{ color: 'red', fontSize: '12px' }}>* valid email required.</span> : ""
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={5}>Password : </Form.Label>
                    <Col sm={7}>
                        <Form.Control required type="password" name="password"
                            placeholder="Password"
                            onBlur={handleBlur} />
                        {
                            error?.password ? <span style={{ color: 'red', fontSize: '12px' }}>* Password length minimum 6 character.</span> : ""
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={5}>Confirm Password : </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" name="passwordCon"
                            required
                            placeholder="Confirm Password"
                            onBlur={handleBlur} />
                        {
                            error?.passwordCon ? <span style={{ color: 'red', fontSize: '12px' }}>* Password didn't match.</span> : ""
                        }
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                    <Col sm={{ span: 12, offset: 0 }}>
                        <Button type="" block
                            onClick={createUser}>Sign up</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Row>
    );
};

export default SignUp;