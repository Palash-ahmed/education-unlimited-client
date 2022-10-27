import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Details = () => {
    const fullDetails = useLoaderData();
    const { title, details, image_url, category_id, balance } = fullDetails;

    const ref = React.createRef();

    return (
        <div>
            <Card className='w-75 m-auto'>
                <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className='fw-bolder ms-4'>{title}</h2>
                    </div>

                    {/* Create Pdf Button */}
                    {/* ========================== */}
                    
                    <div className='me-4'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button onClick={toPdf}><FaDownload></FaDownload></Button>}
                        </Pdf>

                    </div>
                </Card.Header>
                <div ref={ref}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <h3 className='fw-semi'>Course Fee: {balance} Tk</h3>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/courses/${category_id}`}><Button variant="primary">Back to Courses</Button></Link>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Details;