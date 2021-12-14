import React from "react"
import { RiCloseCircleLine } from "react-icons/ri"

const Popover = ({ children, close }) => {
  return (
    <div className="fixed h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-90 z-20">
      <div className="popover">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-red-600 text-3xl"
        >
          <RiCloseCircleLine className="" />
        </button>
        {children}
      </div>
    </div>
  )
}

export { Popover }
