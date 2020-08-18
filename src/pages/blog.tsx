import React from "react"

import SEO from "../components/seo"
import Blog from "../components/Blog/"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  
})

const BlogPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Blog" />
      <Blog />
    </>
  )
}

export default BlogPage
