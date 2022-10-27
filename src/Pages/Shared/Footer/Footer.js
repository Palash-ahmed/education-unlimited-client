import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{background: "#1b5199"}}>
            <Container className='text-light pt-4 mt-4'>
                <Row>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>About Education Unlimited</h2>
                        <p className='text-white text-decoration-none fw-semibold'>Education Unlimited is the country's best skill development solution for students, professionals and freelancers of all ages. Its career track programs and live courses created with experienced industry experts will prepare anyone to build a successful career at home and abroad.</p>

                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Navigation</h2>
                        <ul>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Computer E-Learning</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>All Courses</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>Blog</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>Verified Certificate</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>Documentation</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>FAQ</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold'  to='/'>Customer Support</Link></li>
                        </ul>
                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Work with Us</h2>
                        <ul>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>About Education Unlimited</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Our Team</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Afiliat Program</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Suggest New Course</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Write for Blog</Link></li>
                        </ul>
                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Career Track</h2>
                        <ul>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Full Stack Web Development</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Python & JavaScript</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>MERN</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Front-end web Development</Link></li>
                            <li><Link className='text-white text-decoration-none fw-semibold' to='/'>Complete Digital Marketing</Link></li>
                        </ul>
                    </Col>   
                </Row>
                <div className='text-center'>
                    <FaFacebook className='fs-3 mx-2'/>
                    <FaTwitter className='fs-3 mx-2'/>
                    <FaInstagram className='fs-3 mx-2'/>
                    <FaYoutube className='fs-3 mx-2'/>
                </div>
                <p className='text-center mb-0 py-3 '>Copyright © 2022 Md. Palash Akand</p>
            </Container>

        </div>
    );
};

export default Footer;