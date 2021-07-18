import React, { useState,useEffect } from 'react'
import Form from './Form'
import classes from './SigninForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import Recaptcha from '../components/UI/Recaptcha'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../hooks/use-input'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import Loader from '../components/UI/Loader'
import { login } from '../actions/userActions'

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
const SigninForm = (props) => {
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

  const emailClasses = emailInputHasError ? 'invalid' : '';
  const passwordClasses = passwordInputHasError ? 'invalid' : '';

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const showPasswordHandler = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);

  }
  
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  // useEffect(() => {
  //   if (userInfo) {
  //    history.push('/')
  //   }
  // }, [history, userInfo])

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    dispatch(login(enteredEmail, enteredPassword))
    resetEmailInput();
    resetPasswordInput();
  }
  return (
    <Form className={`${classes.signIn} ${props.className}`}>
      <h1>SIGN IN</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader message='Signing you in...' />}
      <form onSubmit={formSubmitHandler}>
        <input required type='email' placeholder='Email Address' className={emailClasses}
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler} />

        <div style={{ position: 'relative' }}>

          <input name='passwordTextbox' required className={passwordClasses}
            type={!passwordShown ? 'password' : 'text'} placeholder='Password'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            value={enteredPassword}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler} />

          <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
            <i className="fal fa-eye"></i>
          </button>
        </div>

        <Button type='submit' className={classes.btn}>Sign In</Button>
        <div className={classes.forgotPassword}>
          <CheckBox className={classes.checkbox} />
          <Link to='/password-reset'>Forgot password?</Link>
        </div>
        <div style={{ clear: 'both' }}></div>
        <p>Don't have an account? <Link to='/sign-up'>Create an Account</Link></p>

      </form>
      <div className={classes.footer}>
        <Recaptcha className={classes.signInRecaptcha} />
        <SocialMedia className={classes.social} />
        <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
      </div>
    </Form>
  )
}
export default SigninForm
