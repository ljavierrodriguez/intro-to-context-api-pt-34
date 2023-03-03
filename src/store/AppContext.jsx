import React, { createContext, useState } from 'react'


export const GlobalContext = createContext(null);

const AppContext = ({ children }) => {
    const [name, setName] = useState("John");

    const [tasks, setTasks] = useState([]);

    return (
        <GlobalContext.Provider value={{ name, setName, tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext