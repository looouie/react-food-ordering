import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import baking from "../../assets/baking.jpg";

import { useDispatch } from "react-redux";
import { showCartActions } from "../../store/showCart-slice";

const Header = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(showCartActions.setShowCart());
  };

  return (
    <>
      <header className={classes.header}>
        <p>Louie's Bakery</p>
        <HeaderCart onClick={showCartHandler} />
      </header>
      <div className={classes.headerImage}>
        <img className={classes.desktopImage} src={baking} alt="HeaderImage" />
      </div>
    </>
  );
};

export default Header;
