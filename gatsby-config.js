require("dotenv").config({
  path: './.env',
});

module.exports = {
  siteMetadata: {
    title: 'Step Dad Guild Website',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        queries: [
          {
            name: 'posts',
            type: 'Post', // optional
            groq: `
              *[_type == 'post']{
                _id,
                title,
                body,
              }
            `
          },
          {
            name: 'authors',
            // For this case, without a type explicitly defined,
            // nodes will be created with type = sanityAuthor
            // and arrays with AllSanityAuthor
            groq: `*[_type == 'author']`
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
