import React from "react"
import { PageProps, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import Header from "../layout/Header"
import SEO from "../components/seo"
import Link from "../components/link"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  CardActionArea,
  Card,
  Typography
} from "@material-ui/core"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          featuredImage: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }
    }
  }
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "pink",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
  }
})

const TestPage: React.FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const classes = useStyles()
  
  const { allMarkdownRemark } = data
  console.log(allMarkdownRemark)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title="Austin Webb test" />
      <Container className={classes.root}>
        <Grid container item spacing={0}>
          <Grid item xs={12} sm={6}>
            <CardActionArea component="a">
              <Link
                //to={`${fields.slug}`}
                style={{ textDecoration: `none` }}
              >
                <Card className={classes.card}>
                  <Img
                    fluid={allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Card>
              </Link>
            </CardActionArea>
          </Grid>

          <Grid item xs={12} sm={6} alignContent="center">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {" "}
              Welcome to my site
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textPrimary"
              component="p"
              gutterBottom
            >
              Software Dev
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default TestPage

export const testQuery = graphql`
  query TestQuery{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 630, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
