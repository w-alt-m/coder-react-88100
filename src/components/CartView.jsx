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
            <img src={prod.img} alt={prod.name} />
            <h2>{prod.name}</h2>
            <p>Precio por unidad ${prod.price}</p>
            <p>Cantidad: {prod.qty}</p>
            <p>Subtotal: ${prod.price * prod.qty}</p>
            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      {/* llamar funcion en contexto q devuelva el resultado total */}
      <p>Total: ${total}</p>
      <div>
        <button onClick={clear}>Vaciar carrito</button>
        <button onClick={clear}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default CartView;
