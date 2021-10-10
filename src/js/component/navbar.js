import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/stwrs.png";
import "../../styles/home.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={starwars} className="starwarsimg" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((favorito, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item">{favorito}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
