exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageInfoTemplate = require.resolve(`./src/templates/pageInfoTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageInfoTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
