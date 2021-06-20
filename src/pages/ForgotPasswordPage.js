import React from 'react'
import ForgotPasswordForm from '../forms/ForgotPasswordForm'
import Logo from '../Layout/Logo'

const ForgotPasswordPage = () => {
    return (
        <div className='sign-up container-fluid'>
            <div className='col-lg-5 col-md-5 left-side'>
               <Logo />
                <div className='sign-up__bottom'>
                    <h2>Forgot your password? </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>

            <ForgotPasswordForm className='col-lg-5 col-md-5 ' />
        </div>
    )
}

export default ForgotPasswordPage
