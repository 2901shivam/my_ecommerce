import React,{useContext} from "react";
import { Container, Navbar,Dropdown, Badge,Nav,} from "react-bootstrap";
import { myContext } from "../../contexApi/Contex";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { myAuthentication } from "../../contexApi/AuthenticationContex";

const Header = (props) => {
  const {cart} = useContext(myContext);
 const{userIsLogedin}= useContext(myAuthentication);
  let numberOfCartItems= cart.length;
  return (
    <Navbar className="myNav" bg="dark" variant="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand className=".mb3">
        <Nav className="me-auto navTitles">
        <div className="innerNavTitles">
            <NavLink to='/Home'>Home</NavLink>
            {userIsLogedin &&<NavLink to='/store'>Store</NavLink>}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/Login'>Login</NavLink>
        </div>
            
          </Nav>
        </Navbar.Brand>
        <Dropdown>
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
