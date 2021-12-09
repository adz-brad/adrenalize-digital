import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { BiCaretRightCircle } from 'react-icons/bi'

const Index = () => {
    return(
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto py-4">
                <StaticImage
                    src="../assets/images/nstHeroImage.jpg"
                    alt="Visually stunning, highly performant web, mobile and desktop applications"
                    placeholder="blurred"
                    className="md:w-1/2 mr-4 shadow-md my-4"
                />
            <div className="flex flex-col w-full md:w-1/2 p-4">
                <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-auto">
                    Visually stunning,
                </h1>
                <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900">
                    Highly performant.
                </h1>
                <p className="py-4 font-medium text-lg md:text-xl leading-snug my-auto">
                    Successful businesses thrive on smart technologies, which is why we apply the latest in development technology to create products that push the limits of how our clients define success.
                </p>
                <h3 className="font-semibold text-xl md:text-2xl mx-auto md:mx-0">
                    Are you ready to push limits with us?
                </h3>
                <button className="flex flex-row items-center text-xl px-4 py-2 bg-blue-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md my-4 md:my-auto mx-auto md:mx-0 md:mr-auto">
                    Find out more
                    <BiCaretRightCircle className="ml-3 text-2xl"/>
                </button>
            </div>
        </div>
    )
}

export default Index