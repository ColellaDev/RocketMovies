import {  StarContainer, StarIcon, StarBorderIcon } from "./styles";

export const StarRating = ({ rating }) => {

    const filledStars = rating >= 5 ? 5 : rating;
    const emptyStars = rating <= 0 ? 5 : (5 - rating);
  
    const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
      <StarIcon key={index}/> ));
  
    const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
      <StarBorderIcon key={index} /> ));
  
    return (
      <StarContainer>
        {filledStarIcons}
        {emptyStarIcons}
      </StarContainer>
    );
  };