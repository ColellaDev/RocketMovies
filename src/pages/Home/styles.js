import styled from "styled-components";
import {AiOutlinePlus} from "react-icons/ai";
import { Link } from 'react-router-dom';


export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 116px auto;
   grid-template-areas: 
   "header"
   "content";
`

export const Content = styled.div`
 grid-area: content;
  
  width: 100%;
  max-height: 650px;
  padding: 40px 123px;
 
  display: flex;
  flex-direction: column;
  justify-self: center;
  `

export const PlusIcon = styled(AiOutlinePlus)`
font-size: 20px;
margin-right: 6px;
padding-top: 1px;

`

export const Title = styled.div`

display: flex;
justify-content: space-between;
margin-bottom: 40px;

> button {
   width: 230px;
}
`

export const Lista = styled.div`

overflow-y: scroll;

&::-webkit-scrollbar {
   width: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${({theme}) => theme.COLORS.PINK};
  border-radius: 8px;
}
`


export const LinkButton = styled(Link)`
  text-decoration: none;
  border: none;
`;