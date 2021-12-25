import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Assets/bdLogo.svg';

const Footer = () => {
    const home = <FontAwesomeIcon icon={faHome} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    //Send complain by email
    const sendMsg = () => {
        var msgBody = document.getElementById('msg-id').value;
        window.open('mailto:transpo@gmail.com?subject=subject&body=' + msgBody);
    }
    return (

        <div className="secondary-color py-4">

            <Container className="mb-4">
                <div className="row align-items-center g-2">
                    <div className="col-sm-12 col-lg-2">
                        <h4 className="text-white ">Useful Links</h4>
                        <p><a className="footer-link text-decoration-none text-light" href="#about">About Us</a></p>
                        <p><a className="footer-link text-decoration-none text-light" href="#services">Services</a></p>
                        <p><a className="footer-link text-decoration-none text-light" href="#faqAndMap">FAQ & MAP</a></p>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <h4 className="text-white ">Quick Links</h4>
                        <p><a className="footer-link text-decoration-none text-light" href="#br">Birth Certificate Issue</a></p>
                        <p><a className="footer-link text-decoration-none text-light" href="#nid">NID Issue</a></p>
                        <p><a className="footer-link text-decoration-none text-light" href="#passport">Passport Issue</a></p>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="text-center mb-4">
                            <p>
                                <img src={img} width="75px" height="75px" alt="" />
                            </p>
                            <h2 className="text-white">E-GOVERNANCE</h2>
                        </div>
                        <div className="input-group mb-3">
                            <input id="msg-id" type="text" className="form-control" placeholder="Write your Complain" aria-label="Write your Complain" aria-describedby="button-addon2" />
                            <button className="btn btn-success" type="button" id="button-addon2" onClick={() => sendMsg()}>Send</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 ps-lg-5 ps-sm-3" >
                        <h4 className="text-white text-center mb-2">Contact Us</h4>
                        <div className="address text-white text-end">
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{home}</span> <span> Dhanmondi-32, Dhaka, Bangladesh</span></div>
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{phone}</span> <span> +8801855253284, +8801631907601</span></div>
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{email}</span> <span> egovernancebd@gmail.com</span></div>
                        </div>
                        <hr className="bg-light" />
                        <div className="useFullLinks text-center">
                            <a href="https://www.facebook.com/EGovernance-313910415298335" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fab fa-2x fa-facebook-square"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=+8801855253284&text=Hello," target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fab fa-2x fa-whatsapp-square"></i></a>
                            <a href="mailto:egovernancebd@gmail.com" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fas fa-2x fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </Container>
            <p className="text-center text-light">&copy; All rights reserved By E-GOVERNANCE</p>
        </div>

    );
};


export default Footer;