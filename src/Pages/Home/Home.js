import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Carousel1 from '../../assets/Carousel1.jpeg'
import Carousel2 from '../../assets/Carousel2.jpeg'
import Carousel3 from '../../assets/Carousel3.jpeg'
import Carousel4 from '../../assets/Carousel4.jpeg'
import Lottie from 'lottie-react';
import learning from '../../assets/80356-online-learning.json'

const Home = () => {
    return (
        <div>
            <div style={{ background: "#1b5199" }}>
                <Carousel className='container' fade>
                    <Carousel.Item>
                        <img
                            className="d-block m-auto my-4 w-100 rounded"
                            src={Carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block m-auto my-4 w-100 rounded"
                            src={Carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block m-auto my-4 w-100 rounded"
                            src={Carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block m-auto my-4 w-100 rounded"
                            src={Carousel4}
                            alt="Forth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
            <Container>
                <Row>
                    <Col lg="6">
                        <h1 className='fs-1 fw-bolder my-4 py-4'>Improve Your Preparation For <span className='text-primary'>Computer Science <br /> Engineering, </span>HTML, CSS, JavaScript,React, <br /> React Router, <br /> ReactJS, Node etc. </h1>
                        <Link to="/allcourses"><Button className='btn btn-primary my-4'><span className='fs-2 fw-bold'>Get Started</span></Button></Link>
                    </Col>
                    <Col lg="6">
                    <Lottie animationData={learning} loop={true} />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Home;