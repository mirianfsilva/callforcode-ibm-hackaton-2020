import React from 'react';
import { Link } from 'react-router-dom';
import logoMenu from '../../assets/images/foodloopmenulogo.png';
import './style.scss';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <div className="container">
                <img className="Logo" src={logoMenu} alt="foodloop logo" />
                {/* <Button className="ButtonLink">
                    Login
                </Button> */}
            </div>
        </nav>
    );
}

export default Menu;