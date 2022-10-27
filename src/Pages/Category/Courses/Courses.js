import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../CoursesCard/CoursesCard';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { Col, Container, Row } from 'react-bootstrap';
import './Courses.css'

const Courses = () => {
    const courseDetails = useLoaderData();


    // Mapping
    // ========
    
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block h-75 shadow rounded'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        <div className='course-container'>
                            {
                                courseDetails.map(course => <CoursesCard
                                    key={course._id}
                                    course={course}
                                ></CoursesCard>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;