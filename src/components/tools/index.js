import React, { useState } from 'react'
import update from 'immutability-helper';
import { Tooltip } from '../ui'
import { SelectCountry } from "../ui"
import { BiCaretRightCircle } from "react-icons/bi"
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { ImSpinner } from 'react-icons/im'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const ProjectDiscoveryInput = ({ id, className, number, text, value, onChange, name, type, tooltip, fieldMissing }) => {

    return(
                <div id={id} className={`flex flex-col ${className}`}>
                    <div className="projectDiscoveryItem relative">
                    <div className="projectDiscoveryItemNumber">
                        <span>{number}</span>
                    </div>
                    <p className={`projectDiscoveryItemText ${fieldMissing === true ? 'text-red-500 font-bold' : ''}`}>
                        {text}
                    </p>
                    <Tooltip text={tooltip} />
                    </div>
                    <input
                        className="projectDiscoveryInput"
                        value={value}
                        onChange={onChange}
                        type={type}
                        name={name}
                        aria-label={name}
                    />
                </div>
    )
}

const ProjectDiscoveryText = ({ id, className, number, text, value, onChange, name, type, tooltip, fieldMissing }) => {
    return(
                <div id={id} className={`flex flex-col ${className}`}>
                    <div className="projectDiscoveryItem relative">
                    <div className="projectDiscoveryItemNumber">
                        <span>{number}</span>
                    </div>
                    <p className={`projectDiscoveryItemText ${fieldMissing === true ? 'text-red-500 font-bold' : ''}`}>
                        {text}
                    </p>
                    <Tooltip text={tooltip} />
                    </div>
                    <textarea
                        className="projectDiscoveryInput"
                        rows="5"
                        value={value}
                        onChange={onChange}
                        type={type}
                        name={name}
                        aria-label={name}
                    />
                </div>
    )
}

