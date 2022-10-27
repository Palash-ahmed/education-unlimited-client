import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() =>{
        fetch('https://education-unlimited-server.vercel.app/course-category')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div className='mt-4'>
                {
                    courses.map(course => <h5 key={course.id}>
                        <Link to={`/courses/${course.id}`}> <Button style={{background:"#1b5199"}} className='w-100 fs-4 mt-2' variant="outline-light">{course.name} </Button></Link>
                    </h5>)
                }
            </div>
            

        </div>
    );
};

export default LeftSideNav;