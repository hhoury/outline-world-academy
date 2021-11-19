import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './CourseItem.module.css'
import Button from '../UI/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LinkContainer } from 'react-router-bootstrap'
import { isRegisteredCourse } from '../../actions/registeredCourseActions'

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

const CourseItem = (props) => {
  
    const goToMyCoursesHandler = () => {
        history.push('/my-courses')
    }

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const history = useHistory();
    const addToCartHandler = () => {
        dispatch(addToCart(
            {
                id: props.id,
                title: props.title,
                price: props.price,
                chapters: props.chapters,
                lessons: props.chapters.lessons
            }
        ))
        notify();
    }
    const goToCartHandler = () => {
        history.push('/cart')
    }

    const existingCartItemIndex = cartItems.findIndex(item => item.id === props.id);
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
            <li key={props.id} className={`col-lg-4 col-md-6 col-sm-6 ${classes['course-item']}`} >
                {/* <p className={classes['card-price']}>{props.price}$</p> */}
                <LinkContainer to={`/courses/${props.id}`}>
                    <figure >
                        <LazyLoadImage src={props.thumbnail} alt={props.title} />
                    </figure>
                  
                </LinkContainer>
                <Button onClick={addToCartHandler.bind(props.id)} className={classes.btn}><i className="fal fa-shopping-bag"></i></Button>
                <h1>{props.title}</h1>
                <div className={classes.footer}>
                    <Link to={`/courses/${props.id}`}>View Course Details</Link>

                    {/* {
                        props.isEnrolled?
                            <Button onClick={goToMyCoursesHandler} className={classes.btn}>Go To Your Courses</Button>
                            :

                            !existingCartItem ?
                                <Button onClick={addToCartHandler.bind(props.id)} className={classes.btn}>Add To Cart <i className="far fa-shopping-cart"></i></Button>
                                :
                                <Button onClick={goToCartHandler} className={`${classes.btn} ${classes.btnGoToCart}`}>Go To Cart <i className="far fa-shopping-cart"></i></Button>
                    } */}
                </div>
            </li>
        </>
    )
}

export default CourseItem
