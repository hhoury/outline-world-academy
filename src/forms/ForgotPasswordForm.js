import React from 'react'
import classes from './ForgotPasswordForm.module.css'
import Form from './Form'
import Button from '../components/UI/Button'
import Recaptcha from '../components/UI/Recaptcha'
import {Link} from 'react-router-dom'
const ForgotPasswordForm = (props) => {
    return (
        <Form className={`${props.className} ${classes.forgotPassword}`}>
            <h1>Request reset link</h1>
            <form>
                <input type='textbox' placeholder='Email Address' />
                <Button className={classes.btn}>Submit</Button>
                <div className={classes.back}><Link to='/sign-in'>Back to sign in</Link></div>

            </form>
            <Recaptcha className={classes.recap} />
            <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
        </Form>
    )
}

export default ForgotPasswordForm
