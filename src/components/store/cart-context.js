import { createContext } from "react";

const CartContext = createContext({
  product: [],
  totalAmount: 0,
  totalPrice: 0,
  addToCart: (product) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
