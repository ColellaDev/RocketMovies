import  { Container, Form, Avatar} from  "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'

import { useState } from "react"
import { useAuth } from "../../hooks/auth" 

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import {api} from "../../services/api"

export function Profile() {

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){
        const user = {
          name,
          email,
          password: passwordNew,
          old_password: passwordOld,
        }
    
        await updateProfile({user, avatarFile})
      }

      function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file) //Guardar o arquivo selecionado pelo Input
    
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
      }

    return (
        <Container>
            <header>
            <ButtonText to="/" title="Voltar"/>
            </header>

            <Form>

            <Avatar>
            <img src={avatar} alt="Foto do Usuário"/>

            <label htmlFor="avatar">
                <FiCamera/>

                <input id="avatar" type="file" onChange={handleChangeAvatar}/>
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