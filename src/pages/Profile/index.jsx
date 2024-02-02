import  { Container, Form, Avatar} from  "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'

import { useState } from "react"
import { useAuth } from "../../hooks/auth" 


export function Profile() {

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdate(){
        const user = {
          name,
          email,
          password: passwordNew,
          old_password: passwordOld,
        }
    
        await updateProfile({user})
      }

    return (
        <Container>
            <header>
            <ButtonText to="/" title="Voltar"/>
            </header>

            <Form>

            <Avatar>
            <img src="https://github.com/ColellaDev.png" alt="Foto do Usuário"/>

            <label htmlFor="avatar">
                <FiCamera/>

                <input id="avatar" type="file"/>
            </label>
            </Avatar>

            <Input
            icon = {FiUser}
            placeholder = "Nome"
            value={name}
            onChange = {e => setName(e.target.value)}
            />

            <Input
            icon = {FiMail}
            placeholder = "E-Mail"
            value={email}
            onChange = {e => setEmail(e.target.value)}
            />

            <Input
            icon = {FiLock}
            placeholder = "Senha atual"
            onChange = {e => setPasswordOld(e.target.value)}
            />
           
            <Input
            icon = {FiLock}
            placeholder = "Nova senha"
            onChange = {e => setPasswordNew(e.target.value)}
            />

            <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}