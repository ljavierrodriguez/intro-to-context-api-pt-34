import React, { createContext, useState } from 'react'


export const BackgroundContext = createContext(null);

const AppBackgroundContext = ({ children }) => {
    const [bgColor, setBgColor] = useState("light");
    const [color, setColor] = useState("light");

    return (
        <BackgroundContext.Provider value={{
            bgColor: bgColor,
            setBgColor: setBgColor,
            color: color,
            setColor: setColor
        }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export default AppBackgroundContext