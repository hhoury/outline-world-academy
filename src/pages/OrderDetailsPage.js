import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import OrderList from '../components/Cart/OrderList'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import CouponCode from '../components/Cart/CouponCode'
import Button from '../components/UI/Button'
import { useHistory } from 'react-router-dom'
const OrderDetailsPage = () => {
    const history = useHistory();
const proceedHandler = () => {
    history.push('/personal-details')
}
    return (
        <>
            <Header fullMenu={true} />

            <div className='order-details'>
                <CheckoutSteps />
                <div className='row content'>
                    <OrderList />
                    <div className='col-lg-4 col-md-4 col-sm-5'>
                        <Summary subtotal={200} tax={10} />
                        <CouponCode />
                        <Button className='order-details__btn' onClick={proceedHandler}>Proceed</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderDetailsPage
