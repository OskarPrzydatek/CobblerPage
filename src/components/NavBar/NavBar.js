import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import menuReducer from "../../reducers/menuReducer"

// Components
const Menu = styled.nav`
  width: 100%;
  margin-top: 3%;
`

const MenuOptions = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
`

const MenuOption = styled.li`
  &:after {
    content: '';
    display: block;
    background: #2D2D2D;
    animation: ${props => props.hover === 'default' ? `none` 
            : props.hover === 'enter' ? CreateBorder : RemoveBorder} .3s;
    animation-fill-mode: forwards;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.6rem;
`

// keyframes
const CreateBorder = keyframes`
  0% {width: 0; height: 7%}
  100% {width: 100%; height: 7%}
`

const RemoveBorder = keyframes`
  0% {width: 100%; height: 7%}
  100% {width: 0; height: 7%}
`

export default function NavBar() {
  const menuState = {service: 'default', contact: 'default'}

  // lazy initialization of state
  const init = state => state
  const [state, dispatch] = React.useReducer(menuReducer, menuState, init)

  return (
    <Menu>
      <MenuOptions>
        <MenuOption key={"services"}
                    hover={state.service}
                    onMouseEnter={() => dispatch({type: 'SERVICES_ENTER'})}
                    onMouseLeave={() => dispatch({type: 'SERVICES_LEAVE'})}>
          <StyledLink to={"/services"}>Services</StyledLink>
        </MenuOption>
        <MenuOption key={"contact"}
                    hover={state.contact}
                    onMouseEnter={() => dispatch({type: 'CONTACT_ENTER'})}
                    onMouseLeave={() => dispatch({type: 'CONTACT_LEAVE'})}>
          <StyledLink to={"/contact"}>Contact</StyledLink>
        </MenuOption>
      </MenuOptions>
    </Menu>
  )
}
