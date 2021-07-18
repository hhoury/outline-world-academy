import React,{useRef} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import PersonalDetailsForm from '../components/Cart/PersonalDetailsForm'
import { useHistory } from 'react-router-dom'
import CartLoginForm from '../components/Cart/CartLoginForm'
import {  useSelector } from 'react-redux'

const PersonalDetailsPage = () => {
    const formRef = useRef();
    const history = useHistory()
    const proceedHandler = (e) => {
        formRef.current.formSubmitHandler(e)
    }
    const loggedInUser = (<div className='row content'>
    <PersonalDetailsForm ref={formRef} />
    <div className='col-lg-4 col-md-12 col-sm-12 personal-details-summary'>
        <Summary />
        <Button type='submit' className='personal-details__btn' onClick={proceedHandler}>Proceed</Button>
    </div>

</div>);

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
    return (
        <>
            <Header fullMenu={true} />
            <div className='personal-details'>
                <CheckoutSteps step1 step2 />
                {userInfo? loggedInUser : <CartLoginForm/> }
            </div>
            <Footer />
        </>
    )
}

export default PersonalDetailsPage
