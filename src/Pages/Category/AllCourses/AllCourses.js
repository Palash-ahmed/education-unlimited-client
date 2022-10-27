import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../CoursesCard/CoursesCard';
import { Col, Container, Row } from 'react-bootstrap';
import './AllCourses.css'
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block h-100 shadow rounded'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        <div className='card-container'>
                            {
                                allCourses.map(course => <CoursesCard
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

export default AllCourses;