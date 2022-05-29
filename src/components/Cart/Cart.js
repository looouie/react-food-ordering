import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartList from "./CartList/CartList";
import CartForm from "./CartForm/CartForm";
import Loader from "../UI/Loader/Loader";

import { placeOrder } from "../../lib/api";
import useHttp from "../../hooks/UseHttp";

import { cartActions } from "../../store/cart-slice.js";

const Cart = (props) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const { sendRequest, status } = useHttp(placeOrder);

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

  const submitHandler = (details) => {
    const body = {
      products: products,
      customerDetail: details,
    };
    setIsLoading(true);
    sendRequest(body);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(cartActions.reset());
    }, 2000);
  };

  // Todo: add a successful screen
  return (
    <>
      {step1 && <CartList hideModal={hideCartList} showNext={showCartForm} />}
      {step2 && <CartForm hideModal={hideCartForm} onSubmit={submitHandler} />}
      {isLoading && <Loader />}
    </>
  );
};
export default Cart;
