import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiCaretRightCircle, BiCodeBlock, BiCaretRight } from "react-icons/bi"
import {
  MdWeb,
  MdPhoneAndroid,
  MdLaptopMac,
  MdOutlineDraw,
  MdCode,
  MdSpeed,
  MdOutlineThumbUp
} from "react-icons/md"
import { RiLightbulbFlashLine, RiShieldStarLine, RiFlowChart, RiBuildingLine } from 'react-icons/ri'
import { IoIosRocket } from "react-icons/io"
import { IoTelescope } from "react-icons/io5"
import {
  useWindowHeight,
  useWindowWidth,
} from "../hooks"
import { SelectCountry } from "../components/ui"
import update from 'immutability-helper';
import { toast } from 'react-toastify';

const Index = () => {
  let windowWidth = useWindowWidth()
  let windowHeight = useWindowHeight()

  const [heroBgDimensions, setHeroBgDimensions] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    if (document.getElementById("hero") !== null) {
      setHeroBgDimensions({
        height: document.getElementById("hero").offsetHeight,
        width: document.getElementById("indexWrapper").offsetWidth,
      })
    }
  }, [windowWidth, windowHeight])

  const [ activeTab, setActiveTab ] = useState("Intuitive")

  const [ contactData, setContactData ] = useState({
    name: null,
    email: null,
    location: null,
    requires: null,
    message: null
  })

  console.log(contactData)

  const messageSent = () => {
    toast("Message Sent!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast green-toast",
      });
  };

  const messageFailed = () => {
    toast("Somethings missing ...", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast red-toast",
      });
  };
  const submitContact = async () => {
    if(contactData.name === null || contactData.email === null || contactData.location === null || contactData.requires === null || contactData.message === null){
      messageFailed()
    }
    else{
      await setContactData(update(contactData, { 
        name: { $set: null },
        email: { $set: null },
        location: { $set: null },
        requires: { $set: null },
        message: { $set: null },
      }));
      messageSent()
    }
  }


  return (
    <div id="indexWrapper">

      <div
        id="hero"
        className="relative flex flex-col md:flex-row max-w-screen-xl mx-auto py-3"
      >
        <div
          className="heroBg"
          style={{
            height: heroBgDimensions.height,
            width: heroBgDimensions.width,
          }}
        />
        <StaticImage
          src="../assets/images/nstHeroImage.jpg"
          alt="Visually stunning, highly performant web, mobile and desktop applications"
          placeholder="blurred"
          className="featuredImage md:w-1/2 mr-4 rounded-r-xl xl:rounded-xl shadow-md my-4"
        />
        <div className="flex flex-col w-full md:w-1/3 p-4 mx-auto">
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-auto">
            Visually stunning,
          </h1>
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900">
            Highly performant.
          </h1>
          <p className="py-4 font-medium text-lg md:text-xl leading-snug my-auto">
            Top businesses thrive on data-driven smart technologies, which is
            why we apply the latest in development technology to create products
            that push the limits of how our clients define success.
          </p>
          <h3 className="font-semibold text-xl md:text-2xl mx-auto md:mx-0">
            Are you ready to push limits with us?
          </h3>
          <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-2 md:my-auto mx-auto md:mx-0 md:mr-auto">
            Find out more
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto my-4 md:my-8">
        <div className="flex flex-col my-4 md:my-6">
          <div className="flex my-4 p-4 max-w-screen-xl mx-auto">
            <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 md:mt-2">
              Build with the best.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-2 px-1 max-w-screen-xl mx-auto">
            <div className="projectsGrid flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
              <div className="flex flex-row items-center mb-2">
                <MdWeb className="text-4xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Web Projects
                </h2>
              </div>
              <p className="text-base text-gray-900">
                From marketing to e-commerce, we build top of the line websites
                and progressive web applications to help you extend your
                business capabilities beyond average.
              </p>
              <button
                className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </button>
            </div>
            <div className="projectsGrid flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
              <div className="flex flex-row items-center mb-2">
                <MdPhoneAndroid className="text-4xl text-gray-900 -ml-1" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Mobile Apps
                </h2>
              </div>
              <p className="text-base text-gray-900">
                Build your mobile app leveraging the same modern frameworks
                powering Spotify, Airbnb, Pinterest, Uber Eats and other
                enterprise grade applications.
              </p>
              <button
                className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </button>
            </div>
            <div className="projectsGrid flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
              <div className="flex flex-row items-center mb-2">
                <MdLaptopMac className="text-4xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Desktop Apps
                </h2>
              </div>
              <p className="text-base text-gray-900">
                Designed and built to be distributed across all modern macOS,
                Windows and Linux operating systems, our desktop applications
              </p>
              <button className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700">
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </button>
            </div>
            <div className="projectsGrid flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
              <div className="flex flex-row items-center mb-2">
                <BiCodeBlock className="text-4xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Hybrid Suites
                </h2>
              </div>
              <p className="text-base text-gray-900">
                Our flagship - custom developed application suites designed to
                unify multiple devices, platforms and operations to boost
                organizational productivity.
              </p>
              <button
                className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        <StaticImage
          src="../assets/images/featureImage1.jpg"
          alt="Build with the best - we build a full range of applications from web to mobile and desktop."
          placeholder="blurred"
          className="featureImage1 featuredImage ml-4 rounded-l-xl xl:rounded-xl shadow-md my-4 md:my-auto md:transform md:translate-y-3 hidden md:flex"
        />
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto shadow-lg rounded-md my-8">
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
          src="../assets/images/uxImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">How User Experience Affects Your Bottom Line</h4>
                <button
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </button>
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
          src="../assets/images/secureImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Benefits of Decoupled Architecure for Digital Products</h4>
                <button
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </button>
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
          src="../assets/images/scaleImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Save A Fortune By Building For The Future</h4>
                <button
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xltext-xl text-blue-500" />
              </button>
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
          src="../assets/images/devImage.jpg"
          alt="The ultimate in user experience."
          placeholder="blurred"
          className="h-28 w-28 rounded-lg shadow-md mr-4"
        />
                <div className="flex flex-col">
                <h3 className="leading-none font-bold text-lg md:text-2xl ml-1">Case Study</h3>
                <h4 className="text-base md:text-xl ml-1">Leveraging Modern Development To Increase Revenue</h4>
                <button
                className="flex flex-row items-center mr-auto text-sm md:text-base font-semibold mt-2 cursor-pointer text-blue-700 px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-900 hover:text-gray-100 hover:shadow-lg"
              >
                Read More
                <BiCaretRight className="ml-1 text-lg md:text-xl text-blue-500" />
              </button>
              </div>
              </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto p-4 my-8">
        <div className="md:w-2/3">
          <h2 className="font-subheader font-semibold text-3xl md:text-3xl mb-4">
            From design to launch, we've got your back.
          </h2>
          <p className="text-base text-gray-900">
            <strong>It's all about the client. </strong>That rings true for us
            just as much as it does for you, which is why we work hand in hand
            with you through the entire design / build process to ensure you get
            a world-class product while your users get a world-class experience.
            Click on any one of our 4 design phases to learn more about how we
            work.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 my-6 md:my-auto">
          <ul className="text-base text-gray-900 ">
            <li
              className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"
            >
              <IoTelescope className="mr-3 text-5xl transform scale-90 text-blue-600" />
              <h3 className="text-2xl font-semibold">Project Discovery</h3>
            </li>
            <li
              className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"
            >
              <MdOutlineDraw className="mr-3 text-5xl text-blue-600" />
              <h3 className="text-2xl font-semibold">Agile Prototyping</h3>
            </li>
            <li
              className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"
            >
              <MdCode className="mr-3 text-5xl text-blue-600" />
              <h3 className="text-2xl font-semibold">Integrated Dev Ops</h3>
            </li>
            <li
              className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"
            >
              <IoIosRocket className="mr-3 text-5xl text-blue-600" />
              <h3 className="text-2xl font-semibold">Product Launch</h3>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="footer"
        className="relative flex flex-col md:flex-row max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center w-full md:p-3">
          <div className="contactCopy w-full md:w-1/3 flex flex-col justify-center bg-gray-100 md:my-5 rounded-t-lg md:rounded-l-lg p-5">
            <h1 className="font-subheader text-gray-900 font-semibold text-3xl md:text-4xl mx-auto mt-3 md:mt-1">
              Ready to make waves?
            </h1>
            <div className="py-4 font-medium text-base lg:text-lg leading-snug my-auto">
              <p className="my-2">
                We make development easy for our clients, but if it were as
                simple as shopping on Amazon you wouldn't be here. There is
                always plenty of learning to do when it comes to building the
                best product for our clients and we're sure you have more
                questions.
              </p>
              <p className="my-2">
                That's why we've created some handy project discovery tools for
                potential clients to play with prior to reaching out. You can
                check them out by following the link below, or if you're a
                little bit more sure of your project needs, go ahead drop us a
                line to get the ball rolling on your next project!
              </p>
            </div>
            <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mb-3 md:mb-1 mt-auto mx-auto">
              Project Discovery
              <BiCaretRightCircle className="ml-3 text-2xl" />
            </button>
          </div>
          <div
            id="contact"
            className="w-full md:w-2/3 flex flex-col justify-center items-center bg-gray-900 text-gray-100 rounded-b-lg rounded-lg p-5"
          >
            <h1 className="font-subheader text-4xl font-semibold my-6 leading-none">
              Let's get in touch!
            </h1>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Your Name</h3>
              <input
                className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900"
                type="text"
                value={contactData.name || ''}
                onChange={(e) => setContactData(update(contactData, { name: { $set: e.target.value }}))}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Email Address</h3>
              <input
                className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900"
                type="text"
                value={contactData.email || ''}
                onChange={(e) => setContactData(update(contactData, { email: { $set: e.target.value }}))}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Where are you located?</h3>
              <SelectCountry
                className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900"
                value={contactData.location || ''}
                onChange={(e) => setContactData(update(contactData, { location: { $set: e.target.value }}))}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">How can we help?</h3>
              <select className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900"
              value={contactData.requires || ''}
              onChange={(e) => setContactData(update(contactData, { requires: { $set: e.target.value }}))}>
                <option value="" selected disabled hidden>
                  Choose an option...
                </option>
                <option>Schedule a new project consultation</option>
                <option>Updating an existing external project</option>
                <option>Services for an existing Neural project</option>
                <option>General inquiry</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Message</h3>
              <textarea
                rows="5"
                className="contactMessage focus:outline-blue w-full p-1 mb-3 shadow-md rounded-md text-gray-900"
                value={contactData.message || ''}
                onChange={(e) => setContactData(update(contactData, { message: { $set: e.target.value }}))}
              />
            </div>
            <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold font-subheader rounded-lg shadow-md my-5 mx-auto"
            onClick={() => submitContact()}>
              Submit
              <BiCaretRightCircle className="ml-3 text-2xl" />
            </button>
          </div>
        </div>
        <div
          className="contactBg"
          style={{
            height: heroBgDimensions.height - 170,
            width: heroBgDimensions.width,
          }}
        />
      </div>
    </div>
  )
}

export default Index
