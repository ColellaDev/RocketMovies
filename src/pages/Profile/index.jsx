import  { Container, Form, Avatar} from  "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'



export function Profile() {
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
            />

            <Input
            icon = {FiMail}
            placeholder = "E-Mail"
            />

            <Input
            icon = {FiLock}
            placeholder = "Senha atual"
            />
           
            <Input
            icon = {FiLock}
            placeholder = "Nova senha"
            />
            <Button title="Salvar"/>
            </Form>
        </Container>
    )
}