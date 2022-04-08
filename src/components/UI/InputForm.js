import classes from "./InputForm.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRef } from "react";

const InputForm = ({ id }) => {
  const amountRef = useRef();

  const incrementHandler = () => {
    let updatedValue = parseInt(amountRef.current.value) + 1;
    document.getElementById(id).value = updatedValue;
  };

  const decrementHandler = () => {
    if (amountRef.current.value <= 0) {
      return;
    }
    let updatedValue = parseInt(amountRef.current.value) - 1;
    document.getElementById(id).value = updatedValue;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={classes.input}
        id={id}
        type="number"
        defaultValue="0"
        min="0"
        max="99"
        ref={amountRef}
      />

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
