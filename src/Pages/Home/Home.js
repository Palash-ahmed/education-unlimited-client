import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../assets/Carousel1.jpeg'
import Carousel2 from '../../assets/Carousel2.jpeg'
import Carousel3 from '../../assets/Carousel3.jpeg'
import Carousel4 from '../../assets/Carousel4.jpeg'

const Home = () => {
    return (
        <div style={{background: "#1b5199"}}>
            <Carousel className='container' fade>
            <Carousel.Item>
                <img
                    className="d-block m-auto my-4 w-100 rounded"
                    src={Carousel1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block m-auto my-4 w-100 rounded"
                    src={Carousel2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block m-auto my-4 w-100 rounded"
                    src={Carousel3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block m-auto my-4 w-100 rounded"
                    src={Carousel4}
                    alt="Forth slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Home;