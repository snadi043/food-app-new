import React from 'react';

const cartContext = React.createContext({
    items: [],
    amount: 0,
    addItems: (items) => {},
    removeItems: (id) => {}
})

export default cartContext;