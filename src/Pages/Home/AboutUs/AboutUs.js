import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutus from '../../../Assets/aboutus.gif';

const AboutUs = () => {
    return (
        <Container className='my-5'>

            <Row className='align-items-center g-3'>
                <Col sm={12} lg={6}>
                    <h2 className='primary-color text-center'>About Us</h2>
                    <p className='text-center'>“E-GOVERNANCE” systems will be a web-based system which will resolve the traditional  problem of issuing any government documents. As the numbers of web surfers are increasing day  by day, a web base solution will be certainly more accurate than a traditional desktop base solution. Its main objective is to create a platform where every person can easily get all public services from  anywhere. User has to submit all his information only for one time. After that, he can issue all  public documents without any hassle. As all information is stored in the database, there will be no  risk of Document loss. </p>
                </Col>
                <Col sm={12} lg={6} className='text-center'>
                    <img src={aboutus} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;