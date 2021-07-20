import React, { useState,useEffect } from 'react'
import classes from './ProfileEditForm.module.css'
import RightMenu from '../Layout/RightMenu'
import Button from '../components/UI/Button'
import profileImage from '../assets/profile.jpg'
import useInput from '../hooks/use-input'
import { useDispatch, useSelector } from 'react-redux'


const isNotEmpty = (value) => {
  return value?.trim() !== ''
}

const isEmail = email => {
  if (email?.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true)
  }
  else {
    return false
  }
}
const ProfileEditForm = (props) => {
    

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const {user} = userInfo
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

    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
        setValue: setNameValue
    } = useInput(isNotEmpty);
    
    
    
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    setValue: setEmailValue
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
    setValue: setPasswordValue
  } = useInput(isNotEmpty);
  const [job, setJob] = useState(user.job)
  const nameClasses = nameInputHasError ? 'invalid' : '';
  const emailClasses = emailInputHasError ? 'invalid' : '';
  const passwordClasses = passwordInputHasError ? 'invalid' : '';

    let formIsValid = false;
    if (enteredEmailIsValid && enteredPasswordIsValid && enteredNameIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetEmailInput();
        resetPasswordInput();
        resetNameInput();
        
    }
    useEffect(() => {
        if(user){
            setNameValue(user.full_name);
            setEmailValue(user.email);
            setPasswordValue(user.Password);
        }
    }, [])
    return (
        <div className={`${classes.ProfileEdit}`}>
            <div className={classes.top}>
                <p> Hello, {enteredName}</p>
                <RightMenu />
            </div>
            <form id='profileForm' name='profileForm' onSubmit={formSubmitHandler}> 
                <figure>
                    <img src={user.avatar} alt='profile' />
                    {isEditMode &&
                        <div>
                            <button onClick={editPhotoHandler} className={classes.editProfile}><i className="far fa-edit"></i></button>
                            <p>Edit Profile Photo</p>
                        </div>
                    }
                </figure>

                <span>
                    <label htmlFor='username'>Full Name</label>
                    <input readOnly={!isEditMode} id='username' name='username' type='text'  className={nameClasses}
                       value={enteredName}
                       onChange={nameChangedHandler}
                       onBlur={nameBlurHandler}/>
                    {isEditMode && <span><i className="far fa-edit"></i></span>}
                </span>

                <span>
                    <label htmlFor='email'>Email</label>
                    <input readOnly={!isEditMode} type='email' id='email' name='email' value={enteredEmail}  className={emailClasses}
                      onChange={emailChangedHandler}
                      onBlur={emailBlurHandler} />
                    {isEditMode && <span><i className="far fa-edit"></i></span> }
                </span>

                <span>
                    <label htmlFor='job'>Job</label>
                    <input 
                    readOnly={!isEditMode} 
                    id='job' 
                    name='job' 
                    type='text'
                    onChange={setJob} 
                    value={job} />
                    {isEditMode && <span><i className="far fa-edit"></i></span>}
                </span>

                <span>
                    <label htmlFor='password'>{!isEditMode ? 'Password' : 'New Password'}</label>
                    <input readOnly={!isEditMode} id='password' name='password' type='password' defaultValue={user.password} className={passwordClasses}
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        value={user.password}
                        onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler}/>
                    {isEditMode && <span><i className="far fa-edit"></i></span> }
                </span>

                <Button disabled={!formIsValid} onClick={editProfileHandler} className={classes.btn} >{!isEditMode ? 'EDIT PROFILE' : 'Save Changes'}</Button>

                {!isEditMode && <button onClick={deleteAccountHandler} className={classes.deleteAccount}>Delete Account?</button>}
            </form>

        </div>
    )
}

export default ProfileEditForm
