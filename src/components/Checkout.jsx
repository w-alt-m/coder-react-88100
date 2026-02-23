import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [emailConfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { cart, total, clear } = useContext(CartContext);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.email || !emailConfirm) {
      setError("Por favor complete todos los datos");
      return;
    }

    if (buyer.email !== emailConfirm) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    setIsLoading(true);
    setError(null);

    const order = {
      comprador: buyer,
      compras: cart,
      total: total(),
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((err) => {
        console.error("Error generating order:", err);
        setError("Hubo un problema procesando la orden");
      })
      .finally(() => setIsLoading(false));
  };

  if (cart.length === 0 && !orderId) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-start min-h-screen">
      {orderId ? (
        <div className="card max-w-lg w-full bg-base-100 shadow-xl border border-base-200">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-success mb-2">
              ¡Muchas gracias por tu compra!
            </h2>
            <p className="text-lg">
              Tu orden ha sido generada exitosamente.
            </p>
            <div className="bg-base-200 rounded-lg p-4 w-full my-4">
              <span className="text-sm uppercase font-semibold text-base-content/70">
                Código de seguimiento
              </span>
              <p className="font-mono text-xl font-bold mt-1 text-primary">
                {orderId}
              </p>
            </div>
            <div className="card-actions mt-2 w-full">
              <Link className="btn btn-primary w-full" to="/">
                Volver a la tienda
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="card max-w-md w-full bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-2 justify-center">
              Completa tus datos
            </h2>

            {error && (
              <div className="alert alert-error text-sm rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleCheckout} className="flex flex-col gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Nombre</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  name="name"
                  type="text"
                  placeholder="Ej: Juan"
                  value={buyer.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Apellido</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  name="lastname"
                  type="text"
                  placeholder="Ej: Pérez"
                  value={buyer.lastname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Correo Electrónico</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  name="email"
                  type="email"
                  placeholder="juan@correo.com"
                  value={buyer.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Confirmar Correo</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  name="emailConfirm"
                  type="email"
                  placeholder="Repite tu correo"
                  value={emailConfirm}
                  onChange={(e) => setEmailConfirm(e.target.value)}
                />
              </div>

              <div className="card-actions justify-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Procesando...
                    </>
                  ) : (
                    "Finalizar Compra"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
