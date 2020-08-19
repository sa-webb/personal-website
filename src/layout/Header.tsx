import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import AppBarCollapse from "./AppBarCollapse"
import Typography from "@material-ui/core/Typography"
import { navigate } from "gatsby"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: `#fff`,
    textTransform: "none"
  },
  appbar: {
    flex: 1,
    padding: "0 30px",
    background: "transparent",
    boxShadow: 'none'
  },
  link: {
    boxShadow: 'none'
  }
}))

type IProps = {
  siteTitle: string
}

const Header: React.FC<IProps> = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Button
          size="small"
          onClick={event => {
            event.preventDefault()
            navigate(
              "/"
            )
          }}
        >
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          className={classes.title}
        >
          {siteTitle}
        </Typography>
        </Button>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  )
}

export default Header
