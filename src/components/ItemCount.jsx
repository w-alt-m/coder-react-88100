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
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="flex gap-4 items-center justify-center border p-2 rounded-lg">
        <button
          className="btn btn-circle btn-sm btn-outline"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="text-xl w-8 text-center">{count}</span>
        <button
          className="btn btn-circle btn-sm btn-outline"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-neutral w-full"
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
