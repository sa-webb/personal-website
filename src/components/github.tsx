import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

type IProps = {
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const GitHubIcon: React.FC<IProps> = () => {
  const data = useStaticQuery(graphql`
    query GitHubIconnQuery {
      avatar: file(absolutePath: { regex: "/GitHub-Mark-120px-plus.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={data.avatar.childImageSharp.fixed} alt={"GitHub"} />
}

export default GitHubIcon
