import React from 'react'
import classes from './Summary.module.css'
const Summary = (props) => {
    const total = props.subtotal + props.tax;
    return (
        <div className={classes.Summary}>
            <h1>Summary</h1>
            <p>the total of your cart plus the extra or discounted amount</p>
            <ul>
                <li><span>Subtotal</span><span>${props.subtotal}</span></li>
                <li><span>Tax</span><span>${props.tax}</span></li>
                <hr />
                <li><span>Total</span><span>${total}</span></li>
            </ul>
        </div>
    )
}

export default Summary
