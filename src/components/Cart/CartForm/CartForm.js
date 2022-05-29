import { useRef } from "react";
import { useDispatch } from "react-redux";
import { showCartActions } from "../../../store/showCart-slice";

import classes from "./CartForm.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import { getDate, getHour, getMinute } from "../../utility/getDateTime.js";

const CartForm = (props) => {
  const { hideModal, onSubmit } = props;

  const nameRef = useRef();
  const phoneRef = useRef();
  const pickupDateRef = useRef();
  const pickupHourRef = useRef();
  const pickupMinRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(pickupDateRef.current.value);

    if (
      nameRef.current.value.trim() === "" ||
      phoneRef.current.value.trim() === "" ||
      pickupDateRef.current.value.trim() === ""
    ) {
      return;
    }

    const details = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      pickupDate: pickupDateRef.current.value,
      pickupTime: `${pickupHourRef.current.value} : ${pickupMinRef.current.value}`,
    };

    // dispatch(showCartActions.setHideCart());
    hideModal();
    onSubmit(details);
    // console.log(details);
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
            <input type="text" id="name" ref={nameRef} required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="phone">Phone number:</label>
            <input type="number" id="phone" ref={phoneRef} required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="date">
              Pick up date: <br />
              (30 days from tomorrow)
            </label>
            <input
              type="date"
              id="date"
              min={getDate()}
              ref={pickupDateRef}
              required
            ></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="hour">Pick up Time:</label>
            <div className={classes.options}>
              <select name="hour" id="hour" ref={pickupHourRef}>
                {getHour().map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select name="minute" id="miunte" ref={pickupMinRef}>
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
