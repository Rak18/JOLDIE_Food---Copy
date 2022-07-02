import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export const Navbar = ({ click }) => {
  const history=useHistory()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };


  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;

  return (
    <nav className="navbar">
    <div className="navbar__logo">
    <Link to="/"> 
     <h2>JOLDIE <span>Food</span></h2> </Link>
     
    </div>
    <ul className="navbar__links">
      <li>

      {
      currentUser ? (
                <Link  to ="/" >
                  <li> {currentUser.name} </li>
                    </Link > ) : ( <> <li>
      <button onClick={()=>history.push('/login')} className="login_btn">Login</button>
      </li> </>)
}
                      {/* <NavDropdown.Item>orders</NavDropdown.Item> */}
                    {/* </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "} */}
         
        <Link to="/cart" className="cart__link">
          <i className="fas fa-shopping-cart" style={{color:'#e67e22'}}></i>
          <span>
            Cart <span className="cartlogo__badge"> {getCartCount()}</span>
          </span>
        </Link>
        
      </li>
      {/* <li>
      <button onClick={()=>history.push('/login')} className="login_btn">Login</button>
      </li> */}
    </ul>

    <div className="hamburger__menu" onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
  );
};
