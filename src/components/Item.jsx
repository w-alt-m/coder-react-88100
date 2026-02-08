import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm outline outline-base-200">
      <figure className="px-10 pt-10">
        <img
          src={producto.img}
          alt={producto.name}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{producto.name}</h2>
        <p className="font-bold text-lg">${producto.price}</p>
        <div className="card-actions">
          <Link to={`/item/${producto.id}`} className="btn btn-primary">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
