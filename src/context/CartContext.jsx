import { createContext } from "react";
import { useState } from "react";

//crear contexto

export const CartContext = createContext();

//crear el proveedor

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //funciones (herramientas)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
