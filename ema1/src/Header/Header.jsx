import React from 'react';
import "./Header.css";
import logo from "../images/Logo.svg"


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" /> 
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Shop">Order</a>
                <a href="/Shop">Inventory</a>
                <a href="/Login">Login</a>
            </div> 
        </div>
    );
};

export default Header;