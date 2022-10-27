import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CoursesCard = ({ course }) => {
    const {_id, title, details, image_url} = course;
    return (
        <div>
            <Card className='bg-light h-100 shadow-lg border border-0"'>
                <Card.Body className='product'>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className='text-primary'>{title}</Card.Title>
                    <Card.Text>
                        {
                        details.length >100 ?
                        <>{details.slice(0, 100) + '...'}</>
                        :
                        details
                        }
                    </Card.Text>
                    <div className='text-center align-content-center justify-content-center'>
                    <Link to ={`/details/${_id}`}><Button className='w-100' variant="primary">Read More</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesCard;