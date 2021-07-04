import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultCart = {
    items:[],
    totalAmount: 0
}
const cartReducer =(state,action) => {
    if(action.type === 'ADD')
    {
        const updateItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price;
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE')
    {

    }
    return defaultCart
}
const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCart)

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD',item: item})
     }
    const removeItemToCartHandler = id => { 
        dispatchCartAction({type: 'REMOVE',id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
