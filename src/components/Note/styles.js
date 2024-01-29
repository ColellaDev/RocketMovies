import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme})=> theme.COLORS.PINK_5};
margin-bottom: 30px;
padding: 32px;
border-radius: 20px;

> h2 {
  margin-bottom: 8px;
}
`

export const TruncateText = styled.p`
  //width: 1300px; /* Largura máxima para o contêiner de texto. Ajuste conforme necessário. */
  max-height: 2.5rem;
 // white-space: nowrap; /* Impede que o texto quebre em várias linhas. */
  overflow: hidden; /* Esconde o texto que não cabe no contêiner. */
  text-overflow: ellipsis; /* Adiciona um ponto de elipse (...) no final do texto cortado. */
  margin-bottom: 25px;
  margin-top: 15px;
`;






