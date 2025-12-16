import logoReact from "../assets/react.svg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <a href="">
        <img src={logoReact} alt="Logo" />
      </a>
      <a href="">Nuevos</a>
      <a href="">Ofertas</a>
      <a href="">Más vendidos</a>
    </nav>
  );
};

export default Navbar;
