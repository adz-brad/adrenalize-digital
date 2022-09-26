import React, { useState } from "react"
import { SelectCountry } from "../ui"
import { BiCaretRightCircle } from "react-icons/bi"
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { ImSpinner } from 'react-icons/im'
import update from 'immutability-helper';
import { toast } from 'react-toastify';


const ContactForm = ({ className }) => {

  const [ contactData, setContactData ] = useState({
    name: null,
    email: null,
    location: 'Choose your country ...',
    type: 'Choose an option ...',
    message: null,
    honeypot: null
  })

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
    toast(`${props} ${fieldMissing !== null ? 'required' : ''}`, {
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

  const submit = async (e) => {
    if(contactData.name === null){
      messageFailed('Name Required')
      setFieldMissing('Name')
    } 
    else if(contactData.email === null){
      messageFailed('Email Required')
      setFieldMissing('Email')
    }    
    else if(contactData.location === 'Choose your country ...'){
      messageFailed('Location Required')
      setFieldMissing('Location')
    }   
    else if(contactData.type === 'Choose an option ...'){
      messageFailed('Type Required')
      setFieldMissing('Type')
    }   
    else if(contactData.message === null){
    messageFailed('Message Required')
    setFieldMissing('Message')
    }
    else if(contactData.honeypot !== null){
      messageFailed('Sorry Pooh Bear')
    }
    else{
      setSending(true)
      e.preventDefault()
      const data = {
        name: contactData.name,
        email: contactData.email,
        location: contactData.location,
        type: contactData.type,
        message: contactData.message,
      }
      const JSONdata = JSON.stringify(data)
      const endpoint = '/.netlify/functions/submit'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSONdata,
      }
      await fetch(endpoint, options).then(res => {
        if(res.status === 200) {
          setSending(false);
          messageSent()
          setContactData(update(contactData, { 
            name: { $set: null },
            email: { $set: null },
            location: { $set: 'Choose your country ...' },
            type: { $set: 'Choose an option ...' },
            message: { $set: null },
            honeypot: { $set: null }
          }));
        }
        else {
           setSending(false);
           messageFailed(`Something went wrong.`)
        }
      }).catch(err => {
        if(err) {
          setSending(false);
          messageFailed(`Something went wrong.`)
        }
      })
    }
  }


  const handleInput = (props) => {
    setContactData(update(contactData, { [props.property]: { $set: props.value }}));
    setFieldMissing(null)
  }

    return(
        <form
            id="contact"
            className={`w-full md:w-2/3 flex flex-col justify-center items-center bg-gray-900 text-gray-100 rounded-b-lg rounded-lg p-5 ${className}`}
            onSubmit={submit}
          >
            <h1 className="font-subheader text-4xl font-semibold my-6 leading-none">
              Let's get in touch!
            </h1>
            <input
                name="name"
                aria-label="name"
                className="h-0 w-0 opacity-0"
                type="text"
                value={contactData.honeypot || ''}
                onChange={(e) => handleInput({property: 'honeypot', value: e.target.value})}
              />
              <input
                name="email"
                aria-label="email"
                className="h-0 w-0 opacity-0"
                type="email"
                value={contactData.honeypot || ''}
                onChange={(e) => handleInput({property: 'honeypot', value: e.target.value})}
              />
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Your Name</h2>
              <input
                name="Contact Name"
                aria-label="Contact Name"
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Name' ? 'outline-red' : ''}`}
                type="text"
                value={contactData.name || ''}
                onChange={(e) => handleInput({property: 'name', value: e.target.value})}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Email Address</h2>
              <input
                name="Contact Email"
                aria-label="Contact Email"
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Email' ? 'outline-red' : ''}`}
                type="text"
                value={contactData.email || ''}
                onChange={(e) => handleInput({property: 'email', value: e.target.value})}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">Where are you located?</h2>
              <SelectCountry
                className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Location' ? 'outline-red' : ''}`}
                value={contactData.location || ''}
                onChange={(e) => handleInput({property: 'location', value: e.target.value})}
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <h2 className="text-lg font-semibold">How can we help?</h2>
              <select 
              name="How Can We Help?"
              aria-label="How Can We Help?"
              className={`w-full focus:outline-blue p-1 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Type' ? 'outline-red' : ''}`}
              value={contactData.type || ''}
              onChange={(e) => handleInput({property: 'type', value: e.target.value})}
              >
                <option value="Choose an option ..." disabled>
                  Choose an option ...
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
                onChange={(e) => handleInput({property: 'message', value: e.target.value})}
              />
            </div>
            <button 
            type="submit"
            aria-label="Submit Contact Form"
            className="flex flex-row items-center text-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold font-headers rounded-lg shadow-md my-5 mx-auto"
            >
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
          </form>
    )
}

export { ContactForm }