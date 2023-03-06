const getState = ({ getStore, getActions, setStore }) => {
    return { 
        store: {
            urlAPI: "https://jsonplaceholder.typicode.com",
            name: 'John',
            lastname: 'Doe',
            users: [],
            tasks: [],
            posts: [],
            comments: []
        },
        actions: {
            getSaludo: () => {
                console.log("Hola desde el Context API");
                const store = getStore();
                console.log(`${store.name} ${store.lastname}`);
                const actions = getActions();
                actions.getUsers(store.urlAPI+"/users");
            },
            getUsers: (url) => {
                console.log("fetching data...");
                console.log(url);
                fetch(url).then(resp => resp.json()).then(data => {
                    console.log(data)
                    setStore({
                        users: data
                    })
                }).catch(error => console.log(error));
            },
            getTasks: (url) => {
                console.log("fetching data...");
                console.log(url);
                fetch(url).then(resp => resp.json()).then(data => {
                    console.log(data)
                    setStore({
                        tasks: data
                    })
                }).catch(error => console.log(error));
            }
        }
    }
}

export default getState;