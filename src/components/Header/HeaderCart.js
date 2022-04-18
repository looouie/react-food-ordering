import classes from "./HeaderCart.module.css";
import { BsCart4 } from "react-icons/bs";

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <BsCart4 className={classes.cartIcon} />
      <span className={classes.badge}>{props.totalAmount}</span>
    </button>
  );
};

export default HeaderCart;
