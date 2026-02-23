import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.qty * prod.price), 0);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        clear,
        removeItem,
        isInCart,
        total,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
