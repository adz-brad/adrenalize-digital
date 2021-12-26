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
        background_color: `#0F172A`,
        lang: `en`,
        theme_color: `#0F172A`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '', 
          cookieName: 'gatsby-gdpr-google-analytics', 
          anonymize: true, 
          allowAdFeatures: false 
        },
        googleTagManager: {
          trackingId: '', 
          cookieName: 'gatsby-gdpr-google-tagmanager', 
          dataLayerName: 'dataLayer', 
        },
        facebookPixel: {
          pixelId: '', 
          cookieName: 'gatsby-gdpr-facebook-pixel', 
        },
        hotjar: {
          hjid: '',
          // hjid: '2754540',
          hjsv: '',
          // hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar',
        },
        environments: ['production', 'development']
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preact`
  ],
}
