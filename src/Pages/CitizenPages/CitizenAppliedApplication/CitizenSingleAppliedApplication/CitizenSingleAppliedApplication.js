import React, { useEffect, useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const CitizenSingleAppliedApplication = (props) => {
    const { user } = useAuth();
    const { applicationType, applicationStatus
        , issueDate, approvedDate } = props.application
    const deleteButton = <FontAwesomeIcon icon={faTrashAlt} />
    const [applications, setApplications] = useState([]);
    const userEmail = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/applications`)
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])
    const handleDelete = e => {
        const procceed = window.confirm("Are you sure? If you are... Click on Confirm.")
        if (procceed) {
            const url = `http://localhost:5000/applicationDelete/${userEmail}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = applications.filter(application => application.email !== userEmail);
                        setApplications(remaining);
                        alert("data is deleted");
                    }
                })
        }

    }
    return (
        <Container className='border border-3 mb-3 rounded rounded-3 p-3 shadow shadow-lg'>
            <h4 className='bg-dark text-light p-2 rounded rounded-3'>{applicationType}</h4>
            <div className="px-2">
                <p>Application Status: {applicationStatus}</p>
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <p>Applied date: {issueDate}</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end">
                        {
                            applicationStatus === "pending" ? <button className='p-0 m-0 fs-4 border border-0 text-dark' onClick={handleDelete}>{deleteButton}</button> : <p>Approved Date: {approvedDate}</p>
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CitizenSingleAppliedApplication;