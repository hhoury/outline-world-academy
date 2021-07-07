import React, { useState } from 'react'
import Button from './Button'
import classes from './PasswordModal.module.css'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import useInput from '../../hooks/use-input'

const isNotEmpty = (value) => {
    return value.trim() !== ''
}

const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={classes.backdrop}></div>
    )
}
const ModalOverlay = (props) => {
    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        isValid: enteredPasswordIsValid,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty);

    const passwordClasses = passwordInputHasError ? 'invalid' : '';

    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    const forgotPasswordHandler = () => {

    }
    let formIsValid = false;
    if (enteredPasswordIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log('form submitted successfully');
        resetPasswordInput();
    }
    return (
        <form onSubmit={formSubmitHandler} className={classes.PasswordModal}>
            <h1>insert current password</h1>
            <p>current password is required to submit changes</p>
            <div style={{ position: 'relative' }}>
                <input name='passwordTextbox' required className={passwordClasses}
                    value={enteredPassword}
                    onChange={passwordChangedHandler}
                    onBlur={passwordBlurHandler}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    type={!passwordShown ? 'password' : 'text'} placeholder='Password' />
                <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                    <i className="fal fa-eye"></i>
                </button>
            </div>
            <Button type='submit' className={classes.btn}>SUBMIT</Button>
            <Link onClick={forgotPasswordHandler} to='/password-reset'>Forgot password?</Link>
        </form>
    )
}
const PasswordModal = (props) => {
    const portalElement = document.getElementById('overlays')
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
        </>
    )
}

export default PasswordModal
