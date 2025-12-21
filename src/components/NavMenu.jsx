const NavMenu = () => (
  <>
    <li>
      <a>Inicio</a>
    </li>
    <li>
      <details>
        <summary>Perros</summary>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Alimento</a>
          </li>
          <li>
            <a>Juguetes</a>
          </li>
          <li>
            <a>Accesorios</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Gatos</summary>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Alimento</a>
          </li>
          <li>
            <a>Juguetes</a>
          </li>
          <li>
            <a>Accesorios</a>
          </li>
        </ul>
      </details>
    </li>
  </>
);

export default NavMenu;
