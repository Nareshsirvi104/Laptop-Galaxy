import { useSelector } from "react-redux";
import React from "react";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className="btn mt-0 btn-light">
      <span role="img" aria-label="Cart" className="me-1">🛒</span>
      <span className="badge bg-secondary">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

