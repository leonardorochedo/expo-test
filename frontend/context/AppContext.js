import { createContext } from "react";

import { useApi } from "../hooks/useApi";

const Context = createContext()

function AppProvider({ children }) {

    const { authenticated, registerUser, loginUser, editUser, deleteUser, logoutUser, getMyUser, getPosts, createPost } = useApi()

    return (
        <Context.Provider value={{ authenticated, registerUser, loginUser, editUser, deleteUser, logoutUser, getMyUser, getPosts, createPost }}>
            {children}
        </Context.Provider>
    )
}

export {Context, AppProvider}