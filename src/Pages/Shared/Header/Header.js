import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import education from '../../../assets/education.png';
import { Form } from 'react-bootstrap';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // Log out
    // ===============

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        // Navigation bar
        // ===============

        <Navbar style={{background: "#1b5199"}} collapseOnSelect className='navbar mb-4 p-4' expand="lg">
            <Container>
                <Navbar.Brand><Link className='text-white text-decoration-none fs-2 fw-bolder' to='/'> <img style={{ height: '40px' }} src={education} alt="edu" /> Education Unlimited</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Link className='text-white text-decoration-none mx-3' to="/">Home</Link>
                        <Link className='text-white text-decoration-none ' to="/allcourses">All Courses</Link>
                        <Link className='text-white text-decoration-none mx-3' to="/">FAQ</Link>
                        <Link className='text-white text-decoration-none ' to="/blog">Blog</Link>
                    </Nav>

                 {/* User Profile and Name show on header    */}
                 {/* ================================================ */}
                 
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button className='me-3 my-3' variant="light" onClick={handleLogOut}>Log out</Button>
                                        <span className=' my-3 text-white fw-bold'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3 my-3' to='/login'><Button variant="light">Login</Button></Link>
                                        <Link className='my-3' to='/register'><Button variant="light">Register</Button></Link>
                                    </>
                            }
                        </>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '40px' }} roundedCircle
                                    src={user?.photoURL}></Image>
                                : <FaUser className='text-white mx-2 my-3' variant="light"></FaUser>
                            }
                        </Nav.Link>
                        <Form>
                            <Form.Check className='text-white mx-2 my-3'
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                    </Nav>
                    {/* Left Side Navigation bar created */}
                    {/* ========================================= */}
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;