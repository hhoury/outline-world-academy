import React from 'react'
import Logo from '../Layout/Logo'
import ProfileEditForm from '../forms/ProfileEditForm'
import { useSelector } from 'react-redux'
import CartLoginForm from '../components/Cart/CartLoginForm'
const ProfilePage = (props) => {
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const loggedIn = (
        <ProfileEditForm onClose={props.onClose} userInfo={userInfo} onShowModal={props.onShowPasswordModal} />
    )
    return (
            <div className='profile-page row'>
                <div className='rounds col-lg-6 col-md-6 col-sm-0'>
                    <Logo />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                {userInfo ? loggedIn : (
                <CartLoginForm className='cartLogin' />
            )}
                </div>
            </div>
       
    )
}

export default ProfilePage
