const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Henryetta Community Skilled Healthcare & Rehab`,
    description: `At Henryetta Community Skilled Healthcare & Rehab, we'll make sure all of your unique needs are taken care of. A nursing center doesn't have to be a retirement from life -- it can be fun too! Whether you're looking for a short stay or you want to settle down with us, Henryetta Community Skilled Healthcare & Rehab provides everything you need for a comfortable and safe stay. Henryetta Community Skilled Healthcare & Rehab is a moderate facility with 53 beds and has for-profit individual ownership. Our facility participates in Medicare and Medicaid.`,
    author: `@Telafast`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henryetta Community Skilled Healthcare & Rehab`,
        short_name: `HCSHR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_henryetta.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
