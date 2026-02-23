import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavMenu = () => {
  const location = useLocation();

  useEffect(() => {
    document
      .querySelectorAll("details[open]")
      .forEach((detail) => detail.removeAttribute("open"));
  }, [location.pathname]);

  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `font-bold text-lg hover:text-primary ${isActive ? 'text-primary bg-base-200' : ''}`}
        >
          Inicio
        </NavLink>
      </li>

      <li>
        <details name="nav-menu">
          <summary className="font-bold text-lg hover:text-primary">
            Perros
          </summary>
          <ul className="p-2 bg-base-100 z-50 w-44 shadow-xl border border-base-200 rounded-xl">
            <li>
              <NavLink
                to="/category/perros-alimento"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Alimento
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/perros-accesorios"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Accesorios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/perros-juguetes"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Juguetes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/perros-higiene"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Higiene
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details name="nav-menu">
          <summary className="font-bold text-lg hover:text-primary">
            Gatos
          </summary>
          <ul className="p-2 bg-base-100 z-50 w-44 shadow-xl border border-base-200 rounded-xl">
            <li>
              <NavLink
                to="/category/gatos-alimento"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Alimento
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/gatos-accesorios"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Accesorios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/gatos-juguetes"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Juguetes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/gatos-higiene"
                className={({ isActive }) => `hover:text-primary hover:bg-transparent ${isActive ? 'text-primary font-bold' : ''}`}
              >
                Higiene
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};

export default NavMenu;
