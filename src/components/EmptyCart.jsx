import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-4 px-4">
      <h1 className="text-4xl font-bold text-primary mb-2">El carrito está vacío 🐾</h1>
      <h2 className="text-xl text-base-content/70">¿Por qué no le das un vistazo a nuestros productos?</h2>
      <Link to="/" className="btn btn-primary text-white rounded-full mt-6 btn-lg shadow-md">
        Ver productos
      </Link>
    </div>
  );
};

export default EmptyCart;
