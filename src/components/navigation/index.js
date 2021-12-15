import React, { useState } from "react"
import { disableScroll, enableScroll, useWindowWidth } from "../../hooks"
import { BiCaretUpCircle } from 'react-icons/bi'
import NeuralLogo from '../../assets/images/neuralLogo.png'

const Navbar = () => {
  let browserWidth = useWindowWidth()

  const [menuOpen, setMenuOpen] = useState(false)

  if(menuOpen === true){
    disableScroll();
  }
  else{
    enableScroll();
  }

  return (
    <div className="navbar">
      <div className="navbarBg "/>
      <div className="flex flex-col ml-4 mr-auto">
        <h1 className="header text-gray-100">
          Neural
        </h1>
        <h2 className="subHeader text-blue-500">
          Smart Technologies
        </h2>
      </div>
      {browserWidth > 800 ? (
        <div></div>
      ) : (
        <>
        <button
          onClick={() => setMenuOpen(menuOpen === true ? false : true)}
          className={`relative flex flex-col h-12 w-12 ml-auto cursor-pointer ${menuOpen === true? 'mr-2' : 'mr-4'}`}
        >
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
              menuOpen === true
                ? "-translate-y-1/2 rotate-45 bg-blue-500 w-8"
                : "-translate-y-3 bg-gray-100 w-12"
            }`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${
              menuOpen === true ? "scale-0" : "bg-gray-100 w-12"
            }`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
              menuOpen === true
                ? "-translate-y-1/2 -rotate-45 bg-blue-500 w-8"
                : "translate-y-2 bg-gray-100 w-12"
            }`}
          />
        </button>

        <div className={`mobileNav flex flex-col ${menuOpen === true ? 'mobileNavOpen' : 'mobileNavClosed'}`}>

        </div>
        </>
      )}
    </div>
  )
}

const Footer = () => {

  const [ footerMenuOpen, setFooterMenuOpen ] = useState(false)

  return(
    <footer className="footer relative h-20">
      <div className={`footerNav ${footerMenuOpen === true ? 'footerNavOpen' : 'footerNavClosed'}`}>

      </div>
      <img 
        src={NeuralLogo}
        alt="Neural Smart Technolgies - It's All Connected."
        className="absolute left-2 h-16 bottom-2"
      />
      <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 ml-2 text-xs md:text-md font-subheader font-semibold">© 2021 Neural Smart Technologies</p>
      <button 
        onClick={footerMenuOpen === true ? () => setFooterMenuOpen(false) : () => setFooterMenuOpen(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
      <BiCaretUpCircle 
        className={`text-4xl text-gray-900 hover:text-gray-800 transition-all duration-300 ${footerMenuOpen === true ? 'transform rotate-180': ''}`}
      />
      </button>
    </footer>
  )
}

export { Navbar, Footer }
