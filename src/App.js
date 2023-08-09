import Header from "./componenets/Navbar/Header";
import Footer from "./componenets/Footer/Footer";
import BodyContent from "./componenets/Body/BodyContent";
import Cart from "./componenets/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componenets/Navbar/About";
import Home from "./componenets/Navbar/Home";
import Contact from "./componenets/Navbar/Contact";

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
      <Header onShowcart={cartshownhandeler} />
      <Routes>
        <Route path="/store" element={<BodyContent/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
      {cartitems && <Cart onClose={hideCartHandler} />}
      {/* <BodyContent /> */}
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
