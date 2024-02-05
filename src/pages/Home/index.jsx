import { Container, Content, PlusIcon, Title, Lista, LinkButton} from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";

import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function Home() {

    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/movieNotes?title=${search}`)
          setNotes(response.data)
        }
        fetchNotes()
      }, [search])

    return (
        <Container>

        <Header onSearch={setSearch}/>

        <Content>
       
        <Title>
        <h1>Meus Filmes</h1>
        
        <LinkButton to="/new">
        <Button  icon={<PlusIcon/>} title="Adicionar filme"/>
        </LinkButton>

        </Title>

    <Lista>

    {
          notes.map(note => (
            <Note 
             key={String(note.id)}
             data={note}
           />
          ))
        }

   </Lista>

        </Content>

        </Container>
    )
}