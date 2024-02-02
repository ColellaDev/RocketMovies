import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.header`
grid-area: header;

display: flex;
justify-content: space-between;
align-items: center;

height: 116px;
padding: 0 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

>h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 64px;
}
`

export const Profile =  styled(Link)`

display: flex;
align-items: center;
gap: 20px;
color: ${({ theme }) => theme.COLORS.WHITE};

> div {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-left: 74px;
}

> img {
  width: 64px;
  border-radius: 35px;
}
`

export const Logout = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> button {
  font-size: 17px;
  background: none;
  border: none;
  text-align: right;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}
`