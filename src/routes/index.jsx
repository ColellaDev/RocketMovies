import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const { user } = useAuth() // Vai buscar o usuário o usuário

  return (
    <BrowserRouter>
       {user ? <AppRoutes/> : <AuthRoutes /> }
    </BrowserRouter>
  )
}

 // Se tiver usuário página logada, se não deslogada