const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postsQuery = await graphql(`
    query GET_POSTS {
      allWpPost(sort: { order: DESC, fields: date }) {
        edges {
          node {
            uri
            id
            title
            slug
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `)
  const posts = postsQuery.data.allWpPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `news/${node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        // we need to add the post id here
        // so our blog post template knows which blog post it should display
        data: node,
        id: node.id,
      },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   await graphql(`
//   allWpPost {
//     edges {
//       node {
//         content
//         author {
//           node {
//             firstName
//             name
//             slug
//           }
//         }
//         featuredImage {
//           node {
//             sourceUrl
//             title
//           }
//         }
//       }
//     }
//   }
// }

//   `).then(result => {
//       console.log("results",result)
//     result.data.allWpPost.edges.forEach(({ node }) => {
//         console.log(node)
//       createPage({
//         // Decide URL structure
//         path: node.slug,
//         // path to template
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           // This is the $slug variable
//           // passed to blog-post.js
//           slug: node.slug,
//         },
//       })
//     })
//   })}
