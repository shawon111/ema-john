import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <header className="header container">
            {/* logo */}
            <img src={logo} alt="" className="logo"/>
            <nav>
               <div className="navigation">
               <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
               </div>
            </nav>
        </header>
    );
};

export default Header;