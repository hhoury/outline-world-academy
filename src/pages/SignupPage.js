import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SignupForm from '../forms/SignupForm'
import Logo from '../Layout/Logo'
const SignupPage = () => {
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
                    <h2>Don't have an </h2>
                    <h2>account?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                </div>
            </div>

            <SignupForm className='col-lg-6 col-md-6 col-sm-12' />

        </div>
    )
}

export default SignupPage
