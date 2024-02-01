import { Container } from "./styles";

export function Button({ title, icon, ...rest }) {
    return(
        <Container type="button" {...rest}>
            {icon}
            {title}
            
        </Container>
    )
}

//testando Git