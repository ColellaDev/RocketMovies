import styled from 'styled-components'
import backgroundImg from '../../assets/plateia.png'

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`

export const Form = styled.form`
display: flex;
padding: 0 135px;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;

> h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 48px;
}

> p {
    margin-top: 3px;
    color: ${({theme}) => theme.COLORS.GRAY_100}
}

> h2 {
    margin-top: 48px;
    margin-bottom: 42px;
}

> button {
    margin-top: 24px;
}

> a {
    margin-top: 42px;
    color: ${({theme}) => theme.COLORS.PINK};
}
`

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;


`