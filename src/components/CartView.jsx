import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Tu carrito 🛒</h1>
      <div className="overflow-x-auto bg-base-100 rounded-3xl shadow-xl border border-base-200">
        <table className="table table-lg w-full">
          {/* head */}
          <thead className="bg-base-200 text-base text-base-content/70">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id} className="hover:bg-base-50">
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16 bg-base-200">
                        <img src={prod.img} alt={prod.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{prod.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg">${prod.price}</td>
                <td className="text-lg font-semibold">{prod.qty}</td>
                <td className="font-bold text-lg text-primary">${prod.price * prod.qty}</td>
                <td>
                  <button
                    onClick={() => removeItem(prod.id)}
                    className="btn btn-error btn-sm btn-outline rounded-full"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center mt-10 gap-6">
        <p className="text-4xl font-bold text-secondary">Total: ${total}</p>
        <div className="flex gap-4">
          <button onClick={clear} className="btn btn-outline btn-secondary btn-wide rounded-full font-bold">Vaciar carrito</button>
          <button onClick={clear} className="btn btn-primary btn-wide text-white rounded-full font-bold shadow-md">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
