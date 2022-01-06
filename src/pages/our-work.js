import React from 'react'
import { ContactForm } from '../components/contact'
import { FaPlusCircle } from 'react-icons/fa'
import { Seo } from '../components/seo'
import { SRLWrapper } from "simple-react-lightbox";
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Portfolio = ({ data }) => {
    
    const options = {
        settings: {
          usingPreact: true,
          disablePanzoom: true,
        },
        buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showThumbnailsButton: false,
            showFullscreenButton: true,
            showNextButton: true,
            showPrevButton: true,
        },
        caption: {
            showCaption: false
          }
      }

    return(
        <>
      <Seo
        pageTitle="Our Work"
        pageDescription="Adrenalize Digital - Creating intelligent digital products for intelligent businesses."
        pageKeywords="Adrenalize, Digital, Smart, Technolgoies, Web, App, Application, Mobile, Design, Development"
        pageUrl="https://www.adrenalizedigital.ca/our-work"
        pageImage="https://github.com/brad-nst/adrenalize-digital/blob/main/src/assets/images/adLogoDark.png?raw=true"
      />
        <div className="md:w-full md:max-w-screen-lg md:mx-auto">
            <div className="flex flex-col p-3 mt-2 mx-2">
                <h1 className="text-3xl md:text-4xl font-bold -mb-1">
                    Our Work
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-blue-600 -mt-1">
                    Aka Jobs Well Done.
                </h2>
                <p className="text-sm md:text-base my-2">
                    We're proud to have completed numerous top-notch projects for a growing family of happy clients. Have a look around, maybe (hopefully!) we can add your business to the board!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 mx-2 my-2">
                <div className="portfolioCard">
                    <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">Netstaurant</h2>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Type</span>
                        <span className="text-sm">Web Application</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Industry</span>
                        <span className="text-sm">Restaurant Equipment Supplier</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mt-1 mr-2 text-sm">Gallery</span>
                        <div className="portfolioGallery">
                            <SRLWrapper options={options}>
                                {data.netstaurant.nodes.map((node) => {
                                return(
                                    <GatsbyImage 
                                    image={getImage(node.childImageSharp.gatsbyImageData)}
                                    className="rounded-md h-24 shadow-md m-1 portfolioGalleryImage"
                                    alt="Netstaurant Screenshot"
                                />
                                )})}
                            </SRLWrapper>
                        </div>
                    </div>
                    <div className="flex flex-col my-1">
                        <span className="font-bold mr-2 text-sm">Description</span>
                        <span className="text-sm">Netstaurant's progressive web application uses Shopify as a headless CMS and transaction handler, dynamically fetching data via graphQL API while statically rendering assets for optimal site speed. Product search is handled using a lightning quick, live-updated search API that instantly renders results as search parameters are updated. Finally, a custom-developed live auction component allows users to bid on refurbished used inventory.</span>
                    </div>
                    <div className="flex flex-row items-center flex-wrap mt-auto py-2">
                        <span className="portfolioTag">
                            Web
                        </span>
                        <span className="portfolioTag">
                            Shopify
                        </span>
                        <span className="portfolioTag">
                            Headless CMS
                        </span>
                        <span className="portfolioTag">
                            eCommerce
                        </span>
                    </div>
                </div>
                <div className="portfolioCard">
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">Essence Of Beauty</h2>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Type</span>
                        <span className="text-sm">Web Application</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Industry</span>
                        <span className="text-sm">Personal Services / Esthetics</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mt-1 mr-2 text-sm">Gallery</span>
                        <div className="portfolioGallery">
                            <SRLWrapper options={options}>
                                {data.eob.nodes.map((node) => {
                                return(
                                    <GatsbyImage 
                                    image={getImage(node.childImageSharp.gatsbyImageData)}
                                    className="rounded-md h-24 shadow-md m-1 portfolioGalleryImage"
                                    alt="Essence of Beauty Screenshot"
                                />
                                )})}
                            </SRLWrapper>
                        </div>
                    </div>
                    <div className="flex flex-col my-1">
                        <span className="font-bold mr-2 text-sm">Description</span>
                        <span className="text-sm">
                            Essence of Beauty's existing WordPress development was left in disarray by their previous developer, making site updates and editing extremely difficult. In addition, the site's reliance on plugins left it vulnerable to attack and extremely slow due to excessive client-side script processing. We are working together to redevelop the entire site using WordPress as a headless CMS, statically rendering assets to improve site speed while reducing the attack surface with custom developed components.
                        </span>
                    </div>
                    <div className="flex flex-row items-center flex-wrap mt-auto py-2">
                        <span className="portfolioTag">
                            Web
                        </span>
                        <span className="portfolioTag">
                            WordPress
                        </span>
                        <span className="portfolioTag">
                            Headless CMS
                        </span>
                    </div>
                </div>
                <div className="portfolioCard">
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">JAX Bucerias</h2>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Type</span>
                        <span className="text-sm">Web Application</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Industry</span>
                        <span className="text-sm">Live Music Venue / Restaurant</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mt-1 mr-2 text-sm">Gallery</span>
                        <div className="portfolioGallery">
                            <SRLWrapper options={options}>
                                {data.jax.nodes.map((node) => {
                                return(
                                    <GatsbyImage 
                                    image={getImage(node.childImageSharp.gatsbyImageData)}
                                    className="rounded-md h-24 shadow-md m-1 portfolioGalleryImage"
                                    alt="JAX Screenshot"
                                />
                                )})}
                            </SRLWrapper>
                        </div>
                    </div>
                    <div className="flex flex-col my-1">
                        <span className="font-bold mr-2 text-sm">Description</span>
                        <span className="text-sm">JAX web application was originally developed with simple functionality with the main goal of allowing users to view the upcoming event schedule as well as the restaurant menu. In response to COVID-19, we integrated a QR-code for patrons to scan that automatically opened the restaurant menu on their phones for a 100% contact-free experience. We are currently working together to integrate a new print-on demand merchandise shop as well as an updated reservation system that will allow users to see date openings for VIP sections at the venue.</span>
                    </div>
                    <div className="flex flex-row items-center flex-wrap mt-auto py-2">
                        <span className="portfolioTag">
                            Web
                        </span>
                        <span className="portfolioTag">
                            Headless CMS
                        </span>
                        <span className="portfolioTag">
                            Dropshipping
                        </span>
                        <span className="portfolioTag">
                            Print-on-Demand
                        </span>
                        <span className="portfolioTag">
                            eCommerce
                        </span>
                    </div>
                </div>
                <div className="portfolioCard">
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">CravePOS</h2>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Type</span>
                        <span className="text-sm">Cross-Platform Application</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Industry</span>
                        <span className="text-sm">Restaurant Management</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mt-1 mr-2 text-sm">Gallery</span>
                        <div className="portfolioGallery">
                            <SRLWrapper options={options}>
                                {data.crave.nodes.map((node) => {
                                return(
                                    <GatsbyImage 
                                    image={getImage(node.childImageSharp.gatsbyImageData)}
                                    className="rounded-md h-24 shadow-md m-1 portfolioGalleryImage"
                                    alt="Crave Screenshot"
                                />
                                )})}
                            </SRLWrapper>
                        </div>
                    </div>
                    <div className="flex flex-col my-1">
                        <span className="font-bold mr-2 text-sm">Description</span>
                        <span className="text-sm">The Crave point-of-sale system is being developed as one feature in the Crave Restaurant Management Suite. A React Native application that is enabled for use on all devices included desktop, the POS connects to local virtual server that is synchronized with the business cloud database via Adrenalize edge-to-cloud data sync technology, enabling it to continue functioning without network connectivity and subsequently updating the database without conflict once the network is restored. Key features include an automated inventory management and business metrics updated live to the CraveRMS management app, allowing management to view live data from their venue from anywhere in the world.</span>
                    </div>
                    <div className="flex flex-row items-center flex-wrap mt-auto py-2">
                        <span className="portfolioTag">
                            Cross-Platform
                        </span>
                        <span className="portfolioTag">
                            Hybrid App
                        </span>
                        <span className="portfolioTag">
                            Application Suite
                        </span>
                    </div>
                </div>
                <div className="portfolioCard">
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">myCrypto Canada</h2>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Type</span>
                        <span className="text-sm">Web Application</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Industry</span>
                        <span className="text-sm">Finance / Education</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mt-1 mr-2 text-sm">Gallery</span>
                        <div className="portfolioGallery">
                            <SRLWrapper options={options}>
                                {data.mycrypto.nodes.map((node) => {
                                return(
                                    <GatsbyImage 
                                    image={getImage(node.childImageSharp.gatsbyImageData)}
                                    className="rounded-md h-24 shadow-md m-1 portfolioGalleryImage"
                                    alt="myCrypto Canada Screenshot"
                                />
                                )})}
                            </SRLWrapper>
                        </div>
                    </div>
                    <div className="flex flex-col my-1">
                        <span className="font-bold mr-2 text-sm">Description</span>
                        <span className="text-sm">The myCrypto Canada web app is designed to provide users with live updated cryptocurrency data via 3rd party REST API. The blog is designed for social sharing to promote social media marketing capability while the educational resources are linked with Canadian cryptocurrency affiliates for monetization.</span>
                    </div>
                    <div className="flex flex-row items-center flex-wrap mt-auto py-2">
                        <span className="portfolioTag">
                            Web
                        </span>
                        <span className="portfolioTag">
                            Headless CMS
                        </span>
                        <span className="portfolioTag">
                            Affiliate Marketing
                        </span>
                        <span className="portfolioTag">
                            Blog
                        </span>
                    </div>
                </div>
                <div className="portfolioCard">
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">Your Name Here</h2>
                <FaPlusCircle className="mx-auto my-8 md:m-auto text-7xl text-green-500 transform hover:scale-105 cursor-pointer"/>
            </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center mt-8">
                    Ready To See Your Name On The Board?
                </h1>
                <p className="text-sm md:text-base mx-4 mb-4">We're always ready for the next project. Drop us a line today to see how we can help you knock you goals out of the park!</p>
                <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto mb-2"/>
        </div>
        </>
    )
}

export const pageQuery = graphql`
    {
        jax: allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "portfolio/jax"}}
          ) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          },
          eob: allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "portfolio/eob"}}
          ) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          },
          mycrypto: allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "portfolio/mycrypto"}}
          ) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          },
          netstaurant: allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "portfolio/netstauraunt"}}
          ) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          },
          crave: allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "portfolio/crave"}}
          ) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    }
`

export default Portfolio;