import classes from "./InputForm.module.css";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const InputForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <HiOutlinePlus />
        <input id={props.id} type="text" defaultValue="0" />
        <HiOutlineMinus />
      </div>
      <button>Add</button>
    </form>
  );
};

export default InputForm;
