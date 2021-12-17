import React from 'react'
import './src/styles/index.css'
import Layout from './src/components/layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
    return <Layout {...props}>{element}<ToastContainer/></Layout>;
}


export { wrapPageElement, onServiceWorkerUpdateReady }
