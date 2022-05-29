import classes from "./OrderStatus.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../../store/showCart-slice";

const OrderStatus = (props) => {
  const { hideModal, status, orderNumber } = props;

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(showCartActions.setHideCart());
  };

  return (
    <Overlay onClose={closeCartHandler}>
      <div className={classes.container}>
        <div className={classes.title}>
          <AiOutlineCloseCircle className={classes.titleIcon} />
          <div className={classes.status}>Order successfully</div>
        </div>
      </div>
    </Overlay>
  );
};
export default OrderStatus;
