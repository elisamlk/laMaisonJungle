import "./App.css";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer/>
    </div>
  );
}

export default App;
