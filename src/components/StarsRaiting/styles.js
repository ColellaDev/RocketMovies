import styled from "styled-components"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const StarContainer = styled.div`
  display: flex; 
`

export const StarBorderIcon = styled(AiOutlineStar)`
font-size: 24px; 
color: ${({theme}) => theme.COLORS.PINK};
`

export const StarIcon = styled(AiFillStar)`
font-size: 24px; 
color: ${({theme}) => theme.COLORS.PINK};

`

