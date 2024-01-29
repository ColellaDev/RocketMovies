import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
  
  margin-bottom: 8px;
  border-radius: 10px;
  box-shadow: 0 2px 4px black;

> input {
  height: 56px;
  width: 100%;
  
  padding: 20px;
  border: none;
  border-radius: 10px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
}

> svg {
    margin-left: 16px;
  }
`