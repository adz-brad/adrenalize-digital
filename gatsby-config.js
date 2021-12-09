module.exports = {
  siteMetadata: {
    title: `Neural Smart Technologies`,
    description:
      "Smart Applications for Smart Businesses. Neural delivers efficently built applications with lightning-fast operating speeds. Upgrade your project to Neural today!",
    keywords:
      "Neural, Smart, Technologies, Web, Mobile, Desktop, App, Development, Design, Business",
    siteUrl: "https://www.neuralsmart.ca",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Neural Smart Technologies",
        short_name: `neuralSmart`,
        background_color: `#111`,
        lang: `en`,
        theme_color: `#111`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: "none",
        icon: `src/assets/images/neuralLogo.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['*']
         }
      }
   },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
}
