import { Container, Content, Title, Clock, Text, Section, CustomButton } from "./styles.js"

import { Header} from "../../components/Header"

import  {ButtonText } from "../../components/ButtonText"
import {StarRating} from "../../components/StarsRaiting/index.jsx"
import { Tags } from "../../components/Tags/index.jsx"
import { Button } from "../../components/Button/index.jsx"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth"

import { toast } from "sonner";

export function Details() {

  const [data, setData] = useState("")

  const params = useParams()
  const navigate = useNavigate()
  const { user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  useEffect(() => {
    async  function fetchNote() {
      const response = await api.get(`/movieNotes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  async function handleRemove() {
    toast('Deseja realmente excluir esse filme?', {
      style: {
        background: "#3E3B47",
        color:"white",
        borderColor:"#FF859B",
      },
      
      action: {
          label: 'Confirmar',
          onClick: async () => {
              await api.delete(`/movieNotes/${params.id}`);
              toast.success('Nota excluída com sucesso!');
              navigate('/');
          }
      },
  });
};

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
    <Header/>

{
    data && // Se tem data mostra se não não mostra
    <Content>
      
     <CustomButton>
    <ButtonText title="Voltar" onClick={handleBack}/>
    <Button title="Excluir filme" onClick={handleRemove}/>
    </CustomButton> 

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