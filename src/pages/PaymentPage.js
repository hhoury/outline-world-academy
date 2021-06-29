import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import CardInformationForm from '../components/Cart/CardInformationForm'
const PaymentPage = () => {
    const proceedHandler = () => {

    }
    return (
        <>
            <Header fullMenu={true} />

            <div className='personal-details'>
                <CheckoutSteps />
                <div className='row content'>
                    <CardInformationForm />
                    <div className='col-lg-4 col-md-12 col-sm-12 payment-summary'>
                        <Summary subtotal={200} tax={10} />
                        <Button className='personal-details__btn' onClick={proceedHandler}>REVIEW & PAY</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentPage
