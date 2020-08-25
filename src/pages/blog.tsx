import React from "react"
import { Router, Link } from "@reach/router"

import LoadingSpinner from "../components/loading"

import SEO from "../components/seo"

import Home from "../components/Blog/Home"
import Header from "../components/Blog/Header"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"

const categories = [
  { title: "All Posts", url: "blog/" },
  { title: "Computing", url: "blog/computing/" },
  { title: "Tutorials", url: "blog/tutorials/" },
  { title: "Heuristics", url: "blog/heuristics/" },
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

const Computing = React.lazy(() => import("../components/Blog/Category"))
const Tutorials = React.lazy(() => import("../components/Blog/Tutorials"))
const Heuristics = React.lazy(() => import("../components/Blog/Heuristics"))

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={<LoadingSpinner />}>
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
        <Header title="Blog" categories={categories} />
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {categories.map(section => (
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
        <LazyComponent Component={Computing} path="blog/computing" />
        <LazyComponent Component={Tutorials} path="blog/tutorials" />
        <LazyComponent Component={Heuristics} path="blog/heuristics" />
      </Router>
    </>
  )
}
export default BlogPage
