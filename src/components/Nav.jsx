import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">
						<i className="material-icons">home</i>
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/dashboard">
								<i className="material-icons">list</i>
								Dashboard
							</Link>
						</li>
						<li>
							<Link to="/register">
								<i className="material-icons">person</i>Register
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
