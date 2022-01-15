import React from 'react'
import { Navbar, Footer } from '../navigation'
import { Banner } from '../ui'

const Layout = ({children}) => {

    return(
        <div>
            <Banner
                className="bg-red-700"
                text="Build a website, rebuild lives: Super Typhoon Odette Relief"
                linkText="Learn More"
                link="/insights-blog/posts/build-a-website-rebuild-lives-super-typhoon-odette-relief/"
            />
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout