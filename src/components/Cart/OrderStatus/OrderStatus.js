import classes from "./OrderStatus.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../../store/showCart-slice";

const OrderStatus = (props) => {
  const { hideModal, status, orderId } = props;

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  const successOrder = (
    <>
      <AiOutlineCheckCircle
        className={`${classes.titleIcon} ${classes.success}`}
      />
      <div className={classes.status}>Ordered successfully</div>
      <div>order number: {orderId}</div>
    </>
  );

  const failOrder = (
    <>
      <AiOutlineCloseCircle
        className={`${classes.titleIcon} ${classes.fail}`}
      />
      <div className={classes.status}>Order failed</div>
    </>
  );

  const unknownError = (
    <>
      <AiOutlineExclamationCircle
        className={`${classes.titleIcon} ${classes.unknown}`}
      />
      <div className={classes.status}>Unknown Error</div>
    </>
  );

  return (
    <Overlay onClose={closeCartHandler}>
      <div className={classes.container}>
        <div className={classes.title}>
          {status === "success"
            ? successOrder
            : status === "fail"
            ? failOrder
            : unknownError}
        </div>
      </div>
    </Overlay>
  );
};
export default OrderStatus;
