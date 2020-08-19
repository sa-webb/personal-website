import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  createStyles,
  withStyles,
} from "@material-ui/core/styles"

const Head = () => (
  <Helmet>
    <meta
      name="viewpoint"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Noto+Serif+SC:300,400|Noto+Serif+TC:300,400|Noto+Serif|Source+Sans+Pro:400,400i,700,700i|Merriweather&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

const myTheme = isDark =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: isDark ? "dark" : "light",
        primary: {
          main: "#ef5350",
        }
      }
    })
  )

const GlobalStyles = withStyles(theme => {
  const isLight = theme.palette.type === "light"
  const mainColor = isLight
    ? theme.palette.primary.main
    : theme.palette.primary.light
  return createStyles({
    "@global": {
      body: {
        transition: theme.transitions.create("background"),
        "& a": {
          color: mainColor,
          textDecoration: "none",
          boxShadow: 'none',
          
          transition: theme.transitions.create("box-shadow"),
          "&:hover": {
            boxShadow: `inset 0px -1px 0px 0px ${mainColor}`,
            // boxShadow: `inset 0px 0px 0px 0px ${mainColor}`,
          },
        },
      },
      li: {
        "& > p": {
          // preventing sublist margin problem
          margin: 0,
        },
      },
      img: {
        maxWidth: "100%",
      }
    }
  })
})(() => null)

const ChildrenWithGlobalStyle = ({ children }) => {
  return (
    <>
      {" "}
      <GlobalStyles /> {children}{" "}
    </>
  )
}

export default function MuiCustomTheme({ darkMode, children, ...props }) {
  useEffect(() => {
    document.body.className = ""
  }, [])
  return (
    <ThemeProvider theme={myTheme(darkMode)} {...props}>
      <Head />
      <CssBaseline />
      <ChildrenWithGlobalStyle>{children}</ChildrenWithGlobalStyle>
    </ThemeProvider>
  )
}

ChildrenWithGlobalStyle.propTypes = {
  children: PropTypes.node,
}

MuiCustomTheme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  children: PropTypes.node,
}
