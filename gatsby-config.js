require('dotenv').config()

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
        icon: `src/assets/images/adLogoLight.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-Q281EPYW66', 
          cookieName: 'gatsby-gdpr-google-analytics', 
          anonymize: true,
          allowAdFeatures: false 
        },
        hotjar: {
          hjid: '2771124',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.adrenalizedigital.ca',
        sitemap: 'https://www.adrenalizedigital.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
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
    `gatsby-plugin-preact`
  ],
}
