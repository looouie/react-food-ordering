import classes from "./CartForm.module.css";
import Overlay from "../../UI/Overlay/Overlay";

const CartForm = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  let currentDate = yyyy + "-" + mm + "-" + dd;

  const hours = [];
  for (let hour = 9; hour <= 19; hour++) {
    hours.push(hour);
  }

  const minutes = [];
  for (let minute = 0; minute <= 60; minute + 5) {
    minutes.push(minute);
  }

  console.log(minutes);

  return (
    <Overlay>
      <div className={classes.container}>
        <h1>Customer Detail</h1>
        <form className={classes.form}>
          <div className={classes.formItem}>
            <label for="name">Name:</label>
            <input type="text" id="name" required></input>
          </div>
          <div className={classes.formItem}>
            <label for="phone">Phone number:</label>
            <input type="number" id="phone" required></input>
          </div>
          <div className={classes.formItem}>
            <label for="date">Pick up date: (Up to 30 days)</label>
            <input type="date" id="date" min={currentDate} required></input>
          </div>
          <div className={classes.formItem}>
            <label for="time">Pick up Time: (after 12:00 noon)</label>
            <select name="time" id="time">
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <select name="minute" id="miunte"></select>
          </div>
        </form>
      </div>
    </Overlay>
  );

  // pick up in store
  // delivery: preferable time - date selection
  // name
  // phone no.
  //
};

export default CartForm;
