import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const CitizenSetProfile = () => {
    const { user } = useAuth();

    return (
        <Container className='my-3'>
            <Form>
                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Personal Information</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label className='fw-bold'>First Name</Form.Label>
                            <Form.Control type="text" name="fName" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label className='fw-bold'>Surname</Form.Label>
                            <Form.Control type="text" name="lName" placeholder="Enter your surname" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridFullName">
                        <Form.Label className='fw-bold'>Full Name</Form.Label>
                        <Form.Control name="fullName" readOnly placeholder="" />
                    </Form.Group>

                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridDOB">
                            <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="DOB" placeholder="Date of Birth" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label className='fw-bold'>Gender</Form.Label> <br />
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
                            <Form.Label className='fw-bold'>Religion</Form.Label>
                            <Form.Control type="text" name="religion" placeholder="Type your Religion Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridmaritalStatus">
                            <Form.Label className='fw-bold'>Marital Status</Form.Label>
                            <Form.Select defaultValue="Choose One" name="maritalStatus">
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
                            <Form.Label className='fw-bold'>Contact Number</Form.Label>
                            <Form.Control name="contactInfo" type="tel" placeholder="Enter your contact number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">

                        </Form.Group>
                    </Row>
                </div>



                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Permanent Address</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPermaDistrict">
                            <Form.Label className='fw-bold'>District Name</Form.Label>
                            <Form.Control type="text" name="perDistrictName" placeholder="Enter your district Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaPoliceStation">
                            <Form.Label className='fw-bold'>Police Station</Form.Label>
                            <Form.Control type="text" name="perPoliceStation" placeholder="Enter your police station" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPermaPostalOffice">
                            <Form.Label className='fw-bold'>Post Office</Form.Label>
                            <Form.Control type="text" name="perPostOffice" placeholder="Enter your post office" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPermaPostalCode">
                            <Form.Label className='fw-bold'>Postal Code</Form.Label>
                            <Form.Control type="number" name="perPostalCode" placeholder="Enter your postal code" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaUP">
                            <Form.Label className='fw-bold'>Union Name</Form.Label>
                            <Form.Control type="text" name="perUPName" placeholder="Write your UP Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaCityVillage">
                            <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                            <Form.Control type="text" name="perCVH" placeholder="City/Village/House" />
                        </Form.Group>

                    </Row>
                </div>
                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Present Address</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridDistrict">
                            <Form.Label className='fw-bold'>District Name</Form.Label>
                            <Form.Control type="text" name="preDistrictName" placeholder="Enter your district Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPoliceStation">
                            <Form.Label className='fw-bold'>Police Station</Form.Label>
                            <Form.Control type="text" name="prePoliceStation" placeholder="Enter your police station" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPostalOffice">
                            <Form.Label className='fw-bold'>Post Office</Form.Label>
                            <Form.Control type="text" name="prePostOffice" placeholder="Enter your post office" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label className='fw-bold'>Postal Code</Form.Label>
                            <Form.Control type="number" name="prePostalCode" placeholder="Enter your postal code" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUP">
                            <Form.Label className='fw-bold'>Union Name</Form.Label>
                            <Form.Control type="text" name="preUPName" placeholder="Write your UP Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCityVillage">
                            <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                            <Form.Control type="text" name="preCVG" placeholder="City/Village/House" />
                        </Form.Group>

                    </Row>
                </div>


                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Parental Information</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridFatherName">
                            <Form.Label className='fw-bold'>Father's Name</Form.Label>
                            <Form.Control type="text" name="fatherName" placeholder="Enter your Father's Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFatherNID">
                            <Form.Label className='fw-bold'>Father's NID</Form.Label>
                            <Form.Control type="text" name="fatherNID" placeholder="Enter your Father's NID" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridMotherName">
                            <Form.Label className='fw-bold'>Mother's Name</Form.Label>
                            <Form.Control type="text" name="motherName" placeholder="Enter your Mother's Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMotherNID">
                            <Form.Label className='fw-bold'>Mother's NID</Form.Label>
                            <Form.Control type="text" name="motherNID" placeholder="Enter your Mother's NID" />
                        </Form.Group>
                    </Row>
                </div>
                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>List of Attachments</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label className='fw-bold'>Upload your Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>
                </div>




                <div>
                    <Button variant="outline-dark" className='fw-bold' type="submit">
                        Submit
                    </Button>

                </div>
            </Form>
        </Container >
    );
};

export default CitizenSetProfile;