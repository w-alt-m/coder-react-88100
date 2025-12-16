import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 100);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
