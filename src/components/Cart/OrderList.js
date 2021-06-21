import React from 'react'
import { Link } from 'react-router-dom'
import classes from './OrderList.module.css'
import OrderItem from './OrderItem'

const OrderList = () => {
    const ORDERS = [{
        id: 1, course: { id: 1, title: 'Corona Renderer for instructors', price: 400 }
    }]
    return (
        <div className={`col-lg-7 col-md-7 col-sm-12 ${classes.orderList}`}>
                <h1>YOUR ORDER</h1>
                <Link to='/cart' className='ml-auto'>Edit Cart</Link>
                <ul>
                {ORDERS.map((order) =>
                    <OrderItem key={order.id} course={order.course} />
                )}
            </ul>
        </div>
    )
}

export default OrderList
