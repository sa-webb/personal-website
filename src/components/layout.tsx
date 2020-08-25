import React from "react"
import { Link } from "gatsby"

import FloatingLightDarkFab from "./Blog/FloatingLightDarkFab"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  let header: {}

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <>
        <div
          style={{
            display: "grid",
            gridRowGap: `5px`,
            gridTemplateColumns: `5fr 1fr`,
            alignContent: "center",
            flexDirection: "row",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h3>
          </div>
          <div style={{ alignItems: "end" }}>
            <FloatingLightDarkFab />
          </div>
        </div>
      </>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        sa-webb
      </footer>
    </div>
  )
}

export default Layout
