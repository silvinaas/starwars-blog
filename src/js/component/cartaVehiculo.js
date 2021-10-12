import React, { useContext } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartaVehiculo = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombrevehiculo}</h5>
				<p className="card-text">
					Model : {props.modelo} <br />
					Cost in credits : {props.precio}
				</p>
				<Link to={"/vehiculo/" + props.indice}>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</Link>
				<button onClick={() => actions.addFavorite(props.nombrevehiculo)} className="btn btn-outline-warning">
					<i className="corazon far fa-heart" />
				</button>
			</div>
		</div>
	);
};

CartaVehiculo.propTypes = {
	indice: Proptypes.number,
	nombrevehiculo: Proptypes.string,
	modelo: Proptypes.string,
	precio: Proptypes.string
};
