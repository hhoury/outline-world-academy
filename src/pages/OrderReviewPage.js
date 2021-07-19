import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from '../components/Cart/OrderItem'
const OrderReviewPage = () => {
    const cart = useSelector((state) => state.cart)
    const { cartItems, shippingAddress, totalAmount, paymentInfo } = cart

    return (
        <>
            <Header fullMenu={true} />
            <div className='personal-details'>
                <CheckoutSteps step1 step2 step3 step4 />
                <div className='row order-review'>
                    <div className='order-info'>
                        <h1>Your Order</h1>
                        <ul>
                            {cartItems.map((order) =>
                                <OrderItem key={order.id} course={order} />
                            )}
                        </ul>
                        <hr />
                        <h1>Billing Details</h1>
                        <ul className='billing-details'>
                            <li>
                                <span>First Name :</span>
                                <span> {shippingAddress.fname}</span>
                            </li>
                            <li>
                                <span>Last Name :</span>
                                <span>{shippingAddress.fname}</span>
                            </li>
                            <li>
                                <span>Email :</span>
                                <span>{shippingAddress.email}</span>
                            </li>
                            <li>
                                <span>Country :</span>
                                <span>{shippingAddress.country}</span>
                            </li>
                            <li>
                                <span>City :</span>
                                <span>{shippingAddress.town}</span>
                            </li>
                            <li>
                                <span>Street :</span>
                                <span>{shippingAddress.street}</span>
                            </li>
                            <li>
                                <span>Phone :</span>
                                <span>{shippingAddress.phone}</span>
                            </li>
                        </ul>
                        <hr />
                        <h1>Payment</h1>
                        <ul className='payment'>
                            <li>
                                <span>Cardholder's Name:</span>
                                <span></span>
                            </li>
                            <li>
                                <span>Card Number:</span>
                                <span>
                                </span>
                            </li>
                            <li>
                                <span>Expiry Date:</span>
                                <span>
                                </span>
                            </li>
                            <li>
                                <span>CVC:</span>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                    <Summary />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OrderReviewPage
