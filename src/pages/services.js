import React, { useEffect, useState } from "react"
import { BiCaretDownCircle } from "react-icons/bi"
import { ContactForm } from "../components/contact"
import { animateScroll as scroll } from "react-scroll"
import { WebApplications, MobileApplications, DesktopApplications, HybridAppSuites } from '../components/services'

const Services = () => {
  const [activeService, setActiveService] = useState(null)
  const openTab = async props => {
    const setService = () => {
      if (activeService === props) {
        setActiveService(null)
      } else {
        setActiveService(props)
      }
    }
    await setService()
    scroll.scrollTo(document.getElementById(props).offsetTop - 15, {
      duration: 200,
      smooth: true,
    })
  }

  useEffect(() => {
    if (window.location.hash.length !== 0) {
      openTab(`${window.location.hash.split("#")[1]}`)
    }
    else{
            scroll.scrollToTop({
               duration: 0,
            }); 
        }
  }, [])

  return (
    <>
      <div className="flex flex-col p-2 my-2 max-w-screen-lg mx-auto">
        <div className="p-1">
          <h1 className="font-subheader text-3xl font-bold">
            Build with the best.
          </h1>
          <p className="my-2">
            We utilize the latest in development methodologies to provide
            businesses with intelligently designed, highly performant
            applications for web, mobile and desktop.
          </p>
          <p className="font-semibold my-2">
            Click the tabs below to learn more about our products.
          </p>
        </div>
        <div id="websites-web-applications" className="servicesTab">
          <button
            className={`servicesTabButton ${
              activeService === "websites-web-applications"
                ? "rounded-t-md"
                : "rounded-md"
            }`}
            onClick={() => openTab("websites-web-applications")}
          >
            <BiCaretDownCircle
              className={`servicesTabIcon ${
                activeService === "websites-web-applications"
                  ? "servicesTabIconActive"
                  : ""
              }`}
            />
            <h1 className="servicesTabHeader">Websites / Web Apps</h1>
          </button>
          <div
            className={`servicesTabBody ${
              activeService === "websites-web-applications"
                ? "servicesTabBodyActive"
                : "servicesTabBodyInactive"
            }`}
          >
            <div className="servicesTabContent">
            <WebApplications />
            </div>
            </div>
        </div>
        <div id="mobile-apps" className="servicesTab">
          <button
            className={`servicesTabButton ${
              activeService === "mobile-apps" ? "rounded-t-md" : "rounded-md"
            }`}
            onClick={() => openTab("mobile-apps")}
          >
            <BiCaretDownCircle
              className={`servicesTabIcon transform ${
                activeService === "mobile-apps" ? "servicesTabIconActive" : ""
              }`}
            />
            <h1 className="servicesTabHeader">Mobile Applications</h1>
          </button>
          <div
            className={`servicesTabBody ${
              activeService === "mobile-apps"
                ? "servicesTabBodyActive"
                : "servicesTabBodyInactive"
            }`}
          >
            <div className="servicesTabContent">
              <MobileApplications/>
            </div>
          </div>
        </div>
        <div id="desktop-apps" className="servicesTab">
          <button
            className={`servicesTabButton ${
              activeService === "desktop-apps" ? "rounded-t-md" : "rounded-md"
            }`}
            onClick={() => openTab("desktop-apps")}
          >
            <BiCaretDownCircle
              className={`servicesTabIcon transform ${
                activeService === "desktop-apps" ? "servicesTabIconActive" : ""
              }`}
            />
            <h1 className="servicesTabHeader">Desktop Applications</h1>
          </button>
          <div
            className={`servicesTabBody ${
              activeService === "desktop-apps"
                ? "servicesTabBodyActive"
                : "servicesTabBodyInactive"
            }`}
          >
            <div className="servicesTabContent">
              <DesktopApplications/>
            </div>
          </div>
        </div>
        <div id="hybrid-app-suites" className="servicesTab">
          <button
            className={`servicesTabButton ${
              activeService === "hybrid-app-suites"
                ? "rounded-t-md"
                : "rounded-md"
            }`}
            onClick={() => openTab("hybrid-app-suites")}
          >
            <BiCaretDownCircle
              className={`servicesTabIcon transform ${
                activeService === "hybrid-app-suites"
                  ? "servicesTabIconActive"
                  : ""
              }`}
            />
            <h1 className="servicesTabHeader">Hybrid App Suites</h1>
          </button>
          <div
            className={`servicesTabBody ${
              activeService === "hybrid-app-suites"
                ? "servicesTabBodyActive"
                : "servicesTabBodyInactive"
            }`}
          >
            <div className="servicesTabContent">
              <HybridAppSuites/>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-1 md:p-4 my-6">
          <h1 className="text-3xl font-subheader font-bold">
            The perfect fit.
          </h1>
          <p className="mx-1 my-2">
            We serve a multitude of project needs and excel in helping clients
            find solutions for:
          </p>
          <ul className="my-1">
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>1</span>
              </div>
              <p className="productFitListItemText">
                Building new, modern websites and mobile / desktop applications.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>2</span>
              </div>
              <p className="productFitListItemText">
                Unifying software services into one integrated custom app suite.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>3</span>
              </div>
              <p className="productFitListItemText">
                Replacing or updating existing slow, clunky websites and
                outdated, legacy applications.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>4</span>
              </div>
              <p className="productFitListItemText">
                Integrating new technologies or features into existing sites /
                apps.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>5</span>
              </div>
              <p className="productFitListItemText">
                Fixing critical user experience or design flaws in existing
                applications.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>6</span>
              </div>
              <p className="productFitListItemText">
                Transitioning from dated business management tools to a new
                custom solution.
              </p>
            </li>
            <li className="productFitListItem">
              <div className="productFitListItemNumber">
                <span>7</span>
              </div>
              <p className="productFitListItemText">
                Streamlining processes to better manage projects internally.
              </p>
            </li>
          </ul>
          <p className="mx-1 mt-2">
            And much, much more. No matter what your development needs, we can
            help.
          </p>
        </div>
      </div>
      <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto" />
    </>
  )
}
export default Services