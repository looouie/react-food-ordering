import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, name, price, amount } = props.item;
  //id, name, price, amount

  //Increament Handler

  //Decreament Handler

  return (
    <li key={id}>
      <div className={classes.summary}>
        <h3>{name}</h3>
        <div>
          <span>{price}</span>
        </div>
      </div>
      <div className={classes.amount}>
        <input
          className={classes.input}
          id={id}
          type="number"
          defaultValue={amount}
          min="0"
          max="99"
        ></input>
      </div>
    </li>
  );
};

export default CartItem;
