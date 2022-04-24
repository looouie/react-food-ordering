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
    <ul>
      {cartList.map((item) => {
        return <CartItem item={item} />;
      })}
    </ul>
  );

  return (
    <Overlay onClose={closeCartHandler}>
      <h2 className={classes.title}>Shopping Cart</h2>
      {CartItems}
    </Overlay>
  );
};
export default Cart;
