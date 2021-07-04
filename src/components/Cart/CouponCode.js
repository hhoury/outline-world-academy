import React from 'react'
import classes from './CouponCode.module.css'



const CouponCode = () => {
    return (
        <form className={classes.Coupon}>
            <h1>COUPON CODE</h1>
            <input type='text' />
            <button>Apply</button>
        </form>
    )
}

export default CouponCode
