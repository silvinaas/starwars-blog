import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4"> {store.people[params.theid].name}</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ultrices purus, at aliquet orci
				auctor nec. Praesent ut vestibulum ex. Cras at eros ac quam fringilla sagittis. Nullam eget feugiat
				justo, tincidunt dictum dolor.{" "}
			</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
