import CartWidget from "./CartWidget";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import MobileMenuBtn from "./MobileMenuBtn";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <MobileMenuBtn />
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavMenu />
        </ul>
      </div>
      <div className="navbar-end">
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
