import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";

const ItemListContainer = ({ test }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello {test}!</h1>
    </>
  );
};

export default ItemListContainer;
