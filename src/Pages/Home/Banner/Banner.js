import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import carousel1 from '../../../Assets/carousel1.png';
import carousel2 from '../../../Assets/carousel2.png';
import carousel3 from '../../../Assets/carousel3.png';

const Banner = () => {
    return (
        <div className='mt-5'>
            <Carousel fade>
                <Carousel.Item>
                    <Row>
                        <Col sm={6}>
                            <img
                                className="img-fluid"
                                src={carousel1}
                                alt="First slide"
                            />
                        </Col>
                        <Col sm={6}>
                            <div className='text-center d-flex align-items-center justify-content-center h-100'>
                                <div className='p-5 me-lg-5'>
                                    <h1 className='primary-color '>E-GOVERNANCE</h1>
                                    <p className='text-muted px-lg-5'>E-governance is the application of IT for delivering government services, exchange of information, communication transactions, integration of various stand-alone systems between government to citizen (G2C) and citizen to government (C2G).</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={6}>
                            <img
                                className="img-fluid"
                                src={carousel3}
                                alt="Second slide"
                            />
                        </Col>
                        <Col sm={6}>
                            <div className='text-center d-flex align-items-center justify-content-center h-100'>
                                <div className='p-5 me-lg-5'>
                                    <h1 className='primary-color '>E-GOVERNANCE</h1>
                                    <h4 className='fst-italic'>Identity Documents You May Need !!!</h4>
                                    <p className='text-muted px-lg-5'>E-governance facilate you to get "E-DOCUMENTS" within a while. Hassle free service gives you three kinds of facilities in one website.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={6}>
                            <img
                                className="img-fluid"
                                src={carousel2}
                                alt="Third slide"
                            />
                        </Col>
                        <Col sm={6}>
                            <div className='text-center d-flex align-items-center justify-content-center h-100'>
                                <div className='p-5 me-lg-5'>
                                    <h1 className='primary-color '>E-GOVERNANCE</h1>
                                    <h4 className='fst-italic'>ONE PLATFORM FOR ALL DOCUMENT!!!</h4>
                                    <p className='text-muted px-lg-5'>E-governance is the web application of IT for delivering government services. It will allow you for applying any kind of government documents. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;