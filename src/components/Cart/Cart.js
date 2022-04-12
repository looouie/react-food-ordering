import classes from "./Cart.module.css";
import Overlay from "../UI/Overlay/Overlay";
import { useDispatch } from "react-redux";
import { showCartActions } from "../../store/showCart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  return <Overlay onClose={closeCartHandler} />;
};
export default Cart;
