import React from 'react'
import { ContactForm } from '../components/contact'
import { FaPlusCircle } from 'react-icons/fa'

const Portfolio = () => {
    return(
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
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Gallery</span>
                        <span className="text-sm">Coming Soon</span>
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
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Gallery</span>
                        <span className="text-sm">Coming Soon</span>
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
                    <div className="flex flex-row items-center">
                        <span className="font-bold mr-2 text-sm">Gallery</span>
                        <span className="text-sm">Coming Soon</span>
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
                <h2 className="text-2xl font-bold border-b border-blue-600 mb-2">Your Name Here</h2>
                <FaPlusCircle className="mx-auto my-8 md:m-auto text-7xl text-green-500 transform hover:scale-105"/>
            </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center mt-8">
                    Ready To See Your Name On The Board?
                </h1>
                <p className="text-sm md:text-base mx-4 mb-4">We're always ready for the next project. Drop us a line today to see how we can help you knock you goals out of the park!</p>
                <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto mb-2"/>
        </div>
    )
}
export default Portfolio;