import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext); // to get the total cart items

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link className="nav-link" to="/">Home
        </Link>{menu==="home" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link className="nav-link" to="/mens">Men
        </Link>{menu==="mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link className="nav-link" to="/womens">Women
        </Link>{menu==="womens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link className="nav-link" to="/kids">Kids
        </Link>{menu==="kids" ? <hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <div className="login">
            <FaRegUserCircle size={30} />
            <h3>Login</h3>
          </div>
        </Link>
        <Link to="/cart">
          <FaCartPlus size={35} color="#626262" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
