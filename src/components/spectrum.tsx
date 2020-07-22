import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

type IProps = {
  icon: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const SpectrumIcon: React.FC<IProps> = () => {
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
