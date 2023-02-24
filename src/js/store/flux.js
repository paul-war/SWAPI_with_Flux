const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
            people: [],
            selectPeople: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => { getActions().changeColor(0, "green"); },
			loadSomeData: () => { /** fetch().then().then(data => setStore({ "foo": data.bar })) */ },
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
		}
	};
};

export default getState;
