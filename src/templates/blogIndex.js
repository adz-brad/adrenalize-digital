import React from 'react'
import { FeaturedCard, BlogCard } from '../components/blog'
import { ContactForm } from '../components/contact'
import { Seo } from '../components/seo'


const BlogIndex = ({ pageContext: posts }) => {

    return(
        <>
      <Seo
        pageTitle="Insights Blog"
        pageDescription="Adrenalize Digital - Creating intelligent digital products for intelligent businesses."
        pageKeywords="Adrenalize, Digital, Smart, Technolgoies, Web, App, Application, Mobile, Design, Development"
        pageUrl="https://www.adrenalizedigital.ca/insights-blog"
        pageImage="https://github.com/brad-nst/adrenalize-digital/blob/main/src/assets/images/adLogoDark.png?raw=true"
      />
        <div className="md:w-full md:max-w-screen-lg md:mx-auto">
            <div className="flex flex-col p-3 mt-2 mx-2">
                <h1 className="text-3xl md:text-4xl font-bold -mb-1">
                    Insights
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-blue-600 -mt-1">
                    A Blog For Development Resources
                </h2>
                <p className="text-sm md:text-base my-2">
                    We're always learning and aim to provide as many educational resources as possible for potential and current clients alike to learn more about modern web and application development.
                </p>
                <p className="text-sm md:text-base my-2">
                    Browse our featured articles or search for whatever's on your mind!
                </p>
            </div>
            <div className="flex flex-col p-2 md:mx-2">
                <h1 className="text-2xl md:text-3xl font-bold mb-8 mx-2 border-b-2 border-blue-700">
                    Featured Post
                </h1>
                {posts.featuredPost.map((post) => {
                    return(
                    <FeaturedCard 
                        title={post.title}
                        published={post.publishedAt}
                        excerpt={post.excerpt}
                        image={post.image}
                        link={`/insights-blog/posts/${post.slug}/`}
                        tags={post.tags?.map((tag) => tag.title)}
                    />
                    )
                })}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold m-4 border-b-2 border-blue-700">Most Recent Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 md:m-1">
                {posts.recentPosts.map((post) => {
                    return(
                    <BlogCard 
                    title={post.title}
                    published={post.publishedAt}
                    excerpt={post.excerpt}
                    image={post.image}
                    link={`/insights-blog/posts/${post.slug}/`}
                    tags={post.tags?.map((tag) => tag.title)}
                />
                    )
                })}
            </div>
            <div className="flex flex-col p-3 mx-2 my-4">
                <h1 className="text-2xl md:text-3xl md:text-4xl font-bold -mb-1">
                    Interested In Writing For Us?
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-blue-600 leading-5 -mt-1">
                    Opportunities for guest blog features
                </h2>
                <p className="text-sm md:text-base my-2">
                    Just fill in the contact form below, select "Guest Blog Feature" and we'll send you an information package on just how our affiliate blogger program works.
                </p>
            </div>
            <ContactForm className="md:w-full md:max-w-screen-lg md:mx-auto mb-2"/>
        </div>
        </>
    )
}

export default BlogIndex