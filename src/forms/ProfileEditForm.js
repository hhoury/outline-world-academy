import React, { useState,useEffect } from 'react'
import classes from './ProfileEditForm.module.css'
import RightMenu from '../Layout/RightMenu'
import Button from '../components/UI/Button'
import useInput from '../hooks/use-input'
import { useSelector } from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { useForm } from "react-hook-form";

const ProfileEditForm = (props) => {
    const { register, handleSubmit, setValue , watch, formState: { errors } } = useForm();
    const user = props.userInfo
    const [formIsValid, setFormIsValid] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const deleteAccountHandler = () => {

    }

    const editProfileHandler = (event) => {
        event.preventDefault();
        if(isEditMode)
            props.onShowModal();
        setIsEditMode(!isEditMode)
    }

    const editPhotoHandler =(event) => {
        event.preventDefault();
    }

    const formSubmitHandler = (data) => {
       
        
    }
    useEffect(() => {
        if(user){
            setValue('name',user.name)
            setValue('email',user.email);
            setValue('job',user.job);
        }
    }, [])
    return (
        <div className={`${classes.ProfileEdit}`}>
            <div className={classes.top}>
                <p> Hello, {user.name}</p>
                <RightMenu />
            </div>
            <form id='profileForm' name='profileForm' onSubmit={handleSubmit(formSubmitHandler)}> 
                <figure>
                    <LazyLoadImage src={user?.avatar} alt='profile' />
                    {isEditMode &&
                        <div>
                            <button onClick={editPhotoHandler} className={classes.editProfile}><i className="far fa-edit"></i></button>
                            <p>Edit Profile Photo</p>
                        </div>
                    }
                </figure>

                <span>
                    <label htmlFor='name'>Full Name</label>
                    <input required readOnly={!isEditMode} 
                       {...register("name", { required: true, minLength: 3, maxLength: 25})} type='text' />
                    {isEditMode && <span><i className="far fa-edit"></i></span>}
                </span>

                <span>
                    <label htmlFor='email'>Email</label>
                    <input required readOnly={!isEditMode} type='email' id='email' name='email' value={user.email} />
                    {isEditMode && <span><i className="far fa-edit"></i></span> }
                </span>

                <span>
                    <label htmlFor='job'>Job</label>
                    <input 
                    readOnly={!isEditMode} 
                    type='text'
                    {...register("job", { required: true, minLength: 2, maxLength: 25})}
                    />
                    {isEditMode && <span><i className="far fa-edit"></i></span>}
                </span>

                <span>
                    <label htmlFor='password'>{!isEditMode ? 'Password' : 'New Password'}</label>
                    <input readOnly={!isEditMode} id='password' name='password' type='password'  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                     {...register("password", { required: true, minLength: 8, pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" })}
                 />
                    {isEditMode && <span><i className="far fa-edit"></i></span> }
                </span>

                <Button disabled={!formIsValid} onClick={editProfileHandler} className={classes.btn} >{!isEditMode ? 'EDIT PROFILE' : 'Save Changes'}</Button>

                {!isEditMode && <button onClick={deleteAccountHandler} className={classes.deleteAccount}>Delete Account?</button>}
            </form>

        </div>
    )
}

export default ProfileEditForm
