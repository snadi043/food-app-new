import React, {useReducer} from "react";
import cartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return{
                items: updatedItems,
                totalAmount : updatedTotalAmount
            }
    }
   return defaultCartState;
}

const CartContextProvider = (props) => {
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemsContextHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemsContextHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartProviderValue = {
        items: [],
        amount: 0,
        addItems: addItemsContextHandler,
        removeItems: removeItemsContextHandler
    }
    return <cartContext.Provider value={cartProviderValue}>
        {props.children}
    </cartContext.Provider>
}
export default CartContextProvider;