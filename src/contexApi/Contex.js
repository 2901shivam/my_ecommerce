import React, { createContext,useState,useEffect} from 'react'
import axios from 'axios';

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

const addItem= async(id)=>{
  try{
    const addProduct=productsArr.find((product)=>product.id===id);
    const indexofaddProduct=cart.find((product)=>product.id===id)
    if(indexofaddProduct){
        alert('Item is already present in the cart');
    }
    if(addProduct && !indexofaddProduct){
      const userEmail= localStorage.getItem("email");
      const res= await axios.post(`https://crudcrud.com/api/20823ae04eb74c8bbe6c297505217feb/user${userEmail}`,addProduct)
      console.log(res.data); 
        setcart((prev)=>[...prev, addProduct]);
    }
  }catch(er){
    console.log("Product not added - " + er);
  }
}

const removeItem = async (itemid, id)=>{
  try{
    setcart((prevCart)=> prevCart.filter((item)=>item.id!==itemid));
    const userMail= localStorage.getItem('email');
    await axios.delete(`https://crudcrud.com/api/20823ae04eb74c8bbe6c297505217feb/user${userMail}/${id}`)
 } catch(err){
    console.log("Item not removed- " + err);
  }     
      }

      useEffect(()=>{
        const fetchItems= async()=>{
          try{
            const userMail= localStorage.getItem('email');
           const response= await axios.get(`https://crudcrud.com/api/20823ae04eb74c8bbe6c297505217feb/user${userMail}`);
          setcart(response.data);
          }catch(err){
            console.log("Fetch Items failed- " + err);
          }
        }
        fetchItems();
      },[])
  return (
    <myContext.Provider value={{productsArr,cart,addItem,removeItem}}>
      {props.children}
    </myContext.Provider>
  )
}

export {Contex, myContext};
