import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../CoursesCard/CoursesCard';
import { Col, Container, Row } from 'react-bootstrap';
import './AllCourses.css'
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        
    );
};

export default AllCourses;