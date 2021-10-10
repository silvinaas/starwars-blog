import React, { useState, useEffect, useContext } from "react";
import Proptypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<div className="row justify-content-start">
				<img src="https://via.placeholder.com/800x600" className="col-4 img-fluid" alt="..." />

				<div className="col-4 ">
					<h1 className="display-4"> {store.planets[params.theid].name}</h1>
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
					<div className="col-2 text-danger">Name</div>
					<div className="col-2 text-danger">Birth year</div>
					<div className="col-2 text-danger">Gender</div>
					<div className="col-2 text-danger">Height</div>
					<div className="col-2 text-danger">Skin color</div>
					<div className="col-2 text-danger">Eye color</div>
				</div>
				<div className="row">
					<div className="col-2 text-danger">{store.planets[params.theid].name}</div>
					<div className="col-2 text-danger">{store.planets[params.theid].birth_year}</div>
					<div className="col-2 text-danger">{store.planets[params.theid].gender}</div>
					<div className="col-2 text-danger ">{store.planets[params.theid].height}</div>
					<div className="col-2 text-danger">{store.planets[params.theid].skin_color}</div>
					<div className="col-2 text-danger">{store.planets[params.theid].eye_color}</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planeta.propTypes = {
	match: Proptypes.object
};
