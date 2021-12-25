import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../Assets/loginImg.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChanged = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container className="mt-5">
            <div className='ui-container'>
                <Row className='align-items-center gx-3'>
                    <Col sm={12} lg={6} className='rounded rounded-3 px-4 py-3'>
                        <Container>
                            <h2 className="text-center primary-color">LOG IN</h2>
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email Address"
                                        className="mb-3"
                                    >
                                        <Form.Control className='customInputField' type="email" name="email" onChange={handleOnChanged} placeholder="Enter email" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="formGroupPassword">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Password"
                                        className="mb-3"
                                    >
                                        <Form.Control className='customInputField' name="password" onChange={handleOnChanged} type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </Form.Group>
                                <div className="text-center mb-3">
                                    <Button type="submit" className='buttonStyle'><i className="fas fa-sign-in-alt"></i> Log in </Button>
                                </div>

                                <div className="text-center">
                                    <NavLink className="text-decoration-none" to="/register">
                                        <Button className="text-secondary" variant="text">New User? Then <span className='text-decoration-underline'>Register First</span></Button>
                                    </NavLink>
                                </div>
                            </Form>
                        </Container>
                    </Col>

                    <Col sm={12} lg={6} className='my-5' >
                        <img src={loginImg} className='w-100' alt="" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Login;