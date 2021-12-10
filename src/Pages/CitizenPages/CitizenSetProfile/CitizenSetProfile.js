import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';

const CitizenSetProfile = () => {
    const [value, setValue] = useState();
    return (
        <Container>
            <Form>
                <Row className="mb-3 gx-5">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter your surname" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control readOnly placeholder="" />
                </Form.Group>

                <Row className="mb-3 gx-5">
                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Date of Birth" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label> <br />
                        <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type='radio'
                            id='male'
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type='radio'
                            id='female'
                        />
                        <Form.Check
                            inline
                            label="Others"
                            name="group1"
                            type='radio'
                            id='others'
                        />
                    </Form.Group>
                </Row>



                <Row className="mb-3 gx-5">
                    <Form.Group as={Col} controlId="formGridReligion">
                        <Form.Label>Religion</Form.Label>
                        <Form.Control type="text" placeholder="Type your Religion Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridmaritalStatus">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Select defaultValue="Choose One">
                            <option>Choose...</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3 gx-5">
                    <Form.Group as={Col} controlId="formGridContactNum">
                        <Form.Label>Contact Number</Form.Label>
                        <PhoneInput

                            onChange={setValue} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter your surname" />
                    </Form.Group>
                </Row>


















                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container >
    );
};

export default CitizenSetProfile;