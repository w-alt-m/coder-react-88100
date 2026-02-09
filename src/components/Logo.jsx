import { FaDog } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl text-primary font-bold hover:bg-transparent">
      <FaDog className="text-2xl" />
      <span className="hidden sm:inline">Petshop Perritos</span>
    </Link>
  );
};

export default Logo;

