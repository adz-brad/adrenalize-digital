import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ pageContext: { post } }) => {
    console.log(post)
    return(
        <div className="md:w-full md:max-w-screen-lg md:mx-auto">
            <div className="flex flex-col my-2 md:my-4 p-3">
            <h1 className="text-2xl md:text-3xl font-bold my-2 border-b border-blue-600">{post.title}</h1>
            <div className="flex flex-col my-4">
                <GatsbyImage 
                    image={getImage(post.image)}
                    className="h-80 rounded-t-lg"
                    alt={post.title}
                />
                <p className="text-sm border-b border-blue-600 py-2">{post.excerpt}</p>
            </div>
            <div className="flex flex-col">
            <MDXRenderer>{post.content.markdownNode.childMdx.body}</MDXRenderer>
            </div>
            </div>
        </div>
    )
}


export default BlogPost