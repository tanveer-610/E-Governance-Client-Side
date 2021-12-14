import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const CitizenSingleAppliedApplication = (props) => {
    const { applicationType, applicationStatus
        , issueDate, approvedDate } = props.application
    const deleteButton = <FontAwesomeIcon icon={faTrashAlt} />
    return (
        <Container className='border border-3 mb-3 rounded rounded-3 p-3 shadow shadow-lg'>
            <h4 className='bg-dark text-light p-2'>{applicationType}</h4>
            <div className="px-2">
                <p>Application Status: {applicationStatus}</p>
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <p>Applied date: {issueDate}</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end">
                        {
                            applicationStatus === "pending" ? <button className='p-0 m-0 fs-4 border border-0 text-dark'>{deleteButton}</button> : <p>Approved Date: {approvedDate}</p>
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CitizenSingleAppliedApplication;