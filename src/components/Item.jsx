import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl border border-base-200 rounded-3xl">
      <figure className="px-6 pt-6">
        <img
          src={producto.img}
          alt={producto.name}
          className="rounded-2xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center p-6">
        <h2 className="card-title text-xl text-primary font-bold">{producto.name}</h2>
        <p className="font-bold text-lg text-secondary">${producto.price}</p>
        <div className="card-actions w-full justify-center">
          <Link to={`/item/${producto.id}`} className="btn btn-primary btn-wide rounded-full text-white font-bold">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
