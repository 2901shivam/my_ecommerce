import React from "react";
import { Container, Navbar,Dropdown, Badge,Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand className=".mb3">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={props.onShowcart}>
           {/* <GiShoppingCart color='white' fontSize='25px'/> */}
            <Badge>{20}</Badge>
          </Dropdown.Toggle>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
