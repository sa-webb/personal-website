import React from "react"
import { PageProps, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { LinkedinIcon } from "react-share"

import Header from "../layout/Header"
import Footer from "../layout/Footer"
import SEO from "../components/seo"

import GitHubIcon from "../components/icons/github"
import AdobeIcon from "../components/icons/adobe"
import ParticlesBG from "../components/particles"

import Link from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, CardActionArea, Card, Typography } from "@material-ui/core"

import pdf from "../../static/AustinWebb_Resume.pdf"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
        profession: string
        degree: string
        major: string
        minor: string
      }
    }
  }
  icon: {
    childImageSharp: {
      fluid: FluidObject
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

  const { author } = data.site.siteMetadata

  return (
    <>
      <SEO title="Profile" />
      <ParticlesBG />
      <Header siteTitle={data.site.siteMetadata.author.name} />
      <main>
        <Container maxWidth="md" className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6}>
              <CardActionArea component="a">
                <Card className={classes.card}>
                  <Img fluid={data.icon.childImageSharp.fluid} />
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
                component="p"
                variant="h4"
                align="center"
                gutterBottom
                className={classes.textColor}
              >
                {" "}
                {author.profession}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                component="p"
                gutterBottom
                className={classes.textColor}
              >
                {author.degree}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                className={classes.textColor}
                component="p"
                gutterBottom
              >
                Major: {author.major}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                className={classes.textColor}
                component="p"
                gutterBottom
              >
                Minor: {author.minor}
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
                  <Link
                    href="https://www.linkedin.com/in/steven-austin-webb/"
                    target="_blank"
                  >
                    <LinkedinIcon size={70} round={true} />
                  </Link>
                </Grid>

                <Grid item md={2} xs={3}>
                  <Link href="https://github.com/sa-webb" target="_blank">
                    <GitHubIcon />
                  </Link>
                </Grid>

                <Grid item md={2} xs={3}>
                  <Link href={pdf} target="_blank">
                    <AdobeIcon />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  )
}

export default TestPage

export const testQuery = graphql`
  query IndexQuery {
    site {
      ...AuthorFragment
    }
    icon: file(absolutePath: { regex: "/profile_pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 530, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
