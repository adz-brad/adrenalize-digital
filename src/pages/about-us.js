import React from 'react'
import { GiCargoCrane, GiBrain } from 'react-icons/gi'
import { IoLogoElectron } from 'react-icons/io5'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaHandshake, FaFistRaised } from 'react-icons/fa'
import { ContactForm } from '../components/contact'

const About = () => {
    return(
        <div className="md:w-full md:max-w-screen-lg md:mx-auto">
            <div className="flex flex-col p-3 mt-2 mx-2">
                <h1 className="text-3xl font-bold -mb-1">
                    Who We Are
                </h1>
                <h2 className="text-lg font-semibold text-blue-600 -mt-1">
                    Hey. Hola. Bonjour. Yo!
                </h2>
                <p className="text-sm md:text-base my-2">
                    There are plenty of ways to say hello, but we have a lot more to say about who we are and what we stand for.
                </p>
                <p className="text-sm md:text-base my-2">
                    Adrenalize Digital is a team of remote-based global developers serving clients in multiple locations around the world. Borders are just lines on a map, so we pulled out our erasers to show clients that we're all citizens of the same world and that no matter where you are on this planet, there are people willing to break down the barriers of the digital world and simply help.
                </p>
                <h1 className="text-3xl font-bold mt-2 -mb-1">
                    Our Mission
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-blue-600 -mt-1">
                    Inspire today to create a better tomorrow
                    </h2>
                <p className="text-sm md:text-base my-2">
                    While our company was born in the Great White North of Canada, we're pioneers in the world of global development standards, and that's a critical point in our business model. We've been around the proverbial block, travelling the world and meeting a diverse spectrum of human beings, learning about their cultures, hardships and most inspiring of all, their fighting spirit. We're all in this together, and Adrenalize built it's foundations on the motivation of helping as many people as possible.
                </p>
                <p className="text-sm md:text-base my-2">
                    The world is a magical place, but one of the things we think makes it so special is how profound an impact the thoughts and actions of the people living on it can have, for worse or for better. <strong>We choose better.</strong>
                </p>
            </div>
            <div className="flex flex-col md:flex-row p-1 my-2 md:p-3">
            <div className="flex flex-col md:w-1/2 bg-gray-900 text-gray-100 shadow-lg rounded-b-md md:rounded-bl-none md:rounded-r-md p-3">
                    <h1 className="text-4xl m-2 border-b border-blue-500">
                        We are
                    </h1>
                    <ul className="mx-3 my-4">
                        <li className="flex flex-col mt-1 mb-3">
                            <div className="flex flex-row">
                                <GiCargoCrane className="text-4xl text-blue-500"/>    
                                <h3 className="text-3xl font-semibold ml-3">Creators</h3>
                                </div>
                                <p className="mx-1 my-2 text-sm">
                                    No doubt about it, we're a clever bunch. And we love to express that cleverness through creative means like intuitively designed application interfaces or intelligently structured backend architectures.
                                </p>
                        </li>
                        <li className="flex flex-col mt-1 mb-3">
                            <div className="flex flex-row">
                                <IoLogoElectron className="text-4xl text-blue-500"/>    
                                <h3 className="text-3xl font-semibold ml-3">Innovators</h3>
                                </div>
                                <p className="mx-1 my-2 text-sm">
                                    Doing something the same way over and over while expecting a different result is the definition of insanity. Call us crazy but we prefer to think outside the box to find new solutions.
                                </p>
                        </li>
                        <li className="flex flex-col mt-1 mb-3">
                            <div className="flex flex-row">
                                <GiBrain className="text-4xl text-blue-500"/>    
                                <h3 className="text-3xl font-semibold ml-3">Forward Thinkers</h3>
                                </div>
                                <p className="mx-1 my-2 text-sm">
                                    The future isn't coming, it's already here - every second that ticks by is a leap towards something new and exciting. We're always looking ahead to the next big thing.
                                </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:w-1/2 bg-gray-100 text-gray-900 shadow-lg rounded-t-md md:rounded-tr-none md:rounded-l-md p-3">
                <h1 className="font-bold text-2xl md:text-3xl mx-3 mt-3 mb-1 md:my-1">
                    Curious what makes us tick?
                </h1>
                <p className="mx-1 my-3 md:m-3 text-sm md:text-base md:mt-auto">
                    For starters, We wake up each day and aspire to be more than just top notch developers. We're the whole enchelada - the creme de la creme of digital business development. It's an accomplishment we're proud of and one we've achieved by asking one very important question: <strong>Why not?</strong>
                </p>
                <p className="mx-1 my-3 md:m-3 text-sm md:text-base md:mb-auto">
                    It's the question we always ask - to our clients and to ourselves. Rather than preach the same old concepts over and over, we're out there trying to re-invent not only what we do as a company, but your expectations of what's possible. Whether it's jumping head-first into the latest and greatest in development frameworks or staying ahead of the curve with what's new in digital marketing, we approach every scenario with the same forward thinking mentality.
                </p>
                </div>
            </div>
            <div className="flex flex-col p-3 mx-2">
                <h1 className="text-3xl md:text-4xl font-bold -mb-1">
                    Core Values
                </h1>
                <h2 className="text-lg md:text-2xl font-semibold text-blue-600 -mt-1">We believe wholeheartedly in things like</h2>
                <div className="flex flex-col md:flex-row items-center my-2">
                    <div className="flex flex-col w-full md:w-1/3 mr-2 my-2 rounded-lg shadow-lg p-3 transform hover:scale-105 cursor-pointer">
                        <div className="flex flex-row items-center mt-2">
                            <HiOutlineLightBulb className="-ml-1 text-5xl mr-2"/>
                            <h2 className="text-2xl font-bold -mb-1">Curiosity</h2>
                        </div>
                        <p className="font-semibold mx-2 my-1">Open minds open doors</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 m-2 p-3 rounded-lg shadow-lg transform hover:scale-105 cursor-pointer">
                        <div className="flex flex-row items-center mt-2">
                            <FaHandshake className="text-5xl mr-3"/>
                            <h2 className="text-2xl font-bold">Integrity</h2>
                        </div>
                        <p className="font-semibold mx-2 my-1">We practice what we preach</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 ml-2 my-2 p-3 rounded-lg shadow-lg transform hover:scale-105 cursor-pointer">
                        <div className="flex flex-row items-center mt-2">
                            <FaFistRaised className="text-4xl mb-1 mr-2"/>
                            <h2 className="text-2xl font-bold">Courage</h2>
                        </div>
                        <p className="font-semibold mx-2 my-2">Standing up & speaking out</p>
                    </div>
                </div>
                <p className="my-2 text-sm md:text-base">It's our unshakeable belief in these core values that allows us to approach every project with the confidence it takes to go beyond and succeed in achieving the lofty goals of not only our clients by those we set for ourselves.</p>
            </div>
            <div className="flex flex-col p-3 mx-2">
                <h1 className="text-3xl font-bold -mb-1">
                    We're Here To Help
                </h1>
                <h2 className="text-xl font-semibold text-blue-600 -mt-1">
                    You're More Than Just A Client
                </h2>
                <p className="text-sm md:text-base my-2">
                    Successful businesses are built on a foundation of people, beyond just clients and employees - they're the partners, friends and family that give us purpose and support our endeavors. Every decision you make for your business affects the livelihoods of people that matter, so don't you deserve to feel secure in knowing that those people are our priority just as much as you and your business are?
                </p>
                <p className="text-sm md:text-base my-2">
                    We have people too. And we take care of you & yours like we do our own - it's how you know you can count on us. Always.
                </p>
                <p className="text-sm md:text-base my-2">
                    <strong>That's what sets us apart.</strong>
                </p>
            </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Ready To Get Started?
                </h1>
                <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto mb-2"/>
        </div>
    )
}
export default About;