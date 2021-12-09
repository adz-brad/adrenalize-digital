import React, { useState } from "react"
import { useWindowWidth } from "../../hooks"

const Navbar = () => {
  let browserWidth = useWindowWidth()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="flex flex-col ml-4 mr-auto">
        <h1 className="header">
          Neural
        </h1>
        <h2 className="subHeader">
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
                ? "-translate-y-1/2 rotate-45 bg-blue-200 w-8"
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
                ? "-translate-y-1/2 -rotate-45 bg-blue-200 w-8"
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

export { Navbar }
