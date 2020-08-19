import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, CardActionArea, Card, Typography } from "@material-ui/core"

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
}))

const BlogGrid = ({ children }) => {
  const classes = useStyles()
  const grid = React.Children.map(children, (child, index) => {
    return (
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={6} key={index}>
            {children}
          </Grid>
        </Grid>
      </Container>
    )
  })
  return <div className="blog-grid">{grid}</div>
}

export default BlogGrid
