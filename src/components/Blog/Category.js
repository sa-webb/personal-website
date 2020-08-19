import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogCard from './Card'

export default function Category() {
  return (
    <StaticQuery
      query={graphql`
        query CategoryQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/category/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogCard data={node}/>
          ))}
        </div>
      )}
    />
  )
}
