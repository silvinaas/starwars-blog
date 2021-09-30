import React from "react";
import Proptypes from "prop-types";

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
				<a href="#" className="btn btn-primary">
					Learn more!
				</a>
			</div>
		</div>
	);
};

Carta.propTypes = {
	nombre: Proptypes.string,
	genero: Proptypes.string,
	colordepelo: Proptypes.string,
	colordeojo: Proptypes.string
};
