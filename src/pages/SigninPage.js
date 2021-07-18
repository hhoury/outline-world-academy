import React from 'react'
import SigninForm from '../forms/SigninForm'
import Logo from '../Layout/Logo'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
const SigninPage = () => {
    const history = useHistory()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    if(userInfo){
        history.push('/')
    }
    return (
        <div className='sign-up container-fluid'>
            <div className='col-lg-5 col-md-5 col-sm-12 left-side'>
                <Logo />
                <div className='sign-up__bottom'>
                    <h2>Welcome Back! </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>
            <SigninForm className='col-lg-6 col-md-6 col-sm-12'/>
        </div>

    )
}

export default SigninPage
