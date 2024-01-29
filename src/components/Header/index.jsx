import { Container, Profile } from "./styles";
import { Input } from "../../components/Input"
import { FiSearch} from 'react-icons/fi'


export function Header() {
    return (
        <Container>

            <h1>RocketMovies</h1>
            
            <Input  placeholder="Pesquisar pelo título" icon={FiSearch}/>
           
            <Profile to="/profile">
            <div>
            <span>Marcos Colella</span>
            <button>sair</button>
            </div>
            <img src="https://github.com/ColellaDev.png" alt="Foto do usuário"/>
            </Profile>
            
        </Container>
    )
}