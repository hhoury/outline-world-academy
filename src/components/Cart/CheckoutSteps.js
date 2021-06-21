import React from 'react'
import classes from './CheckoutSteps.module.css'
const CheckoutSteps = () => {
    return (
        <div className={classes.checkout__steps}>
        <div className={`${classes.checkout__step} ${classes['checkout__step--first checkout__step--completed']}`} >

            <div className={classes['checkout__step-label']}>Order Details</div>
            <div className={classes['checkout__step-number']}>1</div>
        </div>
        <div className={classes['checkout__step checkout__step--previous']}>
            <div className={classes['checkout__step-label']}>Personal Details</div>
            <div className={classes['checkout__step-number']}>2</div>
        </div>
        <div className={classes['checkout__step checkout__step--active']}>
            <div className={classes['checkout__step-label']}>Payment</div>
            <div className={classes['checkout__step-number']}>3</div>
        </div>
        <div className={classes['checkout__step checkout__step--last']}>
            <div className={classes['checkout__step-label']}>Confirmation</div>
            <div className={classes['checkout__step-number']}>4</div>
        </div>
    </div>
    )
}

export default CheckoutSteps
