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



const OrderDetailsPage = () => {
    const history = useHistory();
    const proceedHandler = () => {
        
        history.push('/billing-details')

    }
    const couponData =  useSelector((state) => state.coupon)
    const {coupon}  = couponData
    useEffect(() => {
    }, [coupon])
    return (
        <>
            <Header fullMenu={true} />

            <div className='order-details'>
                <CheckoutSteps step1 />
                <div className='row content'>
                    <OrderList />
                    <div className='col-lg-4 col-md-12 col-sm-12 order-summary'>
                        <Summary />
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
