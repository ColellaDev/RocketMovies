import styled from "styled-components";
import { ClockIcon } from "./ClockIcon";

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
 word-wrap: break-word;
 width: 100%;
 width: 100vw;
  max-height: 650px;
  padding: 40px 123px;
  
  
  display: flex;
  flex-direction: column;
  justify-self: center;
  `
  export const CustomButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 30px;

   > button {
    width: 200px;
    
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }
  `

  export const Title = styled.div`
   margin-top: 24px;

  > div {
   display: flex;
   align-items: center;
   gap: 20px;
   margin-bottom: 24px;
  }

  > span {
   margin-left: 7px;
   margin-right: 13px;
   font-weight: 400;
  }
 
> img {
  width: 16px;
  border-radius: 35px;
}
  `

export const Clock = styled(ClockIcon)`
`

export const Text = styled.div`
overflow-y: scroll;

&::-webkit-scrollbar {
   width: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${({theme}) => theme.COLORS.PINK};
  border-radius: 8px;
}
  
  padding: 10px;
  
  > p {
    margin-top: 15px;
    text-align: justify;
  }
`

export const Section = styled.div`
margin-top: 40px;
margin-bottom: 25px;
`

