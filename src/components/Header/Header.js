import classes from "./Header.module.css";
import headerImage from "../../assets/baking.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Louie's Bakery</h1>
      </header>
      <div className={classes.headerImage}>
        <img src={headerImage} alt="HeaderImage" />
      </div>
    </>
  );
};

export default Header;
