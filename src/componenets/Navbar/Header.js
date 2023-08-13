import React,{useContext} from "react";
import { Container, Navbar,Dropdown, Badge,Nav,} from "react-bootstrap";
import { myContext } from "../../contexApi/Contex";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { myAuthentication } from "../../contexApi/AuthenticationContex";

const Header = (props) => {
  const navigate =useNavigate();
  const {cart} = useContext(myContext);
 const authCtx= useContext(myAuthentication);
 const userIsLogedin = authCtx.userIsLogedin;
  let numberOfCartItems= cart.length;

  const handleLogoutClick=()=>{
    authCtx.logoutHandler();
     navigate('/login');
  }
  return (
    <Navbar className="myNav" bg="dark" variant="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand className=".mb3">
        <Nav className="me-auto navTitles">
        <div className="innerNavTitles">
            <NavLink to='/'>Home</NavLink>
            {<NavLink to='/store'>Store</NavLink>}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
           {!userIsLogedin&& <NavLink to='/login'>Login</NavLink>}
            {userIsLogedin &&<button onClick={handleLogoutClick}>Logout</button>}
        </div>
            
          </Nav>
        </Navbar.Brand>
        <Dropdown>
          {userIsLogedin && <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={props.onShowcart}>
           {/* <GiShoppingCart color='white' fontSize='25px'/> */}
            <Badge>{numberOfCartItems}</Badge>
          </Dropdown.Toggle>}
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
