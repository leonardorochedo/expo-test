import { createContext } from "react";

import { useApi } from "../hooks/useApi";

const Context = createContext()

function UserProvider({ children }) {

    const { authenticated, registerUser, loginUser} = useApi()

    return (
        <Context.Provider value={{ authenticated, registerUser, loginUser }}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}