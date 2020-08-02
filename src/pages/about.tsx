import React from "react"

import ParticlesBG from "../components/particles"
import SEO from "../components/seo"

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import Header from "../layout/Header"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "5em",
  },
  opac: {
    // iPhone XR
    [theme.breakpoints.down("sm")]: {
      height: `50vh`,
    },
    [theme.breakpoints.up("md")]: {
      height: `55vh`,
      paddingLeft: `1em`,
    },
    // Macbook 13
    [theme.breakpoints.up("lg")]: {
      height: `56vh`,
      paddingLeft: `1em`,
    },
    [theme.breakpoints.up("xl")]: {
      height: `65vh`,
    },

    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    color: `#fff`,
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

const AboutPage = () => {
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
          <Typography variant="h6" gutterBottom>
            {" "}
            Austin Webb is a Software Engineer focusing on web technologies with
            experience using numerous frameworks, libraries, and tools. His
            primary professional experience has involved designing and
            developing proto-types and applications - from architecture to
            development.
          </Typography>
          <Typography variant="h6" gutterBottom>
            He is driven by problems, challenges, and teamwork and hopes to
            eventually become a Software Architect and practice theroretical
            design and development principles of software systems.
          </Typography>
          <Typography variant="h6">
            His mission is to serve as a leader, create innovative technological
            solutions, pursue lifelong learning, help as many people as
            possible, and inspire others to achieve great things.
          </Typography>
        </Grid>
      </Container>
    </>
  )
}

export default AboutPage
