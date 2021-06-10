import React from 'react'
import Button from '../components/UI/Button'
import classes from './ContactUsForm.module.css'
const ContactUsForm = (props) => {
    return (
        <form className={classes.contactForm}>
            <input type='text' placeholder='Full Name'/>
            <input type='text' placeholder='Email address'/>
            <textarea  type='text' placeholder='Message'></textarea>
            <Button className={classes.btn}>SUBMIT</Button>
        </form>
    )
}

export default ContactUsForm
