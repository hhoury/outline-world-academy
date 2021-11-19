import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Carousel } from 'react-bootstrap'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CoursesCarousel from '../components/UI/CoursesCarousel'
import OurWork from '../components/UI/OurWork'
import TrainingCenter from '../components/UI/TrainingCenter'
import Testemonials from '../components/UI/Testemonials'
import OurClients from '../components/UI/OurClients'


const HomePage = () => {
    return (
        <div className='homePage'>
            <Header fullMenu={true} className='home-header' />
            <h1 className='home-h1'> Welcome to Outline World Academy. We have created this academy to spread our knowledge and experience among all people in the 3D World and we hope that our Academy is the first step in the professional visualization world.
            </h1>
            <Carousel className='home-carousel' controls={false} keyboard={false} >
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100 main-carousel"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100 main-carousel"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100 main-carousel"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <CoursesCarousel />

            <TrainingCenter />

            <OurWork />

            <Testemonials />

            <OurClients />

            <Footer />
            
        </div>
    )
}

export default HomePage
