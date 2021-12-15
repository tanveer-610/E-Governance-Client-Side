import React, { useEffect, useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const CitizenSingleAppliedApplication = (props) => {

    const { _id, applicationType, applicationStatus
        , issueDate, approvedDate } = props.application
    const deleteButton = <FontAwesomeIcon icon={faTrashAlt} />
    const [allApplication, setAllApplication] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/applications`)
            .then(res => res.json())
            .then(data => setAllApplication(data))
    }, [])
    console.log(allApplication)
    const handleDelete = _id => {
        const procceed = window.confirm("Are you sure? If you are... Click OK")
        if (procceed) {
            const url = `http://localhost:5000/applicationDelete/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Delation process" + _id);
                        const remaining = allApplication.filter(application => (application._id) !== _id);
                        setAllApplication(remaining);
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
                            applicationStatus === "pending" ? <button className='p-0 m-0 fs-4 border border-0 text-dark' onClick={() => handleDelete(_id)}>{deleteButton}</button> : <p>Approved Date: {approvedDate}</p>
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CitizenSingleAppliedApplication;