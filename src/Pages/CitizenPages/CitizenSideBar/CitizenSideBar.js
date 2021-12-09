import React from 'react';
import { Button } from 'react-bootstrap';
import './CitizenSideBar.css';
const CitizenSideBar = () => {

    return (
        <div className="h-100">
            <div className="d-flex height-fixing align-items-center">
                <div className="w-100">
                    <div>
                        <Button className="w-100 my-2">Home</Button>
                    </div>
                    <div>
                        <Button className="w-100 my-2 py-2">
                            Birth Certificate Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 my-2 py-2">
                            NID Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 my-2 py-2">
                            Passport Application
                        </Button>
                    </div>
                    <div>
                        <Button className="w-100 my-2 py-2">
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenSideBar;