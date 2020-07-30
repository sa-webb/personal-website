import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

const GitHubIcon = () => {
  const data = useStaticQuery(graphql`
    query GitHubIconnQuery {
      icon: file(absolutePath: { regex: "/GitHub-Mark-Light-120px-plus.png/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={data.icon.childImageSharp.fixed} alt={"GitHub"} />
}

export default GitHubIcon
