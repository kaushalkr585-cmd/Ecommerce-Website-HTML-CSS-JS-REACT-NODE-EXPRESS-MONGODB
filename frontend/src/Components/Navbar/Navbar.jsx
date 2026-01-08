import React, { useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
  const location = useLocation();
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>CLOTHSY</p>
      </div>

    <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
    <ul ref={menuRef} className="nav-menu">
        <li>
          <Link style={{textDecoration:'none'}} to="/">Shop</Link>
          {location.pathname === "/" && <hr />}
        </li>

        <li>
          <Link style={{textDecoration:'none'}} to="/mens">Men</Link>
          {location.pathname === "/mens" && <hr />}
        </li>

        <li>
          <Link style={{textDecoration:'none'}} to="/womens">Women</Link>
          {location.pathname === "/womens" && <hr />}
        </li>

        <li>
          <Link style={{textDecoration:'none'}} to="/kids">Kids</Link>
          {location.pathname === "/kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/') }}>Logout</button>
      :<Link style={{textDecoration:'none'}} to="/login">
          <button>Login</button>
        </Link>}
        

        <Link style={{textDecoration:'none'}} to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
