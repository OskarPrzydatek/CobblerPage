import React from "react"
import styled/*, { keyframes }*/ from "styled-components"
import NavButton from "../NavButton/NavButton"

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

export default function NavBar() {
  return (
    <Menu>
      <MenuOptions>
        <li key={"services"}>
          <NavButton
            path={"/services"}
            label={"Services"} />
        </li>
        <li key={"contact"}>
          <NavButton
            path={"/services"}
            label={"Contact"} />
        </li>
      </MenuOptions>
    </Menu>
  )
}
