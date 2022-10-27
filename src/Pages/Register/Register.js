import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState(null);
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(name, confirm, email, password);

        if (password.length < 6) {
            setError('Your password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        registerUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }


    const { googleProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const { githubProviderLogin } = useContext(AuthContext);

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='m-auto w-50 mt-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Your Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Your Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirm" type="password" placeholder="Confirm Your Password" required />
                </Form.Group>

                <Form.Text className="text-danger">
                    <p className='text-error'> {error}</p>
                </Form.Text>

                <p>Already Have an Account <Link to='/login'>Login</Link></p>


                <div className='text-center mb-4'>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>

            </Form>
            <div className='text-center'>
                <ButtonGroup className='w-75' vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2 ' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Register;