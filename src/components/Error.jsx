import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-4">
      <h1 className="text-6xl font-bold text-error">404</h1>
      <h2 className="text-3xl font-bold text-base-content">¡Ups! Ruta no encontrada</h2>
      <p className="text-lg text-base-content/70">Parece que te has perdido... 🐕</p>
      <Link className="btn btn-primary text-white rounded-full btn-wide shadow-md" to="/">
        Volver a Home
      </Link>
    </div>
  );
};

export default Error;
