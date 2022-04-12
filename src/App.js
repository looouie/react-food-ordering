import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
// import Overlay from "./components/UI/Overlay/Overlay";
import Cart from "./components/Cart/Cart";

function App() {
  const cart = useSelector((state) => state.showCart.showCart);

  return (
    <>
      {cart && <Cart />}
      <Header />
      <p className="p">order now!</p>
      <Products />
    </>
  );
}

export default App;
