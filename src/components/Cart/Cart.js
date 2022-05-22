import { useState } from "react";

import CartList from "./CartList/CartList";
import CartForm from "./CartForm/CartForm";
import Loader from "../UI/Loader/Loader";

const Cart = (props) => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [submitOrder, setSubmitOrder] = useState(false);

  const showCartList = () => {
    setStep2(true);
  };

  const showCartForm = () => {
    setStep2(true);
  };

  const hideCartList = () => {
    setStep1(false);
  };

  const hideCartForm = () => {
    setStep2(false);
  };

  const switchLoader = () => {
    setIsLoading(!isLoading);
  };

  const submitHandler = () => {
    setSubmitOrder(true);
  };

  // add a successful screen
  return (
    <>
      {step1 && <CartList hideModal={hideCartList} showNext={showCartForm} />}
      {step2 && <CartForm hideModal={hideCartForm} onSubmit={submitHandler} />}
      {isLoading && <Loader />}
    </>
  );
};
export default Cart;
