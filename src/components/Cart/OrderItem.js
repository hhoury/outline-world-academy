import React from 'react'
import image1 from '../../assets/mycourses.jpg'
import classes from './OrderItem.module.css'
const OrderItem = (props) => {
    return (
        <li className={classes.OrderItem} >
            <figure>
                <img src={image1} alt={props.title} />
            </figure>
            <p>{props.course.title}</p>
            <p>${props.course.price}</p>
        </li>
    )
}

export default OrderItem
