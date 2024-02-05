import { Container, TruncateText } from "./styles";
import { StarRating } from "../StarsRaiting";
import { Tags } from "../Tags";



export function Note( {data, ...rest} ) {
  return (
      <Container {...rest}>

        <h2>{data.title}</h2>
        <StarRating rating ={data.rating} />
        <TruncateText>{data.text}</TruncateText>

        {
          data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id} title={tag.name} customBackgroundColor="#3E3B47" />)
          }
        </footer>
        }

      </Container>
  )
}