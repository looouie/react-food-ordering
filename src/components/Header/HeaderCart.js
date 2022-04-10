import classes from "./HeaderCart.module.css";
import { BsCart4 } from "react-icons/bs";

const HeaderCart = () => {
  return (
    <button className={classes.button}>
      <BsCart4 className={classes.cartIcon} />
      {/* <span>Cart</span> */}
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCart;
