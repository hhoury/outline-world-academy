import React, { useState } from 'react'
import Form from './Form'
import classes from './SigninForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import Recaptcha from '../components/UI/Recaptcha'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import Loader from '../components/UI/Loader'
import { login } from '../actions/userActions'
import { SyncLoader } from "react-spinners"
import { useForm } from "react-hook-form";

const SigninForm = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const showPasswordHandler = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);

  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error } = userLogin

  const formSubmitHandler = (data) => {
    dispatch(login(watch('Email'), watch('Password')))
  }
  return (
    <Form className={`${classes.signIn} ${props.className}`}>
      <h1>SIGN IN</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader message='Signing you in...' />}
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <input required type='email' placeholder='Email Address' {...register("Email", { required: true})} />
        <div style={{ position: 'relative' }}>
          <input name='passwordTextbox' required
            type={!passwordShown ? 'password' : 'text'} placeholder='Password'
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            {...register("Password", { required: true })} />

          <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
            <i className="fal fa-eye"></i>
          </button>
        </div>

        <Button type='submit' className={classes.btn}> {loading && <SyncLoader size='10px'
        />} Sign In</Button>
        <div className={classes.forgotPassword}>
          <CheckBox className={classes.checkbox} />
          <Link to='/forgot-password'>Forgot password?</Link>
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
