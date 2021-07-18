import React from 'react'
import { useHistory } from 'react-router'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import CardInformationForm from '../components/Cart/CardInformationForm'
const PaymentPage = () => {
    const history = useHistory();
    const proceedHandler = (e) => {
        e.preventDefault();
        history.push('order-review')
    }
    return (
        <>
            <Header fullMenu={true} />
            <div className='personal-details'>
                <CheckoutSteps step1 step2 step3/>
                <div className='row content'>
                    <CardInformationForm />
                    <div className='col-lg-4 col-md-12 col-sm-12 payment-summary'>
                        <Summary />
                        <Button className='personal-details__btn' onClick={proceedHandler}>REVIEW & PAY</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentPage
