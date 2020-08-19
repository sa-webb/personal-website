import React from "react"
import { Router, Link } from "@reach/router"

import SEO from "../components/seo"

import Home from "../components/Blog/Home"
import Header from "../components/Blog/Header"

import {
  CssBaseline,
  Container,
  Toolbar,
  makeStyles,
} from "@material-ui/core"

const sections = [
  { title: "Software", url: "blog/software/" },
  { title: "Tutorials", url: "blog/tutorials/" },
  { title: "Business", url: "blog/business/" },
  { title: "Personal", url: "blog/personal/" },
]

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

const Contact = React.lazy(() => import("../components/Blog/Contact"))
const About = React.lazy(() => import("../components/Blog/Category"))
const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const BlogPage = props => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Blog" />
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map(section => (
            <Link
              to={section.url}
              style={{
                fontSize: 18,
              }}
              key={section.title}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
      <Router>
        <Home path="blog" />
        <LazyComponent Component={Contact} path="blog/contact" />
        <LazyComponent Component={About} path="blog/tutorials" />
      </Router>
    </>
  )
}
export default BlogPage
