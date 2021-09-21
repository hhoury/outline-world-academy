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
import axios from 'axios'
import { useParams } from 'react-router'


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

    const courseApi = `https://localhost:44362/api/courses/${id}`
    const chaptersApi = `https://localhost:44362/api/chapters/${id}`
    const webinarsApi = `https://localhost:44362/api/webinars/${id}`
    const certificatesApi = `https://localhost:44362/api/certificates/${id}`
const [course, setCourse] = useState({})
const [chapters, setChapters] = useState([])
const [webinars, setWebinars] = useState([])
const [certificates, setCertificates] = useState([])
   
useEffect(() => {
       axios.all([courseApi,chaptersApi,webinarsApi,certificatesApi])
       .then((...responses) => {
         const COURSE = responses[0].data;
         const CHAPTERS = responses[1].data;
         const WEBINARS = responses[2].data;
         const CERTIFICATES = responses[3].data;
         console.log(COURSE);
         setCourse(COURSE);
         setChapters(CHAPTERS);
         setWebinars(WEBINARS);
         setCertificates(CERTIFICATES);
      })
      .catch(errors => {
          
      });
   }, [id,courseApi,chaptersApi,webinarsApi,certificatesApi])

    const existingCartItemIndex = cartItems.findIndex(item => item.id === course.id);
    const existingCartItem = existingCartItemIndex? cartItems[existingCartItemIndex]: 0;
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
                                    <span><img src={chaptersImg} alt='chapters' /></span>
                                    <p className='count'>{chapters.length}</p>
                                    <p>Chapters</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={lessonsImg} alt='lessons' /></span>
                                    <p className='count'>{course.lessonsCount}</p>
                                    <p>Lessons</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={webinarsImg} alt='webinars' /></span>
                                    <p className='count'>{course.webinarsCount}</p>
                                    <p>Webinars</p>
                                </li>
                            </Col>
                            <Col lg={3}>
                                <li>
                                    <span><img src={certificateImg} alt='certificate' /></span>
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
