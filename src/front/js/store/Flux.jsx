const getState = ({ getStore, getActions, setStore }) => {
	const host = "https://playground.4geeks.com/contact";
	const user = "annie";
	return {
		store: {
			message: null,
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }],
			cohorte: 'spain-93',
			user: 'Jenny',
			is_logged: false,
			alert: { text: 'Mi primer Alert', visible: true, background: 'success' },
			listContacts: [],
		},
		actions: {
			setUser: (newvalue) => { setStore({ user: newvalue }) },
			setAlert: (newAlert) => { setStore({ alert: newAlert }) },
			getContacts: async () => {
				const uri = ${host}/agendas/${user}/contacts // Defino la uri
				const options = { method: "GET" } // options 
				const response = await fetch(uri, options) // response
				if (!response.ok) {
					//trato el error
					console.log("ERROR", response.status, response.statusText)
					return
				}// If del response
				const data = await response.json()
				console.log(data) // Captruo el json del response
				// Logica de mi funcion
				setStore({ listContacts: data.contacts })
			},
			deleteContact: (id) => {
				console.log(id, "este es el id que recibe el actions.deleteContact");
				// Hacer el fetch() con el metodo delete para borrar el contacto 

				// leo de vuelta todos los contactos de la API actualizada
				getActions().getContacts();
			},
			exampleFunction: () => { getActions().changeColor(0, "green"); },
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
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
			}
		}
	};
};

export default getState;