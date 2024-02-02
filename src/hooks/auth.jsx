import {createContext, useContext} from "react"

export const AuthContext = createContext({});

function AuthProvider({ children }) { // children será no caso as Rotas da aplicação
    return (
        <AuthContext.Provider value={{email:"marcos@gmail.com"}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}