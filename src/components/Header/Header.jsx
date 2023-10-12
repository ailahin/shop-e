import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="header-container">
         <div className="nav-logo ">
            <img src={logo} alt="logo" />
         </div>

         <div className="nav-button">
            <Link to="orders">

               Orders
            </Link>
            <Link to="manage-inventory">

               Manage Inventory
            </Link>
            <Link to="review">
               Review
            </Link>
            <Link to="login">
               Log in
            </Link>
         
         </div>


      </div>
   );
};

export default Header;

