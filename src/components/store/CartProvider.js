import { useState } from "react";

const defaultState = {
  product: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = () => {};

const CartProvider = () => {
  const [cartState, setCartState] = useState(cartReducer, defaultState);
};

export default CartProvider;
