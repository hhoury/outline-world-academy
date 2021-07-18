import React from 'react'
import classes from './CheckoutSteps.module.css'
import { LinkContainer } from 'react-router-bootstrap'
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {

    return (
        <div className={classes.checkout__steps}>
            {step1 ? <LinkContainer style={{ cursor: 'pointer' }} to='/order-details' >
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
            </LinkContainer>
                :
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
            }
            {step2 ?
                <LinkContainer style={{ cursor: 'pointer' }} to='/personal-details'>

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

                </LinkContainer>

                :

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

            }

            {step3 ?
                <LinkContainer style={{ cursor: 'pointer' }} to='/payment' >
                    <div className={`${classes.checkout__step} ${classes.checkout__stepActive}`}>
                        <div className={`${classes.checkout__stepLabel} ${step3 ? classes.checkout__labelDone : ''}`}>
                            Payment
                        </div>
                        <div className={`${classes.checkout__stepNumber}  ${step3 ? classes.checkout__stepDone : ''}`}>
                            3
                        </div>
                    </div>
                </LinkContainer>

                :
                <div className={`${classes.checkout__step} ${classes.checkout__stepActive}`}>
                    <div className={`${classes.checkout__stepLabel} ${step3 ? classes.checkout__labelDone : ''}`}>
                        Payment
                    </div>
                    <div className={`${classes.checkout__stepNumber}  ${step3 ? classes.checkout__stepDone : ''}`}>
                        3
                    </div>
                </div>
            }
            {
                step4 ? <LinkContainer style={{ cursor: 'pointer' }} to='/order-review'>
                    <div className={`${classes.checkout__step} ${classes.checkout__stepLast}`} >
                        <div className={`${classes.checkout__stepLabel} ${step4 ? classes.checkout__labelDone : ''}`}>
                            Confirmation
                        </div>
                        <div className={`${classes.checkout__stepNumber}  ${step4 ? classes.checkout__stepDone : ''}`}>
                            4
                        </div>
                    </div>

                </LinkContainer> :
                    <div className={`${classes.checkout__step} ${classes.checkout__stepLast}`} >
                        <div className={`${classes.checkout__stepLabel} ${step4 ? classes.checkout__labelDone : ''}`}>
                            Confirmation
                        </div>
                        <div className={`${classes.checkout__stepNumber}  ${step4 ? classes.checkout__stepDone : ''}`}>
                            4
                        </div>
                    </div>

            }

        </div>
    )
}

export default CheckoutSteps
