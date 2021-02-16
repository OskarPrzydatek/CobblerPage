import React from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar/NavBar"
import Layout from "../styles/Layout"
import { Photo } from "../components/Photo/Photo"
import img from "../img/home.jpg"

const HomeContent = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5%;

  @media screen and (max-width: 818px) {
    height: 70%;
    padding: 2%;
  }

  @media screen 
  and (width: 768px) and (height: 1024px) {
    width: 80%;
    height: 60%;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    width: 80%;
    height: 60%;
  }
`

const HomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`

const HomeContentMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 818px) {
    justify-content: flex-start;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    justify-content: flex-start;
  }
  
  @media screen and (width: 1024px) and (height: 1366px) {
    justify-content: flex-start;
  }
`

const HomeLogo = styled.h1`
  font-size: 7vmax;
  margin: 0;
  text-align: center;
`

const Slogan = styled.i`
  font-size: 1.2vmax;
  text-align: center;
`

export default function Home() {

  React.useEffect(() => {
    document.title = `John Doe - The London Cobbler`
  })

  return (
    <Layout>
      <Photo
        img={img}
        position={'100% 0'} />
      <HomeContent>
        <HomeContentWrapper>
          <HomeContentMain>
            <HomeLogo>John Doe</HomeLogo>
            <NavBar />
          </HomeContentMain>
          <Slogan>The London Cobbler Since 1990</Slogan>
        </HomeContentWrapper>
      </HomeContent>
    </Layout>
  )
}
