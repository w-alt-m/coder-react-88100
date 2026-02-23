import { Link, useLocation } from "react-router-dom";
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
        <Link to="/" className="font-bold text-lg hover:text-primary">
          Inicio
        </Link>
      </li>

      <li>
        <details name="nav-menu">
          <summary className="font-bold text-lg hover:text-primary">
            Perros
          </summary>
          <ul className="p-2 bg-base-100 z-50 w-44 shadow-xl border border-base-200 rounded-xl">
            <li>
              <Link
                to="/category/perros-alimento"
                className="hover:text-primary hover:bg-transparent"
              >
                Alimento
              </Link>
            </li>
            <li>
              <Link
                to="/category/perros-accesorios"
                className="hover:text-primary hover:bg-transparent"
              >
                Accesorios
              </Link>
            </li>
            <li>
              <Link
                to="/category/perros-juguetes"
                className="hover:text-primary hover:bg-transparent"
              >
                Juguetes
              </Link>
            </li>
            <li>
              <Link
                to="/category/perros-higiene"
                className="hover:text-primary hover:bg-transparent"
              >
                Higiene
              </Link>
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
              <Link
                to="/category/gatos-alimento"
                className="hover:text-primary hover:bg-transparent"
              >
                Alimento
              </Link>
            </li>
            <li>
              <Link
                to="/category/gatos-accesorios"
                className="hover:text-primary hover:bg-transparent"
              >
                Accesorios
              </Link>
            </li>
            <li>
              <Link
                to="/category/gatos-juguetes"
                className="hover:text-primary hover:bg-transparent"
              >
                Juguetes
              </Link>
            </li>
            <li>
              <Link
                to="/category/gatos-higiene"
                className="hover:text-primary hover:bg-transparent"
              >
                Higiene
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};

export default NavMenu;
