import React from 'react'
import Button from '../components/UI/Button'
import classes from './ContactUsForm.module.css'
import { useForm } from "react-hook-form";

const ContactUsForm = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();



  const formSubmitHandler = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(formSubmitHandler) } className={classes.contactForm}>
      <input required type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

      <input required type="email" placeholder="Email Address" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

      <textarea required placeholder='Message' type='text' {...register("Message", { required: true, minLength: 160 })} />

      <Button type='submit' className={classes.btn}>SUBMIT</Button>
    </form>
  )
}

export default ContactUsForm
