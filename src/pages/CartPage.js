import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

import CartItem from '../components/Cart/CartItem'
import Button from '../components/UI/Button'
import { useHistory } from 'react-router-dom'
const CartPage = () => {
    const history = useHistory();
    const CART_ITEMS = [
        {id: 1, title: 'corona renderer for instructors', price: 400, chapters: '12', subtotal: 400},
        {id: 2, title: 'corona renderer', price: 200, chapters: '8', subtotal: 200}
    ]
    let total = 0;
    CART_ITEMS.forEach(item => {
        total = total + item.subtotal;
    });
    const removeItemHandler = (event) => {
        console.log(event);
    }
    const checkoutHandler = () => {
        history.push('./order-details')
    }
    console.log(CART_ITEMS);
    return (
        <>
            <Header fullMenu={true} />
            <div className='cart-page'>
            <h1>Your cart</h1>
            <div className='my-cart'>
             
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Chapters</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CART_ITEMS.map((item) =>
                            <CartItem key={item.id} id={item.id} onRemoveFromCart={removeItemHandler}
                                title={item.title} price={item.price}
                                chapters={item.chapters} subtotal={item.subtotal} />)}
                    </tbody>
                
                </table>


            </div>
            <div className='table-bottom'>
                <button className='update-cart'>Update Cart</button>
                <h2>Subtotal</h2>
                <p>${total}</p>
                <Button onClick={checkoutHandler} className='checkout-btn'>Check out</Button>
            </div>
          
            </div>
            
            <Footer />
        </>
    )
}

export default CartPage
