import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Assets/bdLogo.svg';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const userEmail = user.email;
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/users/${userEmail}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user.email])
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" className="text-white navbar-bg">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home">
                        <div className='d-flex align-items-center '>
                            <img src={logo} width='60' alt="" />
                            <span>&nbsp; E-GOVERNANCE</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                userInfo?.role === "admin" && <><Nav.Link as={NavLink} to="/upDashboard" className="text-white">UP Dashboard</Nav.Link><Nav.Link as={NavLink} className="text-white" to="/addUP">Add UP</Nav.Link></>
                            }
                            {
                                userInfo?.role === "" && <Nav.Link as={NavLink} className="text-white" to="/dashboard">Dashboard</Nav.Link>
                            }

                            {
                                user?.email ?
                                    <>
                                        <Nav.Link as={NavLink} onClick={logOut} to="/home" className="text-white">Log Out</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={NavLink} className="text-white fs-5" to="/login">Log in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;