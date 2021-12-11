import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import bdLogo from '../../../Assets/bdLogo.svg';
import './PassportApplication.css';

const PassportApplication = () => {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return (
        <Container className='my-3 shadow shadow-lg p-3 rounded rounded-3 border border-4'>
            <div className='text-center'>
                <img src={bdLogo} className='' width='65' alt="" />
                <h4 className='my-2'>People’s Republic of Bangladesh</h4>
                <p>Department Of Immigration & Passport</p>
            </div>
            <div className='passportApplyBG'>
                <h2 className='mt-5 text-center'>Passport Application</h2>
                <hr />
                <p className='text-end text-muted'>Date of Apply: {date}</p>
                <Form>
                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Personal Information</h4>
                    <div className='px-2'>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Label className='fw-bold'>Full Name</Form.Label>
                            <Form.Control readOnly placeholder="" />
                        </Form.Group>

                        <Row className="mb-3 gx-3">
                            <Form.Group as={Col} controlId="formGridDOB">
                                <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Date of Birth" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label className='fw-bold'>Gender</Form.Label> <br />
                                <Form.Control type="text" placeholder="Gender" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridReligion">
                                <Form.Label className='fw-bold'>Religion</Form.Label>
                                <Form.Control type="text" placeholder="Type your Religion Name" />
                            </Form.Group>
                        </Row>

                    </div>



                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Permanent Address</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPermaDistrict">
                                <Form.Label className='fw-bold'>District Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your district Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaPoliceStation">
                                <Form.Label className='fw-bold'>Police Station</Form.Label>
                                <Form.Control type="text" placeholder="Enter your police station" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPermaPostalOffice">
                                <Form.Label className='fw-bold'>Post Office</Form.Label>
                                <Form.Control type="text" placeholder="Enter your post office" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPermaPostalCode">
                                <Form.Label className='fw-bold'>Postal Code</Form.Label>
                                <Form.Control type="number" placeholder="Enter your postal code" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaUP">
                                <Form.Label className='fw-bold'>Union Name</Form.Label>
                                <Form.Control type="text" placeholder="Write your UP Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaCityVillage">
                                <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                                <Form.Control type="text" placeholder="City/Village/House" />
                            </Form.Group>

                        </Row>
                    </div>
                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Present Address</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridDistrict">
                                <Form.Label className='fw-bold'>District Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your district Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPoliceStation">
                                <Form.Label className='fw-bold'>Police Station</Form.Label>
                                <Form.Control type="text" placeholder="Enter your police station" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPostalOffice">
                                <Form.Label className='fw-bold'>Post Office</Form.Label>
                                <Form.Control type="text" placeholder="Enter your post office" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPostalCode">
                                <Form.Label className='fw-bold'>Postal Code</Form.Label>
                                <Form.Control type="number" placeholder="Enter your postal code" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridUP">
                                <Form.Label className='fw-bold'>Union Name</Form.Label>
                                <Form.Control type="text" placeholder="Write your UP Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCityVillage">
                                <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                                <Form.Control type="text" placeholder="City/Village/House" />
                            </Form.Group>

                        </Row>
                    </div>


                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Parental Information</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridFatherName">
                                <Form.Label className='fw-bold'>Father's Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Father's Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFatherNID">
                                <Form.Label className='fw-bold'>Father's NID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Father's NID" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridMotherName">
                                <Form.Label className='fw-bold'>Mother's Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Mother's Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridMotherNID">
                                <Form.Label className='fw-bold'>Mother's NID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Mother's NID" />
                            </Form.Group>
                        </Row>
                    </div>

                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Passport Info</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridValidity">
                                <Form.Label className='fw-bold'>Validity</Form.Label>
                                <Form.Select defaultValue="Choose One">
                                    <option>Choose One...</option>
                                    <option>5 Years</option>
                                    <option>10 Years</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPages">
                                <Form.Label className='fw-bold'>Pages</Form.Label>
                                <Form.Select defaultValue="Choose One">
                                    <option>Choose One...</option>
                                    <option>48 Pages</option>
                                    <option>64 Pages</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridType">
                                <Form.Label className='fw-bold'>Delivery Type</Form.Label>
                                <Form.Select defaultValue="Choose One">
                                    <option>Choose One...</option>
                                    <option>Normal</option>
                                    <option>Express</option>
                                    <option>Super Express</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </div>



                    <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Attachments</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='fw-bold'>Upload your Signature</Form.Label>
                                <Form.Control className='w-50' type="file" />
                            </Form.Group>
                        </Row>
                    </div>

                    <div className='p-2 mt-5'>
                        <Button variant="outline-dark" className='fw-bold' type="submit">
                            Apply
                        </Button>

                    </div>
                </Form>
            </div>

        </Container>
    );
};

export default PassportApplication;