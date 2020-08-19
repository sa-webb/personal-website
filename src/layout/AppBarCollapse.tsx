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
    textDecoration: "none",
    boxShadow: "none",
  },
  test: {
    backgroundColor: "transparent",
    flexDirection: "column",
    fontSize: 20,
  },
}))

const navs = [
  { page: "Blog", url: "/blog" },
  { page: "Projects", url: "/projects" },
  { page: "About", url: "/about" },
]

const AppBarCollapse = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem className={classes.test}>
          {navs.map(item => (
            <Link
              data-testid="collapsed-links"
              to={item.url}
              color="textPrimary"
              className={classes.link}
              key={item.page}
            >
              {item.page}
            </Link>
          ))}
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
            to="/projects"
            className={classes.link}
          >
            Projects
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
