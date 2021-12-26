import React, { useState } from 'react'
import { BiCaretRightCircle } from "react-icons/bi"
import { SiMagento, SiWoo, SiBigcommerce, SiHotjar, SiPlausibleanalytics, SiBaremetrics, SiGoogleanalytics } from "react-icons/si"
import { FaWindows, FaLinux, FaApple, FaShopify, FaRegCircle, FaRegQuestionCircle } from "react-icons/fa"
import { RiExchangeDollarLine } from 'react-icons/ri'
import {
  RiLightbulbFlashLine,
  RiShieldStarLine,
  RiBuildingLine,
} from "react-icons/ri"
import { MdOutlineSync, MdOutlineArrowRightAlt, MdOutlineAndroid, MdSpeed, MdOutlineShoppingCart, MdOutlineDashboardCustomize, MdOutlineCloud, MdTrendingUp, MdOutlineSentimentVerySatisfied, MdOutlineLaptopMac, MdOutlinePhoneAndroid } from "react-icons/md"
import { animateScroll as scroll } from "react-scroll"
import { Helmet } from 'react-helmet'

const Faq = ({ data, idPrefix }) => {

    const [ expanded, setExpanded ] = useState(0)

    const openTab = async props => {
      const setFaq = () => {
        if (expanded === props.index) {
          setExpanded(null)
        } else {
          setExpanded(props.index)
        }
      }
      await setFaq()
      scroll.scrollTo(document.getElementById(`${props.idPrefix}-${props.index}`).offsetTop + 220, {
        duration: 200,
        smooth: true,
      })
    }
    
    return(
        <div className="flex flex-col">
            <Helmet>
              <script type="application/ld+json">
              {`{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${data.map((data) => {
                  return(
                    `{
                      "@type": "Question",
                      "name": "${data.question}",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "${data.jsonAnswer}",
                      },`
                  )})}
                  ]
                }
              `}
              </script>
            </Helmet>
            {data.map((data, index) => {
                return(
                      <button 
                      id={`${idPrefix}-${index}`}
                      className="text-left p-2 md:p-4 bg-gray-100 rounded-md shadow-md m-2 md:mx-0 overflow-hidden"
                      onClick={() => openTab({index, idPrefix})}
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex flex-row items-center h-8 w-8">
                            <BiCaretRightCircle className={`text-3xl transform transition-all duration-100 filter drop-shadow-md ${expanded === index ? 'text-blue-500' : 'rotate-90'}`} />
                          </div>
                          <h3 className="font-content text-base md:text-xl font-semibold ml-2">{data.question}</h3> 
                        </div>
                        <div className={`faqContent  ${expanded === index ? 'visible' : 'hidden'}`}>
                          {data.answer}
                        </div>
                      </button>
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
            answer: <><p>You may have noticed we commonly refer to web projects as applications rather than websites, this is done with the intent of demonstrating our shift away from traditional development models.</p><p>In the simplest terms, we don't believe that most "websites" leverage the capabilities of the web to their full extent, which is unfortunate for both users and businesses relying on user interaction, so rather than being grouped together with the average, we stand apart and showcase our talent in building "native application" style sites that function more like the apps on your desktop computer or mobile device, as these are the tools that most users interact with most commonly.</p></>,
            jsonAnswer: `<p>You may have noticed we commonly refer to web projects as applications rather than websites, this is done with the intent of demonstrating our shift away from traditional development models.</p><p>In the simplest terms, we don't believe that most "websites" leverage the capabilities of the web to their full extent, which is unfortunate for both users and businesses relying on user interaction, so rather than being grouped together with the average, we stand apart and showcase our talent in building "native application" style sites that function more like the apps on your desktop computer or mobile device, as these are the tools that most users interact with most commonly.</p>`
        },
          {
            question: `Do you build your web apps to be mobile responsive?`,
            answer: <p>Actually, we design and build each web app project to be mobile-FIRST! And unlike most developers who flaunt the fact that they build mobile responsive pages, we don't even mention it because honestly, it's 2021... every page should be designed for mobile devices.</p>,
            jsonAnswer: `<p>Actually, we design and build each web app project to be mobile-FIRST! And unlike most developers who flaunt the fact that they build mobile responsive pages, we don't even mention it because honestly, it's 2021... every page should be designed for mobile devices.</p>`
          },
          {
            question: `Do you build progressive web apps that can be installed on mobile?`,
            answer: <p>Absolutely! Every project we build can be installed to the home screen of any mobile device if you want it to be. By caching static resources, this improves operational speeds beyond the already blazing-fast page speeds experienced on our sites, leaving the user with an improved experience. This also allows users to interact with your web app during periods of low or no connectivity, increasing their experience further.</p>,
            jsonAnswer: `<p>Absolutely! Every project we build can be installed to the home screen of any mobile device if you want it to be. By caching static resources, this improves operational speeds beyond the already blazing-fast page speeds experienced on our sites, leaving the user with an improved experience. This also allows users to interact with your web app during periods of low or no connectivity, increasing their experience further.</p>`
        },
        {
            question: `What makes Neural web apps so fast?`,
            answer: <p>KFC may not give away their secret blend of herbs and spices so easily, but we can let you in on a little secret - our apps are fast because we care enough to put in the hard work and determine exactly what secret blend of web technologies, aka the "stack", will work best to meet each project's unique requirements. Using advanced modern frameworks and API's such as those powering apps like Facebook, Spotify, Uber, Airbnb (shall we go on?) we design a custom stack that specifically suits each client's needs. This results in smooth operating, FAST operational speeds in all of our projects.</p>,
            jsonAnswer: `<p>KFC may not give away their secret blend of herbs and spices so easily, but we can let you in on a little secret - our apps are fast because we care enough to put in the hard work and determine exactly what secret blend of web technologies, aka the "stack", will work best to meet each project's unique requirements. Using advanced modern frameworks and API's such as those powering apps like Facebook, Spotify, Uber, Airbnb (shall we go on?) we design a custom stack that specifically suits each client's needs. This results in smooth operating, FAST operational speeds in all of our projects.</p>`
        },
        {
            question: `Why is site speed so important anyway?`,
            answer: <><p>Buffering. Loading. Blank pages. These things can be the bane of any users existence and shockingly can cost companies MILLIONS of dollars in lost revenue. As a business, that's a scary reality to face, but it's true!</p><p>Recent data shows that a one-second delay can drop conversion rates by 7%, so, for example, if your business is averaging $100,000 per day in sales, you could be losing $2.5 million per year in lost conversions. That is a staggering figure, and we know it's also a large one to work with, but scale it back to $500 per day average revenue and it still equates to nearly $13,000, which is still a huge number for a small business.</p><p>But wait, there's more! Google constantly tweaks how sites score in search rankings, and one of the most common trends lately has been an increased weighting on page load speeds, meaning if your site is slow and clunky, you're losing out on the clicks you'd be getting if you had an inherently fast Neural site!</p></>,
            jsonAnswer: `<p>Buffering. Loading. Blank pages. These things can be the bane of any users existence and shockingly can cost companies MILLIONS of dollars in lost revenue. As a business, that's a scary reality to face, but it's true!</p><p>Recent data shows that a one-second delay can drop conversion rates by 7%, so, for example, if your business is averaging $100,000 per day in sales, you could be losing $2.5 million per year in lost conversions. That is a staggering figure, and we know it's also a large one to work with, but scale it back to $500 per day average revenue and it still equates to nearly $13,000, which is still a huge number for a small business.</p><p>But wait, there's more! Google constantly tweaks how sites score in search rankings, and one of the most common trends lately has been an increased weighting on page load speeds, meaning if your site is slow and clunky, you're losing out on the clicks you'd be getting if you had an inherently fast Neural site!</p>`
        },
        {
            question: `What is a "decoupled" site architecture?`,
            answer: <><p>In a traditional CMS like WordPress, everything lives in one place: your PHP server (where client-side code runs), all of your files, your project database and all of the plugins / services that users interact with on your site. By having everything in one place, that type of site architecture effectively creates a large attack surface whereby malicious scripts can be injected into your site and used to "back-door" their way into your database through the front-end. This is a common occurrence on WordPress sites and huge cause for concern because honestly, you shouldn't have to worry about your private database being breached through something as simple as a contact form...</p><p>With a Neural project, we "decouple" the content management system, features and 3rd party integrations from the front end of the site while statically rendering most content, leaving a minimal to almost non-existent attack surface for would-be cyber threats, giving you peace of mind that your data stays safe!</p></>,
            jsonAnswer: `<p>In a traditional CMS like WordPress, everything lives in one place: your PHP server (where client-side code runs), all of your files, your project database and all of the plugins / services that users interact with on your site. By having everything in one place, that type of site architecture effectively creates a large attack surface whereby malicious scripts can be injected into your site and used to "back-door" their way into your database through the front-end. This is a common occurrence on WordPress sites and huge cause for concern because honestly, you shouldn't have to worry about your private database being breached through something as simple as a contact form...</p><p>With a Neural project, we "decouple" the content management system, features and 3rd party integrations from the front end of the site while statically rendering most content, leaving a minimal to almost non-existent attack surface for would-be cyber threats, giving you peace of mind that your data stays safe!</p>`
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
              <SiBigcommerce className="ecommerceIcon bigCommerceIcon" />
              <h2 className="font-content font-bold text-xs transform scale-95">BigCommerce</h2>
              </div>
              <div className="flex flex-col items-center">
              <SiMagento className="ecommerceIcon magentoIcon" />
              <h2 className="font-content font-bold text-xs">Magento</h2>
              </div>
              <div className="flex flex-col items-center">
              <SiWoo className="ecommerceIcon wooCommerceIcon" />
              <h2 className="font-content font-bold text-xs transform scale-95">WooCommerce</h2>
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

        <div className="flex flex-col bg-gray-900 rounded-lg shadow-md p-3 md:m-4 md:p-6">
          <div className="flex flex-col ">
            <div className="flex flex-row items-center">
              <MdOutlineDashboardCustomize className="text-3xl md:text-4xl text-blue-500 mr-2 md:mr-4"/>
              <h1 className="font-subheader text-lg md:text-2xl font-semibold text-gray-100 mb-2">Have an idea for a custom feature?</h1>
            </div>
            <p className="my-1 text-sm text-gray-100">
              The calling card of our web applications is a fantastic user experience and we achieve this by focusing on developing components that provide a premium level of functionality for clients and users alike.
            </p>
            <p className="my-1 text-sm text-gray-100">
              Rather than over-extending existing plugins and UI components that were designed to accomplish a laundry list of different things, we flex our development muscles to integrate site features that accomplish exactly what clients need, nothing more and nothing less. This keeps sites lean, fast and functional, resulting in an improved experience for users and business managers alike.
            </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mt-2">
            <div className="flex flex-col md:w-2/3 my-2">
            <div className="flex flex-row items-center">
              <MdOutlineCloud className="text-3xl md:text-4xl text-blue-500 mr-2 md:mr-4 transform -translate-y-1" />
            <h1 className="font-subheader text-lg md:text-2xl font-semibold text-gray-100 mb-2">
              If you can dream it, we can build it.
            </h1>
            </div>
            <p className="my-1 text-sm text-gray-100">
              The most wonderful thing about building digital products is the ability to create something from nothing with almost no limitations. So if you have an idea for a component you would like integrated into your site, don't hesitate to drop us a line - achieving optimal site functionality is just one contact form away.
            </p>
            </div>
            <button
            onClick={() => scrollTo("contact")}
            className="flex flex-row items-center text-xl px-4 py-2 hover:bg-blue-700 bg-blue-600 text-gray-100 font-bold font-subheader rounded-lg shadow-md my-4 mx-auto"
          >
            Contact Us
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
          </div>
        </div>
        <div id="web-faq" className="flex flex-col md:p-4 my-4 md:mx-4 bg-white rounded-md shadow-md">
            <div className="flex flex-row items-center mt-4 mb-2 ml-2 md:mt-2 md:mb-3 md:mx-0">
                <FaRegQuestionCircle className="text-4xl"/>
                <h2 className="font-subheader ml-2 font-semibold text-2xl md:text-3xl">
            Questions? Meet Answers.
          </h2>
            </div>
          <Faq data={webFaq} idPrefix="webFAQ"/>
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

  const scrollTo = props => {
    scroll.scrollTo(document.getElementById(props).offsetTop, {
      duration: 200,
      smooth: true,
    })
  }

  const mobileFaq = [
    {
        question: `Do you build apps for all types of mobile devices?`,
        answer: <p>Absolutely. We create apps for iOS and Android smartphones and tablets with the ability to extend usage to devices like smart watches and other smart media devices. Simply put, if it can run an app, we can build one for it.</p>,
        jsonAnswer:`<p>Absolutely. We create apps for iOS and Android smartphones and tablets with the ability to extend usage to devices like smart watches and other smart media devices. Simply put, if it can run an app, we can build one for it.</p>`
    },
    {
      question: `How do users install a custom app on their device?`,
      answer: <p>Installing a Neural smart application is just as easy as installing any other app! Upon publishing, Neural mobile applications can be installed and updated by users via the Google Play Store (Android), the Apple Store (iOS) or SDK.</p>,
      jsonAnswer:`<p>Installing a Neural smart application is just as easy as installing any other app! Upon publishing, Neural mobile applications can be installed and updated by users via the Google Play Store (Android), the Apple Store (iOS) or SDK.</p>`
  },
  {
    question: `How is my app data managed?`,
    answer: <p>Every Neural mobile application is managed via a custom built, integrated management tool, where clients can manage their app cloud databases, appearance, and configuration settings.</p>,
    jsonAnswer:`<p>Every Neural mobile application is managed via a custom built, integrated management tool, where clients can manage their app cloud databases, appearance, and configuration settings.</p>`
},
{
  question: `Can I run my mobile app on desktop?`,
  answer: <p>We develop both our mobile and desktop applications using the same codebase - just with a slightly different execution, meaning you can have the convenience of your Neural mobile app right on your Windows, Mac or Linux OS desktop! It's not as easy as 1, 2, 3 - you can't just develop a mobile app and install it on your PC, that would be a dream come true, wouldn't it? Fortunately, Neural Hybrid App Suites make that dream come true. So if you want to build an app that runs on any platform, check out <a href="#hybrid-app-suites">Neural Hybrid App Suites!</a></p>,
  jsonAnswer:`<p>We develop both our mobile and desktop applications using the same codebase - just with a slightly different execution, meaning you can have the convenience of your Neural mobile app right on your Windows, Mac or Linux OS desktop! It's not as easy as 1, 2, 3 - you can't just develop a mobile app and install it on your PC, that would be a dream come true, wouldn't it? Fortunately, Neural Hybrid App Suites make that dream come true. So if you want to build an app that runs on any platform, check out <a href="https://www.neuralsmart.ca/products#hybrid-app-suites">Neural Hybrid App Suites!</a></p>`
},
{
  question: `Will my mobile application work offline?`,
  answer: <p>Our proprietary edge-to-cloud data sync functionality can be integrated into any Neural application, whether mobile or desktop, to ensure you can keep working during periods of limited or no connectivity without having to worry about losing your data. <a href="#edge-to-cloud">Read more about edge-to-cloud-data sync.</a></p>,
  jsonAnswer:`<p>Our proprietary edge-to-cloud data sync functionality can be integrated into any Neural application, whether mobile or desktop, to ensure you can keep working during periods of limited or no connectivity without having to worry about losing your data. <a href="https://www.neuralsmart.ca/product#edge-to-cloud">Read more about edge-to-cloud-data sync.</a></p>`
},
  ]

    return (
      <>
        <div className="flex flex-col">
          <div className="flex flex-col m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              The World At Your Fingertips
            </h2>
            <p className="m-1 md:text-base">
            Last time we checked, most people weren't stuffing laptops into their pockets. They weren't hauling their computers into the bathroom or attaching them to the dashboards of their vehicles. Nope, these are the realms of convenience, and in that world, mobile devices reign supreme.
            </p>
            <p className="m-1 md:text-base">
            Mobile apps are an extremely convenient way for users to interact with products and services, providing simple solutions to help them in their day to day lives, whether for personal or businesses usage. We build innovative, high-value applications that help our clients leverage the latest in development technology to emerge as leaders in their specific fields.
            </p>
          </div>
          <div className="flex flex-col md:flex-row my-2 -mx-1 p-2 md:p-4 rounded-md shadow-md bg-white md:mx-4">
            <div className="flex flex-col md:w-1/2 md:pr-4 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              Federated Services
            </h2>
            <p className="m-1 md:text-base">
            A common issue plaguing many businesses is the usage of many different digital products in an attempt to bring their companies into the modern age of business operations. This is often a very misguided venture which typically isn't very cost-effective and can be extremely time consuming, with users inefficiently attempting to overextend and traverse multiple applications to achieve one goal. Enter Neural Mobile Applications.
            </p>
            <p className="m-1 md:text-base">
            By building mobile apps that are designed to federate or unify multiple services into one app suite, we provide solutions that suit each clients unique needs.
            </p>
            </div>
            <div className="flex flex-col -mx-2 -mb-2 mt-6 md:m-0 md:w-1/2 bg-gray-900 text-gray-100 rounded-md shadow-md p-3">
          <h1 className="text-2xl md:text-3xl font-subheader font-bold mx-auto mt-4 md:mt-auto">
            Common solutions include:
          </h1>
          <ul className="my-3 mx-auto md:my-auto">
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>1</span>
              </div>
              <p className="productFitListItemText">
                Customer Relations Management
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>2</span>
              </div>
              <p className="productFitListItemText">
              Business Asset Management
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>3</span>
              </div>
              <p className="productFitListItemText">
              Employee Data Tracking
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>4</span>
              </div>
              <p className="productFitListItemText">
              Resource Allocation & Provisioning
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>5</span>
              </div>
              <p className="productFitListItemText">
              Process Automation
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>6</span>
              </div>
              <p className="productFitListItemText">
              Analytics Visualization
              </p>
            </li>
            </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-1 md:p-4 md:my-3 text-sm">
            <div className="flex flex-col md:w-1/2 md:pr-4">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl mt-4">
              Boost Your Brand
            </h2>
            <p className="m-1 md:text-base">
            Having an intuitively functional, user-friendly app for customers to navigate can be a huge boost to your bottom line, helping businesses streamline marketing campaigns, manage client onboarding, and foster increased customer loyalty. By offering easy to use mobile solutions, businesses can stand out from their competition and reach a younger demographic, while increasing user engagement, retention and conversion rates.
            </p>
            </div>
            <div className="flex flex-col md:w-1/2 md:pr-4">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl mt-4">
              Transform Your Business
            </h2>
            <p className="m-1 md:text-base">
            Neural mobile applications put the power to transform your business right in your pocket, providing powerful tools for managers,  customers and employees alike. This often means:
            </p>
            <ui className="flex flex-col my-4 md:my-auto mx-auto">
              <li className="flex flex-row items-center my-2">
                <MdTrendingUp className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Increased productivity</h2>
              </li>
              <li className="flex flex-row items-center my-2">
                <RiExchangeDollarLine className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Reduced operational costs</h2>
              </li>
              <li className="flex flex-row items-center my-2">
                <MdOutlineSentimentVerySatisfied className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Improved customer satisfaction</h2>
              </li>
            </ui>
            </div>
            </div>
        </div>
        <div id="mobile-faq" className="flex flex-col md:p-4 my-4 md:mx-4 bg-white rounded-md shadow-md">
            <div className="flex flex-row items-center mt-4 mb-2 ml-2 md:mt-2 md:mb-3 md:mx-0">
                <FaRegQuestionCircle className="text-4xl"/>
                <h2 className="font-subheader ml-2 font-semibold text-2xl md:text-3xl">
            Questions? Meet Answers.
          </h2>
            </div>
          <Faq data={mobileFaq} idPrefix="mobileFAQ"/>
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

const DesktopApplications = () => {

  const scrollTo = props => {
    scroll.scrollTo(document.getElementById(props).offsetTop, {
      duration: 200,
      smooth: true,
    })
  }

  const desktopFaq = [
    {
        question: `Do Neural desktop applications work on all operating systems?`,
        answer: <p>Yes! We package each Neural desktop application with an installer for all modern Windows, Mac or Linux operating systems, and can custom tailor each installation package to your needs.</p>,
        jsonAnswer:`Yes! We package each Neural desktop application with an installer for all modern Windows, Mac or Linux operating systems, and can custom tailor each installation package to your needs.`
    },
    {
      question: `Can I run my desktop app on mobile?`,
      answer: <p>We develop both our mobile and desktop applications using the same codebase - just with a slightly different execution, meaning you can have the convenience of your Neural mobile app right on your Windows, Mac or Linux OS desktop! It's not as easy as 1, 2, 3 - you can't just develop a mobile app and install it on your PC, that would be a dream come true, wouldn't it? Fortunately, Neural Hybrid App Suites make that dream come true. So if you want to build an app that runs on any platform, <a href="#hybrid-app-suites">check out Neural Hybrid App Suites!</a></p>,
      jsonAnswer:`<p>We develop both our mobile and desktop applications using the same codebase - just with a slightly different execution, meaning you can have the convenience of your Neural mobile app right on your Windows, Mac or Linux OS desktop! It's not as easy as 1, 2, 3 - you can't just develop a mobile app and install it on your PC, that would be a dream come true, wouldn't it? Fortunately, Neural Hybrid App Suites make that dream come true. So if you want to build an app that runs on any platform, <a href="https://www.neuralsmart.ca/prducts#hybrid-app-suites">check out Neural Hybrid App Suites!</a></p>`
  },
  {
    question: `Will my desktop application work offline?`,
    answer: <p>Absolutely. Our proprietary edge-to-cloud data sync functionality can be integrated into any Neural application, whether mobile or desktop, to ensure you can keep working during periods of limited or no connectivity without having to worry about losing your data. Read more about our <a href="#edge-to-cloud-data-sync">edge-to-cloud data sync technology here.</a></p>,
    jsonAnswer:`<p>Absolutely. Our proprietary edge-to-cloud data sync functionality can be integrated into any Neural application, whether mobile or desktop, to ensure you can keep working during periods of limited or no connectivity without having to worry about losing your data. Read more about our <a href="https://www.neuralsmart.ca/products#edge-to-cloud-data-sync">edge-to-cloud data sync technology here.</a></p>`
}
  ]

    return(
        <>
                <div className="flex flex-col">
          <div className="flex flex-col m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
            Powerful Desktop Applications
            </h2>
            <p className="m-1 md:text-base">
            When people think of an app, they typically think mobile. We think differently. While mobile applications may be convenient, they aren't always ideal for managing or visualizing complex data. Leveraging the same powerful frameworks and technologies we use to create our top flight mobile apps, we extend mobile functionality directly to the desktop, resulting in Windows, MacOS and Linux based applications that give you the best of both worlds.
            </p>
          </div>
          <div className="flex flex-col md:flex-row my-2 -mx-1 p-2 md:p-4 rounded-md shadow-md bg-white md:mx-4">
            <div className="flex flex-col md:w-1/2 md:pr-4 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              Unified Business Solutions
            </h2>
            <p className="m-1 md:text-base">
            A common issue plaguing many businesses is the usage of many different digital products in an attempt to bring their companies into the modern age of business operations. This is often a very misguided venture which typically isn't very cost-effective and can be extremely time consuming, with users inefficiently attempting to overextend and traverse multiple applications to achieve one goal. Enter Neural Desktop Applications.
            </p>
            <p className="m-1 md:text-base">
            By building desktop apps that are designed to federate or unify multiple services into one app suite, we provide solutions that suit each clients unique needs.
            </p>
            </div>
            <div className="flex flex-col -mx-2 -mb-2 mt-6 md:m-0 md:w-1/2 bg-gray-900 text-gray-100 rounded-md shadow-md p-3">
          <h1 className="text-2xl md:text-3xl font-subheader font-bold mx-auto mt-4 md:mt-auto">
            Common solutions include:
          </h1>
          <ul className="my-3 mx-auto md:my-auto">
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>1</span>
              </div>
              <p className="productFitListItemText">
                Customer Relations Management
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>2</span>
              </div>
              <p className="productFitListItemText">
              Business Asset Management
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>3</span>
              </div>
              <p className="productFitListItemText">
              Employee Data Tracking
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>4</span>
              </div>
              <p className="productFitListItemText">
              Resource Allocation & Provisioning
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>5</span>
              </div>
              <p className="productFitListItemText">
              Process Automation
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber bgDark">
                <span>6</span>
              </div>
              <p className="productFitListItemText">
              Analytics Visualization
              </p>
            </li>
            </ul>
            </div>
          </div>
          <div className="flex flex-col m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl mt-4">
              Transform Your Business
            </h2>
            <p className="m-1 md:text-base">
            Neural desktop applications put the power to transform your business right at your fingertips, providing powerful tools for managers,  customers and employees alike. This often means:
            </p>
            <ui className="flex flex-col md:flex-row my-4 mx-auto md:mx-0 md:my-auto">
              <li className="flex flex-row md:flex-col items-center my-2 md:mx-auto">
                <MdTrendingUp className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Increased productivity</h2>
              </li>
              <li className="flex flex-row md:flex-col items-center my-2 md:mx-auto">
                <RiExchangeDollarLine className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Reduced operational costs</h2>
              </li>
              <li className="flex flex-row md:flex-col items-center my-2 md:mx-auto">
                <MdOutlineSentimentVerySatisfied className="text-5xl mr-2"/>
                <h2 className="font-subheader text-xl font-semibold">Improved customer satisfaction</h2>
              </li>
            </ui>
            </div>
        </div>
        <div id="mobile-faq" className="flex flex-col md:p-4 my-4 md:mx-4 bg-white rounded-md shadow-md">
            <div className="flex flex-row items-center mt-4 mb-2 ml-2 md:mt-2 md:mb-3 md:mx-0">
                <FaRegQuestionCircle className="text-4xl"/>
                <h2 className="font-subheader ml-2 font-semibold text-2xl md:text-3xl">
            Questions? Meet Answers.
          </h2>
            </div>
          <Faq data={desktopFaq} idPrefix="desktopFAQ"/>
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

const HybridAppSuites = () => {

  const scrollTo = props => {
    scroll.scrollTo(document.getElementById(props).offsetTop, {
      duration: 200,
      smooth: true,
    })
  }
  
    return (
      <>
        <div className="flex flex-col">
          <div className="flex flex-col m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              The Best of Both Worlds
            </h2>
            <p className="m-1 md:text-base">
              When people think of an app, they typically think mobile. We think
              differently. While mobile applications may be convenient, they
              aren't always ideal for managing or visualizing complex data.
              Leveraging the same powerful frameworks and technologies we use to
              create our top flight mobile apps, we extend mobile functionality
              directly to the desktop, resulting in Windows, MacOS and Linux
              based applications that give you the best of both worlds.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-4 -mx-1 md:mx-4 md:my-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:w-1/2 p-3 md:p-4 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-xl md:text-2xl">
            The Ultimate In Flexibility
            </h2>
            <p className="m-1 text-sm">
            We're a society that's constantly on the go and that's not likely to change in the future, in fact clients should only expect to need more powerful and improved tools that allow them the flexibility to complete tasks and manage their businesses from anywhere, anytime.
            </p>
            <h2 className="mt-2 mb-1 mx-1 font-subheader font-semibold text-xl md:text-2xl">
            Offline Capability
            </h2>
            <p className="m-1 text-sm">
              Our proprietary <strong>edge-to-cloud data sync</strong> technology means you can get things done without stressing about losing data by locally storing work and asynchronously uploading it to your cloud server whenever connectivity is restored. 
            </p>
            <button
            className="flex flex-row items-center text-lg px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-4 mx-auto md:mr-auto md:ml-1"
          >
            Learn More
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
            </div>
            {/* FaWindows, FaLinux, FaApple, MdOutlineAndroid, MdOutlineSmartphone, MdOutlineLaptop, BiTransfer, BiData*/}
            <div className="flex flex-col -mx-2 -mb-2 mt-6 md:m-0 md:w-1/2 bg-gray-900 text-gray-100 rounded-lg md:rounded-none md:rounded-r-lg shadow-lg p-3">
              <h1 className="mx-auto font-subheader text-2xl md:text-3xl font-semibold my-4">Cross-platform Functionality</h1>
              <div className="flex flex-row items-center justify-center mb-4">
                <div className="flex flex-col justify-center ml-4">
                  <MdOutlineLaptopMac className="text-9xl" />
                  <div className="flex flex-row items-center mx-auto text-3xl -mt-2">
                    <FaWindows className="mx-1" />
                    <FaApple className="mx-1" />
                    <FaLinux className="mx-1" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <MdOutlineArrowRightAlt className="-mb-6 text-7xl text-blue-500 filter drop-shadow-lg arrowRight" />
                  <MdOutlineArrowRightAlt className="-mt-6 text-7xl text-blue-500 filter drop-shadow-lg arrowLeft" />
                  </div>
                  <div className="flex flex-col justify-center -ml-2 mr-2">
                    <MdOutlinePhoneAndroid className="text-9xl" />
                    <div className="flex flex-row items-center mx-auto text-3xl">
                    <MdOutlineAndroid className="mx-1" />
                    <FaApple className="mx-1" />
                    </div>
                  </div>
              </div>
              <p className="m-2 md:m-4 text-sm font-semibold">
              Neural hybrid app suites allow for an easy usage transition between platforms - the functionality and interface you have on a Windows laptop will be the same as what you have on an iPad - making it simple for users to perform tasks regardless of what platform they're required to use.
            </p>
            </div>
          </div>
          <div className="flex flex-col m-1 md:p-4 md:my-3 text-sm">
            <h2 className="m-1 font-subheader font-semibold text-2xl md:text-3xl">
              It's What We Do
            </h2>
            <p className="m-1 md:text-base">
            Neural Hybrid App Suites are the flagship of our business model - we've invested heavily in the utilization of modern technology stacks to develop apps that flex between mobile and desktop because we wholeheartedly believe that improved business capabilities are a significant contribution in creating a better world. Our app suites provide clients with a robust suite of powerful tools to aid them in improving their businesses by reducing operational costs and increasing productivity.
            </p>
          </div>
        </div>
      </>
    )
}

export { WebApplications, MobileApplications, DesktopApplications, HybridAppSuites }