import React from 'react'
import classes from './ForgotPasswordForm.module.css'
import Form from './Form'
import Button from '../components/UI/Button'
import Recaptcha from '../components/UI/Recaptcha'
const ForgotPasswordForm = (props) => {
    return (
        <Form className={`${classes.forgotPassword} ${props.className}`}>
        <h1>Request reset link</h1>
        <form>
            <input type='textbox' placeholder='Email Address' />
            <Button className={classes.btn}>Submit</Button>
            <div className={classes.back}><a href='s'>Back to sign in</a></div>
          
        </form>
        <Recaptcha className={classes.recap}/>
            <div className={classes.policy}><a href='s'>Privacy Policy</a></div>
    </Form>
    )
}

export default ForgotPasswordForm
