import React from "react"
import { Router, Link } from "@reach/router"

import SEO from "../components/seo"

import Home from "../components/Blog/Home"
import Header from "../components/Blog/Header"

import { CssBaseline, Container, Toolbar, makeStyles } from "@material-ui/core"

const sections = [
  { title: "Contact", url: "blog/contact/" },
  { title: "Category", url: "blog/category/" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
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
                fontSize: 18
              }}
              // color="inherit"
              // noWrap
              // key={section.title}
              // variant="body2"
              // href={section.url}
              // className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
      <Router>
        <Home path="blog" />
        <LazyComponent Component={Contact} path="blog/contact" />
        <LazyComponent Component={About} path="blog/category" />
      </Router>
    </>
  )
}
export default BlogPage
