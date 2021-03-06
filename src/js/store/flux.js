const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));

				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));

				fetch("https://swapi.dev/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: name => {
				console.log("agregando favorito");
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			removeFavorite: indexfav => {
				console.log("quitando favorito", indexfav);
				const store = getStore();
				const filteredFav = store.favorites.filter((favorito, index) => {
					return index != indexfav;
				});
				setStore({ favorites: filteredFav });
			}
		}
	};
};

export default getState;
