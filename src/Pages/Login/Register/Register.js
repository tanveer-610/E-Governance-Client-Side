import React, { useState } from 'react';
import { Container, Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import registerImg from '../../../Assets/registerImg.jpeg';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            alert("Password didn't matched");
            return
        }
        registerUser(loginData.email, loginData.password1, loginData.name, history);
    }

    return (
        <Container className="mt-5">
            <div>
                <Row className='align-items-center gx-3'>
                    <Col sm={12} lg={6} className='my-5' >
                        <img src={registerImg} className='img-fluid' alt="" />
                    </Col>
                    <Col sm={12} lg={6} className='rounded rounded-3 px-4 py-3'>
                        <h2 className="text-center primary-color">REGISTER</h2>
                        <div className="px-4 py-3 my-5 rounded rounded-3">
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-4" controlId="formGroupName">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="User Name"
                                        className="mb-3"
                                    >
                                        <Form.Control className='customInputField' type="text" placeholder="user name" name="name" onBlur={handleOnBlur} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email Address"
                                        className="mb-3"
                                    >
                                        <Form.Control className='customInputField' type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupPassword1">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Password"
                                        className="mb-3"
                                    >
                                        <Form.Control name="password1" className='customInputField'
                                            onBlur={handleOnBlur} type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="formGroupPassword2">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Re-Type Password"
                                        className="mb-3"
                                    >
                                        <Form.Control name="password2" className='customInputField'
                                            onBlur={handleOnBlur} type="password" placeholder="Re-Type Password" />
                                    </FloatingLabel>
                                </Form.Group>
                                <div className="text-center mb-2">
                                    <Button type="submit" className='buttonStyle'><i className="fas fa-user-plus"></i> Register</Button>
                                </div>

                                <div className="text-center">
                                    <NavLink className="text-decoration-none" to="/login">
                                        <Button className="text-secondary" variant="text">Already Have an account? <span className='text-decoration-underline'>Then Login</span> </Button>
                                    </NavLink>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Register;