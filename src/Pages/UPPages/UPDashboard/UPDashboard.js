import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AppliedSingleApplication from './AppliedSingleApplication/AppliedSingleApplication';


const UPDashboard = () => {
    const [applications, setApplications] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/applications')
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return (
        <Container className='my-4'>
            <p className='text-end text-muted'>Today is : {date}</p>
            <div className="row">
                {
                    applications.map(application => <AppliedSingleApplication key={application._id} application={application} ></AppliedSingleApplication>)
                }
            </div>
        </Container>
    );
};

export default UPDashboard;