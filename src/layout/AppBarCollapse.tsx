import React from "react"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import Link from "../components/link"
import ButtonAppBarCollapse from "./ButtonAppBarCollapse"

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    boxShadow: 'none',
  },
  test: {
    backgroundColor: 'transparent'
  }
}))

const AppBarCollapse = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem className={classes.test}>
          <Link
            data-testid="about-link"
            to="/blog"
            color="textPrimary"
            className={classes.link}
          >
            Blog
          </Link>
          </MenuItem>
          <MenuItem className={classes.test}>
          <Link
            data-testid="about-link"
            to="/mission"
            color="textPrimary"
            className={classes.link}
          >
            Mission
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/vision"
            color="textPrimary"
            className={classes.link}
          >
            Vision
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/about"
            color="textPrimary"
            className={classes.link}
          >
            About
          </Link>
        </MenuItem>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        <nav>
          <Link
            variant="button"
            color="inherit"
            to="/blog"
            className={classes.link}
          >
            Blog
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/mission"
            className={classes.link}
          >
            Mission
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/vision"
            className={classes.link}
          >
            Vision
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/about"
            className={classes.link}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default AppBarCollapse
