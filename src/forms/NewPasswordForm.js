import React, {useState} from 'react'
import Button from '../components/UI/Button'
import Form from './Form'
import classes from './NewPasswordForm.module.css'
import useInput from '../hooks/use-input'
import Message from '../components/UI/Message'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"
import {useDispatch, useSelector} from 'react-redux'
import {changePassword} from '../actions/userActions'
const isNotEmpty = (value) => {
    return value.trim() !== ''
}

const NewPasswordForm = (props) => {
    // const notify = (message) => toast.warning(message,
    // {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    // });

   // const [showPasswordError, setshowPasswordError] = useState(initialState)

    const {uid,token} = useParams();

    const dispatch = useDispatch();
    const passwordChange = useSelector((state) => state.changePassword)
    const { loading, message } = passwordChange

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        isValid: enteredPasswordIsValid,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty);

    const {
        value: enteredConfirmPassword,
        hasError: confirmPasswordInputHasError,
        isValid: enteredConfirmPasswordIsValid,
        valueChangeHandler: confirmPasswordChangedHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        reset: resetConfirmPasswordInput
    } = useInput(isNotEmpty);
    
    const passwordClasses = passwordInputHasError ? 'invalid' : '';
    const confirmPasswordClasses = confirmPasswordInputHasError ? 'invalid' : '';
    
    let formIsValid = (
        enteredPasswordIsValid &&
        enteredConfirmPasswordIsValid )
        const [passwordShown, setPasswordShown] = useState(false);
        const showPasswordHandler = (event) => {
            event.preventDefault();
            setPasswordShown(!passwordShown);
        }
    
        const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
        const showConfirmPasswordHandler = (event) => {
            event.preventDefault();
            setConfirmPasswordShown(!confirmPasswordShown);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        else{
            if (enteredPassword !== enteredConfirmPassword) {
                
            }
            else {
               dispatch(changePassword(uid,token,enteredPassword,enteredConfirmPassword))
            }
        }
        resetConfirmPasswordInput()
        resetPasswordInput()
    }
    return (
        <Form className={`${props.className} ${classes.NewPasswordForm}`}>
               <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
            />
        <h1>Reset Your Password</h1>
        
        {message && <Message variant='danger'>{message}</Message>}
        <form onSubmit={formSubmitHandler}>
        <div style={{ position: 'relative' }}>
                    <input required name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='New Password'
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
                    <input required name='confirmPasswordTextbox' type={!confirmPasswordShown ? 'password' : 'text'} placeholder='Confirm New Password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        className={confirmPasswordClasses}
                        value={enteredConfirmPassword}
                        onChange={confirmPasswordChangedHandler}
                        onBlur={confirmPasswordBlurHandler} />
                    <button type="button" className={classes.toggle} style={!confirmPasswordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showConfirmPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>

            <Button type='submit' className={classes.btn}>
            {loading && <SyncLoader size='10px'
                />}
                RESET PASSWORD</Button>
        
        </form>
       
    </Form>
    )
}

export default NewPasswordForm
