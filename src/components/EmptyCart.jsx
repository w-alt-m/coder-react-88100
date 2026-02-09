import { Link } from "react-router-dom";

const EmptyCart = () => {
  //la idea es invitar al usuario a comprar
  return (
    <div>
      <h1>El carrito está vacío</h1>
      <h2>Te invitamos a ver nuestros productos</h2>
      <Link to="/">Ver productos</Link>
    </div>
  );
};

export default EmptyCart;
