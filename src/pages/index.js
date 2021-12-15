import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiCaretRightCircle, BiCodeBlock, BiCaretRight } from "react-icons/bi"
import {
  MdWeb,
  MdPhoneAndroid,
  MdLaptopMac,
  MdOutlineDraw,
  MdCode,
} from "react-icons/md"
import { IoIosRocket } from "react-icons/io"
import { IoTelescope } from'react-icons/io5'
import { enableScroll, disableScroll, useWindowHeight, useWindowWidth } from "../hooks"
import { Popover, SelectCountry } from '../components/ui'

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

  const [ popoverActive, setPopoverActive ] = useState(false)
  const [ popoverContent, setPopoverContent ] = useState(null)
  console.log(popoverContent)

  const openPopover = (props) => {
    setPopoverActive(true);
    setPopoverContent(props);
  }

  const closePopover = () => {
    setPopoverActive(false);
    setPopoverContent(null)
  }

  if(popoverActive === true){
    disableScroll();
  }
  else{
    enableScroll();
  }

  const [ activeTab, setActiveTab ] = useState('Intuitive')

  return (
    <div id="indexWrapper">

      {popoverActive === true ?
        <Popover close={()=> closePopover()}>
          
        </Popover>
      :
        null
      }

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
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <div className="flex my-4 p-4 max-w-screen-xl mx-auto">
            <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-2">
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
              onClick={()=> openPopover('test')}
              className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700">
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
                onClick={()=> openPopover('test')}
                className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700">
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
              onClick={()=> openPopover('test')}
              className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer text-blue-700">
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
          className="featureImage1 featuredImage ml-4 rounded-l-xl xl:rounded-xl shadow-md my-4"
        />
      </div>
        <div className="flex flex-col max-w-screen-xl mx-auto shadow-lg rounded-md my-6">
      <div className="flex flex-col md:flex-row items-center p-4 C bg-gray-900 rounded-t-md">
          <h2 className="text-gray-100 font-subheader font-bold text-3xl">Our Products are</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-auto my-2">
          <button 
            onClick={()=> setActiveTab('Intuitive')}
            className={`tab ${activeTab === 'Intuitive' ? 'tabActive' : 'tabInactive'}`}
          >
              <h1>
                Intuitive
              </h1>
          </button>
          <button 
            onClick={()=> setActiveTab('Secure')}
            className={`tab ${activeTab === 'Secure' ? 'tabActive' : 'tabInactive'}`}
          >
              <h1>
                Secure
              </h1>
          </button>
          <button 
            onClick={()=> setActiveTab('Scalable')}
            className={`tab ${activeTab === 'Scalable' ? 'tabActive' : 'tabInactive'}`}
          >
              <h1>
                Scalable
              </h1>
          </button>
          <button 
            onClick={()=> setActiveTab('Flexible')}
            className={`tab ${activeTab === 'Flexible' ? 'tabActive' : 'tabInactive'}`}
          >
              <h1>
                Flexible
              </h1>
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-200 rounded-b-md">
        {activeTab === 'Intuitive' ?
        <div className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      : activeTab === 'Secure' ?
      <div className="p-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
    : activeTab === 'Scalable' ?
    <div className="p-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
  : activeTab === 'Flexible' ?
<div className="p-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</div>
: null}
      </div>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto p-4 mt-4">
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
            onClick={()=> openPopover('test')}
            className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer">
              <IoTelescope className="mr-3 text-5xl transform scale-90 text-blue-600" />
              <h3 className="text-2xl font-semibold">Project Discovery</h3>
            </li>
            <li 
            onClick={()=> openPopover('test')}
            className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer">
              <MdOutlineDraw className="mr-3 text-5xl text-blue-600" />
              <h3 className="text-2xl font-semibold">Agile Prototyping</h3>
            </li>
            <li 
            onClick={()=> openPopover('test')}
            className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer">
              <MdCode className="mr-3 text-5xl text-blue-600" />
              <h3 className="text-2xl font-semibold">Integrated Dev Ops</h3>
            </li>
            <li 
            onClick={()=> openPopover('test')}
              className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer">
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
              We make development easy for our clients, but if it were as simple as shopping on Amazon you wouldn't be here. There is always plenty of learning to do when it comes to building the best product for our clients and we're sure you have more questions.
              </p>
              <p className="my-2">
              That's why we've created some handy project discovery tools for potential clients to play with prior to reaching out. You can check them out by following the link below, or if you're a little bit more sure of your project needs, go ahead drop us a line to get the ball rolling on your next project!
            </p>
            </div>
            <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mb-3 md:mb-1 mt-auto mx-auto">
            Project Discovery
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
          </div>
          <div id="contact" className="w-full md:w-2/3 flex flex-col justify-center items-center bg-gray-900 text-gray-100 rounded-b-lg rounded-lg p-5">
           <h1 className="font-subheader text-4xl font-semibold my-6 leading-none">
              Let's get in touch!
            </h1>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Your Name</h3>
              <input className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900" type="text" />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Email Address</h3>
              <input className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900" type="text" />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">Where are you located?</h3>
              <SelectCountry 
                className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900"
                onChange={(e)=> console.log(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h3 className="text-lg font-semibold">How can we help?</h3>
              <select className="w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900">
                <option value="" selected disabled hidden>
                  Choose an option...
                </option>
                <option>
                  Schedule a new project consultation
                </option>
                <option>
                  Updating an existing external project
                </option>
                <option>
                    Services for an existing Neural project
                  </option>
                  <option>
                    General inquiry
                  </option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-3/4">
            <h3 className="text-lg font-semibold">Message</h3>
              <textarea 
                rows="5"
                className="contactMessage focus:outline-blue w-full p-1 mb-3 shadow-md rounded-md text-gray-900"

              />
            </div>
            <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold font-subheader rounded-lg shadow-md my-5 mx-auto">
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
