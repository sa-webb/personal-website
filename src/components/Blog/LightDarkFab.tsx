import React, { useContext } from "react"
import { Fab, NoSsr } from "@material-ui/core"
import LightDarkContext from "../../../plugins/gatsby-plugin-top-layout/LightDarkContext"

import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightIcon from "@material-ui/icons/NightsStay"
import { FabProps } from "@material-ui/core/Fab"

type IProps = {
  className: string
}

const LightDarkFab: React.FC<IProps> = props => {
  const { theme, changeTheme } = useContext(LightDarkContext)

  return (
    <NoSsr>
      <Fab
        color={theme === "dark" ? "default" : "primary"}
        size="small"
        onClick={() => changeTheme(!(theme === "dark"))}
        aria-label="Toggle light or dark mode"
        {...props}
      >
        {theme === "dark" ? <NightIcon /> : <WbSunnyIcon />}
      </Fab>
    </NoSsr>
  )
}

export default LightDarkFab
