import React from 'react'
import { Navbar, Footer } from '../navigation'

const Layout = ({children}) => {

    return(
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout