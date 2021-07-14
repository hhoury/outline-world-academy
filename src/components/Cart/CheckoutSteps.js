import React from 'react'
import classes from './CheckoutSteps.module.css'
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {

    const activeStep = `${classes.activeStep}`


    return (
        <div className={classes.checkout__steps}>
            <div className={`${classes.checkout__step} 
        ${classes.checkout__stepFirst} 
        ${classes.checkout__stepCompleted}`} >
                <div className={`${classes.checkout__stepLabel}  ${step1 ? classes.checkout__labelDone : ''}`}>
                    Order Details
                </div>
                <div className={`${classes.checkout__stepNumber}  ${step1 ? classes.checkout__stepDone : ''}`} >
                    1
                </div>
            </div>
            <div className={`${classes.checkout__step}
         ${classes.checkout__stepPrevious}`}>
                <div className={`${classes.checkout__stepLabel} ${step2 ? classes.checkout__labelDone : ''}`}>
                    Personal Details
                </div>
                <div className={`${classes.checkout__stepNumber}  
            ${step2 ? classes.checkout__stepDone : ''}`}>
                    2
                </div>
            </div>
            <div className={`${classes.checkout__step} ${classes.checkout__stepActive}`}>
                <div className={`${classes.checkout__stepLabel} ${step3 ? classes.checkout__labelDone : ''}`}>
                    Payment
                </div>
                <div className={`${classes.checkout__stepNumber}  ${step3 ? classes.checkout__stepDone : ''}`}>
                    3
                </div>
            </div>
            <div className={`${classes.checkout__step} ${classes.checkout__stepLast}`} >
                <div className={`${classes.checkout__stepLabel} ${step4 ? classes.checkout__labelDone : ''}`}>
                    Confirmation
                </div>
                <div className={`${classes.checkout__stepNumber}  ${step4 ? classes.checkout__stepDone : ''}`}>
                    4
                </div>
            </div>
        </div>
    )
}

export default CheckoutSteps
