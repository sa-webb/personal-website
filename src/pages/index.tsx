import React from "react"
import { PageProps, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { LinkedinIcon, EmailIcon } from "react-share"

import Header from "../layout/Header"
import Footer from "../layout/Footer"
import SEO from "../components/seo"

import GitHubIcon from "../components/github"
import SpectrumIcon from "../components/spectrum"
import ParticlesBG from "../components/particles"

import Link from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, CardActionArea, Card, Typography } from "@material-ui/core"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    frontmatter: {
      title: string
      degree: string
      email: string
      number: string
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const useStyles = makeStyles(theme => ({
  "@global": {
    a: {
      boxShadow: "none",
    },
  },
  root: {
    paddingTop: `3em`,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
  },
  gridTest: {
    backgroundColor: `blue`,
  },
  textColor: {
    color: `#fff`,
  },
  opac: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  },
}))

const TestPage: React.FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const classes = useStyles()

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <>
      <SEO title="Profile" />
      <ParticlesBG />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container maxWidth="md" className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6}>
              <CardActionArea component="a">
                <Card className={classes.card}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Card>
              </CardActionArea>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={6}
              md={6}
              direction="column"
              alignItems="center"
              alignContent="center"
              justify="center"
              className={classes.opac}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                gutterBottom
                className={classes.textColor}
              >
                {" "}
                {frontmatter.title}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                component="p"
                gutterBottom
                className={classes.textColor}
              >
                {frontmatter.degree}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                className={classes.textColor}
                component="p"
                gutterBottom
              >
                {frontmatter.email}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                className={classes.textColor}
                component="p"
                gutterBottom
              >
                {frontmatter.number}
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                alignContent="space-between"
                justify="center"
                spacing={4}
              >
                <Grid item md={2} xs={3}>
                  <Link href="https://www.linkedin.com/in/austin-webb-0432431a3/">
                    <LinkedinIcon size={70} round={true} />
                  </Link>
                </Grid>

                <Grid item md={2} xs={3}>
                  <Link href="https://github.com/sa-webb">
                    <GitHubIcon />
                  </Link>
                </Grid>

                <Grid item md={2} xs={3}>
                  <Link href="https://spectrum.chat/users/austin-webb?tab=activity">
                    <SpectrumIcon />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default TestPage

export const testQuery = graphql`
  query TestQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/bio/" }) {
      frontmatter {
        title
        degree
        email
        number
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 530, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
