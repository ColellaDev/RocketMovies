import {createContext, useContext, useState, useEffect} from "react"

import { api } from "../services/api" //Importamos o banco

import { toast } from "sonner";

export const AuthContext = createContext({});

function AuthProvider({ children }) { // children será no caso as Rotas da aplicação
    const [data, setData] = useState({}) //Para armazenar as infos do Usuario e Token

    async function signIn({ email, password}) {

        try {
            const response = await api.post("/sessions", { email, password }) //Criamos a requisição
            const { user, token} = response.data // Desestruturar p/ pegar apenas as informações do usuário

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}` //aplicando o Token em todas as requisições q o usuário for fazer
            setData({ user, token}) // Amazenamos o usuario e token no data

             console.log(user, token)

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }   
    } 

    function signOut() {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")

        setData({})
    }

    async function updateProfile( { user, avatarFile }) {
        try {

            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            setData({user, token: data.token})
            toast.success("Perfil atualizado!")

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                toast.error("Não foi possível atualizar.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if (token && user ) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ 
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

// o user: data.user  esta armazenando o usuário logado e passando por contexto p/ aplicação
    return (
        <AuthContext.Provider value={{signIn, signOut, updateProfile, user: data.user}}>
            { children }
        </AuthContext.Provider>  
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}