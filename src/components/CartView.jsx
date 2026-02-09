import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);
  return (
    <div>
      <h1>Tu carrito 🛒</h1>
      <div>
        {cart.map((prod) => (
          <div key={prod.id}>
            <h2>{prod.name}</h2>
            <p>{prod.price}</p>
            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartView;
