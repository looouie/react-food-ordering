import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import baking from "../../assets/baking.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <p>Louie's Bakery</p>
        <HeaderCart />
      </header>
      <div className={classes.headerImage}>
        <img className={classes.desktopImage} src={baking} alt="HeaderImage" />
      </div>
    </>
  );
};

export default Header;
