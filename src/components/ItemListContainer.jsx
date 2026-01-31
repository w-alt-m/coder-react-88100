import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
