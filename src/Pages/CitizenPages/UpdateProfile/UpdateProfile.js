import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UpdateProfile = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({})
    const userEmail = user.email;
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/users/${userEmail}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userEmail])

    const [fullName, setFullName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [preDistrictName, setPreDistrictName] = useState("")
    const [prePoliceStation, setPrePoliceStation] = useState("")
    const [prePostOffice, setPrePostOffice] = useState("")
    const [prePostalCode, setPrePostalCode] = useState("")
    const [preUPName, setPreUPName] = useState("")
    const [preCVH, setPreCVH] = useState("")
    const history = useHistory()


    //Catch value from the input field. 

    const handleFullName = (e) => {
        setFullName(e.target.value)
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


    const handleForm = e => {
        if (preDistrictName !== "" && prePoliceStation !== "" && prePostOffice !== "" && prePostalCode !== "" && preUPName !== "" && preCVH !== "" && fullName !== "" && contactNumber !== "") {
            const data = {
                citizenFullName: fullName,
                citizenContactNumber: contactNumber,
                presentDistrictName: preDistrictName,
                presentPoliceStation: prePoliceStation,
                presentPostOffice: prePostOffice,
                presentPostalCode: prePostalCode,
                presentUPName: preUPName,
                presentCVH: preCVH
            }

            axios.put(`https://lit-waters-60915.herokuapp.com/updateUser/${user.email}`, data)
                .then(response => {
                    alert('Updated Successfully')
                    history.push('/dashboard')
                })
                .catch(error => {
                    alert('Not Updated')
                    console.log(error);
                });
        }
        else {
            alert('Please Follow the rule. If you dont update any field then just click on that. Empty Field will not be accepted')
        }
        e.preventDefault()
    }
    return (
        <Container className='my-3 shadow shadow-lg p-3 rounded rounded-3 border border-4'>
            <h1 className="text-center mb-3 primary-color">Update Your Profile</h1>
            <div className='text-center text-danger'><small>***If you dont want to change any field, then click on that field for ensuring ***</small></div>
            <Form onSubmit={handleForm}>
                <h4 className='border border-3 mt-4 p-2 customLabelBG text-light'>Personal Information</h4>
                <div className='px-2'>



                    <Row className="mb-3 gx-5">
                        <Form.Group as={Col} className="mb-3" controlId="formGridFullName">
                            <Form.Label className='fw-bold'>Full Name</Form.Label>
                            <Form.Control defaultValue={userInfo.citizenFullName} onBlur={handleFullName} name="fullName" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridContactNum">
                            <Form.Label className='fw-bold'>Contact Number</Form.Label>
                            <Form.Control name="contactNumber" onBlur={handleContactNumber} type="tel" defaultValue={userInfo.citizenContactNumber} />
                        </Form.Group>
                    </Row>
                </div>
                <h4 className='border border-3 mt-4 p-2 customLabelBG text-light'>Present Address</h4>
                <div className='px-2'>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridDistrict">
                            <Form.Label className='fw-bold'>District Name</Form.Label>
                            <Form.Control onBlur={handlePreDistrictName} type="text" name="preDistrictName" defaultValue={userInfo.presentDistrictName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPoliceStation">
                            <Form.Label className='fw-bold'>Police Station</Form.Label>
                            <Form.Control onBlur={handlePrePoliceStation} type="text" name="prePoliceStation" defaultValue={userInfo.presentPoliceStation} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPostalOffice">
                            <Form.Label className='fw-bold'>Post Office</Form.Label>
                            <Form.Control type="text" onBlur={handlePrePostOffice} name="prePostOffice" defaultValue={userInfo.presentPostOffice} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 gx-3 ">
                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label className='fw-bold'>Postal Code</Form.Label>
                            <Form.Control type="number" onBlur={handlePrePostalCode} name="prePostalCode" defaultValue={userInfo.presentPostalCode} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUP">
                            <Form.Label className='fw-bold'>Union Name</Form.Label>
                            <Form.Control type="text" onBlur={handlePreUPName} name="preUPName" defaultValue={userInfo.presentUPName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCityVillage">
                            <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                            <Form.Control type="text" onBlur={handlePreCVH} name="preCVG" defaultValue={userInfo.presentCVH} />
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




                <div className='p-2 mt-5 d-flex justify-content-between'>
                    <Button className='fw-bold buttonStyle' type="submit">
                        <i className="fas fa-check-circle"></i> Apply Changes
                    </Button>
                    <Button as={NavLink} to="/dashboard" variant='outline-danger' className='fw-bold cancelButtonStyle' >
                        <i className="fas fa-times"></i> Cancel
                    </Button>
                </div>
            </Form>
        </Container >
    );
};

export default UpdateProfile;