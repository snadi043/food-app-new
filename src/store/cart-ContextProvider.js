import React from "react";
import cartContext from "./cart-context";

const CartContextProvider = (props) => {
    const addItemsContextHandler = (items) => {

    }

    const removeItemsContextHandler = (id) => {

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