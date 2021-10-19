import React, { useState } from 'react'
import Button from '../components/UI/Button'
import Form from './Form'
import classes from './NewPasswordForm.module.css'
import { useForm } from "react-hook-form";
import Message from '../components/UI/Message'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../actions/userActions'
import { useHistory } from 'react-router';


const NewPasswordForm = (props) => {
    const { token } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const passwordChange = useSelector((state) => state.changePassword)
    const { loading, message, success } = passwordChange
    const history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const showConfirmPasswordHandler = (event) => {
        event.preventDefault();
        setConfirmPasswordShown(!confirmPasswordShown);
    }
    const formSubmitHandler = async (event) => {
        event.preventDefault();
            if (watch('password') !== watch('confirmPassword')) {

            }
            else {
                await dispatch(changePassword(token, watch('password'), watch('confirmPassword')))
                history.push('/sign-in')
            }
    }
    return (
        <Form className={`${props.className} ${classes.NewPasswordForm}`}>
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
            <h1>Reset Your Password</h1>

            {message && <Message variant='danger'>{message}</Message>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div style={{ position: 'relative' }}>
                    <input required name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='New Password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" {...register("password", { required: true})}
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                         />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
                <div style={{ position: 'relative' }}>
                    <input required name='confirmPasswordTextbox' type={!confirmPasswordShown ? 'password' : 'text'} placeholder='Confirm New Password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        {...register("confirmPassword", { required: true})}/>
                    <button type="button" className={classes.toggle} style={!confirmPasswordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showConfirmPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>

                <Button type='submit' className={classes.btn}>
                    {loading && <SyncLoader size='10px'
                    />}
                    RESET PASSWORD</Button>

            </form>

        </Form>
    )
}

export default NewPasswordForm
