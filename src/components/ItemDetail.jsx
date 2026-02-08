import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
  // context
  const context = useContext(CartContext);
  console.log(context);

  // onAdd para que era? terminar
  const onAdd = (cantidad) => {
    console.log("Agregado al carrito:", detail.name, "Cantidad:", cantidad);
  };

  return (
    <div className="p-8 border rounded-lg shadow-md max-w-lg mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4">{detail.name}</h1>
      <img
        alt={detail.name}
        src={detail.img}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-600 mb-2">{detail.description}</p>
      <p className="font-semibold">
        Stock: {detail.stock} unidades disponibles
      </p>
      <p className="text-xl text-primary font-bold mb-6">
        Precio: ${detail.price},00
      </p>
      <ItemCount stock={detail.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
