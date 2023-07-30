import React from 'react'
import { Button } from 'react-bootstrap'


const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const Product = (props) => {
  return (
    <div>
      <ul>
        <li>
            {productsArr.map((product)=>{
                return(
                <li>
                    <img src={product.imageUrl}/>{product.title} {product.price}
                    <Button variant="primary">Add</Button>
                </li>);
            })}
        </li>
      </ul>
    </div>
  )
}

export default Product
