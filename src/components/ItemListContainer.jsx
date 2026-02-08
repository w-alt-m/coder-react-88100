import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  return <>{loading ? <Loader /> : <ItemList data={data} />}</>;
};

export default ItemListContainer;
