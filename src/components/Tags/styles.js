import styled from "styled-components"



export const Container = styled.span`

background-color: ${({ theme, customBackgroundColor }) => customBackgroundColor || theme.COLORS.PINK_5};
font-size: ${props => props.fontSize || "14px"};;
padding: 8px 16px;
border-radius: 5px;
margin-right: 8px;
`

