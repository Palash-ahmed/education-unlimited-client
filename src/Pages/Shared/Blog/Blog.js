import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <Accordion className='w-75 m-auto' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h5>What is cors?</h5> </Accordion.Header>
                <Accordion.Body>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    <p>An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.</p>
                    <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> <h5>Why are you using firebase? What other options do you have to implement authentication?</h5> </Accordion.Header>
                <Accordion.Body>
                    <p>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    </p>
                    <p>
                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    </p>
                    <h5>What other option do you have to implement authentication?</h5>
                    <p>
                        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.<br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. <br />
                        Authentication factors can be classified into three groups: something you know: a password or personal identification number (PIN); something you have: a token, such as bank card; something you are: biometrics, such as fingerprints and voice recognition.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h5>How does the private route work?</h5> </Accordion.Header>
                <Accordion.Body>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    <p>
                        Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
                    </p>
                    <p>
                        {/* import {Navigate} from "react-router-dom"; import {useAuth} from "../hooks/useAuth"; export const ProtectedRoute = ({children}) => { const {user} = useAuth(); if (!user) { // user is not authenticated return <Navigate to="/" />; } return children; }; To redirect the user, we use the <Navigate /> component. */}
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><h5>What is Node? How does Node work?</h5></Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;