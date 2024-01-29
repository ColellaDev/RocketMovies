import styled from 'styled-components'

export const Container = styled.textarea`
width: 100%;
height: 200px;


padding: 20px;
border: none;
resize: none;
border-radius: 10px;
box-shadow: 0 2px 4px black;


color: ${({theme}) => theme.COLORS.WHITE};
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`