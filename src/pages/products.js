import React, { useState } from 'react'
import { BiCaretDownCircle } from 'react-icons/bi'

const Services = () => {

    const [ activeService, setActiveService ] = useState(null)

    return(
            <div className="flex flex-col p-2 my-2 max-w-screen-lg mx-auto">
                <div className="p-1">
                <h1 className="font-subheader text-3xl font-bold">Build with the best.</h1>
                <p className="my-2">
                    We utilize the latest in development methodologies to provide businesses with intelligently designed, highly performant applications for web, mobile and desktop.
                </p>
                <p className="font-semibold my-2">
                    Click the tabs below to learn more about our products.
                </p>
                </div>
                <div className="servicesTab">
                    <button 
                        className={`servicesTabButton ${activeService === 'web' ? 'rounded-t-md' : 'rounded-md'}`}
                        onClick={activeService === 'web' ? () => setActiveService(null) : () => setActiveService('web')}
                    >
                        <BiCaretDownCircle className={`servicesTabIcon ${activeService === 'web' ? 'servicesTabIconActive' : ''}`} />
                        <h1 className="servicesTabHeader">Modern Web Applications</h1>
                    </button>
                    <div className={`servicesTabBody ${activeService === 'web' ? 'servicesTabBodyActive' : 'servicesTabBodyInactive'}`}>
                        <div className="servicesTabContent">
                            <div className="flex flex-col md:w-1/2 text-sm m-1">
                        <p className="m-1">
                            With the ever-changing state of the web, businesses need to adapt to using new technologies in order to meet new client demands and stay relevant.  Our web app development solutions do exactly that and more, with a focus on driving new client intake, increasing existing client retention and raising overall client satisfaction. The end result? Improved revenue for your business!
                        </p>
                        <p className="m-1">
                            We utilize the latest and greatest in web design concepts and development methodologies to create project stacks that are unique to your needs, and because we've away from traditional, "legacy" architecture building models, your Neural web project won't suffer from common issues inherently plaguing most sites on the web.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicesTab">
                    <button 
                        className={`servicesTabButton ${activeService === 'mobile' ? 'rounded-t-md' : 'rounded-md'}`}
                        onClick={activeService === 'mobile' ? () => setActiveService(null) : () => setActiveService('mobile')}
                    >
                        <BiCaretDownCircle className={`servicesTabIcon transform ${activeService === 'mobile' ? 'servicesTabIconActive' : ''}`} />
                        <h1 className="servicesTabHeader">Mobile Applications</h1>
                    </button>
                    <div className={`servicesTabBody ${activeService === 'mobile' ? 'servicesTabBodyActive' : 'servicesTabBodyInactive'}`}>
                        <div className="servicesTabContent">
                            
                        </div>
                    </div>
                </div>
                <div className="servicesTab">
                    <button 
                        className={`servicesTabButton ${activeService === 'desktop' ? 'rounded-t-md' : 'rounded-md'}`}
                        onClick={activeService === 'desktop' ? () => setActiveService(null) : () => setActiveService('desktop')}
                    >
                        <BiCaretDownCircle className={`servicesTabIcon transform ${activeService === 'desktop' ? 'servicesTabIconActive' : ''}`} />
                        <h1 className="servicesTabHeader">Desktop Applications</h1>
                    </button>
                    <div className={`servicesTabBody ${activeService === 'desktop' ? 'servicesTabBodyActive' : 'servicesTabBodyInactive'}`}>
                        <div className="servicesTabContent">
                            
                        </div>
                    </div>
                </div>
                <div className="servicesTab">
                    <button 
                        className={`servicesTabButton ${activeService === 'hybrid' ? 'rounded-t-md' : 'rounded-md'}`}
                        onClick={activeService === 'hybrid' ? () => setActiveService(null) : () => setActiveService('hybrid')}
                    >
                        <BiCaretDownCircle className={`servicesTabIcon transform ${activeService === 'hybrid' ? 'servicesTabIconActive' : ''}`} />
                        <h1 className="servicesTabHeader">Hybrid App Suites</h1>
                    </button>
                    <div className={`servicesTabBody ${activeService === 'hybrid' ? 'servicesTabBodyActive' : 'servicesTabBodyInactive'}`}>
                        <div className="servicesTabContent">
                            
                        </div>
                    </div>
                </div>
                
            </div>
    )
}
export default Services;