import React, { useState } from 'react'
import Form from './Form'
import classes from './SignupForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import { Link } from 'react-router-dom'
import useInput from '../hooks/use-input'

const isNotEmpty = (value) => {
    return value.trim() !== ''
}

const isEmail = email => {
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return (true)
    }
    else {
        return false
    }
}


const SignupForm = (props) => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        isValid: enteredPasswordIsValid,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty);

    const nameClasses = nameInputHasError ? 'invalid' : '';
    const emailClasses = emailInputHasError ? 'invalid' : '';
    const passwordClasses = passwordInputHasError ? 'invalid' : '';

    let formIsValid = false;
    if (enteredEmailIsValid && enteredPasswordIsValid && enteredNameIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log('form submitted successfully');
        resetEmailInput();
        resetPasswordInput();
        resetNameInput();

    }
    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    return (
        <Form className={`${classes.signUp} ${props.className}`}>
            <h1>SIGN UP</h1>
            <form onSubmit={formSubmitHandler}>
                <input required type='email' placeholder='Email Address' className={emailClasses}
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} />

                <input required type='text' placeholder='Full Name' className={nameClasses}
                    value={enteredName}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler} />

                <div style={{ position: 'relative' }}>
                    <input required name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='Create Password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        className={passwordClasses}
                        value={enteredPassword}
                        onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler} />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
                <div style={{ position: 'relative' }}>
                    <input required name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='Confirm Password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        className={passwordClasses}
                        value={enteredPassword}
                        onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler} />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
                <input type='text' placeholder='Job (optional)' />

                    <input type="file" />
                <Button type='submit' className={classes.btn}>Sign Up</Button>
                <CheckBox className={classes.checkbox} />
            </form>
            <SocialMedia className={classes.social} />
            <div className={classes.text}>
                <p>By creating an account you are aggreeing to the
                    <Link to='/policy'>Terms of Service</Link>
                    and
                    <Link to='/policy'>Privacy Policy</Link>
                </p>
            </div>
        </Form>
    )
}

export default SignupForm
