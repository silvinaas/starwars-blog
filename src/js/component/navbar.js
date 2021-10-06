import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-jedi-order fa-5x" />
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
							Favorites <span className="badge bg-secondary">0</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((favorito, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item" href="#">
											{favorito}
										</a>
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
