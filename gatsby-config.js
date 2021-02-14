module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/infoPages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {
          // because it can't be empty
          // and this props is doesn't used.
          theme: ``
        }
      },
    }
  ],
}
