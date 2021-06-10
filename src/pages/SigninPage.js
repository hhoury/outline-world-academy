import React from 'react'
import SigninForm from '../forms/SigninForm'
import Logo from '../Layout/Logo'

const SigninPage = () => {
    return (
        <div className='sign-up container-fluid'>
            <div className='col-lg-5 col-md-5 left-side'>
                <Logo />
                
                <div className='sign-up__bottom'>
                    <h2>Welcome Back! </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>
            <SigninForm className='col-lg-5 col-md-5'/>
        </div>

    )
}

export default SigninPage
