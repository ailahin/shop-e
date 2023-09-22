import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
   return (
      <div className="header-container">
         <div className="nav-logo ">
            <img src={logo} alt="logo" />
         </div>

         <div className="nav-button">
            <a href="/order">

               Order
            </a>
            <a href="/manage-inventory">

               Manage Inventory
            </a>
            <a href="/review">
               Review
            </a>
            <a href="/login">
               Log in
            </a>
         </div>


      </div>
   );
};

export default Header;
