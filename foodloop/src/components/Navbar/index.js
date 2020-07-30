import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/foodloop-menu-logo.png';
import './style.scss';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="foodloop" />
            </Link>
        </nav>
    );
}

export default Menu;