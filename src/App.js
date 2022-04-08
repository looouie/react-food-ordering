import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import CartProvider from "./components/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <p>order now!</p>
      <Products />
    </CartProvider>
  );
}

export default App;
