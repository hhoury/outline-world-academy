import React, { useState,useEffect, useRef } from 'react'
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
    const [photo, setPhoto] = useState(null);

    const deleteAccountHandler = () => {

    }

    const inputFile = useRef(null) 


    const editProfileHandler = (event) => {
        event.preventDefault();
        if(isEditMode)
            props.onShowModal();
        setIsEditMode(!isEditMode)
    }

    const editPhotoHandler =(event) => {
        event.preventDefault();
        inputFile.current.click();
    }
    const uploadPhoto = (e) => {
        if (e.target.files == null) return;
        setPhoto({
            pictureAsFile: e.target?.files[0],
        });
    };

    const formSubmitHandler = (data) => {
        const formData = new FormData();
        formData.append('full_name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password1', data.confirmPassword);
        formData.append('job', data.job);
        formData.append('avatar', photo.pictureAsFile);
        formData.append('phone', '+96170040294');
        
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
            <input type='file' id='file' ref={inputFile} onChange={(e) => uploadPhoto(e)}
             style={{display: 'none'}} accept="image/*" />
            <div className={classes.top}>
                <p> Hello, {user.name}</p>
                <RightMenu />
            </div>
            <form id='profileForm' name='profileForm' onSubmit={handleSubmit(formSubmitHandler)}> 
                <figure>
                    <LazyLoadImage src={user?.avatar} alt='profile' />
                    {isEditMode &&
                        <div className={isEditMode? classes.editProfilePhoto : ''} onClick={editPhotoHandler} >
                            <button className={classes.editProfile}><i className="far fa-edit"></i></button>
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
                    <input required readOnly={!isEditMode} pattern="/^\S+@\S+$/i"  type='email' id='email' name='email' value={user.email} />
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
                    <input readOnly={!isEditMode} id='password' name='password' type='password'  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     {...register("password", { required: true, minLength: 8 })}
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
