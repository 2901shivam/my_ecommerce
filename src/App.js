import Header from "./componenets/Navbar/Header";
import Footer from "./componenets/Footer/Footer";
import BodyContent from "./componenets/Body/BodyContent";
import Cart from "./componenets/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componenets/Navbar/About";

function App() {
  const [cartitems, setCartItems] = useState(false);

  const cartshownhandeler = () => {
    setCartItems(true);
  };
  const hideCartHandler = () => {
    setCartItems(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about/" element={<About/>} />
      
        </Routes>

    <Header onShowcart={cartshownhandeler} /> 
      

      {cartitems && <Cart onClose={hideCartHandler} />}
      <BodyContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
