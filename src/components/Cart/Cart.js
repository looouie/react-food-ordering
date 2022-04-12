import classes from "./Cart.module.css";
import Overlay from "../UI/Overlay/Overlay";

const Cart = (props) => {
  return <Overlay onClose={props.onClose}></Overlay>;
};
export default Cart;
