import { Container } from "./styles";

export function Tags( {title, fontSize, customBackgroundColor}) {
    return(
        <Container fontSize={fontSize}  style={{ backgroundColor: customBackgroundColor }}>
           {title}
           
        </Container>
    )
}