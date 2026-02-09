import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-center gap-4 bg-base-200 p-2 rounded-full w-full">
        <button
          className="btn btn-circle btn-sm btn-ghost text-xl text-primary"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="text-xl font-bold text-base-content w-8 text-center">{count}</span>
        <button
          className="btn btn-circle btn-sm btn-ghost text-xl text-primary"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary w-full rounded-full text-white font-bold"
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
