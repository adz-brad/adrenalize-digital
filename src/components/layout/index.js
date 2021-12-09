import React from 'react'
import { Navbar } from '../navigation'

const Layout = ({children}) => {
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout