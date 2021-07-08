import React from 'react'
import image1 from '../../assets/mycourses.jpg'
import classes from './CartItem.module.css'
const CartItem = (props) => {
    return (
        <tr className={classes.cartItem} >
            <td data-label='title'>
            <button onClick={props.onRemove}><i className="fal fa-times"></i></button>
                <figure>
                    <img src={image1} alt={props.title} />
                </figure>
                <p>{props.title}</p>
            </td>
            <td data-label='price'><span>{props.price}</span></td>
            <td data-label='chapters'><span>{props.chapters}</span></td>
            <td data-label='subtotal'><span>{props.subtotal}</span></td>
        </tr>
    )
}

export default CartItem
