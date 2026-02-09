import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  // context
  const { addItem } = useContext(CartContext);

  // onAdd para que era? terminar
  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto my-10 border border-base-200 rounded-3xl">
      <figure className="lg:w-1/2 p-6">
        <img
          alt={detail.name}
          src={detail.img}
          className="rounded-2xl w-full h-96 object-cover"
        />
      </figure>
      <div className="card-body lg:w-1/2 justify-center">
        <h1 className="card-title text-4xl font-bold text-primary mb-2">{detail.name}</h1>
        <p className="text-base-content/80 text-lg mb-4">{detail.description}</p>

        <div className="flex flex-col gap-4">
          <div className="badge badge-secondary badge-outline text-lg p-3">Stock: {detail.stock} unidades</div>
          <p className="text-5xl font-bold text-secondary mb-6">${detail.price}</p>
        </div>

        <div className="card-actions justify-end w-full">
          {purchase ? (
            <Link to="/cart" className="btn btn-primary btn-wide rounded-full text-white font-bold text-lg">Ir al carrito</Link>
          ) : (
            <ItemCount stock={detail.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
