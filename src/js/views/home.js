import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

import "../../styles/home.scss";
import { retry } from "async";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.people.length > 0 ? (
				store.people.map((personaje, indice) => {
					return <Carta key={indice} nombre={personaje.name} />;
				})
			) : (
				<p>cargando..</p>
			)}
		</div>
	);
};
