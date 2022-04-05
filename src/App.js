import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import croissant from "./assets/croissant.png";

function App() {
  return (
    <div className="App">
      <Header />
      <p>order now!</p>
      <Products />
    </div>
  );
}

export default App;
