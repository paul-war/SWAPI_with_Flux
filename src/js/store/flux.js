const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
            people: [],
            selectPeople: [],
			favorites: [],
            selectFavorites: [],
		},
		actions: {
            getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
			getPlanets: async () => {
                const store = getStore();
                if (localStorage.getItem("planets") === null) {
                    const response = await fetch(`https://swapi.dev/api/planets`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ planets: responseJSON.results, });

                    localStorage.setItem(`planets`, JSON.stringify(store.planets));
                    let storage = localStorage.getItem("planets");
                } else {
                    setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
                }
            },
            getPeople: (people) => { setStore({ selectPeople: people, }); },
			getPeoples: async () => {
                const store = getStore();
                if (localStorage.getItem("people") === null) {
                    const response = await fetch(`https://swapi.dev/api/people`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ people: responseJSON.results, });

                    localStorage.setItem(`people`, JSON.stringify(store.people));
                    let storage = localStorage.getItem("people");
                } else {
                    setStore({ people: JSON.parse(localStorage.getItem("people")), });
                }
            },
            addFavorite: ({id, name}, favorites) => {
                console.log("entró", {id, name});
                setStore({ favorites: [...favorites, {name}]});
            },

            deleteFavorite: ({id, name}, favorites) => {
                console.log("pedido de baja", {id, name});
                const updatedFavorites = favorites.filter((favorite) => favorite.name !== name);
                setStore({ favorites: updatedFavorites });
            }

		}
	};
};

export default getState;
