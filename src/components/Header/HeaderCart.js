import classes from "./HeaderCart.module.css";
import { BsCart4 } from "react-icons/bs";
import { useState, useEffect } from "react";

const HeaderCart = (props) => {
  const { onClick, totalAmount } = props;
  const [bumpy, setBumpy] = useState(false);

  useEffect(() => {
    if (totalAmount === 0) {
      return;
    }
    setBumpy(true);

    const timer = setTimeout(() => {
      setBumpy(false);
    }, 400);

    return () => {};
  }, [totalAmount]);

  const bumpEffect = bumpy ? classes.bump : "";

  return (
    <button className={classes.button} onClick={onClick}>
      <BsCart4 className={classes.cartIcon} />
      <span className={classes.badge + " " + bumpEffect}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCart;
