import { Container, Profile, Logout } from "./styles";
import { Input } from "../../components/Input"
import { FiSearch} from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"




export function Header() {

    const { signOut } = useAuth()

    return (
        <Container>

            <h1>RocketMovies</h1>
            
            <Input  placeholder="Pesquisar pelo título" icon={FiSearch}/>
           
            <Logout>
                <Profile to="/profile">
                <div>
                 <span>Marcos Colella</span>
                 </div>
                 <img src="https://github.com/ColellaDev.png" alt="Foto do usuário"/>
                 </Profile>

                <button type="button" onClick={signOut}>sair</button>
            </Logout>
        </Container>
    )
}