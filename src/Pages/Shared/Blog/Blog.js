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
                    <p>The private route component is used to protect selected pages in a React app from unauthenticated users.</p>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    <p>
                        Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
                    </p>
                    <p>
                        Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><h5>What is Node? How does Node work?</h5></Accordion.Header>
                <Accordion.Body>
                    <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
                    </p>
                    <p>
                        There are many reasons for which we prefer using NodeJs for the server side of our application, some of them are discussed in the following:</p>

                    NodeJs is built on Google Chrome’s V8 engine, and for this reason its execution time is very fast and it runs very quickly.
                    <p>
                        There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.
                    </p>
                    <p>
                        As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.
                    </p>
                    <p>
                        The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base.
                    </p>
                    <p>
                        As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.
                    </p>


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;