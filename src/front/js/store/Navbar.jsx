Navbar.jsx

import React, { useContext } from "react";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const changeUser = () => {
		actions.setUser('Orlando')
		const message = {
			text: 'Hemos cambiado de usuario',
			visible: true,
			background:'warning'
		}
		actions.setAlert(message)
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
				</Link>
				<div className="ml-auto">
					<Link to="/contacts">
						<button className="btn btn-primary">Contacts</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};