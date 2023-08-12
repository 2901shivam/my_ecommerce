import Header from "./componenets/Navbar/Header";
import Footer from "./componenets/Footer/Footer";
import BodyContent from "./componenets/Body/BodyContent";
import Cart from "./componenets/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componenets/Navbar/About";
import Home from "./componenets/Navbar/Home";
import Contact from "./componenets/Navbar/Contact";
import ProductDetails from "./componenets/Body/ProductDetails";
import AuthForm from "./componenets/Login/AuthForm";
import { AuthenticationContex } from "./contexApi/AuthenticationContex";

function App() {
  const [cartitems, setCartItems] = useState(false);

  const cartshownhandeler = () => {
    setCartItems(true);
  };
  const hideCartHandler = () => {
    setCartItems(false);
  };
  return (
    <AuthenticationContex>
    <BrowserRouter>
      <Header onShowcart={cartshownhandeler} />
      <Routes>
        <Route path="/store" element={<BodyContent/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
     
      {cartitems && <Cart onClose={hideCartHandler} />}
      {/* <BodyContent /> */}
      
      <Footer />
    </BrowserRouter>
    </AuthenticationContex>
  );
}

export default App;
