import { createContext } from "react";

import { useApi } from "../hooks/useApi";

const Context = createContext()

function UserProvider({ children }) {

    const { authenticated, registerUser, loginUser, editUser, getMyUser } = useApi()

    return (
        <Context.Provider value={{ authenticated, registerUser, loginUser, editUser, getMyUser }}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}