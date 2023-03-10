import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const GlobalContext = createContext(null);

const injectContext = PassedComponent => {

    const AppContext = props => {

        const [state, setState] = useState(getState(
            {
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updateStore => setState({
                    store: Object.assign(state.store, updateStore),
                    actions: {...state.actions}
                })
            }
        ));

        useEffect(() => {
            // aqui todas las funciones que quiera ejecutar al iniciar la pagina web
        }, [])

        return (
            <GlobalContext.Provider value={state}>
                <PassedComponent {...props} />
            </GlobalContext.Provider>
        )
    }

    return AppContext;
}

export default injectContext;