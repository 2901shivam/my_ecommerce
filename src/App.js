import React,{useContext} from "react";
import Header from "./componenets/Navbar/Header";
import Footer from "./componenets/Footer/Footer";
import BodyContent from "./componenets/Body/BodyContent";
import Cart from "./componenets/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import About from "./componenets/Navbar/About";
import Home from "./componenets/Navbar/Home";
import Contact from "./componenets/Navbar/Contact";
import ProductDetails from "./componenets/Body/ProductDetails";
import AuthForm from "./componenets/Login/AuthForm";
import { myAuthentication } from "./contexApi/AuthenticationContex";

function App() {
  const authCtx= useContext(myAuthentication);
 const userIsLogedin = authCtx.userIsLogedin;
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
        <Route path="/" exact element={<Home/>}/>
        {userIsLogedin && <Route path="/store" element={<BodyContent/>}/>}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<AuthForm/>}/>
       {userIsLogedin&& <Route path="/product/:id" element={<ProductDetails/>}/>}
      <Route path="*" element={<Navigate to="/login"/>}/> 
      </Routes>
      {userIsLogedin && cartitems && <Cart onClose={hideCartHandler} />}
      {/* <BodyContent /> */}
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
