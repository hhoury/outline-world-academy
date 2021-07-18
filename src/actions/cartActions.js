import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
  } from '../constants/cartConstants'
  
  export const addToCart = (item) => async (dispatch, getState) => {  
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        item: item
      },
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    localStorage.setItem('totalAmount', JSON.stringify(getState().cart.totalAmount))
  }
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    localStorage.setItem('totalAmount', JSON.stringify(getState().cart.totalAmount))
  }
  
  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  }
  
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
  }
  