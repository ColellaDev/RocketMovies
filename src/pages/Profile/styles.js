import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;

> header {
    display: flex;
    align-items: center;
    height: 144px;
    padding: 0 144px ;
    background-color: ${({theme}) => theme.COLORS.PINK_5 };
}
`

export const Form = styled.form`
max-width: 340px;
margin: 0 auto 0;
padding: 157px 0;

> div:nth-child(4) {
    margin-top: 30px;
}

> button {
    margin-top: 34px;
}
`
export const Avatar = styled.div`
    position: relative;
    margin: -236px auto 32px;
    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK };
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.GRAY };
        }
    }
`