import classes from "./Cart.module.css";
import Overlay from "../UI/Overlay/Overlay";
import CartItem from "./CartItem/CartItem";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/showCart-slice";
import { useState } from "react";

const Cart = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const cartList = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  const submitHandler = () => {
    console.log("order has been placed");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 50000);
  };

  const CartItems = (
    <ul>
      {cartList.map((item) => {
        return <CartItem item={item} />;
      })}
    </ul>
  );

  const cartIsEmpty = cartList.length === 0;

  const LoadingSpinner = (
    <div className={classes.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <Overlay onClose={closeCartHandler}>
      {}
      <div className={classes.container}>
        <div className={classes.title}>
          <BsCart4 className={classes.titleIcon} />
        </div>
        {cartIsEmpty ? (
          <span className={classes.empty}>Cart is empty</span>
        ) : (
          ""
        )}
        {!cartIsEmpty && CartItems}
        {!cartIsEmpty && (
          <>
            <div className={classes.total}>
              <span>Total Price: </span>
              <span className={classes.totalPrice}>$ {totalPrice}</span>
            </div>
            <div className={classes.buttons}>
              <button onClick={closeCartHandler}>Close</button>
              <button onClick={submitHandler}>Order</button>
            </div>
          </>
        )}
      </div>
      <div className={classes.container}>{LoadingSpinner}</div>
    </Overlay>
  );
};
export default Cart;
