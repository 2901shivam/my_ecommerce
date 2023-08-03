import React,{useContext} from "react";
import { Container, Navbar,Dropdown, Badge,Nav } from "react-bootstrap";
import { myContext } from "../../contexApi/Contex";
import "./Navbar.css";

const Header = (props) => {
  const {cart} = useContext(myContext);
  let numberOfCartItems= cart.length;
  return (
    <Navbar className="myNav" bg="dark" variant="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand className=".mb3">
        <Nav className="me-auto navTitles">
        <div className="innerNavTitles">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </div>
            
          </Nav>
        </Navbar.Brand>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={props.onShowcart}>
           {/* <GiShoppingCart color='white' fontSize='25px'/> */}
            <Badge>{numberOfCartItems}</Badge>
          </Dropdown.Toggle>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
