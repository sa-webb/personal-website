import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

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
  circular: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const LoadingSpinner = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} sm={6} md={6} alignItems="center" alignContent="center" justify="center">
          <div className={classes.circular}>
            <CircularProgress />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoadingSpinner
