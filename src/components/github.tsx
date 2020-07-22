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

const GitHubIcon: React.FC<IProps> = () => {
  const data = useStaticQuery(graphql`
    query GitHubIconnQuery {
      icon: file(absolutePath: { regex: "/GitHub-Mark-120px-plus.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={data.icon.childImageSharp.fixed} alt={"GitHub"} />
}

export default GitHubIcon