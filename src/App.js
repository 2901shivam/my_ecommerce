

import Header from './componenets/Navbar/Header';
import Footer from './componenets/Footer/Footer';
import BodyContent from './componenets/Body/BodyContent';
import Cart from './componenets/Cart/Cart';
import { useState } from 'react';



function App() {
  const[cartitems,setCartItems]=useState(false);
  
  const cartshownhandeler=()=>{
    setCartItems(true);
  }
  const hideCartHandler=()=>{
    setCartItems(false)
  }
  return (
    <>
     <Header onShowcart={cartshownhandeler}/>
     {cartitems && <Cart onClose={hideCartHandler}/>}
     <BodyContent/>
     <Footer/>
    </>
  );
}

export default App;
