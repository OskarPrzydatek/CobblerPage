import React from "react";
import { graphql } from "gatsby"

export default function PageInfoTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark

  console.log(data)

  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ul>
          {frontmatter.content.map(el => (
            <li key={el.name}>{el.name} {el.value}</li>
          ))}
        </ul>
      </div>
    </div>
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
