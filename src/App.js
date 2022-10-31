import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import "./style/Layout.css";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
