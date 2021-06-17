import React, { useState } from 'react'
import classes from './ProfileEditForm.module.css'
import RightMenu from '../Layout/RightMenu'
import Button from '../components/UI/Button'
import profileImage from '../assets/profile.jpg'

const ProfileEditForm = (props) => {
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
    //   const [user, setUser] = useState([])

    //   const EditUserHandler = (uName,uAge) => {
    //     setUsersList((prevUser) => {
    //       return [...prevUser,{id: Math.random().toString(),name: uName,age: uAge}]
    //     });
    //   }
    const user = {
        name: 'Mohanad',
        email: 'hhhh@gmail.com',
        job: 'developer',
        password: '123456',
        image: { profileImage }
    }
    return (
        <div className={`${classes.ProfileEdit}`}>
            <div className={classes.top}>
                <p> Hello, {user.name}</p>
                <RightMenu />
            </div>
            <form>
                <figure>
                    <img src={profileImage} alt='profile' />
                    {isEditMode ?
                        <div>
                            <button onClick={editPhotoHandler} className={classes.editProfile}><i className="far fa-edit"></i></button>
                            <p>Edit Profile Photo</p>
                        </div>
                        : ''
                    }
                </figure>

                <span>
                    <label htmlFor='username'>Full Name</label>
                    <input readOnly={!isEditMode} id='username' name='username' type='text' defaultValue={user.name} />
                    {isEditMode ? <span><i className="far fa-edit"></i></span> : ''}
                </span>

                <span>
                    <label htmlFor='email'>Email</label>
                    <input readOnly={!isEditMode} type='text' id='email' name='email' defaultValue={user.email} />
                    {isEditMode ? <span><i className="far fa-edit"></i></span> : ''}
                </span>

                <span>
                    <label htmlFor='job'>Job</label>
                    <input readOnly={!isEditMode} id='job' name='job' type='text' defaultValue={user.job} />
                    {isEditMode ? <span><i className="far fa-edit"></i></span> : ''}
                </span>

                <span>
                    <label htmlFor='password'>{!isEditMode ? 'Password' : 'New Password'}</label>
                    <input readOnly={!isEditMode} id='password' name='password' type='password' defaultValue={user.password} />
                    {isEditMode ? <span><i className="far fa-edit"></i></span> : ''}
                </span>

                <Button onClick={editProfileHandler} className={classes.btn} >{!isEditMode ? 'EDIT PROFILE' : 'Save Changes'}</Button>

                {!isEditMode ? <button onClick={deleteAccountHandler} className={classes.deleteAccount}>Delete Account?</button> : ''}
            </form>

        </div>
    )
}

export default ProfileEditForm
