import React, { useState } from 'react'
import Form from './Form'
import classes from './SignupForm.module.css'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import SocialMedia from '../components/UI/SocialMedia'
import { Link } from 'react-router-dom'
import { createAccount } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from "react-spinners"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignupForm = (props) => {

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .matches('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
            .min(8, 'Password must be at least 8 characters')
            .label('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .matches('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .label('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm(formOptions);

    const notify = () => toast.success("A verification email has been sent to " + watch("email"),
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        const notifyError = (msg) => toast.error({msg},
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        const notifyPasswordDontMatch = () => {
            toast.success("Passwords do not match",
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        }
    const passwordNotValidNotify = () => toast.error("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
        }
    )


    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState('Upload Your Profile Photo');

    const [message, setMessage] = useState(null);

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
    const uploadPhoto = (e) => {
        if (e.target.files == null) return;
        setPhoto({
            pictureAsFile: e.target?.files[0],
        });
        setPhotoName(e.target?.files[0].name)
    };

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, success } = userRegister

    const formSubmitHandler = (data) => {
        if (watch("password") !== watch("confirmPassword")) {
            notifyPasswordDontMatch();
        }
        else {
            const formData = new FormData();
            formData.append('full_name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('password1', data.confirmPassword);
            formData.append('job', data.job);
            formData.append('avatar', photo.pictureAsFile);
            formData.append('phone', '+96170040294');
            dispatch(createAccount(formData))
            if(success)
            {
                notify();
                setValue('name', '')
                setValue('email', '')
                setValue('password', '')
                setValue('confirmPassword', '')
                setValue('job', '')
                setValue('avatar', null)
                setPhoto(null)
                setPhotoName('')
            }
            else{
                notifyError(error?.message);
            }
            
        }
    }
    return (
        <Form className={`${classes.signUp} ${props.className}`}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true} pauseOnHover={false}
            />
            <h1>SIGN UP</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader message='Creating your Account' />} */}

            <form onSubmit={handleSubmit(formSubmitHandler)}>


                <input required type='text' placeholder='Full Name'  {...register("name", { required: true, maxLength: 80 })} />

                <input type="email" placeholder='Email Address' 
                 {...register("email", { required: true })} />

                <div style={{ position: 'relative' }}>
                    <input
                        required

                        name='passwordTextbox'
                        type={!passwordShown ? 'password' : 'text'}
                        placeholder='Create Password'
                        {...register("password", { required: true, minLength: 8 })}
                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                    />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
                <div style={{ position: 'relative' }}>
                    <input required name='confirmPasswordTextbox'

                        type={!confirmPasswordShown ? 'password' : 'text'} placeholder='Confirm Password'
                        {...register("confirmPassword", { required: true, minLength: 8 })}
                    // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                    <button type="button" className={classes.toggle} style={!confirmPasswordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }}
                        onClick={showConfirmPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>

                <input type='text' placeholder='Job (optional)'  {...register("job", { pattern: '^[a-zA-Z ]*$' })} />

                <div className={classes.uploadPhoto}>
                    <input id="input" {...register("avatar", onchange = (e) => uploadPhoto(e))} type="file" accept="image/*" />
                    <div className={classes.label}>
                        <span>  {photoName}  </span>
                        <label className={classes['image-upload']} htmlFor="input">
                            <i className="far fa-user"></i>
                        </label>
                    </div>
                </div>
                <Button type='submit' className={classes.btn}>{loading && <SyncLoader size='10px'
                />} Sign Up</Button>
                <CheckBox className={classes.checkbox} />
                <p>Have an account? <Link to='/sign-in'>Login</Link></p>
            </form>

            {/* <SocialMedia className={classes.social} /> */}

            <div className={classes.text}>
                <p>By creating an account you are aggreeing to the
                    <Link to='/policy'>Terms of Service</Link>
                    and
                    <Link to='/policy'>Privacy Policy</Link>
                </p>
            </div>
        </Form>
    )
}

export default SignupForm
