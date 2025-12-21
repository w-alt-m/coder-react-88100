import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <div className="flex items-center gap-3 text-2xl">
      <FaCartShopping />
      <span className="text-red-500 text-2xl">5</span>
    </div>
  );
};

export default CartWidget;
