import React,{useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import { myContext } from '../../contexApi/Contex'
import classes from './ProductDetails.module.css'

const ProductDetails = () => {
    const {productsArr, addItem}= useContext(myContext);
    const productId= useParams().id;
    const product1= productsArr.filter((item)=> item.id===productId);
    const product=product1[0];
    console.log(product);
  return (
    <>
  <div className={classes.cardWrapper}>
      <img className={classes.image} src={product.imageUrl} alt={product.title} />
      <div className={classes.zoom_area}>
      <div className={classes.moreImages}>
      <img className={classes.sampleImg} src={product.imageUrl} alt={product.title} />
      <img className={classes.sampleImg} src={product.imageUrl} alt={product.title} />
      <img className={classes.sampleImg} src={product.imageUrl} alt={product.title} />
      </div>
      </div>
      <div className={classes.details}>
      <h1 className={classes.title}>{product.title}</h1>
      <p className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius quam et nunc
      tincidunt, vel feugiat arcu consectetur.</p>
      <div className={classes.starRatings}>
          ★★★★☆
        </div>
        <ul className={classes.reviews}>
        <h3>Reviews:-</h3>
        <li>Nice product. Recommended!!</li>
        <li>Over-Priced.</li>
        <li>Value for money!</li>
        <p>Load more reviews</p>
        </ul>
        <p className={classes.price}>${product.price}</p>
        <div className={classes.btns}>
        <button className={classes.addBtn} type="button" onClick={()=>addItem(product.id)}>
              ADD TO CART
              </button>
        </div>
      </div>
    </div>
    <Link to='/store' className={classes.backBtn} type='button'>Go Back</Link>
    </>
  )
}

export default ProductDetails;
