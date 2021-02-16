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
  font-size: 1.6vmax;

  @media screen and (max-width: 768px) {
    font-size: 2.6vmax;
  }

  @media screen and (width: 1024px) and (height: 768px) {
    font-size: 2.8vmax;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    font-size: 3.2vmax;
  }

  @media screen and (width: 1366px) and (height: 1024px) {
    font-size: 3vmax;
  }
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
