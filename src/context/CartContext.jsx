import { createContext } from "react";
import { useState } from "react";

//crear contexto

export const CartContext = createContext();

//crear el proveedor

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //funciones (herramientas)
  //agregar item al carrito (en componente itemdetail)
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prod, qty: prod.qty + qty } : prod
        )
      );
    } else {
      setCart([...cart, { ...item, qty }]);
    }
  };

  //borrar todo (en componente cart y checkout)
  const clear = () => {
    setCart([]);
  };

  //eliminar un item (en componente cart)
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //retornar booleano (para verificar si ya esta y sumar cantidad y no repetir el producto)
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, clear, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
