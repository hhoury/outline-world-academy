import React from 'react'
import classes from './Summary.module.css'
import { useSelector } from 'react-redux'
const Summary = (props) => {
    const cart = useSelector((state) => state.cart)
    
    const totalAmount = +cart.totalAmount
    const tax = +(totalAmount * 0.01)
    
    const total = +(totalAmount + tax)

    return (
        <div className={classes.Summary}>
            <h1>Summary</h1>
            <p>the total of your cart plus the extra or discounted amount</p>
            <ul>
                <li><span>Subtotal</span><span>${totalAmount}</span></li>
                <li><span>Tax</span><span>${tax.toFixed(2)}</span></li>
                <hr />
                <li><span>Total</span><span>${total.toFixed(2)}</span></li>
            </ul>
        </div>
    )
}

export default Summary
