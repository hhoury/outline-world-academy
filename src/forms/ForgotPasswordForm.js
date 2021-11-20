import React from 'react'
import classes from './ForgotPasswordForm.module.css'
import Form from './Form'
import Button from '../components/UI/Button'
import Recaptcha from '../components/UI/Recaptcha'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"
import { resetPassword } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import { useForm } from "react-hook-form";

const ForgotPasswordForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const passwordReset = useSelector((state) => state.resetPassword)
    const { loading, error, message } = passwordReset
    
    const notify = () => toast.warning("Please follow the Link sent to: " + watch('Email'),
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    const formSubmitHandler = (data) => {
        dispatch(resetPassword(data.Email))
        notify();
    }

    return (
        <Form className={`${props.className} ${classes.forgotPassword}`}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
            />
            <h1>Request reset link</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input required type='email' placeholder='Email Address' {...register("Email", { required: true })} />
                <Button type='submit' className={classes.btn}>{loading && <SyncLoader size='10px'
                />}Submit</Button>
                <div className={classes.back}><Link to='/sign-in'>Back to sign in</Link></div>
            </form>
            <Recaptcha className={classes.recap} />
            <div className={classes.policy}><Link to='/policy'>Privacy Policy</Link></div>
        </Form>
    )
}

export default ForgotPasswordForm
