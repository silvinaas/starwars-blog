import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

import "../../styles/home.scss";
import { retry } from "async";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<h2 className="text-danger">Characters</h2>
			<div className="row flex-row flex-nowrap">
				{store.people.length > 0 ? (
					store.people.map((personaje, indice) => {
						return (
							<Carta
								indice={indice}
								key={indice}
								nombre={personaje.name}
								genero={personaje.gender}
								colordepelo={personaje.hair_color}
								colordeojo={personaje.eye_color}
							/>
						);
					})
				) : (
					<p>cargando..</p>
				)}
			</div>
		</div>
	);
};
