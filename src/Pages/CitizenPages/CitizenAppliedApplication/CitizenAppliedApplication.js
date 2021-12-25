import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import CitizenSingleAppliedApplication from './CitizenSingleAppliedApplication/CitizenSingleAppliedApplication';

const CitizenAppliedApplication = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([])
    const userEmail = user.email;
    useEffect(() => {
        fetch(`https://lit-waters-60915.herokuapp.com/applications`)
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])
    const citizenApplications = applications.filter(application => (userEmail === application.citizenEmail))

    return (
        <Container>
            <h2 className='text-center primary-color my-4'>Applied Application</h2>
            <div className="mt-4">
                {
                    citizenApplications.map(application => <CitizenSingleAppliedApplication key={application._id} application={application}></CitizenSingleAppliedApplication>)
                }
            </div>
        </Container>
    );
};

export default CitizenAppliedApplication;