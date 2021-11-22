import React, { useRef } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import PersonalDetailsForm from '../components/Cart/PersonalDetailsForm'

const PersonalDetailsPage = () => {
    const formRef = useRef();
    const proceedHandler = (e) => {
        formRef.current.formSubmitHandler(e);
    }
    return (
        <>
            <Header fullMenu={true} />
            <div className='personal-details'>
                <CheckoutSteps step1 step2 />
                <div className='row content'>
                    <PersonalDetailsForm ref={formRef} />
                    <div className='col-lg-4 col-md-12 col-sm-12 personal-details-summary'>
                        <Summary />
                        <Button type='submit' className='personal-details__btn' onClick={proceedHandler}>Proceed</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PersonalDetailsPage
