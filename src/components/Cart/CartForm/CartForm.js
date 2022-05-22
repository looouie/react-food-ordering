import { useDispatch } from "react-redux";
import { showCartActions } from "../../../store/showCart-slice";

import classes from "./CartForm.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import { getDate, getHour, getMinute } from "../../utility/getDateTime.js";

const CartForm = () => {
  const dispatch = useDispatch();

  // dispatch hideCart Action - okay
  // loader - habdle in Cart
  // dummy message show "order successfully - comfirm with sms etc."
  const submitHandler = (event) => {
    console.log(event);
    dispatch(showCartActions.setHideCart());
  };

  const hideCartHandler = () => {
    console.log("clicked");
    dispatch(showCartActions.setHideCart());
  };

  return (
    <Overlay>
      <div className={classes.container}>
        <h1>Customer Detail</h1>
        <form className={classes.form}>
          <div className={classes.formItem}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="phone">Phone number:</label>
            <input type="number" id="phone" required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="date">
              Pick up date: <br />
              (30 days from tomorrow)
            </label>
            <input type="date" id="date" min={getDate()} required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">Pick up Time:</label>
            <div className={classes.options}>
              <select name="time" id="time">
                {getHour().map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select name="minute" id="miunte">
                {getMinute().map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.buttons}>
            <button type="button" onClick={hideCartHandler}>
              Cancel
            </button>
            <button type="submit" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default CartForm;
