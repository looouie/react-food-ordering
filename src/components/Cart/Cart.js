import classes from "./Cart.module.css";
import Overlay from "../UI/Overlay/Overlay";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/showCart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart.products);

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  const CartItems = (
    <ul className={classes.cartItems}>
      {cartList.map((item) => {
        return <CartItem />;
      })}
    </ul>
  );

  return <Overlay onClose={closeCartHandler}>{CartItems}</Overlay>;
};
export default Cart;
