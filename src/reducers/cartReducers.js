import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
  } from '../constants/cartConstants'
  
  export const cartReducer = (
    state = { cartItems: [], shippingAddress: {}, totalAmount: 0 }, //initial state
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload.item;
        const existingCartItemIndex = state.cartItems.findIndex(x => x.id ===  item.id);
        const existingCartItem = state.cartItems[existingCartItemIndex];

        if(existingCartItem){
            return {
                ...state,
                cartItems: state.cartItems,
                totalAmount: state.totalAmount
            }
        }
        else{
          const item = action.payload.item;
            const updatedItems = state.cartItems.concat(item);
            const updatedTotalAmount = Number(state.totalAmount) + Number(item.price);
            return {
                ...state,
                cartItems: updatedItems,
                totalAmount: updatedTotalAmount.toFixed(2)
            }
            
        }
      case CART_REMOVE_ITEM:
        const existingCartItemIndex1 = state.cartItems.findIndex(item => item.id === action.payload);
        const existingCartItem1 = state.cartItems[existingCartItemIndex1];
        const updatedTotalAmount = Number(state.totalAmount) - Number(existingCartItem1.price);
        const updatedItems = state.cartItems.filter(item => item.id !== action.payload)
        return {
            ...state,
            cartItems: updatedItems,
            totalAmount: updatedTotalAmount.toFixed(2)
        }

      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        }
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        }
      case CART_CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }
  