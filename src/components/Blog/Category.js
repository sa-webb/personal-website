import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import { Link } from "gatsby"

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
            <Card>
              <CardActionArea>
                <Link to={`/blog${node.fields.slug}`}>{node.frontmatter.title}</Link>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}
    />
  )
}
