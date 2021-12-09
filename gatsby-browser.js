import React from 'react'
import './src/styles/index.css'
import Layout from './src/components/layout'

const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }

  const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
}


export { wrapPageElement, onServiceWorkerUpdateReady }
