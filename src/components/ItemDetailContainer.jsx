import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => setDetail(res.find((prod) => prod.id === id)))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container mx-auto py-10">
      {detail.id ? (
        <ItemDetail detail={detail} />
      ) : (
        <p className="text-center italic">Buscando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
