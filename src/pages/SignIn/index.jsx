import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button }  from '../../components/Button'
import { FiMail, FiLock} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth"



export function SignIn() {

    const data = useAuth()
    console.log("MEU CONTEXTO =>", data)


    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder="E-mail"
                icon={FiMail}/>

                <Input placeholder="Senha"
                icon={FiLock}/>

                <Button title="Entrar"/>
                
                
                <Link to = "/register">Criar conta</Link>
            </Form>

            <Background/>
        </Container>
    )
}