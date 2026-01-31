import { FaDog } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl">
      <FaDog />
      Petshop Perritos
    </Link>
  );
};

export default Logo;

