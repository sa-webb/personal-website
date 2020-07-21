import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import AppBarCollapse from "./AppBarCollapse"
import Link from "../components/link"
//import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    flex: 1,  
    //backgroundColor: grey[900],
    background: 'linear-gradient(45deg, #484a48 30%, #393b39 90%)',
    boxShadow: '0 3px 5px 2px rgba(151, 76, 217, .3)',
    padding: '0 30px',

    //background: 'transparent',
    //boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {},
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Link underline="none" component="h2" variant="h4"  color="inherit" className={classes.title}>
            {siteTitle}
        </Link>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  )
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Header
