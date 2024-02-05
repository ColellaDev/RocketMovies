import { Container, Profile, Logout } from "./styles";
import { Input } from "../../components/Input"
import { FiSearch} from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"
import {api} from "../../services/api"
import { useState } from "react";

export function Header({ onSearch }) {

    const {signOut, user} = useAuth()
    const [searchTerm, setSearchTerm] = useState('');

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value); // Chama a função de pesquisa passada como prop
      }

    return (
        <Container>

            <h1>RocketMovies</h1>
            
            <Input  
            placeholder="Pesquisar pelo título" 
            icon={FiSearch}
            value={searchTerm}
            onChange={handleSearchChange}
            />
           
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