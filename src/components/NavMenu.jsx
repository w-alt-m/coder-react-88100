import { Link } from "react-router-dom";

const NavMenu = () => (
  <>
    <li>
      <Link to="/">Inicio</Link>
    </li>
    <li>
      <details>
        <summary>Perros</summary>
        <ul className="p-2 bg-base-100 z-50 w-40">
          <li>
            <Link to="/category/perros-alimento">Alimento</Link>
          </li>
          <li>
            <Link to="/category/perros-accesorios">Accesorios</Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Gatos</summary>
        <ul className="p-2 bg-base-100 z-50 w-40">
          <li>
            <Link to="/category/gatos-accesorios">Accesorios</Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <Link to="/category/juguetes">Juguetes</Link>
    </li>
    <li>
      <Link to="/category/higiene">Higiene</Link>
    </li>
  </>
);

export default NavMenu;

