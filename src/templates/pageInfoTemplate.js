import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import InfoContent from "../components/InfoContent/InfoContent"
import NavButton from "../components/NavButton/NavButton"
import Layout from "../styles/Layout"
import { Photo } from "../components/Photo/Photo"

const Content = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 818px) {
    width: 100%;
    height: 50%;
  }
  
  // IPad
  @media screen and (width: 1024px) and (height: 768px) {
    width: 100%;
    height: 50%;
  }
  
  //IPad Pro
  @media screen and (width: 1024px) and (height: 1366px) {
    width: 100%;
    height: 50%;
  }
`

const ContentWrapper = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  @media screen and (max-width: 818px) {
    width: 100%;
    height: 100%;
  }
  
  // Ipad
  @media screen and (width: 1024px) and (height: 768px) {
    width: 100%;
    height: 100%;
  }

  //IPad Pro
  @media screen and (width: 1024px) and (height: 1366px) {
    width: 100%;
    height: 100%;
  }
`

export default function PageInfoTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  React.useEffect(() => {
    document.title = frontmatter.title
  })

  return (
    <>
      <Layout>
        <Photo
          img={require(`../img/${frontmatter.photo}`)}
          position={'center'} />
        <Content>
          <ContentWrapper>
            <InfoContent frontmatter={frontmatter} />
            <NavButton
              path={"/"}
              label={"Back"} />
          </ContentWrapper>
        </Content>
      </Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        photo
        content {
          name
          value
        }
      }
    }
  }
`
