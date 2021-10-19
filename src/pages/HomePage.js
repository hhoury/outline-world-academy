import React, {useEffect} from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import {listFeaturedCourses} from '../actions/courseActions'

const HomePage = () => {
    const dispatch = useDispatch()
    const featuredCourseList = useSelector((state) => state.courseList)
    useEffect(() => {
        dispatch(listFeaturedCourses())
    }, [dispatch])
    const { loading, error, courses } = featuredCourseList
    console.log(courses);
    return (
        <div>
            <Header fullMenu={true} className='home-header' />

            <Carousel controls={false} keyboard={false} >
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoadImage
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <CoursesCarousel courses={courses} />

            <TrainingCenter />

            <OurWork />

            <Testemonials />

            <OurClients />

            <Footer />
            
        </div>
    )
}

export default HomePage
