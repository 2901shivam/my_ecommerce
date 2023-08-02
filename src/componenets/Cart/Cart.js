import React,{useState} from 'react'
import Modal from '../../UI/Modal'
import "./Cart.css";

const cartElements = [

    {id:"prod1",
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {id:"prod2",
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {id:"prod3",
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    },
    { id:"prod4",
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    
    ]
const Cart = (props) => {
  const [cartItems, setCartItems]= useState(cartElements);

  const removeProductHandler=(prodId)=>{
    setCartItems((prevItem)=> prevItem.filter((item)=> item.id!==prodId));
  }

    return(
      <Modal onClose={props.onClose}>
      <div className='headingContainer'>
        <div className='heading'>
          <h1><u>TITLE</u></h1>
          <h1><u>PRICE</u></h1>
          <h1><u>QUANTITY</u></h1>
        </div>
      </div>
      <ul>
      {cartItems.map((item)=>{ 
      return (<li className='prodList' key={item.id}>
      <div><img className="image" src={item.imageUrl} alt={item.title}/></div>
      <div className='title'>{item.title}</div>
      <div className='price'>{item.price}</div>   
      <div className='quantity'>{item.quantity}</div>
      <button className='removeBtn' onClick={()=>removeProductHandler(item.id)}>Remove</button>
      </li>)
    })}
      <button className='closeBtn' onClick={props.onClose}>Close Cart</button>
      </ul>
      </Modal>
    )
}

export default Cart
