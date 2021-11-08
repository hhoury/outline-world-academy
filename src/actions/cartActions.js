import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_INFO,
  } from '../constants/cartConstants'
  
  export const addToCart = (item) => async (dispatch, getState) => {  
    console.log(item);
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
  
  // export const savePaymentInfo = (data) => (dispatch) => {
  //   dispatch({
  //     type: CART_SAVE_PAYMENT_INFO,
  //     payload: data,
  //   })
  //   localStorage.setItem('paymentInfo', JSON.stringify(data))
  // }
  