import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './CourseItem.module.css'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success("Course Added to Cart",
{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
});

const CourseItem = (props) => {
  
    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            chapters: props.chapters
        })
        notify();
    }
    const goToCartHandler = () => {
        history.push('/cart')
    }
    const existingCartItemIndex = cartCtx.items.findIndex(item => item.id === props.id);
    const existingCartItem = cartCtx.items[existingCartItemIndex];



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
            <ToastContainer />
            <li key={props.id} className={`col-lg-4 col-md-6 col-sm-6 ${classes['course-item']}`} >
                <figure >
                    <img src={props.thumbnail} alt={props.title} />
                </figure>
                <h1>{props.title}</h1>
                <div className={classes.footer}>
                    <Link to={`/courses/${props.id}`}>View Course Details</Link>
                    {!existingCartItem ? <Button onClick={addToCartHandler} className={classes.btn}>Add To Cart <i className="far fa-shopping-cart"></i></Button> :
                        <Button onClick={goToCartHandler} className={`${classes.btn} ${classes.btnGoToCart}`}>Go To Cart <i className="far fa-shopping-cart"></i></Button>
                    }

                </div>
            </li>
        </>



    )
}

export default CourseItem
