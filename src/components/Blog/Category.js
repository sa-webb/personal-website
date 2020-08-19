import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogCard from "./Card"
import BlogGrid from "./Grid"

const Category = () => {
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
        <div className="category-blogs">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogGrid>
              <BlogCard key={node.id} data={node} />
            </BlogGrid>
          ))}
        </div>
      )}
    />
  )
}

export default Category