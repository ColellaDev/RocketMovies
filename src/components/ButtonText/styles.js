import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled(Link)`

display: flex;
background: none;
border: none;
color: ${({ theme }) => theme.COLORS.PINK};
`

export const StyledIcon = styled.div`
font-size: 22px;
color: ${({ theme }) => theme.COLORS.PINK};
`