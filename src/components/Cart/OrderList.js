import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './OrderList.module.css'
import OrderItem from './OrderItem'
import CartContext from '../../store/cart-context'

const OrderList = () => {
    const cartCtx = useContext(CartContext)
    console.log(cartCtx.items);
    return (
        <div className={`col-lg-7 col-md-12 col-sm-12 ${classes.orderList}`}>
                <h1>YOUR ORDER</h1>
                <Link to='/cart' className='ml-auto'>Edit Cart</Link>
                <ul>
                {cartCtx.items.map((order) =>
                    <OrderItem key={order.id} course={order} />
                )}
            </ul>
        </div>
    )
}

export default OrderList
