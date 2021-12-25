import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import birth from '../../../Assets/birthCer.png';
import nid from '../../../Assets/nid.jpg';
import passport from '../../../Assets/passportCertificate.jpg'
import './Services.css'
const Services = () => {
    return (
        <Container className='my-5'>
            <h2 className='primary-color text-center my-5'>Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col ">
                    <div className="card h-100 pt-3 custom-card">
                        <img src={birth} className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center primary-color">Birth Certificate</h5>
                            <p className="card-text text-muted">Without giving any kind of heavy information you will able to apply for Birth Certificate just with click.</p>
                        </div>
                        <div className="card-footer">
                            <Button as={NavLink} to="/" variant='success w-100'>Apply Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 custom-card pt-3">
                        <img src={nid} className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center primary-color">NID CARD</h5>
                            <p className="card-text text-muted">Same user information is used automatically by the system with your consent is in your hand.</p>
                        </div>
                        <div className="card-footer">
                            <Button as={NavLink} to="/" variant='success w-100'>Apply Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 pt-3 custom-card">
                        <img src={passport} className="card-img-top w-50 mx-auto" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center primary-color">Passport</h5>
                            <p className="card-text text-muted">Heavy user info is not mandatory for apply. It is very flexible to apply, user friendly and also hassle free. </p>
                        </div>
                        <div className="card-footer">
                            <Button as={NavLink} to="/" variant='success w-100'>Apply Now</Button>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Services;