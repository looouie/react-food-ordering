import classes from "./Cart.module.css";
import Overlay from "../UI/Overlay/Overlay";
import CartItem from "./CartItem/CartItem";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/showCart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
      <div className={classes.container}>
        <div className={classes.title}>
          <BsCart4 className={classes.titleIcon} />
        </div>

        {CartItems}
        <div className={classes.total}>
          <span>Total Price: </span>
          <span className={classes.totalPrice}>$ {totalPrice}</span>
        </div>
      </div>
    </Overlay>
  );
};
export default Cart;
