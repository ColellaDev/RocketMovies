import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button }  from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { api } from "../../services/api"


export function SignUp() {
    return (
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder="Nome"
                icon={FiUser}/>

                <Input 
                placeholder="E-mail"
                icon={FiMail}/>

                <Input placeholder="Senha"
                icon={FiLock}/>

                <Button title="Cadastrar"/>
                
                <ButtonText to="/" title="Voltar para o login"/>

            </Form>
            
            <Background/>
            
        </Container>
    )
}