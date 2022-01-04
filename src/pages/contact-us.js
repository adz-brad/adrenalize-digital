import React from 'react'
import { ContactForm } from '../components/contact'

const Contact = () => {

    return(
        <div className="md:w-full md:max-w-screen-lg md:p-3 md:mx-auto">
          <div className="contactCopy w-full flex flex-col justify-center bg-gray-100 md:mt-5 rounded-t-lg md:rounded-t-lg p-5">
            <h1 className="font-subheader text-gray-900 font-semibold text-3xl md:text-4xl mx-auto mt-3 md:mt-1">
              Ready to make waves?
            </h1>
            <div className="py-4 font-medium text-base lg:text-lg leading-snug my-auto">
              <p className="my-2">
                We make development easy for our clients, but if it were as
                simple as shopping on Amazon you wouldn't be here. There is
                always plenty of learning to do when it comes to building the
                best product for our clients and we're sure you have more
                questions.
              </p>
            </div>
            </div>
            <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto md:rounded-t-none md:rounded-b-lg" />
        </div>
    )
}

export default Contact