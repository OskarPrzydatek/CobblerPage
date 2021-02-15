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
`

const HomeLogo = styled.h1`
  font-size: 6rem;
  margin: 0;
`

const Slogan = styled.i`
  font-size: 1.2rem;
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
