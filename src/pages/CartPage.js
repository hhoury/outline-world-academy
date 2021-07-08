import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CartItem from '../components/Cart/CartItem'
import Button from '../components/UI/Button'
import { useHistory } from 'react-router-dom'


const CartPage = () => {

    const cartCtx = useContext(CartContext)
    const totalAmount = cartCtx.totalAmount.toFixed(2)

    const history = useHistory();

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const checkoutHandler = () => {
        history.push('./order-details')
    }
    const keepShoppingButtonHandler = () =>  {
        history.push('./courses')

    }
    return (
        <>
            <Header fullMenu={true} />
            <div className='cart-page'>
                {
                    cartCtx.items.length === 0 ?
                        <div className='empty-cart'>
                            <h3>0 Courses in Cart</h3>
                            <div>
                                <i className="far fa-shopping-cart"></i>
                                <p>Your cart is empty. Keep shopping to find a course!</p>
                                <Button onClick={keepShoppingButtonHandler} className='empty-cart-button'>Keep Shopping</Button>
                            </div>
                        </div>
                        :
                        <>
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

                                        {cartCtx.items.map((item) =>
                                            <CartItem 
                                            key={item.id} 
                                            id={item.id} 
                                            onRemove={removeItemHandler.bind(null,item.id)}
                                            title={item.title} 
                                            price={item.price.toFixed(2)}
                                            chapters={item.chapters}
                                            subtotal={item.price.toFixed(2)} />)}
                                    </tbody>

                                </table>
                            </div>
                            <div className='table-bottom'>
                                <button className='update-cart'>Update Cart</button>
                                <h2>Subtotal</h2>
                                <p>${totalAmount}</p>
                                <Button onClick={checkoutHandler} className='checkout-btn'>Check out</Button>
                            </div>
                        </>
                }

            </div>

            <Footer />
        </>
    )
}

export default CartPage
