import classes from "./CartItem.module.css";

const CartItem = (props) => {
  //id, name, price, amount

  //Increament Handler

  //Decreament Handler

  return (
    <li>
      <div className="summary">
        <h2>name</h2>
        <div>
          <span>Price</span>
        </div>
      </div>
      <div className="input">
        <span>Amount</span>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
