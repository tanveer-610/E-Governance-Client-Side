import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../Assets/bdLogo.svg';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" className="text-white">
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
                                user?.email ?
                                    <>
                                        <Nav.Link as={NavLink} className="text-white" to="/dashboard">Dashboard</Nav.Link>
                                        <Nav.Link as={NavLink} onClick={logOut} to="/home" className="text-white">Log Out</Nav.Link>
                                    </>

                                    :
                                    <Nav.Link as={NavLink} className="text-white" to="/login">Log in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;