import axios from "axios";
import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    UPDATE_BILLING_ADDRESS_REQUEST,
    UPDATE_BILLING_ADDRESS_SUCCESS,
    UPDATE_BILLING_ADDRESS_FAIL,
    APPLY_COUPON_FAIL,
    APPLY_COUPON_REQUEST,
    APPLY_COUPON_SUCCESS,
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS
} from '../constants/orderConstants'
import { API } from '../constants/appConstants'
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'


export const createOrder = (order_items) => async (dispatch) => {
    const items = []
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })
        order_items.forEach(element => {
            items.push({'course_id': element.id})
        });
        order_items = items;
        const token = Cookies.get('accessToken')
        console.log(token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(API + 'courses/create_order/', {order_items} ,config)
        console.log(data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
        
        localStorage.setItem('orderId', data.order.id);
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateBillingAddress = (order_id, firstName, lastName, email, country, city,
    street, phone) => async (dispatch) => {
        const token = Cookies.get('accessToken')
        const address_details = {firstName,lastName,email,country,city,street,phone}
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        try {
            dispatch({
                type: UPDATE_BILLING_ADDRESS_REQUEST
            })
           const {data} =  await axios.post(API + 'courses/create_order_address/', {
                order_id, address_details 
            }, config);
            dispatch({
                type: UPDATE_BILLING_ADDRESS_SUCCESS
            })
            console.log(data);
        }
        catch (error) {
            dispatch({
                type: UPDATE_BILLING_ADDRESS_FAIL,
                payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    }


export const applyCoupon = (order_id, coupon_code) => async (dispatch) => {
    const token = Cookies.get('accessToken')
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        dispatch({
            type: APPLY_COUPON_REQUEST
        })
        console.log(order_id,coupon_code);
        const { data } = await axios.post(API + 'courses/apply_coupon/', { order_id, coupon_code },config)
        console.log(data);
        dispatch({
            type: APPLY_COUPON_SUCCESS,
            payload: data.order
        })
    }
    catch (error) {
        dispatch({
            type: APPLY_COUPON_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const placeOrder = (orderId, transactionId,sessionId,ApiOperation,ApiMethod, CardHolderName,CardNumber,ExpiryMonth,ExpiryYear,SecurityCode) => async (dispatch) => {
    const token = Cookies.get('accessToken')
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    try{
        dispatch({
            type: PLACE_ORDER_REQUEST
        })
        const { data } = await axios.post(API + 'courses/processHostedSession', { orderId, transactionId,sessionId,ApiOperation,ApiMethod,CardHolderName,CardNumber,ExpiryMonth,ExpiryYear,SecurityCode },config)
        console.log(data);
        dispatch({
            type: PLACE_ORDER_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}