const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
  query {
    featuredPost: allGraphCmsBlogPost(
      filter: {featured: {eq: true}}
      limit: 1
      sort: {order: DESC, fields: publishedAt}
    ) {
      nodes {
        id
        remoteId
        title
        slug
        excerpt
        publishedAt
        featured
        content {
          markdownNode{
            childMdx {
              body
            }
          }
        }
        author {
          id
          name
          description
          link
          avatar {
                gatsbyImageData(quality: 100)
          }
        }
        image {
              url
              gatsbyImageData(quality: 100)
        }
      }
    },
    recentPosts: allGraphCmsBlogPost(
      filter: {featured: {eq: false}}
      limit: 4
      sort: {order: DESC, fields: publishedAt}
    ) {
      nodes {
        id
        remoteId
        title
        slug
        excerpt
        publishedAt
        featured
        content {
          markdownNode{
            childMdx {
              body
            }
          }
        }
        author {
          id
          name
          description
          link
          avatar {
                gatsbyImageData(quality: 100)
          }
        }
        image {
              url
              gatsbyImageData(quality: 100)
        }
      }
    },
    allPosts: allGraphCmsBlogPost {
      nodes {
        id
        remoteId
        title
        slug
        excerpt
        publishedAt
        featured
        content {
          markdownNode{
            childMdx {
              body
            }
          }
        }
        author {
          id
          name
          description
          link
          avatar {
                gatsbyImageData(quality: 100)
          }
        }
        image {
              url
              gatsbyImageData(quality: 100)
        }
      }
    }
  }
    `)

    data.allPosts.nodes.forEach((post) => {
        createPage({
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            id: post.id,
            post,
          },
          path: `/insights-blog/posts/${post.slug}`,
        })
      })

        createPage({
          component: path.resolve(`./src/templates/blogIndex.js`),
          context: {
            featuredPost: data.featuredPost.nodes,
            recentPosts: data.recentPosts.nodes,
            allPosts: data.allPosts.nodes
          },
          path: `/insights-blog`,
        })

    }
