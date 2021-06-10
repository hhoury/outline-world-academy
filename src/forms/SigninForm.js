import React, { useState } from 'react'
import Form from './Form'
import classes from './SigninForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import Recaptcha from '../components/UI/Recaptcha'

const SigninForm = (props) => {

    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    return (
        <Form className={`${classes.signIn} ${props.className}`}>
            <h1>SIGN IN</h1>
            <form className={classes.signIn}>
                <input type='textbox' placeholder='Email Address' />
                <div style={{ position: 'relative' }}>
                    <input name='passwordTextbox'
                        type={!passwordShown ? 'password' : 'text'} placeholder='Password' />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fa fa-eye"></i>
                    </button>
                </div>

                <Button className={classes.btn}>Sign In</Button>
                <div className={classes.forgotPassword}>
                    <CheckBox className={classes.checkbox} />
                    <a href='a'>Forgot password?</a>
                </div>
                <div style={{ clear: 'both' }}></div>
                <p>Don't have an account? <a href='s'>Create an Account</a></p>
                
            </form>
            <footer>
                <Recaptcha/>
                <SocialMedia className={classes.social} />
                <div className={classes.policy}><a href='s'>Privacy Policy</a></div>
            </footer>
            

        </Form>
    )
}

export default SigninForm
