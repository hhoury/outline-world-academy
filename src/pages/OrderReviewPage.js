import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Summary from '../components/Cart/Summary'
import Button from '../components/UI/Button'
import CheckoutSteps from '../components/Cart/CheckoutSteps'
import { useSelector } from 'react-redux'
import OrderItem from '../components/Cart/OrderItem'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useHistory } from 'react-router'

const OrderReviewPage = () => {
    const history = useHistory();
    const cart = useSelector((state) => state.cart)
    const { cartItems, shippingAddress } = cart //, paymentInfo
    const proceedHandler = () => {
        history.push('/payment')
    }
    return (
        <>
            <Header fullMenu={true} />
            <div className='personal-details'>
                <CheckoutSteps step1 step2 step3 />
                <div className='row order-review '>
                    <div className='order-info col-md-8 col-sm-12'>
                        <Accordion allowMultipleExpanded allowZeroExpanded >
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Your Order</AccordionItemButton></AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        {cartItems.map((order) =>
                                            <OrderItem key={order.id} course={order} />
                                        )}
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Billing Details
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
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
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='order-review__summary col-md-4 col-sm-12'>
                        <Summary />
                        <Button onClick={proceedHandler} className='order-review__button'>Proceed</Button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OrderReviewPage
