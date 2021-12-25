import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import CitizenSingleAppliedApplicationModal from '../../../CitizenPages/CitizenAppliedApplication/CitizenSingleAppliedApplication/CitizenSingleAppliedApplicationModal/CitizenSingleAppliedApplicationModal';

const AppliedSingleApplication = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [status, setStatus] = useState('')
    const { _id, applicationType, citizenFullName, applicationStatus, approvedDate } = props.application


    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    const handleSelect = e => {
        setStatus(e.target.value)
    }

    const handleChange = (e) => {
        const data = {
            applicationStatus: status,
            approvedDate: date
        }
        console.log(data)
        axios.put(`https://lit-waters-60915.herokuapp.com/applicationStatus/${_id}`, data)
            .then(response => {
                alert('Updated Successfully');

            })
            .catch(error => {
                alert('Not Updated')
                console.log(error);
            });
        e.preventDefault()
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 my-2 '>
            <div className='p-2 custom-card'>
                <h4 className='customLabelBG text-white px-2 py-1 rounded rounded-3'>{applicationType}</h4>
                <p><span className='fw-bold'>Applicant Name:</span> {citizenFullName}</p>
                <p>Application Status: {applicationStatus}</p>
                {
                    applicationStatus === "pending" &&
                    <div className='row align-items-center justify-content-center '>
                        <div className="col-sm-2">
                            <Button className='py-1' variant='outline-success' onClick={() => setModalShow(true)} >
                                <i className="fas fa-eye"></i>
                            </Button>

                            <CitizenSingleAppliedApplicationModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                applicationId={_id}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Form.Group as={Col} controlId="formGridmaritalStatus">
                                <Form.Select onChange={handleSelect} defaultValue="" name="maritalStatus">
                                    <option value="pending">Select Status</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-sm-2">
                            <Button variant='outline-danger' onClick={handleChange}><i className="fas fa-exchange-alt"></i></Button>
                        </div>
                    </div>
                }
                {
                    applicationStatus === "Rejected" && <p>Rejected Date: {approvedDate}</p>
                }
                {
                    applicationStatus === "Approved" && <p>Approved Date: {approvedDate}</p>
                }
            </div>
        </div>
    );
};

export default AppliedSingleApplication;