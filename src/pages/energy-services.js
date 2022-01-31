import React from 'react'
import { ContactForm } from '../components/contact'
import { Seo } from '../components/seo'
import { BiCaretRightCircle } from "react-icons/bi"
import { MdApps, MdAdd, MdAreaChart, MdDashboardCustomize } from 'react-icons/md'
import { RiLineChartFill } from 'react-icons/ri'
import { StaticImage } from "gatsby-plugin-image"
import { animateScroll as scroll } from "react-scroll"

const EnergyServices = () => {

    const scrollTo = props => {
        scroll.scrollTo(document.getElementById(props).offsetTop, {
          duration: 200,
          smooth: true,
        })
      }

    return(
        <>

              <Seo
                pageTitle="Energy Services"
                pageDescription="Adrenalize Digital - Creating intelligent digital products for intelligent businesses."
                pageKeywords="Adrenalize, Digital, Smart, Technolgoies, Web, App, Application, Mobile, Design, Development"
                pageUrl="https://www.adrenalizedigital.ca/services"
                pageImage="https://github.com/brad-nst/adrenalize-digital/blob/main/src/assets/images/facebookCover.png?raw=true"
            />

            <div className="flex flex-col p-2 my-4 md:my-6 max-w-screen-lg mx-auto">
                <div className="p-1">
                    <h1 className="font-subheader text-2xl md:text-4xl font-bold mx-2 md:mx-0">
                        Applications For Energy Services
                    </h1>
                    <p className="mx-2 my-2 md:mx-0 text-sm md:text-base">
                        When you need a better way to capture, analyze and share data or simply need help improving operational efficiencies, we have you covered with a complete line of intelligently designed application solutions created specifically for the energy services sector. 
                    </p>
                </div>

                <div className="flex flex-col md:flex-row my-4 md:my-6 rounded-md shadow-md ">

                <div className="flex flex-col -mx-2 -mb-2 mt-4 md:m-0 md:w-2/3 bg-gray-900 text-gray-100 p-3 rounded-md md:rounded-l-md md:rounded-r-none">

                    <div className="flex flex-row items-center mx-auto my-2">
                        <RiLineChartFill className="text-4xl md:text-5xl" />
                        <h1 className="font-subheader font-semibold text-2xl md:text-3xl ml-4">
                            Data Visualization Experts
                        </h1>
                    </div>

                    <h2 className="font-bold text-xl mx-auto mt-2 mb-1 md:mt-0 md:mb-2">If you specialize in:</h2>
                
                    <ul className="my-2 p-3 mx-auto md:my-auto">
                        <li className="productFitListItem">
                            <div className="productFitListItemNumber bgDark">
                                <span>1</span>
                            </div>
                            <p className="productFitListItemText">
                            Oil and gas reservoir monitoring, enhancement and testing
                            </p>
                        </li>
                        <li className="productFitListItem">
                            <div className="productFitListItemNumber bgDark">
                                <span>2</span>
                            </div>
                            <p className="productFitListItemText">
                            Sustainable power systems design and optimization
                            </p>
                        </li>
                        <li className="productFitListItem">
                            <div className="productFitListItemNumber bgDark">
                                <span>3</span>
                            </div>
                            <p className="productFitListItemText">
                            Environmental condition evaluation and monitoring
                            </p>
                        </li>
                        <li className="productFitListItem">
                            <div className="productFitListItemNumber bgDark">
                                <span>4</span>
                            </div>
                            <p className="productFitListItemText">
                            Remote location services with low-to-zero network connectivity
                            </p>
                        </li>
                    </ul>

                    <h2 className="text-blue-500 font-bold text-3xl mx-auto mb-4">There's an app for that.</h2>
                    
                </div>

                <div className="hidden md:flex flex-col md:w-1/3 bg-white rounded-md md:rounded-r-md md:rounded-l-none">
                    <StaticImage
                        src="../assets/images/energyServices.jpg"
                        alt="Visually stunning, highly performant web, mobile and desktop applications"
                        placeholder="none"
                        className="h-full object-cover rounded-md md:rounded-r-md md:rounded-l-none"
                    />
                </div>
                
            </div>

            <div className="p-1 mt-6 mb-4">
                    <h1 className="font-subheader text-2xl md:text-3xl font-bold mx-2 md:mx-0">
                    Let us do the heavy lifting so you can focus on what you do best.
                    </h1>
                    <p className="mx-2 my-2 md:mx-0 text-sm md:text-base">
                    We build innovative cross-platform applications that help our clients leverage the latest in development technology to emerge as leaders in their specific fields. Our specialty is creating app suites that provide you with powerful tools to improve you business by reducing operational costs and increasing productivity. 
                    </p>
                </div>

                <div id="total-management-applications" className="flex flex-col rounded-md shadow-md my-8">
                    <div className="flex flex-row items-center p-2 bg-gray-900 rounded-t-md">
                        <MdApps className="text-3xl md:text-4xl text-gray-100 mr-2" />
                        <h2 className="text-gray-100 font-subheader font-bold text-2xl md:text-3xl my-2">
                            Total Management Suites
                        </h2>
                    </div>
                    <div className="flex flex-col p-3 md:p-5 bg-gray-100">
                        <div className="flex flex-col my-2">
                            <p className="text-sm md:text-base p-1 md:p-2">
                                It's 2022. Modern businesses are data-driven and rely on federated microservices to increase operational efficiency and streamline processes. That means it's time to stop using dated workflows and get hooked up with a custom branded business management suite from Adrenalize, featuring edge-to-cloud data synchronization. 
                            </p>
                            <p className="text-sm md:text-base mt-2 -mb-2 p-1 md:p-2 font-bold">
                                If you prefer to: 
                            </p>
                            <ul className="my-1 p-3 md:my-auto">
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                        Manage jobs using applications that automate things like personnel, inventory and asset tracking, syncing changes directly to the cloud.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                        Provide live-updated tools and resources directly to your field staff regardless of connection without worrying about legacy conflicts.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                        Start programmatically generating field reports using field data models designed to propagate through your entire application suite
                                    </p>
                                </li>
                            </ul>
                            <p className="text-sm font-bold md:text-base p-1 md:p-2">
                                Then it's time to work with Adrenalize. 
                            </p>
                            <p className="text-sm md:text-base p-1 md:p-2">
                                Ditch Dropbox. Kick Excel to the curb. And quit worrying about losing your work to intermittent network connectivity. Get in touch with us today to find the right application suite for your operational needs.
                            </p>
                            <button
                                aria-label="Contact Us"
                                onClick={() => scrollTo("contact")}
                                className="flex flex-row items-center text-xl px-4 py-2 hover:bg-blue-600 bg-gray-900 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-4 mx-auto"
                            >
                                Contact Us
                                <BiCaretRightCircle className="ml-3 text-2xl" />
                            </button>
                        </div>
                    </div>          
                </div> 
                <div id="data-visualization-tools" className="flex flex-col rounded-md shadow-md my-4">
                    <div className="flex flex-row items-center p-2 bg-gray-900 rounded-t-md">
                        <MdAreaChart className="text-3xl md:text-4xl text-gray-100 mr-2" />
                        <h2 className="text-gray-100 font-subheader font-bold text-2xl md:text-3xl my-2">
                            Data Visualization Tools
                        </h2>
                    </div>
                    <div className="flex flex-col p-3 md:p-5 bg-gray-100">
                        <div className="flex flex-col my-2">
                            <p className="text-sm md:text-base p-1 md:p-2">
                            We think data capture, storage and analysis should be simple, but the fact is, most data acquisition hardware comes with clunky software designed by people who don't have a clue about what your business does. <strong>That's a problem.</strong>
                            </p>
                            <p className="text-sm md:text-base p-1 md:p-2">
                            Enter Adrenalize Data Visualization Tools - designed and developed hand-in-hand with people who actually deploy measurement tools in the field. Our tool suites are built using a modular component architecture, allowing your application to remain agile while utilizing a robust set of features that leverage and extend the capabilities of your existing technology infrastructure. 
                            </p>
                            <p className="text-sm md:text-base p-1 md:p-2 font-bold mt-2">
                                Our data visualization tools are ideal for:
                            </p>
                            <ul className="my-2 p-2 md:p-3 md:my-auto">
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                    Distributed temperature (DTS), acoustic (DAS) and strain (DSS) fiber optic sensing.
                                    </p>
                                </li>
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                    Single or multi-point geotechnical sensing applications (TC, RTD, piezometric + more).
                                    </p>
                                </li>
                                <li className="flex flex-row items-center my-2">
                                    <MdAdd className="hidden md:block text-2xl md:text-3xl text-gray-900 mr-2" />
                                    <p className="text-sm md:text-base">
                                    Wireless data capture and analysis from remote acquisition units.
                                    </p>
                                </li>
                            </ul>
                            <p className="text-sm md:text-base p-1 md:p-2">
                            Adrenalize data visualization tools allow for continuous data logging uploaded live to your applications cloud database, so you can monitor your assets remotely from anywhere in the world. With direct integration into our management suites, you can easily generate reports to provide direct, up-to-the-second feedback to your clients.
                            </p>
                            <button
                                aria-label="Contact Us"
                                onClick={() => scrollTo("contact")}
                                className="flex flex-row items-center text-xl px-4 py-2 hover:bg-blue-600 bg-gray-900 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-4 mx-auto"
                            >
                                Contact Us
                                <BiCaretRightCircle className="ml-3 text-2xl" />
                            </button>
                        </div>
                    </div>          
                </div> 
                <div id="bespoke-application-development" className="flex flex-col rounded-md shadow-md my-4">
                    <div className="flex flex-row items-center p-2 bg-gray-900 rounded-t-md">
                        <MdDashboardCustomize className="text-3xl md:text-4xl text-gray-100 mr-2" />
                        <h2 className="text-gray-100 font-subheader font-bold text-2xl md:text-3xl my-2">
                            Bespoke App Development
                        </h2>
                    </div>
                    <div className="flex flex-col p-3 md:p-5 bg-gray-100">
                        <div className="flex flex-col my-2">
                            <p className="text-sm md:text-base p-1 md:p-2">
                            Our application development model focuses on creating project specific solutions for our clients mission critical tasks and intelligently integrating them into their workflows. Simply put, Adrenalize apps make solving your problems easy.
                            </p>        
                            <p className="text-sm md:text-base p-1 md:p-2">
                            We flex our development muscles to integrate features that accomplish exactly what clients need, nothing more and nothing less, keeping your management and task specific processes lean, fast and functional. The result? Jobs get done faster, easier and with more accuracy.
                            </p>
                            <p className="text-sm md:text-base p-1 md:p-2">
                            If you're ready to transition from dated business management tools to a more modern solution tailored specifically to your business' needs, we're ready to get started on your custom app.
                            </p>
                            <button
                                aria-label="Contact Us"
                                onClick={() => scrollTo("contact")}
                                className="flex flex-row items-center text-xl px-4 py-2 hover:bg-blue-600 bg-gray-900 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-4 mx-auto"
                            >
                                Contact Us
                                <BiCaretRightCircle className="ml-3 text-2xl" />
                            </button>
                        </div>
                    </div>          
                </div>
                
            </div>
            <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto mt-4 mb-8" />
        </>
    )
}

export default EnergyServices