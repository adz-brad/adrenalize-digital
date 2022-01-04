import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiLightbulbFlashLine, RiShieldStarLine, RiFlowChart, RiBuildingLine } from 'react-icons/ri'
import { BiCaretRight } from "react-icons/bi"
import { MdBolt } from 'react-icons/md'

const Tabs = () => {

    const [ activeTab, setActiveTab ] = useState("Intuitive")

    return(
        <div className="flex flex-col max-w-screen-xl mx-auto my-8">
        <div className="flex flex-col md:flex-row items-center p-2 bg-gray-900 rounded-t-md">
          <h2 className="text-gray-100 font-subheader font-bold text-3xl md:text-4xl mx-auto my-2">
            Our Products are
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-2">
            <button
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
                  We've done our homework and we know how important it is to deliver a well-designed, easy-to-use interface for your users. Increased customer satisfaction due to an impoved user experience means increased revenue, and our products improve UX to the max.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/uxImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">How User Experience Affects Your Bottom Line</h4>
                <Link
                to="/insights-blog/posts/how-user-experience-affects-your-bottom-line"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </Link>
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
                  We specialize in building secure sites and applications using a decoupled project architecture while leveraging a robust, proven collection of 3rd party API's to implement all the features you love without any of the risk.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/secureImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Benefits of Decoupled Architecure for Digital Products</h4>
                <Link
                to="/insights-blog/posts/benefits-of-decoupled-architecture-for-digital-products"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </Link>
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
                  Nobody puts baby in a corner and no one should have to worry about being tied down to a project architecture that limits your future capabilities. We create products that scale, ensuring that your site or app grows with you so you're ready for whatever the future holds.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/scaleImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Save A Fortune By Building For The Future</h4>
                <Link
                to="/insights-blog/posts/beyond-scalability-save-a-fortune-by-building-for-the-future"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </Link>
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
                  You don't want to be left in the dust by being limited to specific project features. Our products are dynamic and flexible, meaning you can add or remove features as you go to suit your needs without the risk of an outage for your site or app.
                </p>
                <div className="flex flex-row items-center mt-4 ml-2">
                <StaticImage
          src="../../assets/images/devImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Leveraging Modern Development To Increase Revenue</h4>
                <Link
                to="/insights-blog/posts/leveraging-modern-development-to-increase-revenue"
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </Link>
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
              Plus, they're lightning quick!
            </h2>
            </div>
            <p className="text-gray-100 m-3">
              Speed is where our products truly shine. We pride ourselves in building websites and apps that tick all the boxes for our clients, but for all the features in the world it would mean nothing if they were awkward and clunky to use. We focus on making sure each product component renders with blazing fast speed, making them a joy to use.
            </p>
            <div className="flex flex-col m-2">
                <h3 className="leading-none text-gray-100 font-bold text-lg md:text-2xl ml-1">Does that peak your curiosity?</h3>
                <p className="text-sm md:text-base ml-1 text-gray-100">Click the button below to read more about how important page speeds really are!</p>
                <button
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-800 hover:text-gray-100 hover:shadow-lg mt-4 mb-2"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </button>
              </div>
          </div>
      </div>
    )
}

export { Tabs }