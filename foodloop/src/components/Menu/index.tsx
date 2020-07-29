import React from 'react';
import logoMenu from '../../assets/images/foodloopmenulogo.png';
import { render } from '@testing-library/react';

function Menu() {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper">
					<img src={logoMenu} alt="Logo" />
					<ul className="right hide-on-med-and-down">
						<li><a href="/">HOME</a></li>
						<li><a href="/">OUR PROPOSAL</a></li>
                        <li><a href="/">PLANS</a></li>
						<li><a href="/">CONTACT</a></li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Menu;