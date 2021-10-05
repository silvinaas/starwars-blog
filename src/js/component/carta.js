import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export const Carta = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">
					Gender: {props.genero} <br />
					Hair color: {props.colordepelo}
					<br />
					Eye color: {props.colordeojo}
				</p>
				<Link to={"/single/" + props.indice}>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</Link>
				<a href="#" className="btn btn-light border border-warning link-hover-dark">
					<i className="corazon far fa-heart" />
				</a>
			</div>
		</div>
	);
};

Carta.propTypes = {
	indice: Proptypes.number,
	nombre: Proptypes.string,
	genero: Proptypes.string,
	colordepelo: Proptypes.string,
	colordeojo: Proptypes.string
};
