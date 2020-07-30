import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import AppBarCollapse from "./AppBarCollapse"
import Link from "../components/link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    flex: 1,
    padding: "0 30px",
    background: "transparent",
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
        <Link
          underline="none"
          component="h2"
          variant="h4"
          color="inherit"
          className={classes.title}
          to="/"
        >
          {siteTitle}
        </Link>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  )
}

export default Header
