import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CartItem from '../components/Cart/CartItem'
import Button from '../components/UI/Button'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import {createOrder} from '../actions/orderActions'
const notify = () => toast.error("Course Removed from Cart",
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

const CartPage = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems,totalAmount } = cart

    const removeItemHandler = (id) => {
        dispatch(removeFromCart(id))
        notify();
    }
    const checkoutHandler = () => {
        dispatch(createOrder(cartItems))
        history.push('./order-details')
    }
    const keepShoppingButtonHandler = () => {
        history.push('./courses')
    }

    const loggedInUser = (cartItems.length === 0 ?
        <div className='empty-cart'>
            <h3>0 Courses in Cart</h3>
            <div>
                <i className="far fa-shopping-cart"></i>
                <p>Your cart is empty. Keep shopping to find a course!</p>
                <Button onClick={keepShoppingButtonHandler}
                    className='empty-cart-button'>
                    Keep Shopping
                </Button>
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

                        {cartItems.map((item) =>
                            <CartItem
                                key={item.id}
                                id={item.id}
                                onRemove={removeItemHandler.bind(null, item.id)}
                                title={item.title}
                                price={item.price.toFixed(2)}
                                chapters={item.chapters.length}
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
    );
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <ToastContainer />
            <Header fullMenu={true} />
            <div className='cart-page'>
                {loggedInUser}
            </div>
            <Footer />
        </>
    )
}
export default CartPage
