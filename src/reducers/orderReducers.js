import { CREATE_ORDER_FAIL, CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST,
        APPLY_COUPON_FAIL,APPLY_COUPON_REQUEST,APPLY_COUPON_SUCCESS } from '../constants/orderConstants'

export const orderReducer = (state = { order: {} },action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { loading: true, order: {} }
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            }
        case CREATE_ORDER_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state
    }
}

export const couponReducer = (state ={coupon: {}} , action) => {
    switch(action.type){
        case APPLY_COUPON_REQUEST:
            return {loading: true, coupon: {}}
            case APPLY_COUPON_SUCCESS: 
            return {
                loading: false,
                coupon: action.payload,
            }
            case APPLY_COUPON_FAIL: 
            return{
                loading: false, error: action.payload
            }
            default:
                return state;
    }
}