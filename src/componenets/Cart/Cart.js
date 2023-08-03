import React,{useContext} from 'react'
import Modal from '../../UI/Modal'
import "./Cart.css";
import { myContext } from '../../contexApi/Contex';


const Cart = (props) => {
  const {cart, removeItem} = useContext(myContext);

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
      {cart.map((item)=>{ 
      return (<li className='prodList' key={item.id}>
      <div><img className="image" src={item.imageUrl} alt={item.title}/></div>
      <div className='title'>{item.title}</div>
      <div className='price'>{item.price}</div>   
      <div className='quantity'>{item.quantity}</div>
      <button className='removeBtn' onClick={()=>removeItem(item.id)}>Remove</button>
      </li>)
    })}
      <button className='closeBtn' onClick={props.onClose}>Close Cart</button>
      </ul>
      </Modal>
    )
}

export default Cart
