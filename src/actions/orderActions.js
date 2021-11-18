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
export const createOrder = (orderItems) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })

        const StudentId = 4//JSON.parse(localStorage.getItem('userInfo'))?.id

        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }


        const { data } = await axios.post(API + 'Orders/create-order/', { StudentId, orderItems },config)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
        localStorage.setItem('orderId', data.id);
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateBillingAddress = (orderId, firstName, lastName, email, country, city,
    streetAddress, phoneNumber) => async (dispatch) => {
        const token = Cookies.get('accessToken')
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
            await axios.post(API + 'Orders/update-billing/', {
                orderId, firstName, lastName, email, country, city,
                streetAddress, phoneNumber
            }, config);
            dispatch({
                type: UPDATE_BILLING_ADDRESS_SUCCESS
            })
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


export const applyCoupon = (orderId, couponCode) => async (dispatch) => {
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
        const { data } = await axios.post(API + 'Orders/apply-coupon/', { orderId, couponCode },config)
        dispatch({
            type: APPLY_COUPON_SUCCESS,
            payload: data
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
        const { data } = await axios.post(API + 'PaymentApi/processHostedSession', { orderId, transactionId,sessionId,ApiOperation,ApiMethod,CardHolderName,CardNumber,ExpiryMonth,ExpiryYear,SecurityCode },config)
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