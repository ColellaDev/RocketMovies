import { Container, StyledIcon } from "./styles";
import {BsArrowLeftShort} from 'react-icons/bs'

export function ButtonText( {title, ...rest} ) {
    return (
        <Container {...rest}>

        <StyledIcon>
        <BsArrowLeftShort/>
        </StyledIcon>
        
        {title}

        </Container>
        
        
     
    )
}