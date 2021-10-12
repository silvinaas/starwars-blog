import React, { useState, useEffect, useContext } from "react";
import Proptypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<div className="row justify-content-start">
				<img src="https://via.placeholder.com/800x600" className="col-4 img-fluid" alt="..." />

				<div className="col-4 ">
					<h1 className="display-4"> {store.people[params.theid].name}</h1>
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
					<div className="col-2 text-danger fw-bold">Birth year</div>
					<div className="col-2 text-danger fw-bold">Gender</div>
					<div className="col-2 text-danger fw-bold">Height</div>
					<div className="col-2 text-danger fw-bold">Skin color</div>
					<div className="col-2 text-danger fw-bold">Eye color</div>
				</div>
				<div className="row">
					<div className="col-2 text-danger">{store.people[params.theid].name}</div>
					<div className="col-2 text-danger">{store.people[params.theid].birth_year}</div>
					<div className="col-2 text-danger">{store.people[params.theid].gender}</div>
					<div className="col-2 text-danger ">{store.people[params.theid].height}</div>
					<div className="col-2 text-danger">{store.people[params.theid].skin_color}</div>
					<div className="col-2 text-danger">{store.people[params.theid].eye_color}</div>
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

Single.propTypes = {
	match: Proptypes.object
};
