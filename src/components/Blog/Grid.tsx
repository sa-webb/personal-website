import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: `pink`
  }
}))

const BlogGrid = ({ children }) => {
  const classes = useStyles()
  const grid = React.Children.map(children, (child, index) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={index}>
        {children}
      </Grid>
    )
  })
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {grid}
      </Grid>
    </div>
  )
}

export default BlogGrid
