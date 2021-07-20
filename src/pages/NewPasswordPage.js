import React from 'react'
import NewPasswordForm from '../forms/NewPasswordForm'
import Logo from '../Layout/Logo'

const NewPasswordPage = () => {
    return (
        <div className='sign-up container-fluid'>
            <div className='col-lg-5 col-md-5 col-sm-12 left-side'>
               <Logo />
                <div className='sign-up__bottom'>
                    <h2>Create Your New Password </h2>
                </div>
            </div>

            <NewPasswordForm className='col-lg-6 col-md-6 col-sm-12 ' />
        </div>
    )
}

export default NewPasswordPage
