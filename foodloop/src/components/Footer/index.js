import React from 'react';
import logo from '../../assets/img/foodloop-transparent.png'
import './style.scss';

function Footer() {
    return (
        <div className="Footer">
            <a href="/">
                <img src={logo} alt="foodloop logo" />
            </a>
            <p>
                Orgulhosamente criado por Mini, segue lá no twitter (tenho 2)!
            {' '}
                <a href="/"></a>
            </p>
        </div>
    );
}

export default Footer;