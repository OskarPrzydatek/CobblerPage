import React from "react"
import styled from "styled-components"
import Layout from "../styles/Layout"
import NavButton from "../components/NavButton/NavButton"
import { Photo } from "../components/Photo/Photo"
import img from "../img/404.jpg"

const NotFoundContent = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFoundContentWrapper = styled.main`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFoundLogo = styled.h1`
  margin: 0;
  font-size: 3vmax;
`

const SloganWrapper = styled.div`
  display: flex;
  text-align: center;
`

const Slogan = styled.span`
  font-size: 2vmax;
`

export default function NotFound() {

  React.useEffect(() => {
    document.title = `Broken Shoes?`
  })

  return (
    <Layout>
      <Photo
        img={img}
        position={"80% 0"} />
      <NotFoundContent>
        <NotFoundContentWrapper>
          <NotFoundLogo>Broken Shoes?</NotFoundLogo>
          <SloganWrapper>
            <Slogan>Ask&nbsp;</Slogan>
            <NavButton
              path={"/"}
              label={"John Doe"} />
            <Slogan>&nbsp;what to do!</Slogan>
          </SloganWrapper>
        </NotFoundContentWrapper>
      </NotFoundContent>
    </Layout>
  )
}
