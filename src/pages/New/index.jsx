import { Container, Content, CustomTitle } from "./styles"
import { Header } from "../../components/Header"
import {ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { toast } from "sonner";

export function New() {

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const navigate = useNavigate()

    function handleAddTag(){
        setTags( prevState => [...prevState, newTag] ) // Mantem oq tinha antes "prevState" e adiciona o newTag
        setNewTag("") // "Resetar" o estado do NewTag, limpar ele
      }

      function handleDeleteTag(deleted) { //deleted recebe a Tag
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))
    }

    async function handleNewNote(){
     
      
        if(!title){
          return  toast.error('Digite um título para sua nota')
          }

          if(!tags){
            return  toast.error('Digite uma tag para sua nota')
            }
        
          if(newTag){
            return toast.error("Você deixou uma Tag no campo adicionar mas não clicou em adicionar.")
          }

          if(!rating){
            return  toast.error('Digite uma nota para o filme')
          }

          if(isNaN(rating) || rating < 0 || rating > 5){
            return  toast.error('De uma nota de 0 a 5')
          }

        await api.post("/movieNotes", {
            title,
            description,
            tags,
            rating
        })
        
        toast.success("Nota criada com sucesso!")
        navigate("/")
     }

     function handleBack() {
      navigate(-1)
    }

    return (
        <Container>

            <Header/>
            
            <Content>
            
            <ButtonText title = "Voltar" onClick={handleBack}/>

            <h1>Novo filme</h1>
            
            <CustomTitle>
            <Input 
            placeholder="Título" 
            onChange={e=> setTitle(e.target.value)}
            />
                                       
            <Input 
            placeholder="Sua nota (de 0 a 5)" 
            onChange={e=> setRating(e.target.value)}
            />

            </CustomTitle>

            <TextArea 
            placeholder="Observações" 
            onChange={e=> setDescription(e.target.value)}
            />

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
           
            <Button title="Salvar alterações" onClick = {handleNewNote}/>
      
            </Content>
           
        </Container>
    )
}