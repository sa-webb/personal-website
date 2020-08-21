import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogCard from "./Card"
import BlogGrid from "./Grid"

const BlogHome = () => {
  return (
  <StaticQuery
    query={graphql`
      query BlogHomeQuery {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          ...CategoryFragment
        }
      }
    `}
    render={data => (
      <div className="blogs">
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

export default BlogHome
