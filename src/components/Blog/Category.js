import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogCard from "./Card"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, CardActionArea, Card, Typography } from "@material-ui/core"
// import BlogGrid from "./Grid"

const useStyles = makeStyles(theme => ({
  "@global": {
    a: {
      boxShadow: "none",
    },
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: theme.spacing(6),
    },
  },
}))

export default function Category() {
  const classes = useStyles()
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
        <Container maxWidth="md" className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <BlogCard data={node} />
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    />
  )
}
