import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

const Copyright = () => {
  return (
    <Typography variant="body2" align="center" style={{color: `#fff`}}>
        © sa-webb
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    // backgroundColor: "white",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}

export default Footer
