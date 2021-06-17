import React from 'react'
import Logo from '../Layout/Logo'
import ProfileEditForm from '../forms/ProfileEditForm'
const ProfilePage = (props) => {
    return (
        <div className='profile-page row'>
            <Logo />
            <div className='rounds col-lg-7 col-md-7 col-sm-0'></div>
            <div className='col-lg-5 col-md-5 col-sm-12'>
                <ProfileEditForm onClose={props.onClose} onShowModal={props.onShowPasswordModal}/>
            </div>
        </div>
    )
}

export default ProfilePage
