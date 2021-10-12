import React, { useState, useEffect, useContext } from "react";
import Proptypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<div className="row justify-content-start">
				<img src="https://via.placeholder.com/800x600" className="col-4 img-fluid" alt="..." />

				<div className="col-4 ">
					<h1 className="display-4"> {store.vehicles[params.theid].name}</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ultrices purus, at
						aliquet orci auctor nec. Praesent ut vestibulum ex. Cras at eros ac quam fringilla sagittis.
						Nullam eget feugiat justo, tincidunt dictum dolor.{" "}
					</p>
				</div>
			</div>
			<div className="container-fluid">
				<hr className="text-danger" size="5" width="100%" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-2 text-danger fw-bold">Name</div>
					<div className="col-2 text-danger fw-bold">Model</div>
					<div className="col-2 text-danger fw-bold">Manufacturer</div>
					<div className="col-2 text-danger fw-bold">Cost in credits</div>
					<div className="col-2 text-danger fw-bold">Length</div>
					<div className="col-2 text-danger fw-bold">Passengers</div>
				</div>
				<div className="row">
					<div className="col-2 text-danger">{store.vehicles[params.theid].name}</div>
					<div className="col-2 text-danger">{store.vehicles[params.theid].model}</div>
					<div className="col-2 text-danger">{store.vehicles[params.theid].manufacturer}</div>
					<div className="col-2 text-danger ">{store.vehicles[params.theid].cost_in_credits}</div>
					<div className="col-2 text-danger">{store.vehicles[params.theid].length}</div>
					<div className="col-2 text-danger">{store.vehicles[params.theid].passengers}</div>
				</div>
			</div>
			<br />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Vehiculo.propTypes = {
	match: Proptypes.object
};
