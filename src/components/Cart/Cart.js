import { useState } from "react";
import { useSelector } from "react-redux";

import CartList from "./CartList/CartList";
import CartForm from "./CartForm/CartForm";
import Loader from "../UI/Loader/Loader";

import { placeOrder } from "../../lib/api";
import useHttp from "../../hooks/UseHttp";

const Cart = (props) => {
  const products = useSelector((state) => state.cart.products);

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { sendRequest, data, error, status } = useHttp(placeOrder);

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

  const submitHandler = (details) => {
    const body = {
      products: products,
      customerDetail: details,
    };
    sendRequest(body);
    console.log(details);
    console.log("request sent");
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
