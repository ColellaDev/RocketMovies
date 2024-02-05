import { Container, Content, CustomButton, CustomTitle } from "./styles"
import { Header } from "../../components/Header"
import {ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { useState } from "react"


export function New() {

    const [ tags, setTags] = useState([])
    const [ newTag, setNewTag] = useState("")

    function handleAddTag(){
        setTags( prevState => [...prevState, newTag] ) // Mantem oq tinha antes "prevState" e adiciona o newTag
        setNewTag("") // "Resetar" o estado do NewTag, limpar ele
      }

      function handleDeleteTag(deleted) { //deleted recebe a Tag
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))
    }

    return (
        <Container>

            <Header/>
            
            <Content>
            
            <ButtonText to="/" title = "Voltar"/>

            <h1>Novo filme</h1>

            <CustomTitle>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
            </CustomTitle>

            <TextArea placeholder="Observações"/>

            <h2>Marcadores</h2>

            <div>
            {
              tags.map((tag, index) => (
                <NoteItem 
                key={String(index)}
                value={tag}
                onClick={() => {handleDeleteTag(index)}}
                /> 
              ))
            }

              <NoteItem 
              isNew 
              placeholder="Nova tag" 
              value = {newTag}
              onChange = {e => setNewTag(e.target.value)}
              onClick = {handleAddTag}
              />

            </div>
            

           <CustomButton>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
            </CustomButton>
           

            </Content>
           

        </Container>
    )
}