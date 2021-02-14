import React from "react";
import { graphql } from "gatsby";
import InfoContent from "../components/InfoContent/InfoContent";
import BackToHome from "../components/BackToHome/BackToHome";

export default function PageInfoTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  React.useEffect(() => {
    document.title = frontmatter.title;
  })

  return (
    <section>
      <InfoContent frontmatter={frontmatter} />
      <BackToHome />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
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
