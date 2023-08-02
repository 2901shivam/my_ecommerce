import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Body = (props) => {
  return (
    <Card style={{height:100 , width:'auto',background: 'antiquewhite', textalign:'center'}}>
    <Container >
      <Card.Body style={{textAlign:'center',color:'white'}}><h1>This is Generic</h1></Card.Body>
      </Container>
      </Card>
    
  )
}

export default Body
