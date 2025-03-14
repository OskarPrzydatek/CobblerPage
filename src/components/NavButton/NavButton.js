import React from "react";
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

const StyledLink = styled(Link)`
  font-size: 2vmax;

  @media screen and (width: 1366px) and (height: 1024px) {
    font-size: 3vmax;
  }
  
  &:after {
    content: '';
    display: block;
    background: #2D2D2D;
    animation: ${props => props.hover === 'default' ? `none`
            : props.hover === 'enter' ? CreateBorder : RemoveBorder} .3s;
    animation-fill-mode: forwards;
  }
`

const CreateBorder = keyframes`
  0% {width: 0; height: 7%}
  100% {width: 100%; height: 7%}
`

const RemoveBorder = keyframes`
  0% {width: 100%; height: 7%}
  100% {width: 0; height: 7%}
`

export default function NavButton({ path, label }) {
  const [hover, setHover] = React.useState('default')

  return (
    <StyledLink
      to={path}
      hover={hover}
      onMouseEnter={() => setHover('enter')}
      onMouseLeave={() => setHover('leave')}>{label}</StyledLink>
  );
}
