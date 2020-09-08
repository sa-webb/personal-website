import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const AdobeIcon = () => {
  const data = useStaticQuery(graphql`
    query AdobeIconQuery {
      icon: file(absolutePath: { regex: "/adobe2.png/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={data.icon.childImageSharp.fixed} alt={"Adobe Pdf"} />
}

export default AdobeIcon
