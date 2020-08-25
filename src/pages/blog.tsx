import React from "react"
import { Router, Link, RouteComponentProps } from "@reach/router"

import Home from "../components/Blog/Home"
import Header from "../components/Blog/Header"
import LoadingSpinner from "../components/loading"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"

import { BLOG_ROUTES, categories } from '../routes'

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

const BlogPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Blog" />
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
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
        <RouterPage pageComponent={<Home />} path={BLOG_ROUTES.HOME} />
        <LazyComponent Component={Computing} path={BLOG_ROUTES.COMPUTING} />
        <LazyComponent Component={Tutorials} path={BLOG_ROUTES.TUTORIALS} />
        <LazyComponent Component={Heuristics} path={BLOG_ROUTES.HEURISTICS} />
      </Router>
    </>
  )
}
export default BlogPage

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
