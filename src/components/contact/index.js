import React, { useState } from "react"
import { SelectCountry } from "../ui"
import { BiCaretRightCircle } from "react-icons/bi"
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { ImSpinner } from 'react-icons/im'
import update from 'immutability-helper';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import LazyLoad from "react-lazyload"

const ContactForm = ({ className }) => {

  const [ contactData, setContactData ] = useState({
    name: null,
    email: null,
    location: null,
    type: null,
    message: null
  })

  const handleContactName = (props) => {
    setContactData(update(contactData, { name: { $set: props }}));
    setFieldMissing(null)
  }

  const handleContactEmail = (props) => {
    setContactData(update(contactData, { email: { $set: props }}));
    setFieldMissing(null)
  }


  const handleContactLocation = (props) => {
    setContactData(update(contactData, { location: { $set: props }}));
    setFieldMissing(null)
  }


  const handleContactType = (props) => {
    setContactData(update(contactData, { type: { $set: props }}));
    setFieldMissing(null)
  }


  const handleContactMessage = (props) => {
    setContactData(update(contactData, { message: { $set: props }}));
    setFieldMissing(null)
  }

  const [ fieldMissing, setFieldMissing ] = useState(null);

  const messageSent = () => {
    toast("Message Sent!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast green-toast",
        icon: <MdThumbUp/>
      });
  };

  const messageFailed = (props) => {
    toast(`${props} required`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        className: "custom-toast red-toast",
        icon: <MdThumbDown className="text-xl" />
      });
  };

  const [ sending, setSending ] = useState(false)

  const submitContact = async () => {
    if(contactData.name === null){
      messageFailed('Name')
      setFieldMissing('Name')
    }
      
      else if(contactData.email === null){
        messageFailed('Email')
        setFieldMissing('Email')
    }
      
      else if(contactData.location === null){
        messageFailed('Location')
        setFieldMissing('Location')
      }
      
      else if(contactData.type === null){
        messageFailed('Type')
        setFieldMissing('Type')
      }
      
      else if(contactData.message === null){
      messageFailed('Message')
      setFieldMissing('Message')
    }
    else{
      setSending(true)
      await emailjs.send('service_neuralSMTP', 'template_neuralContact', contactData, 'user_FlIabMfG4VBtqOJI64DiZ')
      .then(function(response) {
        setSending(false);
         console.log('Message Sent.', response.status, response.text);
         messageSent()
         setContactData(update(contactData, { 
          name: { $set: null },
          email: { $set: null },
          location: { $set: null },
          type: { $set: null },
          message: { $set: null },
        }));
      }, function(error) {
        setSending(false);
        console.log('Error sending message.', error);
         messageFailed(`Something went wrong.`)
      });   
    }
  }

    return(
        <div
            id="contact"
            className={`w-full md:w-2/3 flex flex-col justify-center items-center bg-gray-900 text-gray-100 rounded-b-lg rounded-lg p-5 ${className}`}
          >
            <LazyLoad>
            <h1 className="font-subheader text-4xl font-semibold my-6 leading-none">
              Let's get in touch!
            </h1>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Your Name</h2>
              <input
                name="Name"
                aria-label="Name"
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Name' ? 'outline-red' : ''}`}
                type="text"
                value={contactData.name || ''}
                onChange={(e) => handleContactName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Email Address</h2>
              <input
                name="Email"
                aria-label="Email"
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Email' ? 'outline-red' : ''}`}
                type="text"
                value={contactData.email || ''}
                onChange={(e) => handleContactEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Where are you located?</h2>
              <SelectCountry
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Location' ? 'outline-red' : ''}`}
                value={contactData.location || ''}
                onChange={(e) => handleContactLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">How can we help?</h2>
              <select 
              name="How Can We Help?"
              aria-label="How Can We Help?"
              className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Type' ? 'outline-red' : ''}`}
              value={contactData.type || ''}
              onChange={(e) => handleContactType(e.target.value)}>
                <option value="" selected disabled hidden>
                  Choose an option...
                </option>
                <option>Schedule a new project consultation</option>
                <option>Updating an existing external project</option>
                <option>Services for an existing Adrenalize project</option>
                <option>Guest Blog Feature</option>
                <option>General inquiry</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Message</h2>
              <textarea
                name="Message"
                aria-label="Message"
                rows="5"
                className={`contactMessage focus:outline-blue w-full p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Message' ? 'outline-red' : ''}`}
                value={contactData.message || ''}
                onChange={(e) => handleContactMessage(e.target.value)}
              />
            </div>
            <button 
            aria-label="Submit"
            className="flex flex-row items-center text-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold font-subheader rounded-lg shadow-md my-5 mx-auto"
            onClick={() => submitContact()}>
              {sending === false ?
                <>
                  Submit
                  <BiCaretRightCircle className="ml-3 text-2xl" />
                </>  
              :
                <>
                  Sending
                  <ImSpinner className="ml-3 text-2xl spin" />
                </>
              }
              
            </button>
            </LazyLoad>
          </div>
    )
}

export { ContactForm }