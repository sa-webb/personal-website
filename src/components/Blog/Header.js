import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import FloatingLightDarkFab from "../FloatingLightDarkFab/FloatingLightDarkFab"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { title } = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="medium">
          {/* <Link  to="/"> */}
            sa-webb
          {/* </Link> */}
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <FloatingLightDarkFab />
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
