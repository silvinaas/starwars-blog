import React from "react";
import Proptypes from "prop-types";

export const CartaPlaneta = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombreplaneta}</h5>
				<p className="card-text">
					Population : {props.poblacion} <br />
					Terrain : {props.terreno}
					
				</p>
				<a href="#" className="btn btn-primary">
					Learn more!
				</a>
			</div>
		</div>
	);
};

CartaPlaneta.propTypes = {
    nombreplaneta: Proptypes.string,
	poblacion: Proptypes.string,
	terreno: Proptypes.string
	
};
