import React, { useState } from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { disableScroll, enableScroll } from "../../hooks"
import { BiCaretUpCircle } from 'react-icons/bi'
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'
import { MdOutlineHomeWork, MdOutlineAppRegistration, MdOutlineInsights, MdCode, MdOutlinePerson, MdOutlineMessage,  MdOutlineLogin, } from 'react-icons/md'
import LazyLoad from "react-lazyload"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  if(menuOpen === true ){
    disableScroll();
  }
  else{
    enableScroll();
  }


  return (
    <div className="navbar">
      <div className="navbarBg "/>
      <Link 
        to="/"
        aria-label="Adrenalize Digital Home"
        className="flex flex-row items-center ml-2 mr-auto">
          <StaticImage 
            src="../../assets/images/adLogoLight.png"
            placeholder="none"
            alt="Adrenalize Digital - Creating intelligent digital products for intelligent businesses."
            className="w-16 md:w-24 my-auto"
          />
          <div className="flex flex-col ml-1">
            <h1 className="font-title text-2xl md:text-3xl text-primary-600 leading-none -mb-1 md:-mb-2">Adrenalize</h1>
            <h1 className="font-title text-xl md:text-2xl text-gray-100 leading-none md:-mt-1">Digital</h1>
          </div>
      </Link>

        <button
          aria-label="Navigation Menu Button"
          onClick={() => setMenuOpen(menuOpen === true ? false : true)}
          className={`relative flex flex-row items-center ml-auto cursor-pointer ${menuOpen === true? 'mr-2' : 'mr-4'}`}
        >
          <h2 className="opacity-0 md:opacity-100 text-2xl text-gray-100 mr-4">Menu</h2>
          <div className="relative flex flex-col h-12 w-12">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
              menuOpen === true
                ? "-translate-y-1/2 rotate-45 bg-blue-500 w-8"
                : "-translate-y-3 bg-gray-100 w-10 md:w-12"
            }`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${
              menuOpen === true ? "scale-0" : "bg-gray-100 w-10 md:w-12"
            }`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
              menuOpen === true
                ? "-translate-y-1/2 -rotate-45 bg-blue-500 w-8"
                : "translate-y-2 bg-gray-100 w-10 md:w-12"
            }`}
          />
          </div>
        </button>

        <div className={`mobileNav flex flex-col ${menuOpen === true ? 'mobileNavOpen' : 'mobileNavClosed'}`}>
          <div className="flex flex-col ml-4 mt-4">
            <Link 
              onClick={() => setMenuOpen(false)}
              to="/"
              aria-label="Adrenalize Digital Home"
              className="menuLink"
            >
              <MdOutlineHomeWork className="mr-4" />Home
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              aria-label="Adrenalize Digital Services"
              to="/services/"
              className="menuLink"
            >
              <MdCode className="mr-4"/>Services
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              aria-label="Adrenalize Digital Portfolio"
              to="/our-work/"
              className="menuLink"
            >
              <MdOutlineAppRegistration className="mr-4"/>Our Work
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              aria-label="Adrenalize Digital Blog"
              to="/insights-blog/"
              className="menuLink"
            >
              <MdOutlineInsights className="mr-4" />Insights
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              aria-label="About Adrenalize Digital"
              to="/about-us/"
              className="menuLink"
            >
              <MdOutlinePerson className="mr-4" />About Us
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              aria-label="Contact Adrenalize Digital"
              to="/contact-us/"
              className="menuLink"
            >
              <MdOutlineMessage className="mr-4" />Contact
            </Link>
          </div>
          <div className="flex flex-row items-center hidden">
            <MdOutlineLogin className="mr-4" />User Portal
          </div>
          <div className="flex flex-row items-center mt-auto mb-4 ml-4">
            <a href="https://www.facebook.com/adrenalizedigital/" aria-label="Adrenalize Digital Facebook" target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleFill className="socialIcon socialMenuIcon" />
            </a>
            <a href="https://www.instagram.com/adrenalize.digital/" aria-label="Adrenalize Digital Instagram" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="socialIcon socialMenuIcon" />
            </a>
            <a href="https://twitter.com/AdrenalizeDS/" aria-label="Adrenalize Digital Twitter" target="_blank" rel="noopener noreferrer">
              <RiTwitterFill className="socialIcon socialMenuIcon" />
            </a>
            <a href="https://www.linkedin.com/company/adrenalize-digital/" aria-label="Adrenalize Digital LinkedIn" target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill className="socialIcon socialMenuIcon" />
            </a>
          </div>
        </div>

    </div>
  )
}

const Footer = () => {

  const [ footerMenuOpen, setFooterMenuOpen ] = useState(false)

  if(footerMenuOpen === true ){
    disableScroll();
  }
  else{
    enableScroll();
  }


  return(
    <>
    <footer className="footer relative h-20 bg-gray-100">
    <LazyLoad>
      <div className="flex flex-row items-center ml-4 z-30 bg-gray-100">
      <a href="https://www.facebook.com/adrenalizedigital/" aria-label="Adrenalize Digital Facebook" target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleFill className="socialIcon" />
          </a>
          <a href="https://www.instagram.com/adrenalize.digital/" aria-label="Adrenalize Digital Instagram" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="socialIcon" />
          </a>
          <a href="https://twitter.com/AdrenalizeDS/" aria-label="Adrenalize Digital Twitter" target="_blank" rel="noopener noreferrer">
            <RiTwitterFill className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/company/adrenalize-digital/" aria-label="Adrenalize Digital LinkedIn" target="_blank" rel="noopener noreferrer">
            <RiLinkedinFill className="socialIcon" />
          </a>
      </div>
      <p className="absolute bottom-1 ml-5 text-sm md:text-md font-subheader font-semibold">© 2022 Adrenalize Digital</p>
      <button 
        onClick={footerMenuOpen === true ? () => setFooterMenuOpen(false) : () => setFooterMenuOpen(true)}
        aria-label="Adrenalize Digital Navigation Menu"
        className="flex flex-row items-center absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-gray-100"
      >
        <h2 className="text-2xl font-bold mr-2">Menu</h2>
      <BiCaretUpCircle 
        className={`text-4xl text-gray-900 hover:text-gray-800 transition-all duration-300 ${footerMenuOpen === true ? 'transform rotate-180': ''}`}
      />
      </button>
      </LazyLoad>
    </footer>
    <div className={`footerNav ${footerMenuOpen === true ? 'footerNavOpen' : 'footerNavClosed'}`}>
      <div className="flex flex-col ml-4 mt-4 md:flex-row md:items-center">
            <Link 
              onClick={() => setFooterMenuOpen(false)}
              aria-label="Adrenalize Digital Home"
              to="/"
              className="menuLink footerLink"
            >
              <MdOutlineHomeWork className="mr-4" />Home
            </Link>
            <Link 
            onClick={() => setFooterMenuOpen(false)}
            aria-label="Adrenalize Digital Services"
              to="/services/"
              className="menuLink footerLink"
            >
              <MdCode className="mr-4"/>Services
            </Link>
            <Link 
            onClick={() => setFooterMenuOpen(false)}
              aria-label="Adrenalize Digital Portfolio"
              to="/our-work/"
              className="menuLink footerLink"
            >
              <MdOutlineAppRegistration className="mr-4"/>Our Work
            </Link>
            <Link 
            onClick={() => setFooterMenuOpen(false)}
              aria-label="Adrenalize Digital Blog"
              to="/insights-blog/"
              className="menuLink footerLink"
            >
              <MdOutlineInsights className="mr-4" />Insights
            </Link>
            <Link 
              onClick={() => setFooterMenuOpen(false)}
              aria-label="About Adrenalize Digital"
              to="/about-us/"
              className="menuLink footerLink"
            >
              <MdOutlinePerson className="mr-4" />About Us
            </Link>
            <Link 
              onClick={() => setFooterMenuOpen(false)}
              aria-label="Contact Adrenalize Digital"
              to="/contact-us/"
              className="menuLink footerLink"
            >
              <MdOutlineMessage className="mr-4" />Contact
            </Link>
          </div>
      </div>
      </>
  )
}

export { Navbar, Footer }
