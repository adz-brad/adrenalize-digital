import React from 'react'
import { BiCaretRightCircle } from "react-icons/bi"
import { SiMagento, SiWoo, SiBigcommerce, SiHotjar, SiPlausibleanalytics, SiBaremetrics, SiGoogleanalytics } from "react-icons/si"
import { FaShopify, FaRegCircle, FaRegQuestionCircle } from "react-icons/fa"
import {
  RiLightbulbFlashLine,
  RiShieldStarLine,
  RiBuildingLine,
} from "react-icons/ri"
import { MdSpeed, MdOutlineShoppingCart } from "react-icons/md"
import { animateScroll as scroll } from "react-scroll"

const Faq = ({ data }) => {
    return(
        <div className="flex flex-col">
            {data.map((data) => {
                return(
                    <div className="p-2 md:p-4 bg-gray-100 rounded-md shadow-md m-2 md:mx-0">
                        <h3 className="font-content text-base md:text-xl font-semibold">{data.question}</h3>
                        <p className="text-sm my-2">{data.answer}</p>
                    </div>
                )
            })}
        </div>
    )
}

const WebApplications = () => {

    const scrollTo = props => {
        scroll.scrollTo(document.getElementById(props).offsetTop, {
          duration: 200,
          smooth: true,
        })
      }

      const webFaq = [
        {
            question: `I need a website... What is a web application?`,
            answer: `You may have noticed we commonly refer to web projects as applications rather than websites, this is done with the intent of demonstrating our shift away from traditional development models. In the simplest terms, we don't believe that most "websites" leverage the capabilities of the web to their full extent, which is unfortunate for both users and businesses relying on user interaction, so rather than being grouped together with the average, we stand apart and showcase our talent in building "native application" style sites that function more like the apps on your desktop computer or mobile device, as these are the tools that most users interact with most commonly.`
        },
          {
            question: `Do you build your web apps to be mobile responsive?`,
            answer: `Actually, we design and build each web app project to be mobile-FIRST! And unlike most developers who flaunt the fact that they build mobile responsive pages, we don't even mention it because honestly, it's 2021... every page should be designed for mobile devices.`
          },
          {
            question: `Do you build progressive web apps that can be installed on mobile?`,
            answer: `Absolutely! Every project we build can be installed to the home screen of any mobile device if you want it to be. By caching static resources, this improves operational speeds beyond the already blazing-fast page speeds experienced on our sites, leaving the user with an improved experience. This also allows users to interact with your web app during periods of low or no connectivity, increasing their experience further.`
        },
        {
            question: `What makes Neural web apps so fast?`,
            answer: `KFC may not give away their secret blend of herbs and spices so easily, but we can let you in on a little secret - our apps are fast because we care enough to put in the hard work and determine exactly what secret blend of web technologies, aka the "stack", will work best to meet each project's unique requirements. Using advanced modern frameworks and API's such as those powering apps like Facebook, Spotify, Uber, Airbnb (shall we go on?) we design a custom stack that specifically suits each client's needs. This results in smooth operating, FAST operational speeds in all of our projects.
            `
        },
        {
            question: `Why is site speed so important anyway?`,
            answer: `Buffering. Loading. Blank pages. These things can be the bane of any users existence and shockingly can cost companies MILLIONS of dollars in lost revenue. As a business, that's a scary reality to face, but it's true! Recent data shows that a one-second delay can drop conversion rates by 7%, so, for example, if your business is averaging $100,000 per day in sales, you could be losing $2.5 million per year in lost conversions. That is a staggering figure, and we know it's also a large one to work with, but scale it back to $500 per day average revenue and it still equates to nearly $13,000, which is still a huge number for a small business. But wait, there's more! Google constantly tweaks how sites score in search rankings, and one of the most common trends lately has been an increased weighting on page load speeds, meaning if your site is slow and clunky, you're losing out on the clicks you'd be getting if you had an inherently fast Neural site!`
        },
        {
            question: `What is a "decoupled" site architecture?`,
            answer: `In a traditional CMS like WordPress, everything lives in one place: your PHP server (where client-side code runs), all of your files, your project database and all of the plugins / services that users interact with on your site. By having everything in one place, that type of site architecture effectively creates a large attack surface whereby malicious scripts can be injected into your site and used to "back-door" their way into your database through the front-end. This is a common occurrence on WordPress sites and huge cause for concern because honestly, you shouldn't have to worry about your private database being breached through something as simple as a contact form...
            With a Neural project, we "decouple" the content management system, features and 3rd party integrations from the front end of the site while statically rendering most content, leaving a minimal to almost non-existent attack surface for would-be cyber threats, giving you peace of mind that your data stays safe!`
        },
      ]

    return (
      <>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2 m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              A Modern Mentality
            </h2>
            <p className="m-1 md:text-base">
              With the ever-changing state of the web, businesses need to adapt
              to using new technologies in order to meet new client demands and
              stay relevant. Our web app development solutions do exactly that
              and more, with a focus on driving new user intake, increasing
              existing user retention and raising overall user satisfaction. The
              end result? Improved revenue for your business!
            </p>
            <p className="m-1 md:text-base">
              We utilize the latest and greatest in web design concepts and
              development methodologies to create project stacks that are unique
              to your needs, and because we've away from traditional, "legacy"
              architecture building models, your Neural web project won't suffer
              from common issues inherently plaguing most sites on the web.
            </p>
          </div>

          <div className="md:w-1/2 md:p-4">
            <h2 className="font-subheader font-semibold text-2xl md:text-3xl mt-4 mx-1">
              Our web applications are
            </h2>
            <ul className="my-2">
              <li className="flex flex-col p-1 mb-1">
                <div className="flex flex-row items-center">
                  <MdSpeed className="text-3xl md:text-4xl mr-2 filter drop-shadow" />
                  <h2 className="font-subheader text-2xl md:text-3xl font-bold">
                    Fast
                  </h2>
                </div>
                <p className="mx-1 mb-2 text-sm font-semibold">
                  Built with modern frameworks that deliver blazing-fast page
                  load speeds.
                </p>
              </li>
              <li className="flex flex-col p-1 mb-1">
                <div className="flex flex-row items-center">
                  <RiShieldStarLine className="text-3xl md:text-4xl transform scale-95 mr-2 filter drop-shadow" />
                  <h2 className="font-subheader text-2xl md:text-3xl font-bold">
                    Secure
                  </h2>
                </div>
                <p className="mx-1 mb-2 text-sm font-semibold">
                  Decoupled site architectures reduce potential attack surfaces
                  to near-zero.
                </p>
              </li>
              <li className="flex flex-col p-1 mb-1">
                <div className="flex flex-row items-center">
                  <RiLightbulbFlashLine className="text-3xl md:text-4xl transform scale-95 -translate-y-1 mr-2 filter drop-shadow" />
                  <h2 className="font-subheader text-2xl md:text-3xl font-bold">
                    Intelligent
                  </h2>
                </div>
                <p className="mx-1 mb-2 text-sm font-semibold">
                  Smart functionality and intuitively designed interfaces
                  optimize user experience.
                </p>
              </li>
              <li className="flex flex-col p-1 mb-1">
                <div className="flex flex-row items-center">
                  <RiBuildingLine className="text-3xl md:text-4xl transform scale-95 mr-2 filter drop-shadow" />
                  <h2 className="font-subheader text-2xl md:text-3xl font-bold">
                    Scalable
                  </h2>
                </div>
                <p className="mx-1 mb-2 text-sm font-semibold">
                  Designed to flex and adapt to your business needs, your site
                  is built grow with you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 md:p-4 rounded-md shadow-md bg-white md:mx-4">
          <h2 className="font-subheader font-semibold text-2xl md:text-3xl mx-1">
            Flexibility without sacrifice
          </h2>
          <p className="m-1 text-sm md:text-base">
            That's what you get with a custom developer who truly understands
            what optimal site performance can achieve for a business. So if
            you're interested in getting the most bang for your buck, we're
            ready to help.
          </p>
          <p className="m-1 text-sm md:text-base">
            You can read on to learn more about our web projects or if you're
            ready, get in touch with us today.{" "}
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md my-4 mx-auto md:mr-auto md:ml-0"
          >
            Contact Us
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:p-4">
          <div className="flex flex-col my-4 md:w-1/2 md:pr-4">
            <div className="flex flex-row items-center my-2">
              <MdOutlineShoppingCart className="text-3xl md:text-5xl" />
              <h2 className="font-subheader font-semibold text-2xl md:text-4xl ml-2">
                eCommerce on the Edge
              </h2>
            </div>
            <p className="m-1 text-sm md:text-base">
              Less loading means increased conversions. And you know what that
              means?
            </p>
            <p className="m-1 text-sm md:text-base">
              Mas dinero. Moolah. Cashflow. <strong>More Revenue.</strong>
            </p>
            <p className="m-1 text-sm md:text-base">
              By utilizing lightning quick content delivery networks in
              combination with statically rendered assets, we put your products
              at more users fingertips in the blink of an eye.
            </p>
            <p className="m-1 md:my-auto text-base">
              <strong>Simply put, Neural web apps were born to sell.</strong>
            </p>
          </div>

          <div className="flex flex-col md:w-1/2 my-4 p-2 md:p-4 rounded-md shadow-md bg-white">
            <h2 className="font-subheader font-semibold text-xl md:text-3xl mt-2 mx-1 text-center">
              Featuring Integrations with
            </h2>
            <div className="grid grid-cols-4 gap-1 py-4">
            <div className="flex flex-col items-center">
              <FaShopify className="ecommerceIcon shopifyIcon" />
              <h2 className="font-content font-bold text-xs">Shopify</h2>
              </div>
              <div className="flex flex-col items-center">
              <SiWoo className="ecommerceIcon wooCommerceIcon" />
              <h2 className="font-content font-bold text-xs">WooCommerce</h2>
              </div>
              <div className="flex flex-col items-center">
              <SiBigcommerce className="ecommerceIcon bigCommerceIcon" />
              <h2 className="font-content font-bold text-xs">BigCommerce</h2>
              </div>
              <div className="flex flex-col items-center">
              <SiMagento className="ecommerceIcon magentoIcon" />
              <h2 className="font-content font-bold text-xs">Magento</h2>
              </div>
            </div>
            <p className="m-1 text-sm md:text-base">
              And much, much more. We can develop custom integrations with the
              eCommerce platform of your choice or build you youre own
              standalone commerce platform. That's what you get with Neural -{" "}
              <strong>the flexibity to choose.</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:p-4">
          <div className="flex flex-col my-2 md:w-1/2 p-2 md:pl-0 md:pr-4">
            <div className="flex flex-row items-center mb-1">
              <div className="relative">
                <FaRegCircle className="text-green-400 filter drop-shadow-md text-5xl md:text-6xl" />
                <span className="font-headers text-green-500 filter drop-shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                  100
                </span>
              </div>
              <h2 className="font-subheader font-semibold text-2xl md:text-4xl ml-2">
                SEO? It's built right in.
              </h2>
            </div>
            <p className="m-1 text-sm md:text-base">
              It's the buzzword that just won't go away in the digital marketing
              world. And for good reason - quality SEO is vital for any
              web-based digital content to reach it's target audience. It's the
              cornerstone of search engine marketing and digital marketing
              agencies typically charge an arm and a leg for "SEO optimization"
              in your site.
            </p>
            <p className="m-1 text-sm md:text-base">
              But we're not digital marketers. We're developers with good taste,
              so we bake industry-leading SEO practices right into each project
              component, meaning when you build with Neural, your site's already
              on the road to achieving <strong>top-notch SERP rankings right out of the box.</strong>
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 my-4 p-2 md:p-4 rounded-md shadow-md bg-white">
            <h2 className="font-subheader font-semibold text-xl md:text-3xl mt-2 mx-1 text-center">
              BYOA - Bring Your Own Analytics.
            </h2>
            <div className="grid grid-cols-4 py-4 md:my-auto">
            <div className="flex flex-col items-center">
                <SiGoogleanalytics className="ecommerceIcon" />
                <h2 className="font-content font-bold text-xs">Google</h2>
              </div>
            <div className="flex flex-col items-center">
                <SiBaremetrics className="ecommerceIcon" />
                <h2 className="font-content font-bold text-xs">Baremetrics</h2>
              </div>
              <div className="flex flex-col items-center">
                <SiHotjar className="ecommerceIcon" />
                <h2 className="font-content font-bold text-xs">Hotjar</h2>
              </div>
              <div className="flex flex-col items-center">
                <SiPlausibleanalytics className="ecommerceIcon" />
                <h2 className="font-content font-bold text-xs">Plausible</h2>
              </div>
            </div>
            <p className="m-1 text-sm md:text-base md:mt-auto">
                Boost your SEO injections based on real user data by integrating the Analytics API of your choice.
            </p>
            <p className="m-1 text-sm md:text-base md:mb-auto">
              Or, build only what you need - we can integrate custom analytics tracking right into your site dashboard. <strong>It's up to you.</strong> 
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-gray-900 rounded-lg shadow-md md:m-4 p-3">
            <h1 className="font-subheader text-2xl font-semibold text-gray-100">Have your own ideas for a custom feature?</h1>
        </div>
        <div id="web-faq" className="flex flex-col md:p-4 my-4 md:mx-4 bg-white rounded-md shadow-md">
            <div className="flex flex-row items-center mt-4 mb-2 ml-2 md:mt-2 md:mb-3 md:mx-0">
                <FaRegQuestionCircle className="text-4xl"/>
                <h2 className="font-subheader ml-2 font-semibold text-2xl md:text-3xl">
            Questions? Meet Answers.
          </h2>
            </div>
          <Faq data={webFaq} />
          <h2 className="font-subheader font-semibold text-2xl md:text-3xl mt-4 mx-auto">
                Still have questions?
              </h2>
              <button
            onClick={() => scrollTo("contact")}
            className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-4 mb-6 md:mb-4 mx-auto"
          >
            Contact Us
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
        </div>
      </>
    )
}

const MobileApplications = () => {
    return(
        <>
        </>
    )
}

const DesktopApplications = () => {
    return(
        <>
        </>
    )
}

const HybridAppSuites = () => {
    return(
        <>
        </>
    )
}

export { WebApplications, MobileApplications, DesktopApplications, HybridAppSuites }