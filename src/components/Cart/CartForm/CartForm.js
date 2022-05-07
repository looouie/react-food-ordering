import classes from "./CartForm.module.css";
import Overlay from "../../UI/Overlay/Overlay";

const CartForm = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let dd = tomorrow.getDate();
  let mm = tomorrow.getMonth() + 1;
  const yyyy = tomorrow.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  let earlistDate = yyyy + "-" + mm + "-" + dd;

  const hours = [];
  for (let hour = 9; hour <= 19; hour++) {
    hours.push(hour);
  }

  const minutes = [];
  for (let minute = 0; minute <= 59; minute += 10) {
    minutes.push(minute);
  }

  // handle submit
  // dispatch hideCart Action
  // loader
  // dummy message show "order successfully - comfirm with sms etc."
  const submitHandler = (event) => {
    console.log(event);
  };
  // dispatch hideCart Action
  const hideCartHandler = () => {
    console.log("hide");
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
            <input type="date" id="date" min={earlistDate} required></input>
          </div>
          <div className={classes.formItem}>
            <label htmlFor="time">Pick up Time:</label>
            <div className={classes.options}>
              <select name="time" id="time">
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select name="minute" id="miunte">
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.buttons}>
            <button onClick={submitHandler}>Submit</button>
            <button onclick={hideCartHandler}>Cancel</button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default CartForm;
