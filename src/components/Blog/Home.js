import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import BlogCard from "./Card"
import BlogGrid from "./Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    justify: "center",
    alignItems: "center",
    alignContent: "center"
  },
}))

const HomePosts = () => {
  const classes = useStyles()

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
      )}
    />
  )
}

export default HomePosts
