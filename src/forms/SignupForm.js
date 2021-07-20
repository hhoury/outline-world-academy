import React, { useState, useRef } from 'react'
import Form from './Form'
import classes from './SignupForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import { Link } from 'react-router-dom'
import useInput from '../hooks/use-input'
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import Loader from '../components/UI/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"

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
    const notify = () => toast.success("A verification email has been sent to " + enteredEmail,
{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
});
    //#region form inputs
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

    const {
        value: enteredConfirmPassword,
        hasError: confirmPasswordInputHasError,
        isValid: enteredConfirmPasswordIsValid,
        valueChangeHandler: confirmPasswordChangedHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        reset: resetConfirmPasswordInput
    } = useInput(isNotEmpty);

    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState('Upload Your Profile Photo');
    const [message, setMessage] = useState(null);
    const [job,setJob] = useState('')
    const onJobChange = (e) => {
        setJob(e.target.value)
    }
    const nameClasses = nameInputHasError ? 'invalid' : '';
    const emailClasses = emailInputHasError ? 'invalid' : '';
    const passwordClasses = passwordInputHasError ? 'invalid' : '';
    const confirmPasswordClasses = confirmPasswordInputHasError ? 'invalid' : '';
    const photoRef = useRef()
    //#endregion
    let formIsValid = (enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid &&
    enteredNameIsValid)

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
    const uploadPhoto = (e) => {
        setPhoto({
          pictureAsFile: e.target.files[0],
        });
        setPhotoName(photoRef.current.files[0].name)
      };

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error } = userRegister



    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        else
            if (enteredPassword !== enteredConfirmPassword) {
                setMessage('Passwords do not match')
            }
            else {
                const formData = new FormData();
                formData.append('full_name', enteredName);
                formData.append('email',enteredEmail);
                formData.append('password',enteredPassword);
                formData.append('password1',enteredConfirmPassword);
                formData.append('job',job);
                formData.append('avatar',photo.pictureAsFile);
                formData.append('phone','+96170040294');
                dispatch(register(formData))
                notify();
            }
        resetEmailInput();
        resetPasswordInput();
        resetConfirmPasswordInput();
        resetNameInput();
        setJob('')
        setPhoto(null)
        setPhotoName('Upload Your Profile Photo')
    }
    return (
        <Form className={`${classes.signUp} ${props.className}`}>
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
            <ToastContainer />
            <h1>SIGN UP</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader message='Creating your Account' />}
            <form onSubmit={formSubmitHandler}>
              

                <input required type='text' placeholder='Full Name' className={nameClasses}
                    value={enteredName}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler} />
  <input required type='email' placeholder='Email Address' className={emailClasses}
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} />
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
                    <input required name='confirmPasswordTextbox' type={!confirmPasswordShown ? 'password' : 'text'} placeholder='Confirm Password'
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

                <input type='text' placeholder='Job (optional)' value={job} onChange={onJobChange} />

                <div className={classes.uploadPhoto}>
                    <input ref={photoRef} type="file" accept="image/*" name="image-upload" id="input" onChange={uploadPhoto}/>
                    <div className={classes.label}>
                        <span> {photoName}   </span>
                        <label className={classes['image-upload']} htmlFor="input">
                            <i className="far fa-user"></i>
                        </label>
                    </div>
                </div>
                <Button type='submit' className={classes.btn}>{loading && <SyncLoader size='10px'
          />} Sign Up</Button>
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
