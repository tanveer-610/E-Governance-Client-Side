import React from 'react';
import { Container } from 'react-bootstrap';
import CitizenAppliedApplication from '../CitizenAppliedApplication/CitizenAppliedApplication';
import CitizenSideBar from '../CitizenSideBar/CitizenSideBar';
import './CitizenDashBoard.css';
const CitizenDashBoard = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <CitizenSideBar />
                </div>
                <div className="col-sm-12 col-md-9">
                    <Container>
                        <CitizenAppliedApplication></CitizenAppliedApplication>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default CitizenDashBoard;