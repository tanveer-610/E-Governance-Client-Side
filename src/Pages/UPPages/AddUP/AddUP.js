import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';

import './AddUP.css'
const AddUP = () => {
    const [upEmail, setUpEmail] = useState("")
    const handleEmail = e => {
        setUpEmail(e.target.value)
    }

    const addUP = e => {
        if (upEmail !== "") {
            const data = {
                role: "admin"
            }

            axios.put(`http://localhost:5000/admin/${upEmail}`, data)
                .then(response => {
                    alert('Updated Successfully');
                    setUpEmail("")
                })
                .catch(error => {
                    alert('Not Updated')
                    console.log(error);
                });
            e.target.value = ""
        }

        else {
            alert("Enter Email First")
        }

        e.preventDefault()
    }

    return (
        <div className='addUP d-flex justify-content-center align-items-center'>
            <Container className='my-5 shadow shadow-lg border border-5 p-4 rounded rounded-3'>
                <h3 className='text-center bg-dark text-white py-1 rounded rounded-3'>Add new UP secretary</h3>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Write UP's Email..."
                        type='email'
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onBlur={handleEmail}
                    />
                    <Button onClick={addUP} variant="outline-dark" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>

            </Container>
        </div>
    );
};

export default AddUP;