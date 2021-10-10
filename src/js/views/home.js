import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";
import { CartaPlaneta } from "../component/cartaPlaneta";
import { CartaVehiculo } from "../component/cartaVehiculo";

import "../../styles/home.scss";
import { retry } from "async";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<h2 className="text-danger">Characters</h2>
			<div className="row flex-row flex-nowrap scroll">
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
			<h2 className="text-danger">Planets</h2>
			<div className="row flex-row flex-nowrap">
				{store.planets.length > 0 ? (
					store.planets.map((planeta, indice) => {
						return (
							<CartaPlaneta
								indice={indice}
								key={indice}
								nombreplaneta={planeta.name}
								poblacion={planeta.population}
								terreno={planeta.terrain}
							/>
						);
					})
				) : (
					<p>cargando..</p>
				)}
			</div>
			<h2 className="text-danger">Vehicles</h2>
			<div className="row flex-row flex-nowrap">
				{store.vehicles.length > 0 ? (
					store.vehicles.map((vehiculo, indice) => {
						return (
							<CartaVehiculo
								indice={indice}
								key={indice}
								nombrevehiculo={vehiculo.name}
								modelo={vehiculo.model}
								precio={vehiculo.cost_in_credits}
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
