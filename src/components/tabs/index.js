import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiLightbulbFlashLine, RiShieldStarLine, RiFlowChart, RiBuildingLine } from 'react-icons/ri'
import { BiCaretRight } from "react-icons/bi"
import { MdBolt } from 'react-icons/md'
import LazyLoad from "react-lazyload"

const Tabs = () => {

    const [ activeTab, setActiveTab ] = useState("Intuitive")

    return(
        <div id="products" className="flex flex-col max-w-screen-xl mx-auto my-8">
        <div className="flex flex-col md:flex-row items-center p-2 bg-gray-900 rounded-t-md">
          <h2 className="text-gray-100 font-subheader font-bold text-3xl md:text-4xl mx-auto my-2">
            Our Products are
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-2">
            <button
              aria-label="Intuitive"
              id="Intuitive"
              onClick={() => setActiveTab("Intuitive")}
              className={`tab ${
                activeTab === "Intuitive" ? "tabActive" : "tabInactive"
              }`}
            >
              <span
                className={`tabNumber ${
                  activeTab === "Intuitive"
                    ? "tabNumberActive"
                    : "tabNumberInactive"
                }`}
              >
                1
              </span>
              <h1>Intuitive</h1>
            </button>
            <button
            aria-label="Secure"
            id="Secure"
              onClick={() => setActiveTab("Secure")}
              className={`tab ${
                activeTab === "Secure" ? "tabActive" : "tabInactive"
              }`}
            >
              <span
                className={`tabNumber ${
                  activeTab === "Secure"
                    ? "tabNumberActive"
                    : "tabNumberInactive"
                }`}
              >
                2
              </span>
              <h1>Secure</h1>
            </button>
            <button
              aria-label="Scalable"
              id="Scalable"
              onClick={() => setActiveTab("Scalable")}
              className={`tab ${
                activeTab === "Scalable" ? "tabActive" : "tabInactive"
              }`}
            >
              <span
                className={`tabNumber ${
                  activeTab === "Scalable"
                    ? "tabNumberActive"
                    : "tabNumberInactive"
                }`}
              >
                3
              </span>
              <h1>Scalable</h1>
            </button>
            <button
              aria-label="Flexible"
              id="Flexible"
              onClick={() => setActiveTab("Flexible")}
              className={`tab ${
                activeTab === "Flexible" ? "tabActive" : "tabInactive"
              }`}
            >
              <span
                className={`tabNumber ${
                  activeTab === "Flexible"
                    ? "tabNumberActive"
                    : "tabNumberInactive"
                }`}
              >
                4
              </span>
              <h1>Flexible</h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 rounded-b-md">
          {activeTab === "Intuitive" ? (
            <div className="flex flex-col p-5">
              <div className="flex flex-row items-center">
                <RiLightbulbFlashLine className="text-3xl transform scale-110 md:text-5xl filter drop-shadow-md mr-2 md:mr-4" />
                <h2 className="font-subheader text-2xl md:text-4xl font-bold">The ultimate in UI/UX</h2>
              </div>
              <div className="flex flex-col my-2">
                <p className="md:text-lg p-1 md:p-2">
                  Delivering a well-designed, easy-to-use interface for your users is vital. Increased customer satisfaction due to an improved user experience means increased revenue, and our products improve UX to the max.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/uxImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col items-start">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">How User Experience Affects Your Bottom Line</h4>
                <LazyLoad offset={100}>
                 <Link
                aria-label="How User Experience Affects Your Bottom Line"
                to="/insights-blog/posts/how-user-experience-affects-your-bottom-line/"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
              </LazyLoad>
              </div>
              </div>
              </div>
            </div>
          ) : activeTab === "Secure" ? (
            <div className="flex flex-col p-5">
              <div className="flex flex-row items-center">
                <RiShieldStarLine className="text-3xl md:text-5xl filter drop-shadow-md mr-2 md:mr-4" />
                <h2 className="font-subheader text-2xl md:text-4xl font-bold">Inherently safe by design</h2>
              </div>
              <div className="flex flex-col my-2">
                <p className="md:text-lg p-1 md:p-2">
                  Specializing in building secure websites and applications using decoupled project architectures, we leverage a proven collection of API's to implement the features you love without the risk.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/secureImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col items-start">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Benefits of Decoupled Architecure for Digital Products</h4>
                <LazyLoad offset={100}>
                  <Link
                aria-label="Benefits of Decoupled Architecure for Digital Products"
                to="/insights-blog/posts/benefits-of-decoupled-architecture-for-digital-products/"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
              </LazyLoad>
              </div>
              </div>
              </div>
            </div>
          ) : activeTab === "Scalable" ? (
            <div className="flex flex-col p-5">
              <div className="flex flex-row items-center">
                <RiBuildingLine className="text-3xl md:text-5xl filter drop-shadow-md mr-2 md:mr-4" />
                <h2 className="font-subheader text-2xl md:text-4xl font-bold">Designed to grow with you</h2>
              </div>
              <div className="flex flex-col my-2">
                <p className="md:text-lg p-1 md:p-2">
                  No one should have to worry about being tied to a project architecture that limits their future capabilities. We create products that scale, ensuring that your project grows with you for whatever the future holds.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/scaleImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col items-start">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Monolith to Microservices: Scalable Application Architectures</h4>
                <LazyLoad offset={100}>
                <Link          
                aria-label="Monolith to Microservices: Scalable Application Architectures"
                to="/insights-blog/posts/monolith-to-microservices-scalable-application-architectures/"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
              </LazyLoad>
              </div>
              </div>
              </div>
            </div>
          ) : activeTab === "Flexible" ? (
            <div className="flex flex-col p-5">
              <div className="flex flex-row items-center">
                <RiFlowChart className="text-3xl md:text-5xl filter drop-shadow-md mr-2 md:mr-4" />
                <h2 className="font-subheader text-2xl md:text-4xl font-bold">Built to adapt to your needs</h2>
              </div>
              <div className="flex flex-col my-2">
                <p className="md:text-lg p-1 md:p-2">
                  Project limitations defeat the purpose of working with a professional developer. Our products are dynamic and flexible, meaning you can add or remove features as you go to suit your needs without the risk of an outage for your site or app.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/devImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col items-start">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Leveraging Modern Development To Increase Revenue</h4>
                <LazyLoad offset={100}>
                <Link
                aria-label="Leveraging Modern Development To Increase Revenue"
                to="/insights-blog/posts/leveraging-modern-development-to-increase-revenue/"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
              </LazyLoad>
              </div>
              </div>
              </div>
            </div>
          ) : null}
        </div>
          <div className="flex flex-col bg-gray-900 shadow-lg rounded-md my-5 p-3">
            <div className="flex flex-row items-center justify-center md:justify-start mx-1 mt-2">
            <MdBolt className="text-gray-100 text-4xl md:text-5xl mr-1" />
            <h2 className="text-gray-100 text-2xl md:text-3xl font-subheader font-bold">
              Blazing Fast Speeds
            </h2>
            </div>
            <p className="text-gray-100 m-3">
              Speed is where our products truly shine. We pride ourselves in building websites and apps where every component renders with blazing fast speed, making your website or app a joy to use.
            </p>
            <div className="flex flex-col m-2  items-start">
                <h3 className="leading-none text-gray-100 font-bold text-lg md:text-2xl ml-1">Fast Matters</h3>
                <p className="text-sm md:text-base ml-1 mt-1 text-gray-100">Read more about how important page speeds really are</p>
                <LazyLoad offset={100}>
                <Link
                aria-label="How Important Are Page Load Speeds For User Conversions?"
                to="/insights-blog/posts/how-important-are-page-load-speeds-for-user-conversions/"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-800 hover:text-gray-100 hover:shadow-lg mt-4 mb-2"
              >
                Let's Go Fast!
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
              </LazyLoad>
              </div>
          </div>
      </div>
    )
}

export { Tabs }