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
    boxShadow: 'none'
  },
}))

function AppBarCollapse() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem className={classes.item}>
          <Link
            data-testid="about-link"
            to="/"
            color="textPrimary"
            className={classes.link}
          >
            Resume
          </Link>
          </MenuItem>
          <MenuItem>
          <Link
            data-testid="about-link"
            to="/"
            color="textPrimary"
            className={classes.link}
          >
            Guides
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/about"
            color="textPrimary"
            className={classes.link}
          >
            Solutions
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/contact"
            color="textPrimary"
            className={classes.link}
          >
            Certifications
          </Link>
        </MenuItem>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        <nav>
          <Link
            variant="button"
            color="inherit"
            to="/"
            className={classes.link}
          >
            Experience
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/blog/blog1"
            className={classes.link}
          >
            Skills
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/"
            className={classes.link}
          >
            Education
          </Link>
          <Link
            variant="button"
            color="inherit"
            to="/"
            className={classes.link}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default AppBarCollapse
