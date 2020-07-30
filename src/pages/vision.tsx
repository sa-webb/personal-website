import React from "react"

import ParticlesBG from "../components/particles"
import SEO from "../components/seo"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import Header from "../layout/Header"

const useStyles = makeStyles({
  root: {
    paddingTop: "10em",
  },
  opac: {
    height: "18vh",
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    color: `#fff`,
    marginLeft: "auto",
    marginRight: "auto",
  },
})

const BlogPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Blog" />
      <ParticlesBG />
      <Header siteTitle="Austin Webb" />

      <Container maxWidth="md" className={classes.root}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={8}
          direction="column"
          alignItems="center"
          alignContent="center"
          justify="center"
          className={classes.opac}
        >
          <Typography variant="h6">
            I want to work to the best of my ability and contribute to something
            bigger than myself. I am driven by problems, challenges, and
            teamwork. What's more important to me than being successful is
            helping others.
          </Typography>
        </Grid>
      </Container>
    </>
  )
}

export default BlogPage
