import React from 'react';
import logo from '../../assets/img/foodloop-transparent.png'
import './style.scss';

function Footer() {
    return (
        
        <div className="Footer">
            <a href="/">
                <img src={logo} alt="foodloop logo" className="img-footer" />
            </a>
            <p> © Copyright 2020 - FoodLoop - All rights reserved FoodLoop </p>
        </div>
    );
}

export default Footer;