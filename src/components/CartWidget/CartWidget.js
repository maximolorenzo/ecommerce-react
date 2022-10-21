import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContex } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCartContex();
  return (
    <div className="flex justify-evenly items-center">
      <div className="pr-2">
        <FaShoppingCart />
      </div>
      <p>{totalQuantity()}</p>
    </div>
  );
};

export { CartWidget };
