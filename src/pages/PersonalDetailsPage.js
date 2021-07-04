import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import PersonalDetailsForm from '../components/Cart/PersonalDetailsForm'
import { useHistory } from 'react-router-dom'
const PersonalDetailsPage = () => {
    const history = useHistory()
    const proceedHandler = () => {
        history.push('/payment')
    }
    return (
        <>
            <Header fullMenu={true} />

            <div className='personal-details'>
                <CheckoutSteps />
                <div className='row content'>
                    <PersonalDetailsForm />
                    <div className='col-lg-4 col-md-12 col-sm-12 personal-details-summary'>
                        <Summary subtotal={200} tax={10} />
                        <Button type='submit' className='personal-details__btn' onClick={proceedHandler}>Proceed</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PersonalDetailsPage
