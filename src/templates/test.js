import React from "react";
import { graphql } from "gatsby"

export default function Test({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark

  console.log(data)

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ul>
          {frontmatter.content.map(el => (
            <li key={el}>{el}</li>
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
        date(formatString: "MMMM DD, YYYY")
        title
        content
      }
    }
  }
`
