import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import BlogCard from "./Card"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    justify: "center",
    alignItems: "center",
    alignContent: "center"
  },
}))

const Learning = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query LearningQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/heuristics/" } }
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
            <Container maxWidth="lg" className={classes.root}>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                alignContent="center"
                justify="center"
              >
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <BlogCard key={node.id} data={node} />
                ))}
              </Grid>
            </Container>
          )
        }
      }}
    />
  )
}

export default Learning
