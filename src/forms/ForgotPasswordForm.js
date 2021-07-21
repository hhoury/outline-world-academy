import React from 'react'
import classes from './ForgotPasswordForm.module.css'
import Form from './Form'
import Button from '../components/UI/Button'
import Recaptcha from '../components/UI/Recaptcha'
import { Link } from 'react-router-dom'
import useInput from '../hooks/use-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"
import { resetPassword } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import Loader from '../components/UI/Loader'



const isEmail = email => {
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return (true)
    }
    else {
        return false
    }
}
const ForgotPasswordForm = (props) => {

    const dispatch = useDispatch();
    const passwordReset = useSelector((state) => state.resetPassword)
    const { loading, error, message } = passwordReset

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);
    const notify = () => toast.warning("Please follow the Link sent to: " + enteredEmail,
    {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    let formIsValid = false;
    if (enteredEmailIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
       
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        else{
                dispatch(resetPassword(enteredEmail))
                notify();
        }
        
        resetEmailInput();
    }

    return (
        <Form className={`${props.className} ${classes.forgotPassword}`}>
             <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
            />
            <h1>Request reset link</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            <form onSubmit={formSubmitHandler}>
                <input required type='email' placeholder='Email Address'
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} />
                <Button type='submit' className={classes.btn}>{loading && <SyncLoader size='10px'
                />}Submit</Button>
                <div className={classes.back}><Link to='/sign-in'>Back to sign in</Link></div>
            </form>
            <Recaptcha className={classes.recap} />
            <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
        </Form>
    )
}

export default ForgotPasswordForm
