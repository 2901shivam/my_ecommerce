import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = (props) => {
  return (
    <Container>
      <Row>
        {productsArr.map((product,index) => {
          return (
            <Col xs={12} md={6} key={index}>
              <Card className="shadow-lg">
                <img src={product.imageUrl} alt={product.title} />
                <br /> 
                {product.price}
                <Button variant="primary">Add to cart</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
