import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const CitizenSetProfile = () => {
    const { user } = useAuth();
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("")
    const [fullName, setFullName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [religion, setReligion] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [perDistrictName, setPerDistrictName] = useState("")
    const [perPoliceStation, setPerPoliceStation] = useState("")
    const [perPostOffice, setPerPostOffice] = useState("")
    const [perPostalCode, setPerPostalCode] = useState("")
    const [perUPName, setPerUPName] = useState("")
    const [perCVH, setPerCVH] = useState("")
    const [preDistrictName, setPreDistrictName] = useState("")
    const [prePoliceStation, setPrePoliceStation] = useState("")
    const [prePostOffice, setPrePostOffice] = useState("")
    const [prePostalCode, setPrePostalCode] = useState("")
    const [preUPName, setPreUPName] = useState("")
    const [preCVH, setPreCVH] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [fatherNID, setFatherNID] = useState("")
    const [motherName, setMotherName] = useState("")
    const [motherNID, setMotherNID] = useState("")
    const history = useHistory()


    //Catch value from the input field. 
    const handleSelect = (e) => {
        setMaritalStatus(e.target.value)
    }
    const handleFirstName = (e) => {
        setFullName(e.target.value)
    }
    const handleLastName = (e) => {
        setFullName(fullName + ' ' + e.target.value)
    }
    const handleDateOfBirth = (e) => {
        setDateOfBirth(e.target.value)
    }
    const handleReligion = (e) => {
        setReligion(e.target.value)
    }
    const handleContactNumber = (e) => {
        const contactNumber = Number(e.target.value)
        if (isNaN(contactNumber)) {
            alert("Enter Valid Number")
            e.target.value = ""
        }
        else
            setContactNumber(e.target.value)
    }

    const handlePerDistrictName = e => {
        setPerDistrictName(e.target.value);
    }

    const handlePerPoliceStation = e => {
        setPerPoliceStation(e.target.value)
    }
    const handlePerPostOffice = e => {
        setPerPostOffice(e.target.value)
    }
    const handlePerPostalCode = e => {
        const postalCode = Number(e.target.value)
        if (isNaN(postalCode)) {
            alert("Enter Valid Postal")
            e.target.value = ""
        }
        else
            setPerPostalCode(e.target.value)

    }
    const handlePerUPName = e => {
        setPerUPName(e.target.value)
    }
    const handlePerCVH = e => {
        setPerCVH(e.target.value)
    }
    const handlePreDistrictName = e => {
        setPreDistrictName(e.target.value);
    }

    const handlePrePoliceStation = e => {
        setPrePoliceStation(e.target.value)
    }
    const handlePrePostOffice = e => {
        setPrePostOffice(e.target.value)
    }
    const handlePrePostalCode = e => {
        const postalCode = Number(e.target.value)
        if (isNaN(postalCode)) {
            alert("Enter Valid Postal")
            e.target.value = ""
        }
        else
            setPrePostalCode(e.target.value)

    }
    const handlePreUPName = e => {
        setPreUPName(e.target.value)
    }
    const handlePreCVH = e => {
        setPreCVH(e.target.value)
    }
    const handleFatherName = e => {
        setFatherName(e.target.value)
    }
    const handleFatherNID = e => {
        setFatherNID(e.target.value)
    }
    const handleMotherName = e => {
        setMotherName(e.target.value)
    }
    const handleMotherNID = e => {
        setMotherNID(e.target.value)
    }

    const handleForm = e => {
        if (fullName !== "" && dateOfBirth !== "" && gender !== "" && religion !== "" && perDistrictName !== "" && perPoliceStation !== "" && perPostOffice !== "" && perPostalCode !== "" && perUPName !== "" && perCVH !== "" && preDistrictName !== "" && prePoliceStation !== "" && prePostOffice !== "" && prePostalCode !== "" && preUPName !== "" && preCVH !== "" && fatherName !== "" && fatherNID !== "" && motherName !== "" && motherNID !== "") {

            const data = {
                citizenEmail: user.email,
                citizenFullName: fullName,
                DOB: dateOfBirth,
                citizenGender: gender,
                citizenReligion: religion,
                citizenMaritalStatus: maritalStatus,
                citizenContactNumber: contactNumber,
                permanentDistrictName: perDistrictName,
                permanentPoliceStation: perPoliceStation,
                permanentPostOffice: perPostOffice,
                permanentPostalCode: perPostalCode,
                permanentUPName: perUPName,
                permanentCVH: perCVH,
                presentDistrictName: preDistrictName,
                presentPoliceStation: prePoliceStation,
                presentPostOffice: prePostOffice,
                presentPostalCode: prePostalCode,
                presentUPName: preUPName,
                presentCVH: preCVH,
                citizenFatherName: fatherName,
                citizenFatherNID: fatherNID,
                citizenMotherName: motherName,
                citizenMotherNID: motherNID
            }

            axios.put(`https://lit-waters-60915.herokuapp.com/user/${user.email}`, data)
                .then(response => {
                    alert('Updated Successfully')
                    history.push('/dashboard')
                })
                .catch(error => {
                    alert('Not Updated')
                    console.log(error);
                });
            e.target.value = ""
        }

        else {
            alert("Enter All Value")
        }

        e.preventDefault()
    }


    return (
        <Container className='my-3 shadow shadow-lg p-3 rounded rounded-3 border border-4'>
            <h1 className="text-center mb-3">Set Your Profile</h1>
            <Form onSubmit={handleForm}>
                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Personal Information</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label className='fw-bold'>First Name</Form.Label>
                            <Form.Control type="text" onBlur={handleFirstName} name="fName" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label className='fw-bold'>Surname</Form.Label>
                            <Form.Control type="text" onBlur={handleLastName} name="lName" placeholder="Enter your surname" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridFullName">
                        <Form.Label className='fw-bold'>Full Name</Form.Label>
                        <Form.Control defaultValue={fullName} name="fullName" readOnly placeholder="" />
                    </Form.Group>

                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridDOB">
                            <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
                            <Form.Control type="date" onBlur={handleDateOfBirth} name="DOB" placeholder="Date of Birth" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label className='fw-bold'>Gender</Form.Label> <br />

                            <Form.Check
                                inline
                                label="Male"
                                onChange={() => setGender("Male")}
                                name="group1"
                                type='radio'
                                id='male'
                            />
                            <Form.Check
                                inline
                                label="Female"
                                onChange={() => setGender("Female")}
                                name="group1"
                                type='radio'
                                id='female'
                            />
                            <Form.Check
                                inline
                                label="Others"
                                onChange={() => setGender("Others")}
                                name="group1"
                                type='radio'
                                id='others'
                            />

                        </Form.Group>
                    </Row>



                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridReligion">
                            <Form.Label className='fw-bold'>Religion</Form.Label>
                            <Form.Control type="text" onBlur={handleReligion} name="religion" placeholder="Type your Religion Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridmaritalStatus">
                            <Form.Label className='fw-bold'>Marital Status</Form.Label>
                            <Form.Select onChange={handleSelect} defaultValue="" name="maritalStatus">
                                <option value="">Choose...</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Separated">Separated</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} controlId="formGridContactNum">
                            <Form.Label className='fw-bold'>Contact Number</Form.Label>
                            <Form.Control name="contactNumber" onBlur={handleContactNumber} type="tel" placeholder="Enter your contact number" />
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
                            <Form.Control type="text" onBlur={handlePerDistrictName} name="perDistrictName" placeholder="Enter your district Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaPoliceStation">
                            <Form.Label className='fw-bold'>Police Station</Form.Label>
                            <Form.Control type="text" onBlur={handlePerPoliceStation} name="perPoliceStation" placeholder="Enter your police station" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPermaPostalOffice">
                            <Form.Label className='fw-bold'>Post Office</Form.Label>
                            <Form.Control type="text" onBlur={handlePerPostOffice} name="perPostOffice" placeholder="Enter your post office" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPermaPostalCode">
                            <Form.Label className='fw-bold'>Postal Code</Form.Label>
                            <Form.Control type="number" onBlur={handlePerPostalCode} name="perPostalCode" placeholder="Enter your postal code" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaUP">
                            <Form.Label className='fw-bold'>Union Name</Form.Label>
                            <Form.Control type="text" onBlur={handlePerUPName} name="perUPName" placeholder="Write your UP Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPermaCityVillage">
                            <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                            <Form.Control type="text" onBlur={handlePerCVH} name="perCVH" placeholder="City/Village/House" />
                        </Form.Group>

                    </Row>
                </div>
                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Present Address</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridDistrict">
                            <Form.Label className='fw-bold'>District Name</Form.Label>
                            <Form.Control onBlur={handlePreDistrictName} type="text" name="preDistrictName" placeholder="Enter your district Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPoliceStation">
                            <Form.Label className='fw-bold'>Police Station</Form.Label>
                            <Form.Control onBlur={handlePrePoliceStation} type="text" name="prePoliceStation" placeholder="Enter your police station" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPostalOffice">
                            <Form.Label className='fw-bold'>Post Office</Form.Label>
                            <Form.Control type="text" onBlur={handlePrePostOffice} name="prePostOffice" placeholder="Enter your post office" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label className='fw-bold'>Postal Code</Form.Label>
                            <Form.Control type="number" onBlur={handlePrePostalCode} name="prePostalCode" placeholder="Enter your postal code" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUP">
                            <Form.Label className='fw-bold'>Union Name</Form.Label>
                            <Form.Control type="text" onBlur={handlePreUPName} name="preUPName" placeholder="Write your UP Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCityVillage">
                            <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                            <Form.Control type="text" onBlur={handlePreCVH} name="preCVG" placeholder="City/Village/House" />
                        </Form.Group>

                    </Row>
                </div>


                <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Parental Information</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridFatherName">
                            <Form.Label className='fw-bold'>Father's Name</Form.Label>
                            <Form.Control type="text" onBlur={handleFatherName} name="fatherName" placeholder="Enter your Father's Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFatherNID">
                            <Form.Label className='fw-bold'>Father's NID</Form.Label>
                            <Form.Control type="text" onBlur={handleFatherNID} name="fatherNID" placeholder="Enter your Father's NID" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridMotherName">
                            <Form.Label className='fw-bold'>Mother's Name</Form.Label>
                            <Form.Control type="text" onBlur={handleMotherName} name="motherName" placeholder="Enter your Mother's Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMotherNID">
                            <Form.Label className='fw-bold'>Mother's NID</Form.Label>
                            <Form.Control type="text" onBlur={handleMotherNID} name="motherNID" placeholder="Enter your Mother's NID" />
                        </Form.Group>
                    </Row>
                </div>
                {/* <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>List of Attachments</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label className='fw-bold'>Upload your Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>
                </div> */}




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