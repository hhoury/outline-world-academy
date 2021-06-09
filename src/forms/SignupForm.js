import React, { useState } from 'react'
import Form from './Form'
import classes from './SignupForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'

const SignupForm = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    return (
        <Form className={classes.signUp}>
            <h1>SIGN UP</h1>
            <form>
                <input type='textbox' placeholder='Email Address' />
                <input type='text' placeholder='Full Name' />
                <div style={{ position: 'relative' }}>
                    <input name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='Create Password' />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
                <input type='text' placeholder='Job (optional)' />
                <Button className={classes.btn}>Sign Up</Button>
                <CheckBox className={classes.checkbox} />
            </form>
            <SocialMedia />
                <div className={classes.text}>
                    <p>By creating an account you are aggreeing to the
                <a href='a'>Terms of Service</a>
                  and
                 <a href='a'>Privacy Policy</a>
                    </p>
                </div>
        </Form>
    )
}

export default SignupForm
