import React from "react"
import { graphql } from "gatsby"
import CardScroll from "../components/news-post-card/CardScroll"
import { Card } from "@mui/material"
import "../components/homepage.css"
import { NavBar } from "../components"
function BlogPost({ data }) {
  console.log(
    "data from template page : ",
    data.wpPost.featuredImage.node.sourceUrl
  )
  let image = data.wpPost.featuredImage.node.sourceUrl
  let content = data.wpPost.content
  let author = data.wpPost.author.node.name
  let title = data.wpPost.author.node.title
  return (
    <div>
      <NavBar />
      <div className="home-content">
        <Card className="card-scroll-content " variant="outlined">
          {" "}
          <CardScroll title={title} src={image} content={content} />
        </Card>
      </div>
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
