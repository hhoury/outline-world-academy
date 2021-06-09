import React from 'react'
import Logo from '../assets/logo.png'
import SigninForm from '../forms/SigninForm'

const SigninPage = () => {
    return (
        <div className='sign-up'>
            <div className='col-lg-5 col-md-5 left-side'>
                <div className='logo'>
                    <img src={Logo} alt='OW' />
                </div>
                <div className='sign-up__bottom'>
                    <h2>Welcome Back! </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>
            <SigninForm />
        </div>

    )
}

export default SigninPage
