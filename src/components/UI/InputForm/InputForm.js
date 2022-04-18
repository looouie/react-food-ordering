import classes from "./InputForm.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import InputField from "../InputField/InputField";

const InputForm = ({ id, addToCart }) => {
  const [currentAmount, setCurrentAmount] = useState(0);

  const onChangeHandler = (amount) => {
    setCurrentAmount(amount);
  };
  const incrementHandler = () => {
    setCurrentAmount((currentAmount) => currentAmount + 1);
  };

  const decrementHandler = () => {
    if (!currentAmount || currentAmount <= 0) {
      return;
    } else {
      setCurrentAmount((currentAmount) => currentAmount - 1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addToCart(currentAmount);
    setCurrentAmount(0);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputField id={id} amount={currentAmount} onChange={onChangeHandler} />

      <div className={classes.amount}>
        <AiOutlinePlus
          className={classes.plusMinus}
          onClick={incrementHandler}
        />
        <AiOutlineMinus
          className={classes.plusMinus}
          onClick={decrementHandler}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default InputForm;
