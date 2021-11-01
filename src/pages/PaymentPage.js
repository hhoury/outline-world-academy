import React, { useRef, useEffect, useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import CardInformationForm from '../components/Cart/CardInformationForm'
import { Helmet } from 'react-helmet'
import $ from 'jquery';


const PaymentPage = () => {
  const DotNetSample = {
    operation: () => {
      return "PAY";
    },
    endpoint: () => {
      return "http://localhost:44362/api/processHostedSession";
    },
    secureIdResponseUrl: () => {
      return null;
    }
  }

  const formRef = useRef();
  const placeOrderHandler = (e) => {
    e.preventDefault();
    formRef.current.cardInfoSubmitHandler(e);
    
  }
  return (
    <>
      <Helmet>
        <script src="https://test-bobsal.gateway.mastercard.com/form/version/45/merchant/OUTWORLD/session.js"></script>
      </Helmet>
      <Header fullMenu={true} />
      <div className='personal-details'>
        <CheckoutSteps step1 step2 step3 step4 />
        <div className='row content'>
          <CardInformationForm ref={formRef} />
          <div className='col-lg-4 col-md-12 col-sm-12 payment-summary'>
            <Summary />
            <Button className='personal-details__btn' onClick={placeOrderHandler}>Place Order</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentPage
