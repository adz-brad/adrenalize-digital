import React from "react"
import "./src/styles/index.css"
import Layout from "./src/components/layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import SimpleReactLightbox from "simple-react-lightbox"

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Helmet>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Adrenalize Digital",
            "image": "",
            "@id": "https://www.adrenalizedigital.ca/about-us",
            "url": "https://www.adrenalizedigital.ca",
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
    </Layout>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <>
      <MDXProvider>
        <SimpleReactLightbox>
          {element}
        </SimpleReactLightbox>
      </MDXProvider>
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
  </>
  )
}

export { wrapPageElement, wrapRootElement }
