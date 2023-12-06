const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characterList: [],
      character: [],
      planetList: [],
      planet: [],
      starshipList: [],
      starship: [],
      vehicleList: [],
      vehicle: [],
      filmList: [],
      favorites: [],
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
      getAll: async () => {
        try {
          getActions().getCharacters();
          getActions().getPlanets();
          getActions().getStarships();
          getActions().getVehicles();
          getActions().getFilms();
        } catch (e) {
          console.error(e);
        }
      },
      getCharacters: async () => {
        let url = "https://swapi.tech/api/people?page=1&limit=82";
        try {
          const response = await fetch(url);
          let data = await response.json();
          setStore({ characterList: data.results });
        } catch (e) {
          console.error(e);
        }
      },
      getPlanets: async () => {
        let url = "https://swapi.tech/api/planets?page=1&limit=60";
        try {
          const response = await fetch(url);
          let data = await response.json();
          setStore({ planetList: data.results });
        } catch (e) {
          console.error(e);
        }
      },
      getStarships: async () => {
        let url = "https://swapi.tech/api/starships?page=1&limit=36";
        try {
          const response = await fetch(url);
          let data = await response.json();
          setStore({ starshipList: data.results });
        } catch (e) {
          console.error(e);
        }
      },
      getVehicles: async () => {
        let url = "https://swapi.tech/api/vehicles?page=1&limit=39";
        try {
          const response = await fetch(url);
          let data = await response.json();
          setStore({ vehicleList: data.results });
        } catch (e) {
          console.error(e);
        }
      },
      getFilms: async () => {
        let url = "https://swapi.tech/api/films";
        try {
          const response = await fetch(url);
          const data = await response.json();
          setStore({ filmList: data.result });
        } catch (e) {
          console.error(e);
        }
      },
      getCharacterData: async (id) => {
        console.log(id);
        let url = `https://swapi.tech/api/people/${id}`;
        try {
          const response = await fetch(url);

          if (response.ok) {
            let data = await response.json();
            setStore({ character: data.result });
            getActions().getHomeworld(data.result.properties.homeworld);
          } else {
            throw new Error(
              `Failed to fetch character. Status: ${response.status}`
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      getPlanetData: async (id) => {
        let url = `https://swapi.tech/api/planets/${id}`;
        try {
          const response = await fetch(url);

          if (response.ok) {
            let data = await response.json();
            setStore({ planet: data.result });
          } else {
            throw new Error(
              `Failed to fetch planet. Status: ${response.status}`
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      getStarshipData: async (id) => {
        let url = `https://swapi.tech/api/starships/${id}`;
        try {
          const response = await fetch(url);

          if (response.ok) {
            let data = await response.json();
            setStore({ starship: data.result });
          } else {
            throw new Error(
              `Failed to fetch starship. Status: ${response.status}`
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      getVehicleData: async (id) => {
        let url = `https://swapi.tech/api/vehicles/${id}`;
        try {
          const response = await fetch(url);

          if (response.ok) {
            let data = await response.json();
            setStore({ vehicle: data.result });
          } else {
            throw new Error(
              `Failed to fetch starship. Status: ${response.status}`
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      getHomeworld: async (data) => {
        let url = data;
        try {
          const response = await fetch(url);

          if (response.ok) {
            let data = await response.json();
            setStore({ planet: data.result });
          } else {
            throw new Error(
              `Failed to fetch homeworld. Status: ${response.status}`
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      addFavorite: async (fav) => {
        const favorites = getStore().favorites;
        const favorite = favorites.concat(fav);
        setStore({ favorites: favorite });
      },
      removeFavorite: async (fav) => {
        const favorites = getStore().favorites;
        const favorite = favorites.filter((item) => item !== fav);
        setStore({ favorites: favorite });
      },
    },
  };
};

export default getState;
