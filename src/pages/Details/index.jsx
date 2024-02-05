import { Container, Content, Title, Clock, Text, Section } from "./styles.js"

import { Header} from "../../components/Header"

import  {ButtonText } from "../../components/ButtonText"
import {StarRating} from "../../components/StarsRaiting/index.jsx"
import { Tags } from "../../components/Tags/index.jsx"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth"



export function Details() {

  const [data, setData] = useState("")

  const params = useParams()
  const { user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  useEffect(() => {
    async  function fetchNote() {
      const response = await api.get(`/movieNotes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
    <Header/>

{
    data && // Se tem data mostra se não não mostra
    <Content>
      
    <ButtonText to="/" title="Voltar"/>

    <Title>
    <div>
    <h1>{data.note.title}</h1>
    <StarRating rating={data.note.rating}/>
    </div>

    <img src={avatarUrl} alt="Foto do usuário"/>
    <span>{user.name}</span>
    <Clock/>
    <span>{data.note.created_at}</span>
    </Title>

  {
    data.tags &&
    <Section>
    {
          data.tags.map(tag => (
            <Tags 
            key={String(tag.id)}
            title={tag.name} 
            />
          ))
          
        }
    </Section>
}

    <Text>
    <p>
    {data.note.description}  
    </p>
    </Text>
    
    </Content>
    }

    </Container>
  )
}