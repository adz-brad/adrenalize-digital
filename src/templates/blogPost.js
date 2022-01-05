import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SRLWrapper } from "simple-react-lightbox";
import { SocialSharing } from '../components/social'
import { window } from 'browser-monads'
import { MdShare } from 'react-icons/md'
import { ContactForm } from '../components/contact'

const BlogPost = ({ pageContext: { post } }) => {

    const options = {
        settings: {
          usingPreact: true
        },
        caption: {
            showCaption: false
          }
      }

      const sharingData = {
        url: window.location.href,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image.url
    }

    const publishDate = new Date(post.publishedAt)
    const [month, day, year] = [publishDate.toLocaleString('default', { month: 'long' }), publishDate.getDate(), publishDate.getFullYear()];
    

    return(
        <div className="md:w-full md:max-w-screen-lg md:mx-auto">
            <div className="flex flex-col my-2 md:my-4 p-3">
            <h1 className="text-2xl md:text-3xl font-bold my-2 border-b border-blue-600">{post.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex flex-row items-center md:flex-col md:items-start md:mr-auto">
                    <span className="hidden md:visible text-gray-700 md:font-semibold leading-none font-headers">Published</span>
                    <span className="text-gray-700 leading-none font-headers ml-1">{month} {day}, {year}</span>
                </div>
                <div className="hidden md:visible flex flex-row items-center ml-auto">
                    <MdShare className="text-2xl text-blue-600 md:text-3xl mr-2"/>
                    <SocialSharing page={sharingData}/>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <GatsbyImage 
                    image={getImage(post.image)}
                    className="h-80 rounded-t-lg"
                    alt={post.title}
                />
                <p className="text-xs md:text-sm italic text-gray-800 border-b border-blue-600 py-2 mx-1 leading-5">{post.excerpt}</p>
            </div>
            <div className="blogPostBody my-2">
                <MDXRenderer>
    
                        {post.content.markdownNode?.childMdx.body}

                </MDXRenderer>
            </div>
            <div className="border-t border-blue-700 p-2 flex flex-row items-center">
                <MdShare className="text-blue-600 text-4xl mt-1 mr-3"/>
                <div className="flex flex-col">
                    <h3 className="text-blue-700 text-lg font-bold">Be Cool. Share With Friends.</h3>
                    <SocialSharing page={sharingData}/> 
                </div>
            </div>
            </div>
            <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto"/>
        </div>
    )
}


export default BlogPost