import classes from "./CartList.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import CartItem from "../CartItem/CartItem";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../../store/showCart-slice";
import { cartActions } from "../../../store/cart-slice";
import { useState } from "react";

const CartList = (props) => {
  const dispatch = useDispatch();
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [orderPlaced, setOrderPlaced] = useState(false);

  const cartList = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  //   const submitHandler = () => {
  //     setIsLoading(true);

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       dispatch(cartActions.reset());
  //       closeCartHandler();
  //     }, 3000);
  //   };

  const submitHandler = () => {};

  const CartItems = (
    <ul>
      {cartList.map((item) => {
        return <CartItem item={item} />;
      })}
    </ul>
  );

  const cartIsEmpty = cartList.length === 0;

  const LoadingSpinner = <div className={classes.loader}></div>;
  const orderHasBeenPlaced = <span>Order has been place</span>;

  return (
    <Overlay onClose={closeCartHandler}>
      {}
      <div className={classes.container}>
        <div className={classes.title}>
          <BsCart4 className={classes.titleIcon} />
        </div>
        {cartIsEmpty ? <div className={classes.empty}>Cart is empty</div> : ""}
        {/* {isLoading && LoadingSpinner}
        {orderPlaced && orderHasBeenPlaced} */}
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
    </Overlay>
  );
};
export default CartList;
