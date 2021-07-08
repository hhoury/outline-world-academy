import React from 'react'
import Button from '../components/UI/Button'
import classes from './ContactUsForm.module.css'
import useInput from '../hooks/use-input'

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

const ContactUsForm = (props) => {
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
            value: enteredMessage,
            hasError: messageInputHasError,
            isValid: enteredMessageIsValid,
            valueChangeHandler: messageChangedHandler,
            inputBlurHandler: messageBlurHandler,
            reset: resetMessageInput 
          } = useInput(isNotEmpty);
           
            const nameClasses = nameInputHasError ? 'invalid' : '';
            const messageClasses = messageInputHasError ? 'invalid' : '';
            const emailClasses = emailInputHasError ? 'invalid' : '';

            let formIsValid = false;
            if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
              formIsValid = true;
            }
            const formSubmitHandler = (event) => {
                event.preventDefault();
                if(!formIsValid) 
                {
                  return;
                }
                resetEmailInput();
                resetNameInput();
                resetMessageInput();
            }

    return (
        <form onSubmit={formSubmitHandler} className={classes.contactForm}>
            <input required type='text' placeholder='Full Name'  className={nameClasses}
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            />

            <input required type='email' placeholder='Email address' className={emailClasses}
             value={enteredEmail}
             onChange={emailChangedHandler}
             onBlur={emailBlurHandler}/>

            <textarea  required type='text' placeholder='Message'
            value={enteredMessage} className={messageClasses}
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}></textarea>

            <Button type='submit' className={classes.btn}>SUBMIT</Button>
        </form>
    )
}

export default ContactUsForm
