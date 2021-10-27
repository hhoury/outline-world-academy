import axios from "axios";
import {CREATE_ORDER_FAIL,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS} from '../constants/orderConstants'
import {API} from '../constants/appConstants'


export const createOrder = (orderItems) => async (dispatch) => {
//    const orderItems = []
//    cartItems.forEach(item => {
//        orderItems.push({courseId : item.id})
//    })
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })
        const StudentId = JSON.parse(localStorage.getItem('userInfo')).id
       
        const { res } = await axios.post(API + 'Orders/create-order/', { orderItems, StudentId})
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: res
        })
        console.log('result');
        console.log(res);
        localStorage.setItem('Order', JSON.stringify(res));
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}
