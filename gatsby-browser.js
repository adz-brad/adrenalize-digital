import React from 'react'
import './src/styles/index.css'
import Layout from './src/components/layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Helmet } from 'react-helmet';

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
    
    return (
      <Layout {...props}>
        <Helmet>
        <script type="application/ld+json">
              {`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Neural Smart Technologies",
  "image": "",
  "@id": "https://www.neuralsmart.ca/about-us",
  "url": "https://www.neuralsmart.ca",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "postalCode": "",
    "addressCountry": ""
  } ,
  "sameAs": [
    "",
    "",
    "",
    ""
  ] 
}`}
              </script>
        </Helmet>
        {element}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </Layout>
    )
  }


export { wrapPageElement, onServiceWorkerUpdateReady }
