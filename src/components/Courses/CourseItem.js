import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './CourseItem.module.css'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'

const CourseItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.addItem({
            id:props.id,
            title: props.title,
            price: props.price
        })
    }
  
    return (
        <li key={props.id} className={`col-lg-4 col-md-6 col-sm-6 ${classes['course-item']}`} >
            <figure >
                <img src={props.thumbnail} alt={props.title} />
            </figure>
            <h1>{props.title}</h1>
            <div className={classes.footer}>
                <Link to={`/courses/${props.id}`}>View Course Details</Link>
             
                <Button onClick={addToCartHandler} className={classes.btn}>Add To Cart <i className="far fa-shopping-cart"></i></Button>
            </div>
        </li>


    )
}

export default CourseItem
