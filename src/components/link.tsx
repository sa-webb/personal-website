import React, { ReactNode, Ref } from "react"
import MuiLink from "@material-ui/core/Link"

import { Link as GatsbyLink } from "gatsby"

const Link = React.forwardRef(function Link(props: any, ref) {
  return (
    <MuiLink component={GatsbyLink} underline="none" ref={ref} {...props} />
  )
})

export default Link
