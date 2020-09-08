import React from "react"
import { Container, Theme, Box } from "@material-ui/core"
import LightDarkFab from "./LightDarkFab"
import { makeStyles, createStyles } from "@material-ui/styles"

const useStyles = makeStyles(() =>
  createStyles({
    boxEvent: {
      pointerEvents: "none",
    },
    fabEvent: {
      pointerEvents: "all",
    },
  })
)

function FloatingLightDarkFab() {
  const classes = useStyles()
  return (
    <Box className={classes.boxEvent}>
      <Container maxWidth="md">
        <LightDarkFab className={classes.fabEvent} />
      </Container>
    </Box>
  )
}

export default FloatingLightDarkFab
