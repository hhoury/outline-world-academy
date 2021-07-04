import React from 'react'
import classes from './ForgotPasswordForm.module.css'
import Form from './Form'
import Button from '../components/UI/Button'
import Recaptcha from '../components/UI/Recaptcha'
import { Link } from 'react-router-dom'
import useInput from '../hooks/use-input'

const isEmail = email => {
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return (true)
    }
    else {
        return false
    }
}
const ForgotPasswordForm = (props) => {


    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);



    const emailClasses = emailInputHasError ? 'invalid' : '';

    let formIsValid = false;
    if (enteredEmailIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log('form submitted successfully');
        resetEmailInput();
    }

    return (
        <Form className={`${props.className} ${classes.forgotPassword}`}>
            <h1>Request reset link</h1>
            <form onSubmit={formSubmitHandler}>
                <input type='textbox' placeholder='Email Address' required className={emailClasses}
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} />
                <Button type='submit' className={classes.btn}>Submit</Button>
                <div className={classes.back}><Link to='/sign-in'>Back to sign in</Link></div>

            </form>
            <Recaptcha className={classes.recap} />
            <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
        </Form>
    )
}

export default ForgotPasswordForm
