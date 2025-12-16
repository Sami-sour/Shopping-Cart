import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartStoreItems } from "../store/CartStoreContext";

const NavBar = () => {
  const { cart } = useContext(CartStoreItems);

  return (
    <div className="navbar">
      <div className="header">Zephyra</div>

      <div className="nav-links">
        <Link to="/">
          Home <IoHome />
        </Link>
        <Link to="/shopping">
          Shop <FaShopify />
        </Link>
        <Link to="/Cart" className="cart-link">
          Cart <FaCartShopping />
          {cart.length > "" && (
            <span className="add-cart-number">{cart.length}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
