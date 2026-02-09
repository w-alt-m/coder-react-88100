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
    <div className="p-8 border rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{detail.name}</h1>
      <img
        alt={detail.name}
        src={detail.img}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="mb-2">{detail.description}</p>
      <p className="font-semibold">
        Stock: {detail.stock} unidades disponibles
      </p>
      <p className="text-xl text-primary font-bold mb-6">
        Precio: ${detail.price},00
      </p>
      {purchase ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
