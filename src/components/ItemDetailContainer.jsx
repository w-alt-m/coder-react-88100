import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => setDetail(res.find((prod) => prod.id === id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container mx-auto py-10">
      {loading ? <Loader /> : <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
