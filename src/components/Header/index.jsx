import { Container, Profile, Logout } from "./styles";
import { Input } from "../../components/Input"
import { FiSearch} from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"
import {api} from "../../services/api"




export function Header() {

    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    return (
        <Container>

            <h1>RocketMovies</h1>
            
            <Input  placeholder="Pesquisar pelo título" icon={FiSearch}/>
           
            <Logout>
                <Profile to="/profile">
                <div>
                 <span>{user.name}</span>
                 </div>
                 <img src={avatarUrl} alt="Foto do usuário"/>
                 </Profile>

                <button type="button" onClick={signOut}>sair</button>
            </Logout>
        </Container>
    )
}