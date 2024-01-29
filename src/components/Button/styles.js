import styled from "styled-components";


export const Container = styled.button`
width: 100%;

background-color: ${({theme})=> theme.COLORS.PINK};
color: ${({theme})=> theme.COLORS.BACKGROUND_900};

padding: 13px 32px;
border-radius: 8px;
border: 0;
font-weight: 500;
font-size: 19px;
`

