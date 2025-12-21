import logoReact from "../assets/react.svg";
import CartWidget from "./CartWidget";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-petblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <a href="/" className="flex items-center gap-3">
          <img src={logoReact} alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-slate-800">
            Petshop <span className="text-petpink"> Perritos</span>
          </span>
        </a>

        <div className="hidden md:flex ml-8 gap-8 text-slate-800">
          <a href="" className="hover:text-petpink transition-colors">
            Nuevos
          </a>
          <a href="" className="hover:text-petpink transition-colors">
            Ofertas
          </a>
          <a href="" className="hover:text-petpink transition-colors">
            Más vendidos
          </a>
        </div>

        <div className="flex-1"></div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href=""
            className="px-4 py-2 bg-petpink text-white rounded-lg text-sm shadow-sm hover:opacity-95 mr-6"
          >
            Hacé tu compra
          </a>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
