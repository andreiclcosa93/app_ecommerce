import React from "react";
import { Link } from 'react-router-dom';

import image1 from '../assets/images/logo.png';
import image2 from '../assets/images/shopping-cart.png';
// import {ReactComponent as ShopCart} from '../assets/images/shopping-cart.svg';

import './Header.css';

function Header() {
    return (
        <div className="header bg-dark shadow-lg d-flex justify-content-between align-items-center px-5 py-3 mb-5">
            <div>
                < Link to="/">
                    <img src={image1} alt="" className="logo" /> 
                </Link>
                    <span className="logoName">AAn.</span>
            </div>
            <div>
                < Link to="/login" className="login">Login</Link>
                {/* <ShopCart /> */}
                <img src={image2} alt="" className="shopCart" />
            </div>
        </div>
    );
}

export default Header;