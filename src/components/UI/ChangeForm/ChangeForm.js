import classes from "./ChangeForm.module.css";
import InputField from "../InputField/InputField";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ChangeForm = (props) => {
  const { id, amount } = props;
  const [currentAmount, setCurrentAmount] = useState(amount);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    setCurrentAmount((currentAmount) => currentAmount + 1);
    dispatch(cartActions.addOrIncrease({ id: id, amount: 1 }));
  };

  const decrementHandler = () => {
    if (!currentAmount || currentAmount <= 0) {
      return;
    } else {
      setCurrentAmount((currentAmount) => currentAmount - 1);
      dispatch(cartActions.reducerOrRemove({ id: id }));
    }
  };

  const onChangeHandler = (amount) => {
    setCurrentAmount(amount);
  };

  return (
    <form className={classes.form}>
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
    </form>
  );
};
export default ChangeForm;
