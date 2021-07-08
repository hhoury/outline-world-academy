import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items:[],
    totalAmount: 0
}
const cartReducer =(state,action) => {
    if(action.type === 'ADD')
    {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        if(existingCartItem){
            alert('Course is already in your shopping cart')
            return {
                items: state.items,
                totalAmount: state.totalAmount
            }
        }
        else{
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        
    }
    if(action.type === 'REMOVE')
    {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        const updatedItems = state.items.filter(item => item.id !== action.id)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)

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
