import React from 'react';
import { Button } from 'react-bootstrap';
import './CitizenSideBar.css';
const CitizenSideBar = () => {

    return (
        <div className="h-100">
            <div className="d-flex height-fixing align-items-center">
                <div className="w-100">
                    <div>
                        <Button className="w-100 py-2 rounded rounded-0" variant='outline-dark'>Dashboard</Button>
                    </div>
                    <div>
                        <Button className="w-100 py-2 rounded rounded-0" variant='outline-dark'>
                            Birth Certificate Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 py-2 rounded rounded-0" variant='outline-dark'>
                            NID Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 py-2 rounded rounded-0" variant='outline-dark'>
                            Passport Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 py-2 rounded rounded-0" variant='outline-dark'>
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenSideBar;