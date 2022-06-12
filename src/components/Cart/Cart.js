import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartList from "./CartList/CartList";
import CartForm from "./CartForm/CartForm";
import Loader from "../UI/Loader/Loader";
import OrderStatus from "./OrderStatus/OrderStatus";

import { placeOrder } from "../../lib/api";

import { cartActions } from "../../store/cart-slice.js";

const Cart = (props) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [orderStatus, setOrderStatus] = useState(false);
  const [orderId, setOrderId] = useState("");

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

  const hideOrderStatus = () => {
    setOrderStatus(false);
  };

  const submitHandler = async (details) => {
    const body = {
      products: products,
      customerDetail: details,
    };
    setIsLoading(true);
    const data = await placeOrder(body);
    // await sendRequest(body);
    console.log(data);

    setIsLoading(false);

    if (data?.name) {
      setOrderId(data.name);
      dispatch(cartActions.reset());
    }
    setOrderStatus(true);
  };

  return (
    <>
      {step1 && <CartList hideModal={hideCartList} showNext={showCartForm} />}
      {step2 && <CartForm hideModal={hideCartForm} onSubmit={submitHandler} />}
      {isLoading && <Loader />}
      {orderStatus && (
        <OrderStatus
          hideModal={hideOrderStatus}
          status={orderId ? "success" : "fail"}
          orderId={orderId}
        />
      )}
    </>
  );
};
export default Cart;
