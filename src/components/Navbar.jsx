import logoReact from "../assets/react.svg";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center px-6 bg-slate-500">
      <a href="/" className="flex items-center">
        <img src={logoReact} alt="Logo" className="h-8 w-8" />
      </a>

      <div className="flex gap-6 mx-8 text-white">
        <a href="" className="hover:text-cyan-400">
          Nuevos
        </a>
        <a href="" className="hover:text-cyan-400">
          Ofertas
        </a>
        <a href="" className="hover:text-cyan-400">
          Más vendidos
        </a>
      </div>

      <div className="flex-1"></div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
