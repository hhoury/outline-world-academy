import React, { useState } from 'react'
import Form from './Form'
import classes from './SigninForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import Recaptcha from '../components/UI/Recaptcha'
import {Link} from 'react-router-dom'
const SigninForm = (props) => {

    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
       
    }
    return (
        <Form className={`${classes.signIn}  ${props.className} signInForm`}>
            <h1>SIGN IN</h1>
            <form className={classes.signIn}>
                <input type='textbox' placeholder='Email Address' />
                <div style={{ position: 'relative' }}>
                    <input name='passwordTextbox' 
                        type={!passwordShown ? 'password' : 'text'} placeholder='Password' />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>

                <Button className={classes.btn}>Sign In</Button>
                <div className={classes.forgotPassword}>
                    <CheckBox className={classes.checkbox} />
                    <Link to='/password-reset'>Forgot password?</Link>
                </div>
                <div style={{ clear: 'both' }}></div>
                <p>Don't have an account? <Link href='/sign-up'>Create an Account</Link></p>
                
            </form>
            <div className={classes.footer}>
                <Recaptcha className={classes.signInRecaptcha}/>
                <SocialMedia className={classes.social} />
                <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
            </div>
            

        </Form>
    )
}

export default SigninForm
