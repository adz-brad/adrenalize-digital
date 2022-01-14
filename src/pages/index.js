import React, { useEffect, useState } from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { BiCaretRightCircle, BiCodeBlock, BiCaretRight } from "react-icons/bi"
import {
  MdWeb,
  MdPhoneAndroid,
  MdLaptopMac
} from "react-icons/md"
import {
  useWindowHeight,
  useWindowWidth,
} from "../hooks"
import { Seo } from '../components/seo'
import { Tabs } from '../components/tabs'
import { ContactForm } from '../components/contact'
import { animateScroll as scroll } from "react-scroll";
import LazyLoad from "react-lazyload"
import { Popover } from "../components/ui"
import { ProjectDiscovery } from "../components/tools"

const Index = () => {

  useEffect(() => {
    scroll.scrollToTop({
        duration: 0,
    });
}, [])

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

  const scrollTo = (props) => {
    scroll.scrollTo(document.getElementById(props).offsetTop - 50, {
      duration: 200,
      smooth: true,
    })
  }

  const [ projectDiscoveryOpen, setProjectDiscoveryOpen ] = useState(false)

  return (
    <div id="indexWrapper">

      <Seo
        pageTitle="Home"
        pageDescription="Adrenalize Digital - Creating intelligent digital products for intelligent businesses."
        pageKeywords="Adrenalize, Digital, Smart, Technolgoies, Web, App, Application, Mobile, Design, Development"
        pageUrl="https://www.adrenalizedigital.ca"
        pageImage="https://github.com/brad-nst/adrenalize-digital/blob/main/src/assets/images/adLogoDark.png?raw=true"
      />

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
          placeholder="none"
          className="featuredImage md:w-1/2 mr-4 rounded-r-xl xl:rounded-xl shadow-md my-4"
        />
        <div className="flex flex-col w-full md:w-1/3 p-4 mx-auto">
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-auto">
            Visually stunning,
          </h1>
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900">
            Highly performant.
          </h1>
          <p className="pt-4 font-medium text-lg md:text-xl leading-snug mt-auto">
            Top businesses thrive on data-driven smart technologies.
          </p>
          <p className="pb-4 font-medium text-lg md:text-xl leading-snug mb-auto">
          We apply the latest in development technology to create products that push the limits of how you define success.
          </p>
          <h2 className="font-semibold text-xl md:text-2xl mx-auto md:mx-0">
            Are you ready to push limits?
          </h2>
          <button 
          aria-label="Build With Us"
          onClick={()=> scrollTo('products')}
          className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-2 md:my-auto mx-auto md:mx-0 md:mr-auto">
            Build With Us
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
          
            <div className="projectsGrid">
              <div className="flex flex-row items-center mb-2">
                <MdWeb className="text-5xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Web Projects
                </h2>
              </div>
              <p className="text-base text-gray-900 leading-6 mb-2">
                From marketing to e-commerce, we build top of the line websites
                and progressive web applications to help you extend your
                business capabilities beyond average.
              </p>
              <LazyLoad className="mt-auto" offset={100}>
              <Link 
              aria-label="Websites and Web Applications"
                to="/services#websites-web-applications/"
                className="flex flex-row items-center mr-auto text-lg font-semibold cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </Link>
              </LazyLoad>
            </div>

            <div className="projectsGrid">
              <div className="flex flex-row items-center mb-2">
                <MdPhoneAndroid className="text-5xl text-gray-900 -ml-1" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Mobile Apps
                </h2>
              </div>
              <p className="text-base text-gray-900 leading-6 mb-2">
                Build your mobile app leveraging the same modern frameworks
                powering Spotify, Airbnb, Pinterest, Uber Eats and other
                enterprise grade applications.
              </p>
              <LazyLoad className="mt-auto" offset={100}>
              <Link 
              aria-label="Mobile Apps"
                to="/services#mobile-apps/"
                className="flex flex-row items-center mr-auto text-lg font-semibold cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </Link>
              </LazyLoad>
            </div>


            <div className="projectsGrid">
              <div className="flex flex-row items-center mb-2">
                <MdLaptopMac className="text-5xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Desktop Apps
                </h2>
              </div>
              <p className="text-base text-gray-900 leading-6 mb-2">
                Designed and built to be distributed across all modern macOS,
                Windows and Linux operating systems, our desktop applications combine the flexibility of mobile design with the power of desktop.
              </p>
              <LazyLoad className="mt-auto" offset={100}>
              <Link 
              aria-label="Desktop Apps"
                to="/services#desktop-apps/"
                className="flex flex-row items-center mr-auto text-lg font-semibold cursor-pointer text-blue-700">
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </Link>
              </LazyLoad>
            </div>
            
            
            <div className="projectsGrid">
              <div className="flex flex-row items-center mb-2">
                <BiCodeBlock className="text-5xl text-gray-900" />
                <h2 className="text-3xl font-subheader font-semibold text-gray-900 ml-2">
                  Hybrid Suites
                </h2>
              </div>
              <p className="text-base text-gray-900 leading-6 mb-2">
                Our flagship - custom developed application suites designed to
                unify multiple devices, platforms and operations to boost
                organizational productivity.
              </p>
              <LazyLoad className="mt-auto" offset={100}>
              <Link 
              aria-label="Hybrid App Suites"
                to="/services#hybrid-app-suites/"
                className="flex flex-row items-center mr-auto text-lg font-semibold cursor-pointer text-blue-700"
              >
                Learn More
                <BiCaretRight className="ml-1 text-xl text-gray-700" />
              </Link>
              </LazyLoad>
            </div>
            
          </div>
        </div>

        <StaticImage
          src="../assets/images/featureImage1.jpg"
          alt="Build with the best - we build a full range of applications from web to mobile and desktop."
          placeholder="none"
          className="featureImage1 featuredImage ml-4 rounded-l-xl xl:rounded-xl shadow-md my-4 md:my-auto md:transform md:translate-y-3 hidden md:flex"
        />

      </div>
      
      <Tabs/>
      
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
              <p className="my-2 font-semibold">
                We make development easy for our clients.
              </p>
              <p className="my-2">
                You have better things to do than worry about coding or design. Let us make your problems, our problems, so you can get back to doing what you to best!
              </p>
              <p className="my-2">
                To get started, click the link below to begin the Project Discovery phase. Or if you have more questions, fill out our contact form to get in touch.
              </p>
            </div>
            <button 
              onClick={() => setProjectDiscoveryOpen(true)}
              aria-label="Project Discovery"
              className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mb-3 md:mb-1 mt-auto mx-auto"
            >
              Get Started
              <BiCaretRightCircle className="ml-3 text-2xl" />
            </button>
            <Popover 
              className="bg-gray-900 border-2 border-gray-800 text-gray-100"
              close={() => setProjectDiscoveryOpen(false)} 
              open={projectDiscoveryOpen} 
              title="Project Discovery Tools"
            >
              <ProjectDiscovery/>
            </Popover>
          </div>
          
          <ContactForm/>
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
