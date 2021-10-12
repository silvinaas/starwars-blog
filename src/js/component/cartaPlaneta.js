import React, { useContext } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartaPlaneta = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombreplaneta}</h5>
				<p className="card-text">
					Population : {props.poblacion} <br />
					Terrain : {props.terreno}
				</p>
				<Link to={"/planeta/" + props.indice}>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</Link>
				<button onClick={() => actions.addFavorite(props.nombreplaneta)} className="btn btn-outline-warning">
					<i className="corazon far fa-heart" />
				</button>
			</div>
		</div>
	);
};

CartaPlaneta.propTypes = {
	indice: Proptypes.number,
	nombreplaneta: Proptypes.string,
	poblacion: Proptypes.string,
	terreno: Proptypes.string
};
