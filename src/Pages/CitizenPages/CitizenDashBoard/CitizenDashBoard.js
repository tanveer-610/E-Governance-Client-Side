import React from 'react';
import CitizenSideBar from '../CitizenSideBar/CitizenSideBar';
import './CitizenDashBoard.css';
const CitizenDashBoard = () => {
    return (
        <div className="sidebar-height-fixing border border-2">
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <CitizenSideBar />
                </div>
                <div className="col-sm-12 col-md-9">

                </div>
            </div>
        </div>
    );
};

export default CitizenDashBoard;