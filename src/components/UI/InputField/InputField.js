import classes from "./InputField.module.css";

const InputField = (props) => {
  const { id, amount, onChange } = props;

  const onChangeHandler = (event) => {
    const updatedAmount = parseInt(event.target.value);
    onChange(updatedAmount);
  };

  return (
    <input
      className={classes.input}
      id={id}
      type="number"
      value={amount}
      min="0"
      max="99"
      onChange={onChangeHandler}
    />
  );
};

export default InputField;
