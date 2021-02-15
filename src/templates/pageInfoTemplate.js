import React from "react"
import { graphql } from "gatsby"
import InfoContent from "../components/InfoContent/InfoContent"
import BackToHome from "../components/BackToHome/BackToHome"
import Layout from "../styles/Layout"

export default function PageInfoTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  React.useEffect(() => {
    document.title = frontmatter.title
  })

  return (
    <>
      <Layout>
        <div className="photo" />
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
        content {
          name
          value
        }
      }
    }
  }
`
