import { Container, Content, CustomButton, CustomTitle } from "./styles"
import { Header } from "../../components/Header"
import {ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"


export function New() {
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
              <NoteItem  value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
            

           <CustomButton>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
            </CustomButton>
           

            </Content>
           

        </Container>
    )
}