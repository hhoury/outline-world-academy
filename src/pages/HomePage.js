import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Carousel } from 'react-bootstrap'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

const HomePage = () => {
    return (
        <div>
            <Header fullMenu={true} className='home-header' />
            <Carousel controls={false} keyboard={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />

                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                    src={carousel3}
                        alt="Third slide"
                    />

                   
                </Carousel.Item>
            </Carousel>
            <Footer />
        </div>
    )
}

export default HomePage
