import classes from "./CartItem.module.css";
import ChangeForm from "../../UI/ChangeForm/ChangeForm";

const CartItem = (props) => {
  const { id, name, price, amount } = props.item;
  //id, name, price, amount

  //Increament Handler

  //Decreament Handler

  return (
    <li key={id} className={classes.itemContainer}>
      <div className={classes.summary}>
        <h3>{name}</h3>
        <div>
          <span>$ {price}</span>
        </div>
      </div>
      <div className={classes.amount}>
        <ChangeForm id={id} amount={amount} />
      </div>
    </li>
  );
};

export default CartItem;
