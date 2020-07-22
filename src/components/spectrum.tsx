import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const SpectrumIcon = () => {
  const data = useStaticQuery(graphql`
    query SpectrumIconQuery {
      icon: file(absolutePath: { regex: "/spectrum.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={data.icon.childImageSharp.fixed} alt={"Spectrum"} />
}

export default SpectrumIcon
