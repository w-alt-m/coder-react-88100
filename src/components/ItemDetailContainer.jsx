import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [invalid, setInvalid] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({
            id: res.id,
            ...res.data(),
          });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (invalid) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Producto no encontrado
        </h2>
        <Link
          to="/"
          className="btn btn-primary btn-wide rounded-full text-white font-bold "
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      {loading ? <Loader /> : <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
