import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogCard from "./Card"
import BlogGrid from "./Grid"

const Learning = () => {
  return (
    <StaticQuery
      query={graphql`
        query LearningQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/learning/" } }
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
            <div className="computing-blogs">
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

export default Learning
