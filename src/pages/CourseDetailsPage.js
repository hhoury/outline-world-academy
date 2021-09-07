import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import thumbnail from '../assets/chapter-thumbnail.jpg'
import Button from '../components/UI/Button'
import certificate from '../assets/certificate.svg'
import webinars from '../assets/webinars.svg'
import chapters from '../assets/chapters.svg'
import lessons from '../assets/lessons.svg'
import { Row, Col } from 'react-bootstrap'
// import CourseChapters from '../components/Courses/CourseChapters'
import courseImage from '../assets/course-details.jpg'
import LearningMethods from '../components/Courses/LearningMethods'
import FAQS from '../components/Courses/FAQS'
import CourseContent from '../components/Courses/CourseContent'
import CourseOutcomes from '../components/Courses/CourseOutcomes'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
const notify = () => toast.success("Course Added to Cart",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
    });
const CourseDetailsPage = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const addToCartHandler = () => {
        dispatch(addToCart(
            {
                id: course.id,
                title: course.title,
                price: course.price,
                chapters: course.chapters
            }
        ))
        notify();
    }

    const goToCartHandler = () => {
        history.push('/cart')
    }

    const course = {
        id: 1,
        title: 'Corona renderer for instructors',
        chapters: [{ number: '01', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }, { number: '02', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }, { number: '03', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }],
        chaptersCount: 10,
        lessonsCount: 32,
        webinarsCount: 2,
        certificateCount: 1,
        price: 20
    }
    const existingCartItemIndex = cartItems.findIndex(item => item.id === course.id);
    const existingCartItem = cartItems[existingCartItemIndex];

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
            />
            <div className='course-details' style={{
                backgroundImage: `url(${courseImage})`,
                backgroundSize: '100% 620px',
                minHeight: '620px',
                backgroundRepeat: 'no-repeat',
            }}>
                <Header fullMenu={true} />
                <h1>{course.title}
                </h1>
                <div className='course-properties'>
                    <h2>{course.title}</h2>
                    <ul>
                        <Row>
                            <Col lg={3}>
                                <li>
                                    <span><img src={chapters} alt='chapters' /></span>
                                    <p className='count'>{course.chaptersCount}</p>
                                    <p>Chapters</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={lessons} alt='lessons' /></span>
                                    <p className='count'>{course.lessonsCount}</p>
                                    <p>Lessons</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={webinars} alt='webinars' /></span>
                                    <p className='count'>{course.webinarsCount}</p>
                                    <p>Webinars</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={certificate} alt='certificate' /></span>
                                    <p className='count'>{course.certificateCount}</p>
                                    <p>Certificate</p>
                                </li>
                            </Col>
                        </Row>
                    </ul>
                    <div className='course-purchase'>
                        <div className='course-price'>
                            <span>
                                ${course.price}
                            </span>
                            + VAT 15%
                        </div>
                        {existingCartItem ?
                            <Button onClick={goToCartHandler}>Go To Cart</Button>
                            :
                            <Button onClick={addToCartHandler}>Add to cart</Button>
                        }
                    </div>
                </div>

                <LearningMethods />
                <CourseContent />
                <FAQS />
                <CourseOutcomes />
                <Footer />
            </div>
        </>

    )
}

export default CourseDetailsPage
