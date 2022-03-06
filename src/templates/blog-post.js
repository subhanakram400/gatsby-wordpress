import React from "react"
import { graphql } from "gatsby"
function BlogPost({ data }) {
  console.log("data from template page : ", data.wpPost.featuredImage.node.sourceUrl)
  let image = data.wpPost.featuredImage.node.sourceUrl
  let content = data.wpPost.content
  let author = data.wpPost.author.node.name
  return (
    <div>
    <h1>posts</h1>
      <h1>Title</h1>
      <div>
        <img src={image}></img>
      </div>
      <p>{content}</p>
   <p>Written By ,</p>
      <h2>{author}</h2>
    </div>
  )
}

export default BlogPost
export const pageQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      # query all usefull data
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
`
