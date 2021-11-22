import React, {useState, useEffect} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Button from '../components/UI/Button'
import certificateImg from '../assets/certificate.svg'
import webinarsImg from '../assets/webinars.svg'
import chaptersImg from '../assets/chapters.svg'
import lessonsImg from '../assets/lessons.svg'
import { Row, Col } from 'react-bootstrap'
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
import { useParams } from 'react-router'
import {listCourseDetails, listCourses} from '../actions/courseActions'
import { listCourseChapters } from '../actions/chapterActions'
import {isRegisteredCourse} from '../actions/registeredCourseActions'

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



    const{id} = useParams();
    // const StudentId = JSON.parse(localStorage.getItem('userInfo'))?.id
    // const registered = useSelector((state) => state.isRegisteredCourse)
    // const isEnrolled = registered.data;
    const history = useHistory();
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const dispatch = useDispatch()
    const courseList = useSelector((state) => state.courseList)
    let { loading, error } = courseList
   


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
    const goToMyCoursesHandler = () => {
        history.push('/my-courses')
    }
    // const courseDetails = useSelector((state) => state.courseDetails)

    // const courseChapters = useSelector((state) => state.courseChapters)
 
    useEffect(() => {
        dispatch(listCourses())
      
        // dispatch(listCourseDetails(id))
        // dispatch(listCourseChapters(id))
        // dispatch(isRegisteredCourse(StudentId, id))
    }, [dispatch,id])
    
    // const { loading, error, course } = courseDetails
    // const {chapters} = courseChapters

    let courses = courseList.courses.courses
        const course = courses?.find(element => element.id === Number(id))
        console.log(courses);
        const chapters = course?.chapters
        let lessonsCount = 0;
        for (let index = 0; index < chapters?.length; index++) {
            lessonsCount+= chapters[index].lessons_count;
        }
    
    const existingCartItemIndex = cartItems.findIndex(item => item.id === course?.id);
    const existingCartItem = existingCartItemIndex !== null? cartItems[existingCartItemIndex]: 0;
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
                <h1>{course?.title}
                </h1>
                <div className='course-properties'>
                    <h2>{course?.title}</h2>
                    <ul>
                        <Row>
                            <Col lg={3}>
                                <li>
                                    <span><img src={chaptersImg} alt='chapters' /></span>
                                    <p className='count'>{chapters?.length}</p>
                                    <p>Chapters</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={lessonsImg} alt='lessons' /></span>
                                    <p className='count'>{lessonsCount}</p>
                                    <p>Lessons</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={webinarsImg} alt='webinars' /></span>
                                    <p className='count'>{course?.webinars?.length}</p>
                                    <p>Webinars</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={certificateImg} alt='certificate' /></span>
                                    <p className='count'>{course?.certificates?.length}</p>
                                    <p>Certificate</p>
                                </li>
                            </Col>
                        </Row>
                    </ul>
                    <div className='course-purchase'>
                        <div className='course-price'>
                            <span>
                                ${course?.price}
                            </span>
                            + VAT 15%
                        </div>
                        {
                            // isEnrolled?
                            // <Button onClick={goToMyCoursesHandler}>Go To Your Courses</Button> 
                            // :
                        existingCartItem ?
                            <Button onClick={goToCartHandler}>Go To Cart</Button>
                            :
                            <Button onClick={addToCartHandler}>Add to cart</Button>
                        }
                    </div>
                </div>
                <LearningMethods />
                {
                   chapters?.length > 0 &&  <CourseContent chapters={chapters} />
                }
               
                <FAQS />
                <CourseOutcomes />
                <Footer />
            </div>
        </>

    )
}

export default CourseDetailsPage
