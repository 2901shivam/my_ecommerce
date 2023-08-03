import React, { createContext,useState} from 'react'

const myContext=createContext();


const Contex = (props) => {
  
const productsArr = [
    {
      id:'prod1',
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id:'prod2',  
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },  
    {
        id:'prod3',  
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id:'prod4'  ,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

const[cart,setcart]=useState([]);

const addItem=(id)=>{
    const addProduct=productsArr.find((product)=>product.id===id);
    const indexofaddProduct=cart.find((product)=>product.id===id)
    if(indexofaddProduct){
        alert('Item is already present in the cart');
    }
    if(addProduct && !indexofaddProduct){
        setcart((prev)=>[...prev, addProduct]);
    }
}
const removeItem=(id)=>{
    setcart((prev)=>prev.filter((item)=>item.id!==id));
};

  return (
    <myContext.Provider value={{productsArr,cart,addItem,removeItem}}>
      {props.children}
    </myContext.Provider>
  )
}

export {Contex, myContext};
