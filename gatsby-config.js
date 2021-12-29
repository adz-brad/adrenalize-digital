module.exports = {
  siteMetadata: {
    title: `Adrenalize Digital`,
    description:
      "Intelligently designed for intuitive, functionality. Adrenalize Digital web applications deliver blazing fast page load speeds with industry leading marketability. Adrenalize your project today!",
    keywords:
      "Adrenalize, Digital, Technologies, Web, Mobile, Desktop, App, Development, Design, Business",
    siteUrl: "https://www.adrenalizedigital.ca",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Adrenalize Digital",
        short_name: `adrenalize`,
        background_color: `#0F172A`,
        lang: `en`,
        theme_color: `#0F172A`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: "none",
        icon: `src/assets/images/ad-logo.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
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
    // `gatsby-plugin-preact`
  ],
}
