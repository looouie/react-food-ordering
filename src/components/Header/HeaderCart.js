import classes from "./HeaderCart.module.css";
import { BsCart4 } from "react-icons/bs";

const HeaderCart = () => {
  return (
    <button>
      <BsCart4 className={classes.cartIcon} />
    </button>
  );
};

export default HeaderCart;
