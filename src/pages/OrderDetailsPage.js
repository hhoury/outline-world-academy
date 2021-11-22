import React, {useEffect} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import OrderList from '../components/Cart/OrderList'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import Summary from '../components/Cart/Summary'
import CouponCode from '../components/Cart/CouponCode'
import Button from '../components/UI/Button'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Cookies from 'js-cookie'
import CartLoginForm from '../components/Cart/CartLoginForm'

const OrderDetailsPage = () => {
    const history = useHistory();
   
    const token = Cookies.get('accessToken')
    const proceedHandler = () => {
       
        history.push('/billing-details')
    }
    const loggedInUser = (
         <div className='row content'>
                    <OrderList />
                    <div className='col-lg-4 col-md-12 col-sm-12 order-summary'>
                        <Summary />
                        <CouponCode />
                        <Button className='order-details__btn' onClick={proceedHandler}>Proceed</Button>
                    </div>
                </div>
    )
    const couponData =  useSelector((state) => state.coupon)
    const {coupon}  = couponData
    useEffect(() => {
    }, [coupon])
    return (
        <>
            <Header fullMenu={true} />

            <div className='order-details'>
                <CheckoutSteps step1 />
                {token? loggedInUser : <CartLoginForm/> }
            </div>
            <Footer />
        </>
    )
}

export default OrderDetailsPage
