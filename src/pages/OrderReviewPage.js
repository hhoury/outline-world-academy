import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
const OrderReviewPage = () => {
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    
    return (
        <div>
            
        </div>
    )
}

export default OrderReviewPage
