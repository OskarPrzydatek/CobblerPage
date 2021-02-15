import React from "react"
import { graphql } from "gatsby"
import InfoContent from "../components/InfoContent/InfoContent"
import BackToHome from "../components/BackToHome/BackToHome"
import Layout from "../styles/Layout"
import { Photo } from "../components/Photo/Photo"

export default function PageInfoTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  React.useEffect(() => {
    document.title = frontmatter.title
  })

  console.log(frontmatter.photo)

  return (
    <>
      <Layout>
        <Photo
          img={require(`../img/${frontmatter.photo}`)}
          position={'center'} />
        <article>
          <main>
            <InfoContent frontmatter={frontmatter} />
            <BackToHome />
          </main>
        </article>
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
