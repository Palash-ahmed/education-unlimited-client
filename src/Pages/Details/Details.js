import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
    const fullDetails = useLoaderData();
    const {title, details, image_url, category_id} = fullDetails;

    return (
        <div>
            <Card className='w-75 m-auto'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/courses/${category_id}`}><Button variant="primary">Back to Courses</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;