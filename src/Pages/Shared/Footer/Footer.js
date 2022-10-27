import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark mb-0'>
            <Container className='text-light pt-4 mt-4'>
                <Row>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>About Education Unlimited</h2>
                        <p>Education Unlimited is the country's best skill development solution for students, professionals and freelancers of all ages. Its career track programs and live courses created with experienced industry experts will prepare anyone to build a successful career at home and abroad.</p>

                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Navigation</h2>
                        <ul>
                            <li><Link to='/'>Computer E-Learning</Link></li>
                            <li><Link to='/'>All Courses</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                            <li><Link to='/'>Verified Certificate</Link></li>
                            <li><Link to='/'>Documentation</Link></li>
                            <li><Link to='/'>FAQ</Link></li>
                            <li><Link to='/'>Customer Support</Link></li>
                        </ul>
                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Work with Us</h2>
                        <ul>
                            <li><Link to='/'>About Education Unlimited</Link></li>
                            <li><Link to='/'>Our Team</Link></li>
                            <li><Link to='/'>Afiliat Program</Link></li>
                            <li><Link to='/'>Suggest New Course</Link></li>
                            <li><Link to='/'>Write for Blog</Link></li>
                        </ul>
                    </Col>
                    <Col lg="3">
                        <h2 className='text-center mb-4'>Career Track</h2>
                        <ul>
                            <li><Link to='/'>Full Stack Web Development</Link></li>
                            <li><Link to='/'>Python & JavaScript</Link></li>
                            <li><Link to='/'>MERN</Link></li>
                            <li><Link to='/'>Front-end web Development</Link></li>
                            <li><Link to='/'>Complete Digital Marketing</Link></li>
                        </ul>
                    </Col>   
                </Row>
                <p className='text-center '>Copyright © 2022</p>
            </Container>

        </div>
    );
};

export default Footer;