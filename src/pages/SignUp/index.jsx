import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button }  from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiveStars } from '../../components/FiveStars';

import { api } from "../../services/api"

import { toast } from "sonner";

export function SignUp() {
    const [name, setName] = useState("") 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return toast.error("Preencha todos os campos")
          }
          
          api.post("/users", { name, email, password}).then(() => {
            toast.success("Usuário cadastrado com sucesso!")
            navigate('/');
          })
          .catch(error =>{
            if(error.response){
              alert(error.response.data.message)
            } else {
              toast.error("Não foi possivel cadastrar")
            }
          })
          
      }

    return (
        <Container>
            
            <Form>
                <h1>Movie Stars</h1>
                <FiveStars/>
                <p>Aplicação para acompanhar e classificar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>
                
                <ButtonText to="/" title="Voltar para o login"/>

            </Form>
            
            <Background/>
            
        </Container>
    )
}