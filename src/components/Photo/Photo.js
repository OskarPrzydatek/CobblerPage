import styled from "styled-components"
import logo from "../../img/cobbler-logo.png"

export const Photo = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
  filter: grayscale(100%) brightness(160%);

  @media screen and (max-width: 818px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  }
  
  @media screen and (max-height: 410px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  }
  
  @media screen and (width: 823px) and (height: 411px) {
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    filter: grayscale(100%) brightness(160%);
  }
  
  // Surface Duo
  @media screen and (width: 720px) and (height: 540px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  } 
  
  // Ipad
  @media screen and (width: 768px) and (height: 1024px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  }

  @media screen and (width: 1024px) and (height: 768px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  }

  // Ipad Pro
  @media screen and (width: 1024px) and (height: 1366px) {
    width: 20%;
    height: 20%;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
  }
`
