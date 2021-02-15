import styled from "styled-components"

export const Photo = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
  filter: grayscale(100%) brightness(160%);
`
