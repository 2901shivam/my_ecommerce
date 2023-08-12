import React, { useContext } from "react";
import './Product.css';
import { Card, Container, Row, Col } from "react-bootstrap";
import { myContext } from "../../contexApi/Contex";
import { Link } from "react-router-dom";

const Product = (props) => {

 const {productsArr,addItem}= useContext(myContext)
  return (
    <Container className="main" >
      <Row>
        {productsArr.map((product,index) => {
          return (
            <Col xs={12} md={6} key={index} id={product.id} className="container">
            <Link to={`/product/${product.id}`}>
              <Card className="images">
                <img src={product.imageUrl} alt={product.title} />
                </Card>
                </Link>
                <div className="content">
                {product.price}
                <button className="button" onClick={()=>addItem(product.id)}>Add to cart</button>
                </div>              
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
