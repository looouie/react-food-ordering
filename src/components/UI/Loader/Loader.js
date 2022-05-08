import classes from "./Loader.module.css";
import Overlay from "../Overlay/Overlay";

const Loader = () => {
  return (
    <Overlay className={classes.container}>
      <div className={classes.loader}></div>
    </Overlay>
  );
};

export default Loader;
