import React, { useEffect, useState } from 'react';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CitizenSingleAppliedApplicationModal from './CitizenSingleAppliedApplicationModal/CitizenSingleAppliedApplicationModal';

const CitizenSingleAppliedApplication = (props) => {

    const { _id, applicationType, applicationStatus
        , issueDate, approvedDate, registerNo } = props.application
    const deleteButton = <FontAwesomeIcon icon={faTrashAlt} />
    const showButton = <FontAwesomeIcon icon={faEye} />
    const [allApplication, setAllApplication] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:5000/applications`)
            .then(res => res.json())
            .then(data => setAllApplication(data))
    }, [])
    const handleDelete = id => {
        const procceed = window.confirm("Are you sure? If you are... Click OK")
        if (procceed) {
            const url = `http://localhost:5000/applicationDelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = allApplication.filter(application => (application._id) !== id);
                        setAllApplication(remaining);
                        alert("data is deleted");
                        //reload page
                        history.go(0)
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
                            applicationStatus === "pending" ? <button className='p-0 m-0 fs-4 border border-0 text-dark bg-white' onClick={() => handleDelete(_id)}>{deleteButton}</button> : <div><span>Approved Date: {approvedDate} </span><button className='p-0 m-0 fs-4 border border-0 text-dark bg-white' onClick={() => setModalShow(true)} >
                                {showButton}
                            </button>

                                <CitizenSingleAppliedApplicationModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    applicationId={_id} registerNo={registerNo} approvedDate={approvedDate}
                                /></div>
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CitizenSingleAppliedApplication;