import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {logIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user.emailVerified){
                navigate(from, {replace: true})
            }
            else{
                toast.error('Your email is not verified. Please verify your email address.')
            }
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    return (
        <Form className='m-auto w-50' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter Your Email Address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter Your Password" required />
            </Form.Group>
            <p>New to Education Unlimited <Link to='/register'>Create A New Account</Link></p>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>

    );
};

export default Login;