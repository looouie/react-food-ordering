import ReactDOM from "react-dom";
import classes from "./Overlay.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const OverlayModal = (props) => {
  return (
    <div className={classes.overlayModal}>
      <div className={classes.overlayContent}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlay");

const Overlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <OverlayModal>{props.children} Test Content</OverlayModal>,
        portalEl
      )}
    </>
  );
};

export default Overlay;
