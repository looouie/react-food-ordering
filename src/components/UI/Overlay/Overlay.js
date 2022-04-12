import classes from "./Overlay.module.css";

const Overlay = () => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
  };

  const OverlayModal = (props) => {
    return (
      <div className={classes.overlayModal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
};

export default Overlay;
