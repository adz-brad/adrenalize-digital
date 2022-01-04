const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
  query Posts {
    posts: allGraphCmsBlogPost {
      nodes {
        id
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
              gatsbyImageData(quality: 100)
        }
      }
    }
  }
    `)

    data.posts.nodes.forEach((post) => {
        createPage({
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            id: post.id,
            post,
          },
          path: `/insights-blog/posts/${post.slug}`,
        })
      })

    }
