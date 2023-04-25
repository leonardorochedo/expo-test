import { createContext } from "react";

import { useApi } from "../hooks/useApi";

const Context = createContext()

function UserProvider({ children }) {

    const { authenticated, register, login} = useApi()

    return (
        <Context.Provider value={{ authenticated, register, login }}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}