const ProjectDiscoveryRadio = ({ id, number, text, options, onChange, className, checked, tooltip, fieldMissing }) => {
    return(
        <div id={id} className={`flex flex-col ${className}`}>
            <div className="projectDiscoveryItem relative">
                <div className="projectDiscoveryItemNumber">
                    <span>{number}</span>
                </div>
                <p className={`projectDiscoveryItemText ${fieldMissing === true ? 'text-red-500 font-bold' : ''}`}>
                    {text}
                </p>
                <Tooltip text={tooltip} />
            </div>
            <div className="flex flex-col ml-4">
                {options.map((option, i) => {
                    return(
                        <div key={i} className="flex flex-row items-center mb-1">
                        <input type="radio" value={option} onChange={onChange} checked={checked === option}/>
                         <span className="text-sm ml-2 md:mr-4 md:ml-0">
                            {option}
                         </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const ProjectDiscoveryChecklist = ({ id, className, number, text, tooltip, options, fieldMissing }) => {

    return(

        <div id={id} className={`flex flex-col ${className}`}>
            <div className="projectDiscoveryItem relative">
                <div className="projectDiscoveryItemNumber">
                    <span>{number}</span>
                </div>
                <p className={`projectDiscoveryItemText ${fieldMissing === true ? 'text-red-500 font-bold' : ''}`}>
                    {text}
                </p>
                <Tooltip text={tooltip} />
            </div>
            <div className="flex flex-col ml-4">
                {options.map((option, i) => {     
                    return(
                        <label key={i} className="flex flex-row items-center mb-2">
                            <input type="checkbox" name={option.name} id={option.name} onChange={option.onChange} />
                            <span className="ml-2 text-sm">{option.name}</span>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

const ProjectDiscovery = () => {

    const [ discoveryData, setDiscoveryData ] = useState({
        contactName: null,
        contactEmail: null,
        businessName: null,
        location: null,
        industry: null,
        description: null,
        type: null,
        types: [],
        status: null,
        requiresAudit: null,
        webUrl: null,
        appName: null,
        projectLocation: [],
        auditRequirements: [],
        goals: null,
        honeypot: null
      })

      const [ fieldMissing, setFieldMissing ] = useState(null)

      const handleInput = (props) => {
        setDiscoveryData(update(discoveryData, { [props.property]: { $set: props.value }}));
        setFieldMissing(null)
      }

      const handleCheck = (props) => { 
        const target = props.event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(value === true){
            setDiscoveryData(update(discoveryData, { [props.property]: { $push: [name] }}))
        } 
        else{
            let itemIndex = props.data.findIndex(x => x === name)  
            setDiscoveryData(update(discoveryData, { [props.property]: { $splice: [[itemIndex, 1]]}}))
        }
      }


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
        toast(props, {
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

      const submitDiscovery = async () => {
          if(discoveryData.contactName === null || discoveryData.contactName.length === 0){
            messageFailed('Contact Name Required')
            setFieldMissing('Contact Name')
            document.getElementById('Contact Name').scrollIntoView();
          }
          else if(discoveryData.contactEmail === null || discoveryData.contactEmail.length === 0){
            messageFailed('Contact Email Required')
            setFieldMissing('Contact Email')
            document.getElementById('Contact Email').scrollIntoView();
          }
          else if(discoveryData.businessName === null || discoveryData.businessName.length === 0){
            messageFailed('Business Name Required')
            setFieldMissing('Business Name')
            document.getElementById('Business Name').scrollIntoView();
          }
          else if(discoveryData.location === null || discoveryData.location.length === 0){
            messageFailed('Location Required')
            setFieldMissing('Location')
            document.getElementById('Location').scrollIntoView();
          }
          else if(discoveryData.industry === null || discoveryData.industry.length === 0){
            messageFailed('Industry Required')
            setFieldMissing('Industry')
            document.getElementById('Industry').scrollIntoView();
          }
          else if(discoveryData.description === null || discoveryData.description.length === 0){
            messageFailed('Description Required')
            setFieldMissing('Description')
            document.getElementById('Description').scrollIntoView();
          }
          else if(discoveryData.type === null || discoveryData.type.length === 0){
            messageFailed('Project Type Required')
            setFieldMissing('Project Type')
            document.getElementById('Project Type').scrollIntoView();
          }
          else if(discoveryData.status === null || discoveryData.status.length === 0){
            messageFailed('Status Required')
            setFieldMissing('Status')
            document.getElementById('Status').scrollIntoView();
          }
          else if(discoveryData.requiresAudit === null || discoveryData.requiresAudit.length === 0){
            messageFailed('Audit Required')
            setFieldMissing('Audit')
            document.getElementById('Audit').scrollIntoView();
          }
          else if(discoveryData.goals === null || discoveryData.goals.length === 0){
            messageFailed('Goals Required')
            setFieldMissing('Goals')
            document.getElementById('Goals').scrollIntoView();
          }
          else if(discoveryData.honeypot !== null){
            messageFailed('Sorry Pooh Bear')
          }
        else{
          setSending(true)
          await emailjs.send('service_neuralSMTP', 'template_neuralDiscovery', discoveryData, 'user_FlIabMfG4VBtqOJI64DiZ')
          .then(function(response) {
            setSending(false);
             console.log('Form Sent.', response.status, response.text);
             messageSent()
             setDiscoveryData(update(discoveryData, { 
                contactName: { $set: null },
                contactEmail: { $set: null },
                businessName: { $set: null },
                location: { $set: null },
                industry: { $set: null },
                description: { $set: null },
                type: { $set: null },
                types: { $set: [] },
                status: { $set: null },
                requiresAudit: { $set: null },
                webUrl: { $set: null },
                appName: { $set: null },
                projectLocation: { $set: [] },
                auditRequirements: { $set: [] },
                goals: { $set: null },
                honeypot: { $set: null }
            }));
          }, function(error) {
            setSending(false);
            console.log('Error sending message.', error);
             messageFailed(`Something went wrong.`)
          });   
        }
      }


    return(
        <div className="my-2 md:mx-2">

            <h1 className="text-2xl md:text-3xl font-semibold border-b border-blue-500 pb-1">
                Project Discovery
            </h1>
            <p className="text-sm md:text-base my-2">Are you ready for your journey with Adrenalize Digital? Fill out our project discovery form to get started!</p>

            <form className="flex flex-row flex-wrap my-6 md:mx-6">

            <input
                name="Favorite Type of Honey"
                aria-label="Favorite Type of Honey"
                className="hidden"
                type="text"
                value={discoveryData.honeypot || ''}
                onChange={(e) => handleInput({property: 'honeypot', value: e.target.value})}
              />

                <ProjectDiscoveryInput
                    id="Contact Name"
                    type="text"
                    name="Contact Name"
                    number="1"
                    text="What is your name? *"
                    value={discoveryData.contactName || ''}
                    onChange={(e) => handleInput({property: 'contactName', value: e.target.value})}
                    className="w-full md:w-1/2 md:pr-2 mb-2"
                    tooltip="Enter Your Full Name"
                    fieldMissing={fieldMissing === 'Contact Name' ? true : false}
                />

                <ProjectDiscoveryInput
                    id="Contact Email"
                    type="text"
                    name="Contact Email"
                    number="2"
                    text="What is your email address? *"
                    value={discoveryData.contactEmail || ''}
                    onChange={(e) => handleInput({property: 'contactEmail', value: e.target.value})}
                    className="w-full md:w-1/2 md:pr-2 mb-2"
                    tooltip="What is the email address we can reach you at?"
                    fieldMissing={fieldMissing === 'Contact Email' ? true : false}
                />

                <ProjectDiscoveryInput
                    id="Business Name"
                    type="text"
                    name="Business Name"
                    number="3"
                    text="What is your business name? *"
                    value={discoveryData.businessName || ''}
                    onChange={(e) => handleInput({property: 'businessName', value: e.target.value})}
                    className="w-full md:w-1/3 md:pr-2 mb-2"
                    tooltip="Enter Your Business Name"
                    fieldMissing={fieldMissing === 'Business Name' ? true : false}
                />

                <div id="Location" className="flex flex-col w-full md:w-1/3 md:pl-2 mb-2">
                    <div className="projectDiscoveryItem relative">
                        <div className="projectDiscoveryItemNumber">
                            <span>4</span>
                        </div>
                        <p className={`projectDiscoveryItemText ${fieldMissing === 'Location' ? 'text-red-500 font-bold' : ''}`}>
                            Where is your business located? *
                        </p>
                        <Tooltip text="The base location your business is registered in." />
                    </div>
                    <SelectCountry
                        className={`w-full focus:outline-blue px-1 py-2 mb-3 shadow-md rounded-md text-gray-900 ${fieldMissing === 'Location' ? 'outline-red' : ''}`}
                        value={discoveryData.location || ''}
                        onChange={(e) => handleInput({property: 'location', value: e.target.value})}
                    />
                </div>

                <ProjectDiscoveryInput
                    id="Industry"
                    type="text"
                    name="Industry"
                    number="5"
                    text="What industry are you in? *"
                    value={discoveryData.industry || ''}
                    onChange={(e) => handleInput({property: 'industry', value: e.target.value})}
                    className="w-full md:w-1/3 md:pl-2 mb-2"
                    tooltip="Describe the industry your business operates in"
                    fieldMissing={fieldMissing === 'Industry' ? true : false}
                />

                <ProjectDiscoveryText
                    id="Description"
                    type="text"
                    name="Description"
                    number="6"
                    text="Describe the products / services your business provides? *"
                    value={discoveryData.description || ''}
                    onChange={(e) => handleInput({property: 'description', value: e.target.value})}
                    className="w-full mb-2"
                    tooltip="Describe the type of products or services that your business provides"
                    fieldMissing={fieldMissing === 'Description' ? true : false}
                />

                <ProjectDiscoveryRadio
                    id="Project Type"
                    type="radio"
                    number="7"
                    text="Select your project type: *"
                    value={discoveryData.type || ''}
                    onChange={(e) => handleInput({property: 'type', value: e.target.value})}
                    checked={discoveryData.type}
                    className="w-full md:w-1/3 mb-5 md:mb-3"
                    options={['Website / Web App', 'Mobile Application', 'Desktop Application', 'Hybrid App Suite', 'Multiple Project Types']}
                    tooltip="What type of project are you working on?"
                    fieldMissing={fieldMissing === 'Project Type' ? true : false}
                />

                {discoveryData.type === 'Multiple Project Types' ?
                    <ProjectDiscoveryChecklist
                    id="Types"
                    name="Project Types"
                    number="A"
                    text="Select Your Project Types"
                    className="w-full md:w-1/3 md:pr-2 mb-5 md:mb-3 ml-4 md:ml-0"
                    tooltip="Select all the options that apply"
                    options={[
                        {
                            name: 'Website / Web App',
                            onChange: (e) => handleCheck({event: e, data: discoveryData.types, property: 'types'}),
                        },
                        {
                            name: 'Mobile Application',
                            onChange: (e) => handleCheck({event: e, data: discoveryData.types, property: 'types'}),
                        },
                        {
                            name: 'Desktop Application',
                            onChange: (e) => handleCheck({event: e, data: discoveryData.types, property: 'types'}),
                        },
                        {
                            name: 'Hybrid App Suite',
                            onChange: (e) => handleCheck({event: e, data: discoveryData.types, property: 'types'}),
                        },
                    ]}
                />
                : null }

                <ProjectDiscoveryRadio
                    id="Status"
                    type="radio"
                    number="8"
                    text="Describe your current project status: *"
                    value={discoveryData.status || ''}
                    onChange={(e) => handleInput({property: 'status', value: e.target.value})}
                    checked={discoveryData.status}
                    className="w-full md:w-1/3 mb-5 md:mb-3"
                    options={['Starting From Scratch', 'Design Complete (Undeveloped)', 'Partially Developed', 'Completed (Requires Updating)']}
                    tooltip="Which statement best describes the current state of your project?"
                    fieldMissing={fieldMissing === 'Status' ? true : false}
                />

                <ProjectDiscoveryRadio
                    id="Audit"
                    type="radio"
                    number="9"
                    text="Do you require a project audit? *"
                    value={discoveryData.requiresAudit || ''}
                    onChange={(e) => handleInput({property: 'requiresAudit', value: e.target.value})}
                    checked={discoveryData.requiresAudit}
                    className="w-full md:w-1/3 mb-5 md:mb-3"
                    options={['Yes','No']}
                    tooltip="Do you require an audit for an existing website or application?"
                    fieldMissing={fieldMissing === 'Audit' ? true : false}
                />
                {discoveryData.requiresAudit === 'Yes' ?
                    <>
                        {discoveryData.type === 'Website / Web App' ?
                        <>
                            <ProjectDiscoveryInput
                                id="Web URL"
                                type="text"
                                name="Site URL"
                                number="A"
                                text="What is your website / web app URL?"
                                value={discoveryData.webUrl || ''}
                                onChange={(e) => handleInput({property: 'webUrl', value: e.target.value})}
                                className="w-full md:w-1/3 mb-5 md:mb-3"
                                tooltip="What URL address is your website or web app hosted at? Or, where can we view it?"
                            />
                        </>
                        : discoveryData.type === 'Mobile Application' ?
                        <>
                            <ProjectDiscoveryInput
                                id="App Name"
                                type="text"
                                name="App Name"
                                number="A"
                                text="What is the name of your application?"
                                value={discoveryData.appName || ''}
                                onChange={(e) => handleInput({property: 'appName', value: e.target.value})}
                                className="w-full md:w-1/3 mb-5 md:mb-3"
                                tooltip="What is the name of your app?"
                            />

                            <ProjectDiscoveryChecklist
                                id="App Location"
                                name="Project Location"
                                number="B"
                                text="Where can your project be found?"
                                className="w-full md:w-1/3 md:pr-2 mb-5 md:mb-3 ml-4 md:ml-0"
                                tooltip="Select all the options that apply"
                                options={[
                                    {
                                        name: 'Apple Store',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.projectLocation, property: 'projectLocation'}),
                                    },
                                    {
                                        name: 'Google Play Store',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.projectLocation, property: 'projectLocation'}),
                                    },
                                    {
                                        name: 'Available as SDK',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.projectLocation, property: 'projectLocation'}),
                                    },
                                    {
                                        name: 'Hosted on CDN',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.projectLocation, property: 'projectLocation'}),
                                    },
                                    {
                                        name: 'Unpublished',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.projectLocation, property: 'projectLocation'}),
                                    },
                                ]}
                            />
                        </>
                        : null }
                        <>
                        </>
                            <ProjectDiscoveryChecklist
                                id="Audit Requirements"
                                name="Audit Requirements"
                                number={discoveryData.type === 'Website / Web App' ? 'B' : discoveryData.type === 'Mobile Application' ? 'C' : 'A'}
                                text="Audit Requirements:"
                                className="w-full md:w-1/3 md:pr-2 mb-5 md:mb-3 ml-4 md:ml-0"
                                tooltip="Select all the options that apply"
                                options={[
                                    {
                                        name: 'Performance Metrics',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.auditRequirements, property: 'auditRequirements'}),
                                    },
                                    {
                                        name: 'Security Investigation',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.auditRequirements, property: 'auditRequirements'}),
                                    },
                                    {
                                        name: 'SEO / SERP Review',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.auditRequirements, property: 'auditRequirements'}),
                                    },
                                    {
                                        name: 'UX / UI Analysis',
                                        onChange: (e) => handleCheck({event: e, data: discoveryData.auditRequirements, property: 'auditRequirements'}),
                                    },
                                ]}
                            />
                    </>
                : null }
                
                <ProjectDiscoveryText
                    id="Goals"
                    type="text"
                    name="Goals"
                    number="10"
                    text="Describe the goals for your project *"
                    value={discoveryData.goals || ''}
                    onChange={(e) => handleInput({property: 'goals', value: e.target.value})}
                    className="w-full mb-2"
                    tooltip="Describe the goals you want to achieve for your business by developing a project with us."
                    fieldMissing={fieldMissing === 'Goals' ? true : false}        
                />

            </form>

            <button 
            aria-label="Submit Project Discovery"
            className="flex flex-row items-center text-xl px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold font-subheader rounded-lg shadow-md my-5 mx-auto"
            onClick={() => submitDiscovery()}>
              {sending === false ?
                <>
                  Let's Get Started!
                  <BiCaretRightCircle className="ml-3 text-2xl" />
                </>  
              :
                <>
                  Sending
                  <ImSpinner className="ml-3 text-2xl spin" />
                </>
              }
              
            </button>

        </div>
    )
}

export { ProjectDiscovery }