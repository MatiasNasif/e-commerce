import React, { useState, createContext } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const [activeCart, setActiveCart] = useState(
    localStorage.getItem('cart') 
    ? { ...JSON.parse(localStorage.getItem('cart')) }
    : {}
  );

  const getCart = obj => setActiveCart(obj)

  return (
    <CartContext.Provider value={{ ...activeCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;