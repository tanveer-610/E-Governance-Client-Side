import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import bdLogo from '../../../../../Assets/bdLogo.svg';
import qr from '../../../../../Assets/QR.jpg';
import user from '../../../../../Assets/user.png'
import './CitizenSingleAppliedApplicationModal.css';

const CitizenSingleAppliedApplicationModal = (props) => {
    const { applicationId, registerNo, approvedDate } = props;
    const [allApplicationsInfo, setAllApplicationsInfo] = useState({})
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/applications/${applicationId}`)
            .then(res => res.json())
            .then(data => setAllApplicationsInfo(data))
    }, [])

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>


                    {/* birth Certificate show */}

                    {
                        allApplicationsInfo.applicationType === "Birth Certificate" && <Container className='my-3 shadow shadow-lg p-3 rounded rounded-3 border border-4'>
                            <div className='text-center'>
                                <img src={bdLogo} className='' width='65' alt="" />
                                <h4 className='my-2'>People’s Republic of Bangladesh</h4>
                                <h6>Office of the Registrar of Birth and Death</h6>
                                <p>{allApplicationsInfo.permanentUPName} Union Parishad</p>
                                <p>{allApplicationsInfo.permanentPoliceStation}, {allApplicationsInfo.permanentDistrictName}, Bangladesh</p>
                            </div>
                            <div className='birthApplyBg'>
                                <h2 className='my-5 text-center'>Birth Certificate</h2>
                                <p className='mt-5'>Registration No: {registerNo}</p>

                                <div className='d-flex align-items-center justify-content-between mb-4'>
                                    <p>Registration Date: {allApplicationsInfo.issueDate}</p>
                                    <p>Certificate Issue Date: {approvedDate}</p>
                                </div>
                                <p><span className='fw-bold'>Personal Identification No:</span> {applicationId}</p>
                                <p className='mt-5'><span className='fw-bold'>Name:</span> {allApplicationsInfo.citizenFullName}</p>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <p><span className='fw-bold'>Date of Birth:</span> {allApplicationsInfo.DOB}</p>
                                    <p><span className='fw-bold'>Gender:</span> {allApplicationsInfo.citizenGender}</p>
                                </div>


                                <div>
                                    <p><span className='fw-bold'>Place Of Birth:</span> City/Village/House: {allApplicationsInfo.permanentCVH}, <br /> Police Station- {allApplicationsInfo.permanentPoliceStation}, District- {allApplicationsInfo.permanentDistrictName}</p>
                                </div>

                                <div className='d-flex align-items-center justify-content-between mt-5'>
                                    <p><span className='fw-bold'>Father's Name:</span> {allApplicationsInfo.citizenFatherName}</p>
                                    <p><span className='fw-bold'>Nationality:</span> Bangladeshi</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p><span className='fw-bold'>Mothers's Name:</span> {allApplicationsInfo.citizenMotherName}</p>
                                    <p><span className='fw-bold'>Nationality:</span> Bangladeshi</p>
                                </div>
                                <div className='mb-5'>
                                    <p><span className='fw-bold'>Permannent Address:</span> City/Village/House- {allApplicationsInfo.permanentCVH}, <br /> Police Station- {allApplicationsInfo.permanentPoliceStation}, District- {allApplicationsInfo.permanentDistrictName}</p>
                                </div>

                                <div className='py-4 text-end'>
                                    <small>Authorized By: {allApplicationsInfo.permanentUPName} UP Secretary.</small>
                                </div>
                                <small>{applicationId}</small>
                            </div>
                        </Container>
                    }

                    {/* NID Show */}
                    {allApplicationsInfo.applicationType === "NID" && <Container>
                        <div className='border border-2 shadow shadow-lg p-2 mb-5 rounded rounded-2 NIDbg'>
                            <div className='row justify-content-between align-items-center mb-5'>
                                <div className="col-sm-1">
                                    <img src={bdLogo} width='60px' alt="" />
                                </div>
                                <div className='col-sm-11 text-center'>
                                    <h4 className='my-2'>Government of the People’s Republic of Bangladesh</h4>
                                    <h4 className='my-2 text-danger'>National ID Card</h4>
                                </div>
                            </div>

                            <div className='row mt-3 gx-3'>
                                <div className="col-sm-4">
                                    <img src={user} className='img-fluid' alt="" />
                                </div>
                                <div className="col-sm-8 ">
                                    <p><span className='fw-bold'>Name: </span>{allApplicationsInfo.citizenFullName}</p>
                                    <p><span className='fw-bold'>Father's Name: </span>{allApplicationsInfo.citizenFatherName}</p>
                                    <p><span className='fw-bold'>Mother's Name: </span>{allApplicationsInfo.citizenMotherName}</p>
                                    <p><span className='fw-bold'>Date of Birth: </span>{allApplicationsInfo.DOB}</p>
                                    <p><span className='fw-bold'>ID No: </span>{applicationId}</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-2 shadow shadow-lg p-2 mb-5 rounded rounded-2'>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p> <img src={qr} className='w-100 h-25' alt="" /></p>
                                </div>
                                <div className='col-sm-12'>
                                    <p><span className='fw-bold'>Address:</span> City/Village/House- {allApplicationsInfo.permanentCVH}, Police Station- {allApplicationsInfo.permanentPoliceStation}, District- {allApplicationsInfo.permanentDistrictName}</p>
                                </div>
                            </div>
                            <p className='text-end'> <small>Approved Date: {approvedDate}</small></p>

                        </div>
                    </Container>}




                    {/* Passport View */}
                    {allApplicationsInfo.applicationType === "Passport" && <Container>
                        <div className='border border-2 shadow shadow-lg p-2 mb-5 rounded rounded-2 passportBg'>
                            <div className='text-center'>
                                <div className='row justify-content-between align-items-center'>
                                    <div className='col-sm-1 ps-5'>
                                        <img src={bdLogo} width='60px' alt="" />
                                    </div>
                                    <div className='col-sm-11 ps-1'>
                                        <h4>Government of the People’s Republic of Bangladesh</h4>
                                    </div>
                                </div>
                            </div>
                            <h4 className='text-center my-4'>Passport</h4>
                            <div className='row justify-content-between align-items-center gx-3'>
                                <div className='col-sm-3'>
                                    <img src={user} className='img-fluid' alt="" />
                                </div>
                                <div className='col-sm-9'>
                                    <div className="row">
                                        <div className='col-sm-4'>
                                            <p><span className='fw-bold'>Type: </span>Ordinary</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <p><span className='fw-bold'>Country Code: </span>BGD</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <p><span className='fw-bold'>Validity: </span>{allApplicationsInfo.citizenPassportValidity}</p>
                                        </div>
                                        <div className='col-sm-12'>
                                            <p><span className='fw-bold'>Name: </span>{allApplicationsInfo.citizenFullName}</p>
                                        </div>
                                        <div className='col-sm-12'>
                                            <p><span className='fw-bold'>Passport No: </span>{applicationId}</p>
                                        </div>
                                        <div className='col-sm-12'>
                                            <p><span className='fw-bold'>Nationality: </span>Bangladeshi</p>
                                        </div>
                                        <div className='col-sm-7'>
                                            <p><span className='fw-bold'>Date Of Birth: </span>{allApplicationsInfo.DOB}</p>
                                        </div>
                                        <div className='col-sm-5'>
                                            <p><span className='fw-bold'>Sex: </span>{allApplicationsInfo.citizenGender}</p>
                                        </div>
                                        <div className='col-sm-7'>
                                            <p><span className='fw-bold'>Date of Issue: </span>{allApplicationsInfo.approvedDate}</p>
                                        </div>
                                        <div className='col-sm-5'>
                                            <p><span className='fw-bold'>Authority: </span>DIP,DHAKA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant='outline-danger'><i className="fas fa-times"></i> Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CitizenSingleAppliedApplicationModal;