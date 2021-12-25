import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import bdLogo from '../../../Assets/bdLogo.svg';
import useAuth from '../../../hooks/useAuth';
import './NIDApplication.css';

const NIDApplication = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const [preDistrictName, setPreDistrictName] = useState("")
    const [prePoliceStation, setPrePoliceStation] = useState("")
    const [prePostOffice, setPrePostOffice] = useState("")
    const [prePostalCode, setPrePostalCode] = useState("")
    const [preUPName, setPreUPName] = useState("")
    const [preCVH, setPreCVH] = useState("")
    const history = useHistory()
    const userEmail = user.email;
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/users/${userEmail}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])
    console.log(userInfo)
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
        if (preDistrictName !== "" && prePoliceStation !== "" && prePostOffice !== "" && prePostalCode !== "" && preUPName !== "" && preCVH !== "") {
            const data = {
                citizenEmail: user.email,
                citizenFullName: userInfo.citizenFullName,
                DOB: userInfo.DOB,
                citizenGender: userInfo.citizenGender,
                citizenReligion: userInfo.citizenReligion,
                citizenMaritalStatus: userInfo.citizenMaritalStatus,
                citizenContactNumber: userInfo.citizenContactNumber,
                permanentDistrictName: userInfo.permanentDistrictName,
                permanentPoliceStation: userInfo.permanentPoliceStation,
                permanentPostOffice: userInfo.permanentPostOffice,
                permanentPostalCode: userInfo.permanentPostalCode,
                permanentUPName: userInfo.permanentUPName,
                permanentCVH: userInfo.permanentCVH,
                presentDistrictName: preDistrictName,
                presentPoliceStation: prePoliceStation,
                presentPostOffice: prePostOffice,
                presentPostalCode: prePostalCode,
                presentUPName: preUPName,
                presentCVH: preCVH,
                citizenFatherName: userInfo.citizenFatherName,
                citizenFatherNID: userInfo.citizenFatherNID,
                citizenMotherName: userInfo.citizenMotherName,
                citizenMotherNID: userInfo.citizenMotherNID,
                applicationType: "NID",
                applicationStatus: "pending",
                issueDate: date,
                approvedDate: ""
            }
            axios.post('https://lit-waters-60915.herokuapp.com/allApplications', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert("Application has been Submitted");
                        history.push('/dashboard');
                    }
                    else {
                        alert("npe");
                    }
                })
        }
        else {
            alert("Please Confirm the Present Address First")
        }

        e.preventDefault()
    }

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return (
        <Container className='my-3 shadow shadow-lg p-3 rounded rounded-3 border border-4'>
            <div className='text-center'>
                <img src={bdLogo} className='' width='65' alt="" />
                <h4 className='my-2'>People’s Republic of Bangladesh</h4>
                <p>Bangladesh Election Commission</p>


            </div>
            <div className='NIDApplyBg'>
                <h2 className='mt-5 text-center'>National ID Card Application</h2>
                <hr />
                <p className='text-end text-muted'>Date of Apply: {date}</p>
                <Form onSubmit={handleForm}>
                    <h4 className='border border-3 mt-4 p-2 customLabelBG text-light'>Personal Information</h4>
                    <div className='px-2'>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Label className='fw-bold'>Full Name</Form.Label>
                            <Form.Control readOnly defaultValue={userInfo.citizenFullName} />
                        </Form.Group>

                        <Row className="mb-3 gx-3">
                            <Form.Group as={Col} controlId="formGridDOB">
                                <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
                                <Form.Control type="date" readOnly defaultValue={userInfo.DOB} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label className='fw-bold'>Gender</Form.Label> <br />
                                <Form.Control defaultValue={userInfo.citizenGender} type="text" readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridReligion">
                                <Form.Label className='fw-bold'>Religion</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={userInfo.citizenReligion} readOnly />
                            </Form.Group>
                        </Row>

                    </div>



                    <h4 className='border border-3 mt-4 p-2 customLabelBG text-light'>Permanent Address</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPermaDistrict">
                                <Form.Label className='fw-bold'>District Name</Form.Label>
                                <Form.Control defaultValue={userInfo.permanentDistrictName} type="text" readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaPoliceStation">
                                <Form.Label className='fw-bold'>Police Station</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.permanentPoliceStation} readOnly />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPermaPostalOffice">
                                <Form.Label className='fw-bold'>Post Office</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.permanentPostOffice} readOnly />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPermaPostalCode">
                                <Form.Label className='fw-bold'>Postal Code</Form.Label>
                                <Form.Control type="number" defaultValue={userInfo.permanentPostalCode} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaUP">
                                <Form.Label className='fw-bold'>Union Name</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.permanentUPName} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPermaCityVillage">
                                <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.permanentCVH} readOnly />
                            </Form.Group>

                        </Row>
                    </div>
                    <h4 className='border border-3 mt-4 pt-2 customLabelBG text-light'>Present Address</h4>
                    <small>***Confirm Present address by clicking Every field of this segment***</small>
                    <div className='px-2 mt-4'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridDistrict">
                                <Form.Label className='fw-bold'>District Name</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.presentDistrictName} onBlur={handlePreDistrictName} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPoliceStation">
                                <Form.Label className='fw-bold'>Police Station</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.presentPoliceStation} onBlur={handlePrePoliceStation} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPostalOffice">
                                <Form.Label className='fw-bold'>Post Office</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.presentPostOffice} onBlur={handlePrePostOffice} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridPostalCode">
                                <Form.Label className='fw-bold'>Postal Code</Form.Label>
                                <Form.Control type="number" defaultValue={userInfo.presentPostalCode} onBlur={handlePrePostalCode} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridUP">
                                <Form.Label className='fw-bold'>Union Name</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.presentUPName} onBlur={handlePreUPName} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCityVillage">
                                <Form.Label className='fw-bold'>City/Village/House</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.presentCVH} onBlur={handlePreCVH} />
                            </Form.Group>

                        </Row>
                    </div>


                    <h4 className='border border-3 mt-4 p-2 customLabelBG text-light'>Parental Information</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridFatherName">
                                <Form.Label className='fw-bold'>Father's Name</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.citizenFatherName} readOnly />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFatherNID">
                                <Form.Label className='fw-bold'>Father's NID</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.citizenFatherNID} readOnly />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group as={Col} controlId="formGridMotherName">
                                <Form.Label className='fw-bold'>Mother's Name</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.citizenMotherName} readOnly />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridMotherNID">
                                <Form.Label className='fw-bold'>Mother's NID</Form.Label>
                                <Form.Control type="text" defaultValue={userInfo.citizenMotherNID} readOnly />
                            </Form.Group>
                        </Row>
                    </div>

                    {/* <h4 className='border border-3 mt-4 p-2 bg-dark text-light'>Attachments</h4>
                    <div className='px-2'>
                        <Row className="mb-3 gx-3 ">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='fw-bold'>Upload your Signature</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>
                    </div> */}
                    <div className='p-2 mt-5 d-flex justify-content-between'>
                        <Button className='fw-bold buttonStyle' type="submit">
                            Apply
                        </Button>
                        <Button as={NavLink} to="/dashboard" variant='outline-danger' className='fw-bold cancelButtonStyle' >
                            Cancel
                        </Button>
                    </div>

                </Form>
            </div>

        </Container>
    );
};

export default NIDApplication;