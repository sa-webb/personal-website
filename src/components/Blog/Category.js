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
            ...CategoryFragment
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges

        if (posts.length === 0) {
          return <p>No posts for this category</p>
        } else {
          return (
            <div className="category-blogs">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <BlogGrid key={node.id}>
                  <BlogCard key={node.id} data={node} />
                </BlogGrid>
              ))}
            </div>
          )
        }
      }}
    />
  )
}

export default Category
