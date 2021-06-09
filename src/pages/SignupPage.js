import React from 'react'
import Logo from '../assets/logo.png'
import SignupForm from '../forms/SignupForm'

const SignupPage = () => {
    return (
        <div className='sign-up'>
            <div className='col-lg-4 col-md-4 left-side'>
                <div className='logo'>
                    <img src={Logo} alt='OW' />
                </div>
                <div className='sign-up__bottom'>
                    <h2>Don't have an </h2>
                    <h2>account?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>

            <SignupForm className='col-lg-5 col-md-5' />

        </div>
    )
}

export default SignupPage
